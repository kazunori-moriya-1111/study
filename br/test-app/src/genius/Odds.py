from bs4 import BeautifulSoup
from selenium import webdriver


class odds:
    def __init__(self, url):
        self.url = url
        self.racer_detail_page_url = []
        self.odds_result = {}

    # URLリストから着順変更メソッドを実行
    def get_odds(self):
        # Selenium サーバへ接続
        driver = webdriver.Remote(
            command_executor="http://selenium:4444/wd/hub",
            options=webdriver.ChromeOptions(),
        )
        driver.implicitly_wait(10)
        driver.get(self.url.replace("racelist", "odds3t"))
        soup = BeautifulSoup(driver.page_source, "html.parser")
        driver.quit()
        table = soup.find("tbody", class_="is-p3-0")
        tr_list = table.find_all("tr")
        for index, tr in enumerate(tr_list):
            td_list = tr.find_all("td")
            # 1行に含まれる情報が行数によって異なるため、条件分岐
            # 3行ごとループ処理をする
            if len(td_list) == 18:
                iterator = iter(td_list)
                chunk = list(zip(*[iterator] * 3))
                for index, row in enumerate(chunk):
                    first = str(index + 1)
                    second = row[1].attrs["class"][0].replace("is-boatColor", "")
                    third = row[1].text
                    odds = row[2].text
                    self.odds_result[str(first) + str(second) + str(third)] = odds
            # 2行ごとループ処理をする
            if len(td_list) == 12:
                iterator = iter(td_list)
                chunk = list(zip(*[iterator] * 2))
                for index, row in enumerate(chunk):
                    first = str(index + 1)
                    second = row[0].attrs["class"][0].replace("is-boatColor", "")
                    third = row[0].text
                    odds = row[1].text
                    self.odds_result[str(first) + str(second) + str(third)] = odds
        sorted_items = sorted(self.odds_result.items(), key=lambda x: x[0])
        sorted_dict = {k: v for k, v in sorted_items}
        self.odds_result = sorted_dict
