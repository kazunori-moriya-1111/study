import gspread
from google.oauth2.service_account import Credentials
import os
from dotenv import load_dotenv

load_dotenv()
# 2つのAPIを記述しないとリフレッシュトークンを3600秒毎に発行し続けなければならない
scope = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive",
]
# ダウンロードしたjsonファイル名をクレデンシャル変数に設定。
credentials = Credentials.from_service_account_file(
    "./udemy-spread-sheet-f5eada302ada.json", scopes=scope
)
# OAuth2の資格情報を使用してGoogle APIにログイン。
gc = gspread.authorize(credentials)

# スプレッドシート（ブック）を開く
workbook = gc.open_by_key(os.getenv("SPREADSHEET_KEY"))
worksheet = workbook.worksheet("シート1")


def check_spread_sheet():
    dict = {}
    sheet_name = "{}{}{}R".format(
        os.getenv("DATE"), os.getenv("BATERACE_FIELD"), os.getenv("RACE_NO")
    )

    # シートが存在しなければ作成
    worksheet_list = workbook.worksheets()
    worksheet_name_list = [worksheet.title for worksheet in worksheet_list]
    if not sheet_name in worksheet_name_list:
        workbook.add_worksheet(title=sheet_name, rows=150, cols=26)

    # シートの対象の値を取得
    worksheet = workbook.worksheet(sheet_name)
    range = worksheet.range("A5:E10")
    # シートにtyakuperが存在する場合
    if range[0].value != "":
        iterator = iter(range)
        chunk = list(zip(*[iterator] * 5))
        for row in chunk:
            dict[row[0].value] = {
                "racer_name": row[1].value,
                "tyakuper": [tmp.value for tmp in row[2:]],
            }
    return dict
