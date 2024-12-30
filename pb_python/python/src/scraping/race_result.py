import sys
sys.path.append("/src/")

import requests # type: ignore
from bs4 import BeautifulSoup # type: ignore
import re
import argparse

from setting import session
from model.racer_info import RacerInfo
from model.race_result import RaceResult
from sqlalchemy.dialects.mysql import insert  # type: ignore
from scraping.racer_info import ScrapeRacerInfo

class ScrapeRaceResult:
    def __init__(self, race_no, race_field_no, date):
        self.race_no = race_no
        self.race_field_no = race_field_no
        self.date = date
    
    def modify_string(self, s, position):
        # 文字列をリストに変換して変更可能にする
        s_list = list(s)
        
        # 位置が範囲内かチェック
        try:
            position = int(position)
            if 1 <= position <= len(s):
                # positionは1始まりなので、インデックスは position-1
                s_list[position - 1] = '1'
                print(s_list)
        except ValueError:
            return s
        # リストを再度文字列に戻す
        return ''.join(s_list)
    
    def disqualification_check(self, tyaku_jun):
        # レース結果の文字から失格 or 違反があるかを確認
        disqualification = None
        tyaku_jun_list = ['１', '２', '３', '４', '５', '６']
        if tyaku_jun == 'Ｆ':
            disqualification = 'Flying'
        elif tyaku_jun == 'Ｌ':
            disqualification = 'LateStart'
        elif tyaku_jun == '妨':
            disqualification = 'Obstruction'
        elif tyaku_jun == '転':
            disqualification = 'Subversion'
        elif tyaku_jun == 'エ':
            disqualification = 'EngineStop'
        elif tyaku_jun == '落':
            disqualification = 'EngineStop'
        elif tyaku_jun == '欠':
            disqualification = 'Absent'
        elif tyaku_jun == '＿':
            disqualification = 'NotEstablished'
        elif tyaku_jun not in tyaku_jun_list:
            raise Exception('定義がない違反')
        return disqualification

    def windDirection_check(self, wind_direction_class_name):
        windDirection = None
        if wind_direction_class_name == 'is-wind1':
            windDirection = '右横'
        elif wind_direction_class_name == 'is-wind2':
            windDirection = '追い風右横斜め'
        elif wind_direction_class_name == 'is-wind3':
            windDirection = '追い風右斜め'
        elif wind_direction_class_name == 'is-wind4':
            windDirection = '追い風右後ろ斜め'
        elif wind_direction_class_name == 'is-wind5':
            windDirection = '追い風'
        elif wind_direction_class_name == 'is-wind6':
            windDirection = '追い風左後ろ斜め'
        elif wind_direction_class_name == 'is-wind7':
            windDirection = '追い風左斜め'
        elif wind_direction_class_name == 'is-wind8':
            windDirection = '追い風左横斜め'
        elif wind_direction_class_name == 'is-wind9':
            windDirection = '左横'
        elif wind_direction_class_name == 'is-wind10':
            windDirection = '向い風左横斜め'
        elif wind_direction_class_name == 'is-wind11':
            windDirection = '向い風左斜め'
        elif wind_direction_class_name == 'is-wind12':
            windDirection = '向い風左前斜め'
        elif wind_direction_class_name == 'is-wind13':
            windDirection = '向い風'
        elif wind_direction_class_name == 'is-wind14':
            windDirection = '向い風右前斜め'
        elif wind_direction_class_name == 'is-wind15':
            windDirection = '向い風右斜め'
        elif wind_direction_class_name == 'is-wind16':
            windDirection = '向い風右横斜め'
        elif wind_direction_class_name == 'is-wind17':
            windDirection = '無風'
        return windDirection
    
    def insert_race_result(self):
        url = "https://www.boatrace.jp/owpc/pc/race/raceresult?rno={}&jcd={}&hd={}".format(self.race_no, self.race_field_no, self.date)
        # requestsを使って、webから取得
        res = requests.get(url)

        # 要素を抽出
        soup = BeautifulSoup(res.text, 'html.parser')
        
        # データが存在しない場合処理を終了
        heading1_title = soup.find('h2', class_="heading1_title")
        if heading1_title is not None:
            return
        
        # レースグレードを抽出
        div = soup.find('div', class_="heading2_title")
        race_grade_class_name = div.get("class")
        race_grade = ''
        if 'is-ippan' in race_grade_class_name:
            race_grade = 'NORMAL'
        elif 'is-SGa' in race_grade_class_name:
            race_grade = 'SG'
        elif 'is-G1a' in race_grade_class_name or 'is-G1b' in race_grade_class_name:
            race_grade = 'G1'
        elif 'is-G2b' in race_grade_class_name:
            race_grade = 'G2'
        elif 'is-G3b' in race_grade_class_name:
            race_grade = 'G3'
        
        # レース名を抽出
        race_title = soup.find('h2', class_="heading2_titleName").text

        # レース開催日を抽出
        race_event_date = ""
        li_list = soup.select_one(".tab2.is-type1__3rdadd").find_all('li')
        for li in li_list:
            if li.get("class") is not None:
                race_event_date = li.find('span').find('span').text
        
        # レースラベルを取得
        div = soup.find('div', class_="title16_titleLabels__add2020")
        race_label = div.find('span', class_=["label2", "is-type1"]).text if div.find('span', class_=["label2", "is-type1"]) else ""
        
        # レース結果を取得
        race_result_list = []
        race_result_table = soup.find('table', class_="is-w495")
        race_result_table_tbody_list = race_result_table.find_all('tbody')
        for race_result_table_tbody in race_result_table_tbody_list:
            tyaku_waku = race_result_table_tbody.select_one(".is-fs14.is-fBold").text
            racerRegistrationNumber = race_result_table_tbody.find('span', class_="is-fs12").text
            tyaku_jun = race_result_table_tbody.find('td', class_="is-fs14").text
            disqualification = self.disqualification_check(tyaku_jun)
            race_result_list.append([int(tyaku_waku), int(racerRegistrationNumber), disqualification])
        
        # 出走する選手の情報が存在しない場合は取得
        for race_result in race_result_list:
            registration_number = race_result[1]
            racer = session.query(RacerInfo).filter(RacerInfo.toban == registration_number).first()
            if racer is None:
                sri = ScrapeRacerInfo(toban=registration_number)
                sri.insert_racer_info()
            else:
                print(racer.name)
        # スタート結果テーブル
        start_result_list = []
        start_result_tbody = soup.select_one(".is-w495.is-h292__3rdadd").find('tbody')
        for tr in start_result_tbody.find_all('tr'):
            start_course = int(tr.find('span', class_="table1_boatImage1Number").text)
            start_timing = int(tr.find('span', class_="table1_boatImage1TimeInner").text.split()[0].replace(".", "").replace("F", ""))
            start_result_list.append([start_course, start_timing])
        
        # 配当テーブルを取得
        # Todo不成立、同着判定
        dividend_list = []
        table = soup.find_all('table', class_="is-w495")[2]
        for tbody in table.find_all('tbody')[:4]:
            td_list = tbody.find_all('td')
            price = td_list[2].text.replace(",", "").replace("¥", "")
            popular = td_list[3].text
            dividend_list.append([price, popular])

        # 水面気象要素テーブル
        climate = soup.select_one('.weather1_body.is-type1__3rdadd')
        temperature = re.sub(r'[\n\t　 ]', '', climate.select_one('.weather1_bodyUnit.is-direction').find('span', class_="weather1_bodyUnitLabelData").text.replace("℃", ""))
        weather = re.sub(r'[\n\t　 ]', '', climate.select_one('.weather1_bodyUnit.is-weather').find('span', class_="weather1_bodyUnitLabelTitle").text)
        wind = re.sub(r'[\n\t　 ]', '', climate.select_one('.weather1_bodyUnit.is-wind').find('span', class_="weather1_bodyUnitLabelData").text.replace("m", ""))
        wind_direction_class_name_list = climate.select_one('.weather1_bodyUnit.is-windDirection').find('p', class_="weather1_bodyUnitImage").get("class")
        wind_direction_class_name = [el for el in wind_direction_class_name_list if el.startswith('is-wind')][0]
        wind_direction = self.windDirection_check(wind_direction_class_name)
        water_temperature = re.sub(r'[\n\t　 ]', '', climate.select_one('.weather1_bodyUnit.is-waterTemperature').find('span', class_="weather1_bodyUnitLabelData").text.replace("℃", ""))
        wave = re.sub(r'[\n\t　 ]', '', climate.select_one('.weather1_bodyUnit.is-wave').find('span', class_="weather1_bodyUnitLabelData").text.replace("cm", ""))
        
        # 返還艇
        return_boat = '000000'
        return_boat_table = soup.select_one(".is-w243.is-h168")
        return_boat_list = return_boat_table.find_all('span', class_="numberSet1_number")
        if len(return_boat_list) != 0:
            for span in return_boat_list:
                return_boat = self.modify_string(return_boat, span.text)
        
        # 決まり手
        decision = soup.select_one(".is-w243.is-h108__3rdadd").find('td').text

        # レース結果をDBへ登録
        insert_ignore_stmt = insert(RaceResult).prefix_with("IGNORE")
        session.execute(insert_ignore_stmt, [
            {
                "race_number" : self.race_no,
                "race_field_number" : self.race_field_no,
                "yyyymmdd" : self.date,
                "url" : url,
                "race_grade" : race_grade,
                "race_event_date" : race_event_date,
                "race_title" : race_title,
                "race_label" : race_label,
                "first_place" : race_result_list[0][0],
                "first_racer_registration_number" : race_result_list[0][1],
                "first_racer_disqualification" : race_result_list[0][2],
                "second_place" : race_result_list[1][0],
                "second_racer_registration_number" : race_result_list[1][1],
                "second_racer_disqualification" : race_result_list[1][2],
                "third_place" : race_result_list[2][0],
                "third_racer_registration_number" : race_result_list[2][1],
                "third_racer_disqualification" : race_result_list[2][2],
                "fourth_place" : race_result_list[3][0],
                "fourth_racer_registration_number" : race_result_list[3][1],
                "fourth_racer_disqualification" : race_result_list[3][2],
                "fifth_place" : race_result_list[4][0],
                "fifth_racer_registration_number" : race_result_list[4][1],
                "fifth_racer_disqualification" : race_result_list[4][2],
                "sixth_place" : race_result_list[5][0],
                "sixth_racer_registration_number" : race_result_list[5][1],
                "sixth_racer_disqualification" : race_result_list[5][2],
                "start_first_course ": start_result_list[0][0] if len(start_result_list) >= 1 else None,
                "start_timing_first_course": start_result_list[0][1] if len(start_result_list) >= 1 else None,
                "start_second_course": start_result_list[1][0] if len(start_result_list) >= 2 else None,
                "start_timing_second_course": start_result_list[1][1] if len(start_result_list) >= 2 else None,
                "start_third_course": start_result_list[2][0] if len(start_result_list) >= 3 else None,
                "start_timing_third_course": start_result_list[2][1] if len(start_result_list) >= 3 else None,
                "start_fourth_course": start_result_list[3][0] if len(start_result_list) >= 4 else None,
                "start_timing_fourth_course": start_result_list[3][1] if len(start_result_list) >= 4 else None,
                "start_fifth_course": start_result_list[4][0] if len(start_result_list) >= 5 else None,
                "start_timing_fifth_course": start_result_list[4][1] if len(start_result_list) >= 5 else None,
                "start_sixth_course": start_result_list[5][0] if len(start_result_list) >= 6 else None,
                "start_timing_sixth_course": start_result_list[5][1] if len(start_result_list) >= 6 else None,
                "sanrentan_price": dividend_list[0][0],
                "sanrentan_popular": dividend_list[0][1],
                "sanrenpuku_price": dividend_list[1][0],
                "sanrenpuku_popular": dividend_list[1][1],
                "nirentan_price": dividend_list[2][0],
                "nirentan_popular": dividend_list[2][1],
                "nirenpuku_price": dividend_list[3][0],
                "nirenpuku_popular": dividend_list[3][1],
                "temperature": temperature,
                "weather": weather,
                "wind": wind,
                "wind_direction": wind_direction,
                "water_temperature": water_temperature,
                "wave": wave,
                "return_boat": return_boat,
                "decision": decision,
            },
        ])
        try:
            session.commit()
        except Exception as e:
            print(f"エラーが発生しました: {e}")
            session.rollback()  

if __name__ == '__main__':
    # コマンドライン引数を取得
    parser = argparse.ArgumentParser(description="登録番号を取得")
    parser.add_argument("race_no", type=str, help="レース番号")
    parser.add_argument("race_field_no", type=str, help="レース場番号")
    parser.add_argument("date", type=str, help="レース日付")
    args = parser.parse_args()
    srr = ScrapeRaceResult(args.race_no, args.race_field_no, args.date)
    srr.insert_race_result()
