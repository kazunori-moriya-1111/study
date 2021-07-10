import pymysql.cursors
import const

conn = pymysql.connect(host=const.HOST,
                       user=const.USER,
                       db=const.DBNAME,
                       password=const.PASSWORD,
                       charset=const.CHARSET,
                       cursorclass=pymysql.cursors.DictCursor)

# テーブル作成処理(もし存在したらテーブルを削除する)
with conn.cursor() as cursor:
    drop_table_sql = "drop table if exists address"
    cursor.execute(drop_table_sql)
    create_table_sql = """CREATE TABLE address (
                          name VARCHAR(20),
                          phone_nbr VARCHAR(20),
                          address VARCHAR(20),
                          gender VARCHAR(20),
                          age INTEGER
                          )"""
    cursor.execute(create_table_sql)

# dml_csv読み込み

# インサート
