# 選手名をスプシに出力
# 票数を出力する計算式を出力
# 投票数の合計式を出力
# 投票率を出力
# 選手コース成績をスクレイピングして出力
# 100％補正の勝率を出力
# レース結果を取得する
# レーサー情報を取得する
# オッズをスプレッドシートに表示
# 1着、2着、3着比率をレース結果から算出
# racelistテーブル、oddsテーブル、resultテーブル、racerテーブル

import requests # type: ignore
from bs4 import BeautifulSoup # type: ignore
from spreadsheets_init import spreadsheets_init
from google.oauth2.service_account import Credentials # type: ignore
import gspread # type: ignore

# スクレイピング対象のレースを設定
race_no = "12"
race_field_no = "22"
date = "20241209"
target_url = "https://www.boatrace.jp/owpc/pc/race/racelist?rno={}&jcd={}&hd={}".format(race_no, race_field_no, date)
odds_url = "https://www.boatrace.jp/owpc/pc/race/odds3t?rno={}&jcd={}&hd={}".format(race_no, race_field_no, date)
# Requestsを使って、webから取得
res = requests.get(odds_url)

# 要素を抽出
soup = BeautifulSoup(res.text, 'html.parser')

odds_table = soup.find('tbody', class_="is-p3-0")
odds_table_tr = odds_table.find_all('tr')

odds_list = [[],[],[],[],[],[]]
print("len(odds_table_tr)",len(odds_table_tr))
for tr in odds_table_tr:
    td_oddsPoint = tr.find_all('td', class_="oddsPoint")
    for index, td in enumerate(td_oddsPoint):
        odds_list[index].append([td.text])
print(odds_list)
# スプレッドシートの初期枠作成
# spreadsheets_init()

credentials = Credentials.from_service_account_file(
        "udemy-spread-sheet-ce0646174844.json",
        scopes = [
            'https://www.googleapis.com/auth/spreadsheets',
            'https://www.googleapis.com/auth/drive'
        ]
    )

gc = gspread.authorize(credentials)

# スプレッドシートの名前を指定して開く
SpreadSheet = gc.open_by_key("1CyKYlH4u3DzC6Mg0G1tVFXyekn1Ed_O0zQiCJKWG8U8")
worksheet = SpreadSheet.worksheet("sample")

worksheet.update(odds_list[0], 'C4:C23')
worksheet.update(odds_list[1], 'G4:G23')
worksheet.update(odds_list[2], 'K4:K23')
worksheet.update(odds_list[3], 'O4:O23')
worksheet.update(odds_list[4], 'S4:S23')
worksheet.update(odds_list[5], 'W4:W23')