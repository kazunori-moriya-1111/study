import pymysql.cursors

conn = pymysql.connect(host='',
                       user='user',
                       db='sql',
                       password='password',
                       charset='utf8mb4',
                       cursorclass=pymysql.cursors.DictCursor)

print(conn)
