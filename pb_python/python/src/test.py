# オッズを取得する
# レース結果を取得する
# レーサー情報を取得する
# オッズをスプレッドシートに表示
# 1着、2着、3着比率をレース結果から算出
# racelistテーブル、oddsテーブル、resultテーブル、racerテーブル

import requests # type: ignore
from bs4 import BeautifulSoup # type: ignore
from google.oauth2.service_account import Credentials # type: ignore
import gspread # type: ignore

# スクレイピング対象のレースを設定
race_no = "8"
race_field_no = "17"
date = "20241124"
target_url = "https://www.boatrace.jp/owpc/pc/race/racelist?rno={}&jcd={}&hd={}".format(race_no, race_field_no, date)

# Requestsを使って、webから取得
res = requests.get(target_url)

# 要素を抽出
soup = BeautifulSoup(res.text, 'html.parser')

title_text = soup.find('title').get_text()
print(title_text)


scopes = [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive'
]

credentials = Credentials.from_service_account_file(
    "udemy-spread-sheet-ce0646174844.json",
    scopes=scopes
)

gc = gspread.authorize(credentials)

spreadsheet_url = "https://docs.google.com/spreadsheets/d/1s-5mG2_GSP5MohbIvFZ2WUFli6khd3Sq"

# スプレッドシートの名前を指定して開く
sheet_name = 'boat'
SpreadSheet = gc.open_by_key("1CyKYlH4u3DzC6Mg0G1tVFXyekn1Ed_O0zQiCJKWG8U8")
worksheet = SpreadSheet.worksheet("test")
worksheet.update_cell(1, 2, title_text)
print(worksheet.get_all_values())
