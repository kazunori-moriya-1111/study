from bs4 import BeautifulSoup
from selenium import webdriver


class parser:
    def __init__(self, url):
        # self.a = 0
        self.url = url
        self.racer_detail_page_url = []
        self.result = {
            "1": {"racer_name": "", "tyakuper": [0, 0, 0]},
            "2": {"racer_name": "", "tyakuper": [0, 0, 0]},
            "3": {"racer_name": "", "tyakuper": [0, 0, 0]},
            "4": {"racer_name": "", "tyakuper": [0, 0, 0]},
            "5": {"racer_name": "", "tyakuper": [0, 0, 0]},
            "6": {"racer_name": "", "tyakuper": [0, 0, 0]},
        }

    def print_result(self):
        print(self.result)

    # racerの詳細ページURLを取得する
    def get_racer_detail_page_url(self):
        div = self.url.find_all("div", class_="is-fs18 is-fBold")
        # a = div.find("a")
        for row in div:
            a_list = row.find_all("a")
            for a in a_list:
                self.racer_detail_page_url.append(
                    "https://www.boatrace.jp/" + a.attrs["href"]
                )

    # URLリストから着順変更メソッドを実行
    def get_tyaku_per(self):
        # Selenium サーバへ接続
        driver = webdriver.Remote(
            command_executor="http://selenium:4444/wd/hub",
            options=webdriver.ChromeOptions(),
        )
        driver.implicitly_wait(10)
        for index, url in enumerate(self.racer_detail_page_url):
            driver.get(url.replace("profile", "course"))
            soup = BeautifulSoup(driver.page_source, "html.parser")
            self.scrap_tyaku_per(index, soup)
        driver.quit()

    # コース別成績URLから着順確率を取得する
    def scrap_tyaku_per(self, course, soup):
        # TODO 全角を半角に変換して半角を一つだけにする
        racer_name = soup.find("p", class_="racer1_bodyName").text
        self.result[str(course + 1)]["racer_name"] = racer_name
        tyaku_per_list = soup.find_all("div", class_="table1_progress2Bar")
        # 先にコース別進入率の情報が取得してしまうの6個インデックスを飛ばしてから、spanの要素数とclass名で着と確率を判別する
        for index, row in enumerate(tyaku_per_list[course + 6].find_all("span")):
            print(row)
            if index % 2 == 0:
                tyaku = row.span.attrs["class"][0].replace("is-progress", "")
                per = round(
                    float(row.attrs["style"].replace("width: ", "").replace("%", ""))
                    / 100,
                    3,
                )
                print(tyaku, per)
                self.result[str(course + 1)]["tyakuper"][int(tyaku) - 1] = per
