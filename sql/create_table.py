import pymysql.cursors
import const

conn = pymysql.connect(host=const.HOST,
                       user=const.USER,
                       db=const.DBNAME,
                       password=const.PASSWORD,
                       charset=const.CHARSET,
                       cursorclass=pymysql.cursors.DictCursor)

# テーブル作成処理(もし存在したらテーブルを削除する)
create_table_name = 'HotelRooms'

with conn.cursor() as cursor:
    drop_table_sql = "drop table if exists {0}".format(create_table_name)
    cursor.execute(drop_table_sql)
    create_table_sql = """CREATE TABLE {0} (
                          room_nbr INTEGER,
                          start_date DATE,
                          end_date DATE,
                          primary key(room_nbr, start_date)
                          )""".format(create_table_name)
    cursor.execute(create_table_sql)

# dml_csv読み込み

# インサート
