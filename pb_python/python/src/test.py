# 選手名をスプシに出力
# 選手コース成績をスクレイピングして出力
# レース結果を取得する
# レーサー情報を取得する
# オッズをスプレッドシートに表示
# 1着、2着、3着比率をレース結果から算出
# racelistテーブル、oddsテーブル、resultテーブル、racerテーブル

import requests # type: ignore
from bs4 import BeautifulSoup # type: ignore
from google.oauth2.service_account import Credentials # type: ignore
import gspread # type: ignore
from const import race_field_no2race_field_name_dict, WORKBOOK_KEY

# スクレイピング対象のレースを設定
race_no = "12"
race_field_no = "22"
date = "20241209"
target_url = "https://www.boatrace.jp/owpc/pc/race/racelist?rno={}&jcd={}&hd={}".format(race_no, race_field_no, date)
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
workbook = gc.open_by_key(WORKBOOK_KEY)
base_worksheet = workbook.worksheet("base")
worksheet_list = [worksheet.title for worksheet in workbook.worksheets()]
# シートが存在しなければコピー
worksheet_name = "{}{}{}R".format(date, race_field_no2race_field_name_dict[race_field_no], race_no)
if worksheet_name not in worksheet_list:
    workbook.duplicate_sheet(source_sheet_id=base_worksheet.id, insert_sheet_index=1, new_sheet_name=worksheet_name)

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

# 選手情報を取得
# 選手コース別成績を取得