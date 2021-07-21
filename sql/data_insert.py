import sqlalchemy
import const
import pandas as pd

# DB接続
DATABASE = 'mysql+pymysql'
USER = const.USER
PASSWORD = const.PASSWORD
HOST = const.HOST
PORT = '3306'
DB_NAME = const.DBNAME

CONNECT_STR = '{}://{}:{}@{}:{}/{}'.format(DATABASE, USER, PASSWORD, HOST, PORT, DB_NAME)
ENGINE = sqlalchemy.create_engine(CONNECT_STR)

# dml_csv読み込み
dml_csv_path = r'./5chapter/dml/5_1.csv'
df = pd.read_csv(dml_csv_path, encoding='utf-8')

# import処理
tbl_name = 'Sales'
df.to_sql(con=ENGINE, name=tbl_name, if_exists='append', index=None)

print('insert complete')
