from selenium import webdriver
from bs4 import BeautifulSoup
from Parser import parser
from Odds import odds
from WriteSpreadsheet import WriteSpreadsheet
from create_url import create_url
from get_tyakuper import check_spread_sheet

if __name__ == "__main__":
    # Selenium サーバへ接続
    driver = webdriver.Remote(
        command_executor="http://selenium:4444/wd/hub",
        options=webdriver.ChromeOptions(),
    )
    driver.implicitly_wait(10)  # seconds

    URL = create_url()
    # 対象スプレッドシートにtyakuperが記載されていれば値を取得
    # 値が存在しなければからのdictを返却
    racer_tyakuper_dict = check_spread_sheet()
    # スプレッドシートにtyakuperが記載されていない場合スクレイピングして取得
    if not (any(racer_tyakuper_dict)):
        driver.get(URL)
        # divタグのtable1クラスに分解する
        soup = BeautifulSoup(driver.page_source, "html.parser")

        # parserクラスをインスタンス化
        parser_ins = parser(soup)
        parser_ins.get_racer_detail_page_url()
        driver.quit()
        parser_ins.get_tyaku_per()
        racer_tyakuper_dict = parser_ins.result

    # オッズの取得
    odds_ins = odds(URL)
    odds_ins.get_odds()

    # スプレッドシートへ書き込み
    ws_ins = WriteSpreadsheet(racer_tyakuper_dict, odds_ins.odds_result)
    ws_ins.sp_update()
