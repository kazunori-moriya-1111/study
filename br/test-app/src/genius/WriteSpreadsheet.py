import gspread
from google.oauth2.service_account import Credentials
import os
from dotenv import load_dotenv

load_dotenv()


class WriteSpreadsheet:
    def __init__(self, racer_result, odds_result):
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
        self.racer_result = racer_result
        self.odds_result = odds_result
        self.evaluation_index = []
        self.expected_value_list = []
        self.expected_value_over_100per_list = []
        self.expected_value_over_100per_and_highper_list = []
        self.sheet_name = "{}{}{}R".format(
            os.getenv("DATE"), os.getenv("BATERACE_FIELD"), os.getenv("RACE_NO")
        )
        self.worksheet = self.workbook.worksheet(self.sheet_name)

    # 条件を判定してスプレッドシートを更新する
    def sp_update(self):
        # 値が存在しない場合Noneになる
        if self.worksheet.acell("A4").value is None:
            self.init_sheet()
            self.write_tyakuper()
            self.write_evaluation_index()
            self.calc_per()
        # オッズに紐づく値の更新
        self.write_odds()
        self.write_refund()
        self.write_expected_value_over_100per()
        self.write_expected_value_over_100per_and_highper()

    # 出力するスプレッドシートの初期値入力
    def init_sheet(self):
        items = ["コース", "レーサー名", "1着率", "2着率", "3着率"]
        self.worksheet.append_row(items, table_range="A4")
        items2 = [
            "出目",
            "評価指標",
            "着順確率",
            "オッズ",
            "期待値",
            "期待値100超え",
            "期待値100越え&確率2%越え",
        ]
        self.worksheet.append_row(items2, table_range="H4")
        row_position = 5
        column_position = 8
        san_ren_tan = []
        for first in range(1, 7):
            for second in range(1, 7):
                for third in range(1, 7):
                    if (first != second) and (second != third) and (first != third):
                        san_ren_tan.append([str(first) + str(second) + str(third)])
        self.worksheet.update("H5:H125", san_ren_tan)

    # レーサーの着順率を書き込み
    def write_tyakuper(self):
        row_position = 5
        column_position = 1
        for row in self.racer_result:
            # コースを出力
            self.worksheet.update_cell(row_position, column_position, row)
            # レーサー名を出力
            # TODO レーサー名の空白処理処理
            self.worksheet.update_cell(
                row_position, column_position + 1, self.racer_result[row]["racer_name"]
            )
            # 1着率を出力
            self.worksheet.update_cell(
                row_position, column_position + 2, self.racer_result[row]["tyakuper"][0]
            )
            # 2着率を出力
            self.worksheet.update_cell(
                row_position, column_position + 3, self.racer_result[row]["tyakuper"][1]
            )
            # 3着率を出力
            self.worksheet.update_cell(
                row_position, column_position + 4, self.racer_result[row]["tyakuper"][2]
            )
            row_position += 1

    # 評価指標を書き込み
    def write_evaluation_index(self):
        self.evaluation_index = []
        for first in range(1, 7):
            for second in range(1, 7):
                for third in range(1, 7):
                    if (first != second) and (second != third) and (first != third):
                        self.evaluation_index.append(
                            [
                                round(
                                    self.racer_result[str(first)]["tyakuper"][0]
                                    * self.racer_result[str(second)]["tyakuper"][1]
                                    * self.racer_result[str(third)]["tyakuper"][2],
                                    4,
                                )
                            ]
                        )
        # print(evaluation_index)
        self.worksheet.update("I5:I125", self.evaluation_index)

    # 評価指標から着順確率を算出する
    def calc_per(self):
        sum = 0
        items = []
        for value in self.evaluation_index:
            sum += value[0]
        for index in range(0, 120):
            items.append([round(self.evaluation_index[index][0] / sum, 4)])
        self.worksheet.update("J5:J125", items)

    # オッズを書き込み
    def write_odds(self):
        items = []
        for key in self.odds_result:
            items.append([self.odds_result[key]])
        self.worksheet.update("K5:K125", items)

    # 払い戻し金を書き込み
    def write_refund(self):
        tyakuper_value_list = self.worksheet.col_values(10)
        odds_value_list = self.worksheet.col_values(11)
        self.expected_value_list = [
            [round(float(m) * float(n) * 100, 1)]
            for m, n in zip(tyakuper_value_list[4:], odds_value_list[4:])
        ]
        self.worksheet.update("L5:L125", self.expected_value_list)

    # 期待値が100超えの書き込み
    def write_expected_value_over_100per(self):
        expected_value_list = self.worksheet.col_values(12)
        self.expected_value_over_100per_list = [
            ["○" if float(expected_value) > 100 else "×"]
            for expected_value in expected_value_list[4:]
        ]
        self.worksheet.update("M5:M125", self.expected_value_over_100per_list)

    # 期待値100超え確率2%超え
    def write_expected_value_over_100per_and_highper(self):
        tyakuper_value_list = self.worksheet.col_values(10)
        expected_value_list = self.worksheet.col_values(12)
        self.expected_value_over_100per_and_highper_list = [
            ["○" if float(m) >= 0.02 and float(n) > 100 else "×"]
            for m, n in zip(tyakuper_value_list[4:], expected_value_list[4:])
        ]
        self.worksheet.update(
            "N5:N125", self.expected_value_over_100per_and_highper_list
        )
