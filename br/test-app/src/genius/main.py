from selenium import webdriver
from bs4 import BeautifulSoup
from Parser import parser
from Odds import odds

from WriteSpreadsheet import WriteSpreadsheet

if __name__ == "__main__":
    # Selenium サーバへ接続
    driver = webdriver.Remote(
        command_executor="http://selenium:4444/wd/hub",
        options=webdriver.ChromeOptions(),
    )
    driver.implicitly_wait(10)  # seconds

    print("アクセス前")
    URL = "https://www.boatrace.jp/owpc/pc/race/racelist?rno=7&jcd=01&hd=20230521"
    # driver.get(URL)
    # print("アクセス後")
    # # divタグのtable1クラスに分解する
    # soup = BeautifulSoup(driver.page_source, "html.parser")

    # # parserクラスをインスタンス化
    # parser_ins = parser(soup)
    # parser_ins.get_racer_detail_page_url()
    # driver.quit()
    # parser_ins.get_tyaku_per()
    # print(parser_ins.result)

    # オッズの取得
    odds_ins = odds(URL)
    odds_ins.get_odds()
    # print(odds_ins.odds_result)

    racer_result = {
        "1": {"racer_name": "濱崎\u3000\u3000直矢", "tyakuper": [0.6, 0.25, 0.05]},
        "2": {"racer_name": "福島\u3000\u3000勇樹", "tyakuper": [0.154, 0.308, 0.231]},
        "3": {"racer_name": "藤生\u3000\u3000雄人", "tyakuper": [0.053, 0.421, 0.211]},
        "4": {"racer_name": "本多\u3000\u3000宏和", "tyakuper": [0.167, 0.208, 0.167]},
        "5": {"racer_name": "松尾\u3000\u3000\u3000拓", "tyakuper": [0.15, 0.1, 0.05]},
        "6": {"racer_name": "岡村\u3000\u3000慶太", "tyakuper": [0, 0.125, 0.312]},
    }
    ws_ins = WriteSpreadsheet(racer_result, odds_ins.odds_result)
    ws_ins.sp_update()
