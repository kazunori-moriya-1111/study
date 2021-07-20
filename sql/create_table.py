import pymysql.cursors
import const

conn = pymysql.connect(host=const.HOST,
                       user=const.USER,
                       db=const.DBNAME,
                       password=const.PASSWORD,
                       charset=const.CHARSET,
                       cursorclass=pymysql.cursors.DictCursor)

# テーブル作成処理(もし存在したらテーブルを削除する)
create_table_name = 'Persons'

with conn.cursor() as cursor:
    drop_table_sql = "drop table if exists {0}".format(create_table_name)
    cursor.execute(drop_table_sql)
    create_table_sql = """CREATE TABLE {0} (
                          name VARCHAR(8) NOT NULL PRIMARY KEY,
                          age INTEGER NOT NULL,
                          height FLOAT NOT NULL,
                          weight FLOAT NOT NULL
                          )""".format(create_table_name)
    cursor.execute(create_table_sql)

# dml_csv読み込み

# インサート
