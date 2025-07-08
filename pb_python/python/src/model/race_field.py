from sqlalchemy import Column, String
from setting import Base

class RaceField(Base):
  """
  レース場モデル
  """

  __tablename__ = 'race_field'
  __table_args__ = {
    'comment': 'レース場のマスターテーブル'
  }
  
  race_field_number = Column(String(4), primary_key=True, nullable=False)
  race_field_name = Column(String(4), nullable=False)