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

# Googleスプレッドに接続
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
# スプレッドシートの初期枠を設定
worksheet.update([[1], [2], [], [], [], [3], [], [], [], [4], [], [], [], [5], [], [], [], [6], [], [], [],], 'A3:A23')
worksheet.update([[3], [4], [5], [6], [2], [4], [5], [6], [2], [3], [5], [6], [2], [3], [4], [6], [2], [3], [4], [5],], 'B4:B23')
worksheet.update([[2], [1], [], [], [], [3], [], [], [], [4], [], [], [], [5], [], [], [], [6], [], [], []], 'E3:E23')
worksheet.update([[3], [4], [5], [6], [1], [4], [5], [6], [1], [3], [5], [6], [1], [3], [4], [6], [1], [3], [4], [5],], 'F4:F23')
worksheet.update([[3], [1], [], [], [], [2], [], [], [], [4], [], [], [], [5], [], [], [], [6], [], [], []], 'I3:I23')
worksheet.update([[2], [4], [5], [6], [1], [4], [5], [6], [1], [2], [5], [6], [1], [2], [4], [6], [1], [2], [4], [5],], 'J4:J23')
worksheet.update([[4], [1], [], [], [], [2], [], [], [], [3], [], [], [], [5], [], [], [], [6], [], [], []], 'M3:M23')
worksheet.update([[2], [3], [5], [6], [1], [3], [5], [6], [1], [2], [5], [6], [1], [2], [3], [6], [1], [2], [3], [5],], 'N4:N23')
worksheet.update([[5], [1], [], [], [], [2], [], [], [], [3], [], [], [], [4], [], [], [], [6], [], [], []], 'Q3:Q23')
worksheet.update([[2], [3], [4], [6], [1], [3], [4], [6], [1], [2], [4], [6], [1], [2], [3], [6], [1], [2], [3], [4],], 'R4:R23')
worksheet.update([[6], [1], [], [], [], [2], [], [], [], [3], [], [], [], [4], [], [], [], [5], [], [], []], 'U3:U23')
worksheet.update([[2], [3], [4], [5], [1], [3], [4], [5], [1], [2], [4], [5], [1], [2], [3], [5], [1], [2], [3], [4],], 'V4:V23')
# 縦合併
worksheet.merge_cells('A3:D3')
worksheet.merge_cells('E3:H3')
worksheet.merge_cells('I3:L3')
worksheet.merge_cells('M3:P3')
worksheet.merge_cells('Q3:T3')
worksheet.merge_cells('U3:X3')
# 横合併 
worksheet.merge_cells('A4:A7')
worksheet.merge_cells('A8:A11')
worksheet.merge_cells('A12:A15')
worksheet.merge_cells('A16:A19')
worksheet.merge_cells('A20:A23')
worksheet.merge_cells('E4:E7')
worksheet.merge_cells('E8:E11')
worksheet.merge_cells('E12:E15')
worksheet.merge_cells('E16:E19')
worksheet.merge_cells('E20:E23')
worksheet.merge_cells('I4:I7')
worksheet.merge_cells('I8:I11')
worksheet.merge_cells('I12:I15')
worksheet.merge_cells('I16:I19')
worksheet.merge_cells('I20:I23')
worksheet.merge_cells('M4:M7')
worksheet.merge_cells('M8:M11')
worksheet.merge_cells('M12:M15')
worksheet.merge_cells('M16:M19')
worksheet.merge_cells('M20:M23')
worksheet.merge_cells('Q4:Q7')
worksheet.merge_cells('Q8:Q11')
worksheet.merge_cells('Q12:Q15')
worksheet.merge_cells('Q16:Q19')
worksheet.merge_cells('Q20:Q23')
worksheet.merge_cells('U4:U7')
worksheet.merge_cells('U8:U11')
worksheet.merge_cells('U12:U15')
worksheet.merge_cells('U16:U19')
worksheet.merge_cells('U20:U23')

# セルのフォーマット
cell_format = [
    {
        "range": "A3:A23",
        "format":{
            "horizontalAlignment":  "center",
            "verticalAlignment": "MIDDLE",
        }
    },
    {
        "range": "E3:E23",
        "format":{
            "horizontalAlignment":  "center",
            "verticalAlignment": "MIDDLE",
        }
    },
    {
        "range": "I3:I23",
        "format":{
            "horizontalAlignment":  "center",
            "verticalAlignment": "MIDDLE",
        }
    },
    {
        "range": "M3:M23",
        "format":{
            "horizontalAlignment":  "center",
            "verticalAlignment": "MIDDLE",
        }
    },
    {
        "range": "Q3:Q23",
        "format":{
            "horizontalAlignment":  "center",
            "verticalAlignment": "MIDDLE",
        }
    },
    {
        "range": "U3:U23",
        "format":{
            "horizontalAlignment":  "center",
            "verticalAlignment": "MIDDLE",
        }
    },
]
worksheet.batch_format(cell_format)

# 幅変更
sheetId = SpreadSheet.worksheet("sample")._properties['sheetId']
body = {
    "requests": [
        {
            "updateDimensionProperties": {
                "range": {
                    "sheetId": sheetId,
                    "dimension": "COLUMNS",
                    "startIndex": 0,
                    "endIndex": 2
                },
                "properties": {
                    "pixelSize": 20
                },
                "fields": "pixelSize"
            }
        },
        {
            "updateDimensionProperties": {
                "range": {
                    "sheetId": sheetId,
                    "dimension": "COLUMNS",
                    "startIndex": 4,
                    "endIndex": 6
                },
                "properties": {
                    "pixelSize": 20
                },
                "fields": "pixelSize"
            }
        },
        {
            "updateDimensionProperties": {
                "range": {
                    "sheetId": sheetId,
                    "dimension": "COLUMNS",
                    "startIndex": 8,
                    "endIndex": 10
                },
                "properties": {
                    "pixelSize": 20
                },
                "fields": "pixelSize"
            }
        },
        {
            "updateDimensionProperties": {
                "range": {
                    "sheetId": sheetId,
                    "dimension": "COLUMNS",
                    "startIndex": 12,
                    "endIndex": 14
                },
                "properties": {
                    "pixelSize": 20
                },
                "fields": "pixelSize"
            }
        },
        {
            "updateDimensionProperties": {
                "range": {
                    "sheetId": sheetId,
                    "dimension": "COLUMNS",
                    "startIndex": 16,
                    "endIndex": 18
                },
                "properties": {
                    "pixelSize": 20
                },
                "fields": "pixelSize"
            }
        },
        {
            "updateDimensionProperties": {
                "range": {
                    "sheetId": sheetId,
                    "dimension": "COLUMNS",
                    "startIndex": 20,
                    "endIndex": 22
                },
                "properties": {
                    "pixelSize": 20
                },
                "fields": "pixelSize"
            }
        }
    ]
}
SpreadSheet.batch_update(body)