import pymysql.cursors
import const

conn = pymysql.connect(host=const.HOST,
                       user=const.USER,
                       db=const.DBNAME,
                       password=const.PASSWORD,
                       charset=const.CHARSET,
                       cursorclass=pymysql.cursors.DictCursor)

# テーブル作成処理(もし存在したらテーブルを削除する)
create_table_name = 'ScoreCols'

with conn.cursor() as cursor:
    drop_table_sql = "drop table if exists {0}".format(create_table_name)
    cursor.execute(drop_table_sql)
    create_table_sql = """CREATE TABLE {0} (
                          student_id CHAR(4) NOT NULL,
                          score_en INTEGER,
                          score_nl INTEGER,
                          score_mt INTEGER,
                          constraint pk_ScoreCols primary key(student_id)
                          )""".format(create_table_name)
    cursor.execute(create_table_sql)

    # インデックスの作成
    # create_index_sql = '''
    #     create index idx_name_pcode on PostalHistory(new_pcode)
    # '''
    # cursor.execute(create_index_sql)
# dml_csv読み込み

# インサート
