import pymysql.cursors
import const

conn = pymysql.connect(host=const.HOST,
                       user=const.USER,
                       db=const.DBNAME,
                       password=const.PASSWORD,
                       charset=const.CHARSET,
                       cursorclass=pymysql.cursors.DictCursor)

# テーブル作成処理(もし存在したらテーブルを削除する)
create_table_name = 'NonAggTbl'

with conn.cursor() as cursor:
    drop_table_sql = "drop table if exists {0}".format(create_table_name)
    cursor.execute(drop_table_sql)
    create_table_sql = """CREATE TABLE {0} (
                          id VARCHAR(20),
                          data_type VARCHAR(20),
                          data_1 INTEGER,
                          data_2 INTEGER,
                          data_3 INTEGER,
                          data_4 INTEGER,
                          data_5 INTEGER,
                          data_6 INTEGER,
                          primary key(id, data_type)
                          )""".format(create_table_name)
    cursor.execute(create_table_sql)

# dml_csv読み込み

# インサート
