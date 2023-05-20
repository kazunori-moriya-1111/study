from selenium import webdriver
from bs4 import BeautifulSoup
from Parser import parser
from dotenv import load_dotenv
import os

load_dotenv()
# 環境変数を参照

GOOGLE_SHEET_ID = os.getenv("GOOGLE_SHEET_ID")
print(GOOGLE_SHEET_ID)

if __name__ == "__main__":
    # Selenium サーバへ接続
    driver = webdriver.Remote(
        command_executor="http://selenium:4444/wd/hub",
        options=webdriver.ChromeOptions(),
    )
    driver.implicitly_wait(10)  # seconds

    print("アクセス前")
    URL = "https://www.boatrace.jp/owpc/pc/race/racelist?rno=1&jcd=18&hd=20230520"
    driver.get(URL)
    print("アクセス後")
    # divタグのtable1クラスに分解する
    soup = BeautifulSoup(driver.page_source, "html.parser")

    # parserクラスをインスタンス化
    parser_ins = parser(soup)
    parser_ins.get_racer_detail_page_url()
    driver.quit()
    parser_ins.get_tyaku_per()
    print(parser_ins.result)

    # # レーサーの詳細URLを取得
    # racer_detail_page_url = get_racer_detail_page_url(soup)

    #
