from model.racer_info import RacerInfo
from model.user import User
from setting import Base, Engine

if __name__ == "__main__":
    Base.metadata.create_all(bind=Engine)