import enum
from sqlalchemy import Column, Integer, String, Enum, SmallInteger, ForeignKey # type: ignore
from setting import Base

class DisqualificationFlag(enum.Enum):
    # 欠場
    Absent = 'Absent'
    # フライング
    Flying = 'Flying'
    # 出遅れ
    LateStart = 'LateStart'
    # 転覆
    Subversion = 'Subversion'
    # 落水
    FallingWater = 'FallingWater'
    # エンスト
    EngineStop = 'EngineStop'
    # 沈没
    Sinking = 'Sinking'
    # 不完走
    IncompleteRun = 'IncompleteRun'
    # 妨害
    Obstruction = 'Obstruction'
    # 周回誤認
    CircularMisidentification = 'CircularMisidentification'
    # 救助作業妨害
    ObstructingRescueWork = 'ObstructingRescueWork'
    # 緊急避譲義務違反
    ViolationOfEmergencyEvacuationObligation = 'ViolationOfEmergencyEvacuationObligation'
    # 航路指示灯違反
    ViolationOfNavigationalLights = 'ViolationOfNavigationalLights'
    # 危険な転舵
    DangerousSteering = 'DangerousSteering'

class RaceGrade(enum.Enum):
    SG = 'SG'
    G1 = 'G1'
    G2 = 'G2'
    G3 = 'G3'
    NORMAL = 'NORMAL'

class Result(Base):
    """
    レース結果モデル
    """

    __tablename__ = 'result'
    __table_args__ = {
        'comment': 'レース結果のマスターテーブル'
    }

    url = Column(String(100), primary_key=True)
    race_grade = Column(Enum(RaceGrade), nullable=False)
    race_event_date = Column(String(20), nullable=False)
    race_title = Column(String(100), nullable=False)
    race_label = Column(String(100), nullable=False)
    first_place = Column(SmallInteger, nullable=False)
    first_racer_registration_number = Column(ForeignKey("racer_info.toban"), nullable=False)
    first_racer_disqualification = Column(Enum(DisqualificationFlag))
    second_place = Column(SmallInteger, nullable=False)
    second_racer_registration_number = Column(ForeignKey("racer_info.toban"), nullable=False)
    second_racer_disqualification = Column(Enum(DisqualificationFlag))
    third_place = Column(SmallInteger, nullable=False)
    third_racer_registration_number = Column(ForeignKey("racer_info.toban"), nullable=False)
    third_racer_disqualification = Column(Enum(DisqualificationFlag))
    fourth_place = Column(SmallInteger, nullable=False)
    fourth_racer_registration_number = Column(ForeignKey("racer_info.toban"), nullable=False)
    fourth_racer_disqualification = Column(Enum(DisqualificationFlag))
    fifth_place = Column(SmallInteger, nullable=False)
    fifth_racer_registration_number = Column(ForeignKey("racer_info.toban"), nullable=False)
    fifth_racer_disqualification = Column(Enum(DisqualificationFlag))
    sixth_place = Column(SmallInteger, nullable=False)
    sixth_racer_registration_number = Column(ForeignKey("racer_info.toban"), nullable=False)
    sixth_racer_disqualification = Column(Enum(DisqualificationFlag))
    start_first_course = Column(SmallInteger)
    start_timing_first_course = Column(SmallInteger)
    start_violation_first_course = Column(Enum(DisqualificationFlag))
    start_second_course = Column(SmallInteger)
    start_timing_second_course = Column(SmallInteger)
    start_violation_second_course = Column(Enum(DisqualificationFlag))
    start_third_course = Column(SmallInteger)
    start_timing_third_course = Column(SmallInteger)
    start_violation_third_course = Column(Enum(DisqualificationFlag))
    start_fourth_course = Column(SmallInteger)
    start_timing_fourth_course = Column(SmallInteger)
    start_violation_fourth_course = Column(Enum(DisqualificationFlag))
    start_fifth_course = Column(SmallInteger)
    start_timing_fifth_course = Column(SmallInteger)
    start_violation_fifth_course = Column(Enum(DisqualificationFlag))
    start_sixth_course = Column(SmallInteger)
    start_timing_sixth_course = Column(SmallInteger)
    start_violation_sixth_course = Column(Enum(DisqualificationFlag))
    sanrentan_price = Column(Integer)
    sanrentan_popular = Column(SmallInteger)
    sanrenpuku_price = Column(Integer)
    sanrenpuku_popular = Column(SmallInteger)
    nirentan_price = Column(Integer)
    nirentan_popular = Column(SmallInteger)
    nirenpuku_price = Column(Integer)
    nirenpuku_popular = Column(SmallInteger)
    temperature = Column(SmallInteger)
    weather = Column(String(100))
    wind = Column(SmallInteger)
    wind_direction = Column(String(20))
    water_temperature = Column(SmallInteger)
    wave = Column(SmallInteger)
    return_boat = Column(String(100), default='000000')
    decision = Column(String(100))
