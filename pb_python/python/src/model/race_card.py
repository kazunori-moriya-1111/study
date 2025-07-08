from sqlalchemy import Column, Integer, String
from setting import Base

class User(Base):
  """
  出走表モデル
  """

  __tablename__ = 'users'
  __table_args__ = {
    'comment': '出走表テーブル'
  }

  id = Column('id', Integer, primary_key=True, autoincrement=True)
  name = Column('name', String(200))
  age = Column('age', Integer)
  email = Column('email', String(100))