import gspread
from google.oauth2.service_account import Credentials
import os
from dotenv import load_dotenv

load_dotenv()


class WriteSpreadsheet:
    def __init__(self, result):
        # 2つのAPIを記述しないとリフレッシュトークンを3600秒毎に発行し続けなければならない
        self.scope = [
            "https://www.googleapis.com/auth/spreadsheets",
            "https://www.googleapis.com/auth/drive",
        ]
        # ダウンロードしたjsonファイル名をクレデンシャル変数に設定。
        self.credentials = Credentials.from_service_account_file(
            "./udemy-spread-sheet-f5eada302ada.json", scopes=self.scope
        )
        # OAuth2の資格情報を使用してGoogle APIにログイン。
        self.gc = gspread.authorize(self.credentials)

        # スプレッドシート（ブック）を開く
        self.workbook = self.gc.open_by_key(os.getenv("SPREADSHEET_KEY"))
        self.result = result
        self.evaluation_index = []

    # 出力するスプレッドシートの初期値入力
    def init_sheet(self):
        worksheet = self.workbook.worksheet("シート1")
        col_value = worksheet.col_values(1)
        if col_value[4] == "":
            items = ["コース", "レーサー名", "1着率", "2着率", "3着率"]
            worksheet.append_row(items, table_range="A4")
            items2 = [
                "出目",
                "指標",
                "確率",
                "オッズ",
                "払い出し",
                "期待値",
                "期待値100超え",
                "期待値100越え&確率2%越え",
            ]
            worksheet.append_row(items2, table_range="H4")
        row_position = 5
        column_position = 8
        san_ren_tan = []
        for first in range(1, 7):
            for second in range(1, 7):
                for third in range(1, 7):
                    if (first != second) and (second != third) and (first != third):
                        san_ren_tan.append([str(first) + str(second) + str(third)])
        worksheet.update("H5:H125", san_ren_tan)

    # レーサーの着順率を書き込み
    def write_tyakuper(self):
        worksheet = self.workbook.worksheet("シート1")
        row_position = 5
        column_position = 1
        for row in self.result:
            # コースを出力
            worksheet.update_cell(row_position, column_position, row)
            # レーサー名を出力
            worksheet.update_cell(
                row_position, column_position + 1, self.result[row]["racer_name"]
            )
            # 1着率を出力
            worksheet.update_cell(
                row_position, column_position + 2, self.result[row]["tyakuper"][0]
            )
            # 2着率を出力
            worksheet.update_cell(
                row_position, column_position + 3, self.result[row]["tyakuper"][1]
            )
            # 3着率を出力
            worksheet.update_cell(
                row_position, column_position + 4, self.result[row]["tyakuper"][2]
            )
            row_position += 1

    # 評価指標を書き込み
    def write_evaluation_index(self):
        worksheet = self.workbook.worksheet("シート1")
        self.evaluation_index = []
        for first in range(1, 7):
            for second in range(1, 7):
                for third in range(1, 7):
                    if (first != second) and (second != third) and (first != third):
                        self.evaluation_index.append(
                            [
                                round(
                                    self.result[str(first)]["tyakuper"][0]
                                    * self.result[str(second)]["tyakuper"][1]
                                    * self.result[str(third)]["tyakuper"][2],
                                    4,
                                )
                            ]
                        )
        # print(evaluation_index)
        worksheet.update("I5:I125", self.evaluation_index)

    # 評価指標から着順確率を算出する
    def calc_per(self):
        worksheet = self.workbook.worksheet("シート1")
        sum = 0
        items = []
        for value in self.evaluation_index:
            sum += value[0]
        for index in range(0, 120):
            items.append([round(self.evaluation_index[index][0] / sum, 4)])
        worksheet.update("J5:J125", items)
