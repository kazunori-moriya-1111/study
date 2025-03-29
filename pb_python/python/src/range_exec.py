from scraping.race_result import ScrapeRaceResult

from sqlalchemy.dialects.mysql import insert  # type: ignore

if __name__ == "__main__":
    # コマンドライン引数を取得
    # parser = argparse.ArgumentParser(description="登録番号を取得")
    # parser.add_argument("race_no", type=str, help="レース番号")
    # parser.add_argument("race_field_no", type=str, help="レース場番号")
    # parser.add_argument("date", type=str, help="レース日付")
    # args = parser.parse_args()
    srr = ScrapeRaceResult("01", "07", "20241230")
    srr.insert_race_result()