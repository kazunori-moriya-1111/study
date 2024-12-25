# レース結果を取得する
# レーサー情報を取得する
# racelistテーブル、oddsテーブル、resultテーブル、racerテーブル

import argparse
import requests # type: ignore
from bs4 import BeautifulSoup # type: ignore
from google.oauth2.service_account import Credentials # type: ignore
import gspread # type: ignore
from const import race_field_no2race_field_name_dict, WORKBOOK_KEY, race_field_no2KRY
import re

# コマンドライン引数を取得
parser = argparse.ArgumentParser(description="インサートするファイル名を取得")
parser.add_argument("race_no", type=str, help="レース番号")
parser.add_argument("race_field_no", type=str, help="レース場番号")
parser.add_argument("date", type=str, help="レース日付")
parser.add_argument("-f", "--field", action='store_true', help="場別のスプレッドシートに出力")
args = parser.parse_args()

# スクレイピング対象のレースを設定
race_no = args.race_no
race_field_no = args.race_field_no
date = args.date
racelist_url = "https://www.boatrace.jp/owpc/pc/race/racelist?rno={}&jcd={}&hd={}".format(race_no, race_field_no, date)
odds_url = "https://www.boatrace.jp/owpc/pc/race/odds3t?rno={}&jcd={}&hd={}".format(race_no, race_field_no, date)

# スプレッドシートの初期枠作成
credentials = Credentials.from_service_account_file(
    "udemy-spread-sheet-ce0646174844.json",
    scopes = [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive'
    ]
)
gc = gspread.authorize(credentials)

# スプレッドシートの名前を指定して開く
key = WORKBOOK_KEY
if args.field:
    key = race_field_no2KRY[race_field_no]
workbook = gc.open_by_key(key)
base_worksheet = workbook.worksheet("base")
worksheet_list = [worksheet.title for worksheet in workbook.worksheets()]

# シートが存在しなければコピー
worksheet_name = "{}{}{}R".format(date, race_field_no2race_field_name_dict[race_field_no], race_no)
if worksheet_name not in worksheet_list:
    workbook.duplicate_sheet(source_sheet_id=base_worksheet.id, insert_sheet_index=4, new_sheet_name=worksheet_name)

# Requestsを使って、webから取得
res = requests.get(odds_url)

# 要素を抽出
soup = BeautifulSoup(res.text, 'html.parser')

odds_table = soup.find('tbody', class_="is-p3-0")
odds_table_tr = odds_table.find_all('tr')

odds_list = [[],[],[],[],[],[]]
for tr in odds_table_tr:
    td_oddsPoint = tr.find_all('td', class_="oddsPoint")
    for index, td in enumerate(td_oddsPoint):
        odds_list[index].append([td.text])
print(odds_list)

# オッズを更新
worksheet = workbook.worksheet(worksheet_name)
worksheet.update(odds_list[0], 'C4:C23')
worksheet.update(odds_list[1], 'I4:I23')
worksheet.update(odds_list[2], 'O4:O23')
worksheet.update(odds_list[3], 'U4:U23')
worksheet.update(odds_list[4], 'AA4:AA23')
worksheet.update(odds_list[5], 'AG4:AG23')

# コピー後、初回のみ実行
if worksheet.acell('A3').value is None:
    # 選手情報を取得
    res = requests.get(racelist_url)
    soup = BeautifulSoup(res.text, 'html.parser')

    # 選手情報を抽出
    racer_info_dict = {}
    tbody = soup.find_all('tbody', class_="is-fs12")
    for index, el in enumerate(tbody):
        toban = el.find('div', class_="is-fs11").text[:4]
        name = el.find('div', class_="is-fs18 is-fBold").text
        name = re.sub('　+', ' ', name).replace('\n', '')
        racer_info_dict[index + 1] = {
            "toban": toban,
            "name": name,
            "1着率":"0.1%",
            "2着率":"0.1%",
            "3着率":"0.1%"
        }
    # 選手情報をスプレッドシートに出力
    for index, (racer_info_key, culumn) in enumerate(zip(racer_info_dict, ["A", "G", "M", "S", "Y", "AE"])):
        worksheet.update_acell(culumn + '3', str(racer_info_key) + " " + racer_info_dict[racer_info_key]["name"])
        worksheet.update_acell("AL" + str(index + 4), racer_info_dict[racer_info_key]["name"])

    # 選手コース別成績を取得
    for racer_info_key in racer_info_dict:
        racer_course_url = "https://www.boatrace.jp/owpc/pc/data/racersearch/course?toban={}".format(racer_info_dict[racer_info_key]["toban"])
        res = requests.get(racer_course_url)
        soup = BeautifulSoup(res.text, 'html.parser')
        table = soup.find('div', class_="grid is-type13 h-clear").find('div', class_="grid_unit").find_all('div', class_="table1")[1].find('table')
        tbody = table.find_all('tbody')[int(racer_info_key) - 1]
        span = tbody.find_all('span', class_="is-progress")
        # 選手コース別成績を辞書に格納
        for el in span:
            racer_info_dict[racer_info_key][el.find("span")["class"][0][-1] + "着率"] = el["style"].split()[1]

    print(racer_info_dict)
    # 選手コース別成績をスプレッドシートに出力
    for racer_info_key in racer_info_dict:
        worksheet.update(
            [
                [
                    racer_info_dict[racer_info_key]["1着率"],
                    racer_info_dict[racer_info_key]["2着率"],
                    racer_info_dict[racer_info_key]["3着率"]
                ],
            ],
            'AM{}:AO{}'.format(str(racer_info_key + 3), str(racer_info_key + 3))
        )