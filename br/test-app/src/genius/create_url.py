import os
from dotenv import load_dotenv

load_dotenv()


def raceFieldName_to_raceFieldNo(race_field_name):
    dict = {
        "桐生": "01",
        "戸田": "02",
        "江戸川": "03",
        "平和島": "04",
        "多摩川": "05",
        "浜名湖": "06",
        "蒲郡": "07",
        "常滑": "08",
        "津": "09",
        "三国": "10",
        "びわこ": "11",
        "住之江": "12",
        "尼崎": "13",
        "鳴門": "14",
        "丸亀": "15",
        "児島": "16",
        "宮島": "17",
        "徳山": "18",
        "下関": "19",
        "若松": "20",
        "芦屋": "21",
        "福岡": "22",
        "唐津": "23",
        "大村": "24",
    }
    return dict[race_field_name]


def create_url():
    date = os.getenv("DATE")
    race_field_name = os.getenv("BATERACE_FIELD")
    race_no = os.getenv("RACE_NO")
    url = "https://www.boatrace.jp/owpc/pc/race/racelist?rno={}&jcd={}&hd={}".format(
        race_no, raceFieldName_to_raceFieldNo(race_field_name), date
    )
    print("url", url)
    return url
