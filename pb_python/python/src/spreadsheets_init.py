from google.oauth2.service_account import Credentials # type: ignore
import gspread # type: ignore

# Googleスプレッドに接続
def spreadsheets_init():
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
    merge_cell_area = ['A3:D3', 'E3:H3', 'I3:L3', 'M3:P3', 'Q3:T3', 'U3:X3', 'A4:A7', 'A8:A11', 'A12:A15', 'A16:A19', 'A20:A23', 'E4:E7', 'E8:E11',
                    'E12:E15', 'E16:E19', 'E20:E23', 'I4:I7', 'I8:I11', 'I12:I15', 'I16:I19', 'I20:I23', 'M4:M7', 'M8:M11', 'M12:M15', 'M16:M19',
                    'M20:M23', 'Q4:Q7', 'Q8:Q11', 'Q12:Q15', 'Q16:Q19', 'Q20:Q23', 'U4:U7', 'U8:U11', 'U12:U15', 'U16:U19', 'U20:U23']
    # セル結合
    for cells in merge_cell_area:
        worksheet.merge_cells(cells)

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