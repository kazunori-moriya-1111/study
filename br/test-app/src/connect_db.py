import psycopg2

connector =  psycopg2.connect('postgresql://{user}:{password}@{host}:{port}/{dbname}'.format( 
                user="postgres",        #ユーザ
                password="passw0rd",  #パスワード
                host="postgres_br",       #ホスト名
                port="5432",            #ポート
                dbname="postgres"))    #データベース名
print(connector)