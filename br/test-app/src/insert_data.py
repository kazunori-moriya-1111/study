import psycopg2

class InsertData:
  def __init__(self):
    self.boatrace_filed = []
    self.boatrace_filed_size = 0 
    self.tyaku = []
    self.price = []
    self.pop = []
    self.grades = []
    self.yyyymmdd = ''
    self.sql = ''
    self.area_time = []
    self.area_date = []
    self.race_series = []
    self.url = ''
  
  def set_boatrace_filed(self, boatrace_filed):
    self.boatrace_filed = boatrace_filed
  
  def clac_boatrace_filed_size(self):
    self.boatrace_filed_size = len(self.boatrace_filed)
  
  def get_boatrace_filed_size(self):
    return self.boatrace_filed_size
  
  def set_tyaku(self, tyaku):
    self.tyaku = tyaku
  
  def set_price(self, price):
    self.price = price
  
  def set_pop(self, pop):
    self.pop = pop
  
  def set_grades(self, grades):
    self.grades = grades
  
  def set_area_time(self, area_time):
    self.area_time = area_time
  
  def set_area_date(self, area_date):
    self.area_date = area_date
  
  def set_race_series(self, race_series):
    self.race_series = race_series
  
  def set_url(self, url):
    self.url = url
  
  def set_yyyymmdd(self, yyyymmdd):
    self.yyyymmdd = yyyymmdd
  
  # todo データの個数に異常がないかチェックする boatrace_filed_size*12R分 tyaku, price, popが存在するか
  def check(self):
    print(self.boatrace_filed)
    print(self.boatrace_filed_size)
    print(self.tyaku)
    print(self.price)
    print(self.pop)
    print(self.grades)

  # insertするSQLを生成する関数
  def create_insert_sql(self):
    base_sql = "insert into result(yyyymmdd, boatrace_filed, race_number, race_grade, "\
    "race_time_zone, race_date, race_series, first, second, third, price, popular, url) values"
    
    # indexは0始まり
    for index, boatrace_filed in enumerate(self.boatrace_filed):
      # self.boatrace_filed_sizeごとにアクセスするindexを変更させる
      for i in range(0, 12 * self.boatrace_filed_size, self.boatrace_filed_size):
        # 着を一文字づつ分解
        tmp_tyaku = list(self.tyaku[i + index])
        # 人気が返還だった時にNULLへ変更する処理
        if self.pop[i + index] == '返':
          self.pop[i + index] = 0
        tmp_sql = "('{}', '{}', {}, '{}', 'デイ', '初日', 'NULL', {}, {}, {}, {}, {}, 'http://'),".format(self.yyyymmdd, 
        boatrace_filed, int(i/self.boatrace_filed_size + 1), self.grades[index], tmp_tyaku[0], tmp_tyaku[1], tmp_tyaku[2], self.price[i + index].replace('¥','').replace(',',''), self.pop[i + index])
        base_sql += tmp_sql
    
    # 末尾の「,」を「;」へ変換
    base_sql = base_sql[:-1] + ";"
    self.sql = base_sql
    print(self.sql)
  
  # sqlを実行する関数
  def insert_data(self):
    connector =  psycopg2.connect('postgresql://{user}:{password}@{host}:{port}/{dbname}'.format( 
                user="postgres",      #ユーザ
                password="passw0rd",  #パスワード
                host="postgresql_br", #ホスト名
                port="5432",          #ポート
                dbname="postgres"))   #データベース名
    # print(connector)

    # SQL実行
    cursor = connector.cursor()
    cursor.execute(self.sql)
    cursor.close()
    connector.commit()
    connector.close()