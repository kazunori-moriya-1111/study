from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import os

if __name__ == '__main__':
    # Selenium サーバへ接続
    driver = webdriver.Remote(
        command_executor="http://selenium:4444/wd/hub",
        options=webdriver.ChromeOptions()
    )
    driver.implicitly_wait(10) #seconds

    # 当ブログサイトにアクセス
    driver.get("https://www.boatrace.jp/owpc/pc/race/pay?hd=20220106")
    print(driver.title)
    # print(driver.page_source)
    parse_html = BeautifulSoup(driver.page_source, "html.parser")
    print(parse_html)

    driver.quit()