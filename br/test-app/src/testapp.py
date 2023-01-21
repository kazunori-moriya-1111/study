from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import os
from insert_data import InsertData

# 開催レース場を取得する関数
def get_boatrace_filed(text):
    ans = []
    fileds = text.find_all('p', class_='table1_areaName')
    
    for filed in fileds:
        ans.append(filed.find('img')['alt'])
    return ans

# 開催レースグレードを取得する関数
def get_boatrace_grade(text):
    ans = []
    grades = text.find_all('p', class_='table1_areaType')
    for grade in grades:
        if 'is-ippan' in str(grade):
            ans.append('一般')
        elif 'is-G3b' in str(grade):
            ans.append('G3')
        elif 'is-G2b' in str(grade):
            ans.append('G2')
        elif 'is-G1b' in str(grade):
            ans.append('G1')
        elif 'is-G1a' in str(grade):
            ans.append('PG1')
        elif 'is-SGa' in str(grade):
            ans.append('SG')
        else:
            ans.append('-')
    return ans

# レース結果詳細(着順、払戻金、人気順)を取得する関数
def get_boatrace_result(text):
    tmp = []
    for a in text.find_all('td'):
        tmp.append(a.text)
    tyaku = []
    price = []
    pop = []

    # 着順、払戻金、人気順を一塊としてループさせる
    it = iter(tmp)
    for b,c,d in zip(it,it,it):
        tyaku.append(b)
        price.append(c)
        pop.append(d)
    
    return tyaku, price, pop

if __name__ == '__main__':
    # Selenium サーバへ接続
    driver = webdriver.Remote(
        command_executor="http://selenium:4444/wd/hub",
        options=webdriver.ChromeOptions()
    )
    driver.implicitly_wait(10) #seconds

    # 払い戻し金一覧ページからhtmlを取得
    # レース中止がある日
    # driver.get("https://www.boatrace.jp/owpc/pc/race/pay?hd=20220106")
    # 3連単不成立がある日
    # driver.get("https://www.boatrace.jp/owpc/pc/race/pay?hd=20220616")
    driver.get("https://www.boatrace.jp/owpc/pc/race/pay?hd=20221231")
    
    # divタグのtable1クラスに分解する
    soup = BeautifulSoup(driver.page_source, "html.parser")
    table1_list = soup.find_all('div', class_='table1')
    # print(len(found))
    # print(found[0])

    # 開催レース場を取得する
    fileds = get_boatrace_filed(table1_list[0])

    # レースグレードを取得する
    grades = get_boatrace_grade(table1_list[0])

    # 着順、払戻金、人気順を取得する
    tyaku, price, pop = get_boatrace_result(table1_list[0])
    
    # インサート用クラスのインスタンス化
    ins = InsertData()

    # ボートレース場の設定
    ins.set_boatrace_filed(fileds)
    ins.clac_boatrace_filed_size()
    ins.set_tyaku(tyaku)
    ins.set_price(price)
    ins.set_pop(pop)
    ins.check()

    driver.quit()