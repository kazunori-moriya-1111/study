import sqlalchemy
import const
import pandas as pd
from sqlalchemy.orm import sessionmaker
from sqlalchemy import Column, String, DateTime, text
from sqlalchemy.dialects.mysql import INTEGER
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()
from sqlalchemy.sql.functions import current_timestamp

class Shop(Base):
    __tablename__ = 'shop'

    # unsignedを利用する場合、`sqlalchemy.dialects.mysql.INTEGER`である必要がある
    id = Column(INTEGER(unsigned=True), primary_key=True)
    name = Column(String(256))
    address = Column(String(256))
    created_at = Column(DateTime, nullable=False, server_default=current_timestamp())
    updated_at = Column(DateTime, nullable=False, server_default=text('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))

    # print時の出力
    def __repr__(self):
        return "<Shop(id = %d, name = '%s')>" % (self.id, self.name)

# DB接続
DATABASE = 'mysql+pymysql'
USER = const.USER
PASSWORD = const.PASSWORD
HOST = const.HOST
PORT = '3306'
DB_NAME = const.DBNAME

CONNECT_STR = '{}://{}:{}@{}:{}/{}'.format(DATABASE, USER, PASSWORD, HOST, PORT, DB_NAME)
ENGINE = sqlalchemy.create_engine(CONNECT_STR)

# テーブル作成
Base.metadata.create_all(ENGINE)

# insert
from sqlalchemy.orm import sessionmaker
SessionClass=sessionmaker(ENGINE) #セッションを作るクラスを作成
session=SessionClass()

# user_a=Shop(id=1, name="tmp_name", address=20)
# session.add(user_a)
# session.commit()

# select
user=session.query(Shop).first()
print(user)
