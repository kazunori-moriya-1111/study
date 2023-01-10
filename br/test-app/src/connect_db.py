import psycopg2

connector =  psycopg2.connect('postgresql://{user}:{password}@{host}:{port}/{dbname}'.format( 
                user="postgres",      #ユーザ
                password="passw0rd",  #パスワード
                host="postgresql_br", #ホスト名
                port="5432",          #ポート
                dbname="postgres"))   #データベース名
print(connector)

# SQL実行
cursor = connector.cursor()
cursor.execute('SELECT * FROM result')
rows = cursor.fetchall()
cursor.close()
connector.close()

# SQL結果参照
print(rows)