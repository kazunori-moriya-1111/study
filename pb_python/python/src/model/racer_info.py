import enum
from sqlalchemy import Column, Integer, String, Date, SmallInteger, Enum
from setting import Base

class bloodType(enum.Enum):
  A = 'A'
  B = 'B'
  AB = 'AB'
  O = 'O'

class RacerGrade(enum.Enum):
  A1 = 'A1'
  A2 = 'A2'
  B1 = 'B1'
  B2 = 'B2'

class RacerInfo(Base):
  """
  レーサーモデル
  """

  __tablename__ = 'racer_info'
  __table_args__ = {
      'comment': 'レーサー情報のマスターテーブル'
  }
  toban = Column(SmallInteger, primary_key=True)
  name = Column(String(20), nullable=False)
  name_kana = Column(String(20), nullable=False)
  birthday = Column(Date, nullable=False)
  height = Column(Integer, nullable=False)
  weight = Column(Integer, nullable=False)
  blood_type = Column(Enum(bloodType), nullable=False)
  branch = Column(String(5), nullable=False)
  birth_place = Column(String(5), nullable=False)
  registration_period = Column(Integer, nullable=False)
  racer_grade = Column(Enum(RacerGrade), nullable=False)
