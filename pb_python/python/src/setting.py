from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from sqlalchemy.ext.declarative import declarative_base

# 接続先DBの設定
DATABASE = "mysql+pymysql://user:password@db:3306/extra?charset=utf8"

# Engine の作成
Engine = create_engine(DATABASE, echo=True)
Base = declarative_base()

# Sessionの作成
session = Session(
  autocommit = False,
  autoflush = True,
  bind = Engine
)