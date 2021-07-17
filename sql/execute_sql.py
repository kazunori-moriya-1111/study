import pymysql.cursors
import const

conn = pymysql.connect(host=const.HOST,
                       user=const.USER,
                       db=const.DBNAME,
                       password=const.PASSWORD,
                       charset=const.CHARSET,
                       cursorclass=pymysql.cursors.DictCursor)

with conn.cursor() as cursor:
    sql_file_path = r'./sql/2_1.sql'
    file = open(sql_file_path, 'r')
    sql = ''
    while True:
        line = file.readline()
        # 読み込んだテキストファイルが空ならばsqlへの追加を抜ける
        if line == '':
            break
        sql += ' ' + line.strip('\n').strip('\t')
    cursor.execute(sql)
    print(cursor.fetchall())
