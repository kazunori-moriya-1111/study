from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import os
from insert_data import InsertData
from datetime import date
from datetime import timedelta
import time

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

# レース開催時間を取得する関数
def get_areatime(text):
    ans = []
    tmp = text.find_all('p', class_='table1_areaTime')
    for a in tmp:
        if 'is-nighter' in a['class']:
            ans.append('ナイター')
        elif 'is-morning' in a['class']:
            ans.append('モーニング')
        elif 'is-summer' in a['class']:
            ans.append('サマータイム')
        elif 'is-midnight' in a['class']:
            ans.append('ミッドナイト')
        else:
            ans.append('-')
    return ans

# 節日程を取得する関数
def get_areadate(text):
    ans = []
    tmp = text.find_all('p', class_='table1_areaDate')
    for a in tmp:
        ans.append(a.text)
    return ans

# レースシリーズを取得する関数
def get_series(text):
    ans = []
    tmp = text.find_all('p', class_='table1_areaWomen')
    for a in tmp:
        if 'is-rookie__3rdadd' in a['class']:
            ans.append('ルーキー')
        elif 'is-lady' in a['class']:
            ans.append('レディース')
        elif 'is-venus' in a['class']:
            ans.append('ヴィーナス')
        else:
            ans.append('-')
    return ans

# レース結果詳細(着順、払戻金、人気順)を取得する関数
def get_boatrace_result(text):
    # 同着対策（片方の結果のみ取得方針）
    tmp = []
    for index, a in enumerate(text.find_all('td')):
        # 同着判定（着順取得の時）
        if index%3 == 0 and len(a.find_all('div')) == 3:
            # 最初の結果のみ取得
            tmp.append(a.find('div', class_="numberSet1_row").text)
        # 同着判定（金額取得の時）
        elif index%3 == 1 and len(a.find_all('div')) == 2:
            # 最初の結果のみ取得
            tmp.append(a.find('div', class_="is-lineH20").text)
        # 同着判定（人気順取得の時）
        elif index%3 == 2 and len(a.find_all('div')) == 2:
            # 最初の結果のみ取得
            tmp.append(a.find('div', class_="is-lineH20").text)
        # 通常の場合
        else:
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

    # データを取得する日付を設定する
    dt = date(2022, 1, 1)
    period = 30
    date_list = []
    for _ in range(0, period+1):
        date_list.append(dt.strftime('%Y%m%d'))
        dt += timedelta(days=1)
    print('データ取得日程', date_list)


    for date in date_list:
        print('アクセス前')
        yyyymmdd = date
        URL = "https://www.boatrace.jp/owpc/pc/race/pay?hd={}".format(yyyymmdd)
        driver.get(URL)
        print('アクセス後')
        # divタグのtable1クラスに分解する
        soup = BeautifulSoup(driver.page_source, "html.parser")
        table1_list = soup.find_all('div', class_='table1')

        for table1 in table1_list:
            # 開催レース場を取得する
            fileds = get_boatrace_filed(table1)

            # レースグレードを取得する
            grades = get_boatrace_grade(table1)

            # 着順、払戻金、人気順を取得する
            tyaku, price, pop = get_boatrace_result(table1)
            
            # レース開催時刻を取得する
            area_time = get_areatime(table1)

            # 節日程を取得する
            area_date = get_areadate(table1)

            # レースシリーズを取得する
            race_series = get_series(table1)
            # インサート用クラスのインスタンス化
            ins = InsertData()

            # インスタンス変数の設定
            ins.set_boatrace_filed(fileds)
            ins.clac_boatrace_filed_size()
            ins.set_tyaku(tyaku)
            ins.set_price(price)
            ins.set_pop(pop)
            ins.set_grades(grades)
            ins.set_area_time(area_time)
            ins.set_area_date(area_date)
            ins.set_race_series(race_series)
            ins.set_url(URL)
            ins.set_yyyymmdd(yyyymmdd)
            # ins.check()

            # sqlの生成実行
            ins.create_insert_sql()
            ins.insert_data()
        # 負荷対策
        time.sleep(10)
    driver.quit()