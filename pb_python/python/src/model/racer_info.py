from sqlalchemy import Column, Integer, String # type: ignore
from setting import Base

class RacerInfo(Base):
    """
    レーサーモデル
    """

    __tablename__ = 'racer_info'
    __table_args__ = {
        'comment': 'レーサー情報のマスターテーブル'
    }

    id = Column('id', Integer, primary_key=True, autoincrement=True)
    name = Column('name', String(200))
    age = Column('age', Integer)
    email = Column('email', String(100))