from model.racer_info import RacerInfo
from model.result import Result
from model.race_field import RaceField
from setting import Base, Engine

if __name__ == "__main__":
    Base.metadata.create_all(bind=Engine)