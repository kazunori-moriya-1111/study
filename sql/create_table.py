import pymysql.cursors
import const

conn = pymysql.connect(host=const.HOST,
                       user=const.USER,
                       db=const.DBNAME,
                       password=const.PASSWORD,
                       charset=const.CHARSET,
                       cursorclass=pymysql.cursors.DictCursor)

# テーブル作成処理(もし存在したらテーブルを削除する)
create_table_name = 'Shops'

with conn.cursor() as cursor:
    drop_table_sql = "drop table if exists {0}".format(create_table_name)
    cursor.execute(drop_table_sql)
    create_table_sql = """CREATE TABLE {0} (
                          co_cd CHAR(3) NOT NULL,
                          shop_id CHAR(3) NOT NULL,
                          emp_nbr INTEGER NOT NULL,
                          main_flag CHAR(1) NOT NULL,
                          constraint pk_Shops primary key(co_cd, shop_id)
                          )""".format(create_table_name)
    cursor.execute(create_table_sql)

    # インデックスの作成
    # create_index_sql = '''
    #     create index idx_name_pcode on PostalHistory(new_pcode)
    # '''
    # cursor.execute(create_index_sql)
# dml_csv読み込み

# インサート
