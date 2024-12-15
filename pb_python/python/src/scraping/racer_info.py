import sys
sys.path.append("/src/")

import requests # type: ignore
from bs4 import BeautifulSoup # type: ignore
import re
import argparse

from setting import session
from model.racer_info import RacerInfo

class ScrapeRaceResult:
    def __init__(self, toban):
        self.toban = toban
    
    def insert_racer_info(self):
        # スクレイピングとDBへの登録
        url = "https://www.boatrace.jp/owpc/pc/data/racersearch/profile?toban={}".format(self.toban)
        # Requestsを使って、webから取得
        res = requests.get(url)

        # 要素を抽出
        soup = BeautifulSoup(res.text, 'html.parser')
        dl = soup.find('dl', class_="list3")
        dd = dl.find_all('dd')
        name = soup.find('p', class_="racer1_bodyName").text
        name_kana = soup.find('p', class_="racer1_bodyKana").text
        racer_info = RacerInfo(
            toban = self.toban,
            name = re.sub('　+', ' ', name),
            name_kana = re.sub('　+', ' ', name_kana),
            birthday = dd[1].text,
            height = dd[2].text.replace("cm", ""),
            weight = dd[3].text.replace("kg", ""),
            blood_type = dd[4].text.replace("型", ""),
            branch = dd[5].text,
            birth_place = dd[6].text,
            registration_period = dd[7].text.replace("期", ""),
            racer_grade = dd[8].text.replace("級", "")
        )
        session.add(racer_info)
        session.commit()

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="登録番号を取得")
    parser.add_argument("toban", type=str, help="登録番号")
    args = parser.parse_args()
    rr = ScrapeRaceResult(args.toban)
    rr.insert_racer_info()