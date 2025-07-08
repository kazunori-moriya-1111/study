from model.racer_info import RacerInfo
from model.race_result import RaceResult
from model.race_field import RaceField
from setting import Base, Engine, session
from sqlalchemy.dialects.mysql import insert

if __name__ == "__main__":
  Base.metadata.create_all(bind=Engine)
  insert_ignore_stmt = insert(RaceField).prefix_with("IGNORE")
  session.execute(insert_ignore_stmt, [
    {"race_field_number":"01", "race_field_name":"桐生"},
    {"race_field_number":"02", "race_field_name":"戸田"},
    {"race_field_number":"03", "race_field_name":"江戸川"},
    {"race_field_number":"04", "race_field_name":"平和島"},
    {"race_field_number":"05", "race_field_name":"多摩川"},
    {"race_field_number":"06", "race_field_name":"浜名湖"},
    {"race_field_number":"07", "race_field_name":"蒲郡"},    
    {"race_field_number":"08", "race_field_name":"常滑"},
    {"race_field_number":"09", "race_field_name":"津"},
    {"race_field_number":"10", "race_field_name":"三国"},
    {"race_field_number":"11", "race_field_name":"びわこ"},
    {"race_field_number":"12", "race_field_name":"住之江"},
    {"race_field_number":"13", "race_field_name":"尼崎"},
    {"race_field_number":"14", "race_field_name":"鳴門"},
    {"race_field_number":"15", "race_field_name":"丸亀"},    
    {"race_field_number":"16", "race_field_name":"児島"},
    {"race_field_number":"17", "race_field_name":"宮島"},
    {"race_field_number":"18", "race_field_name":"徳山"},
    {"race_field_number":"19", "race_field_name":"下関"},
    {"race_field_number":"20", "race_field_name":"若松"},
    {"race_field_number":"21", "race_field_name":"芦屋"},
    {"race_field_number":"22", "race_field_name":"福岡"},
    {"race_field_number":"23", "race_field_name":"唐津"},
    {"race_field_number":"24", "race_field_name":"大村"},
  ])
  session.commit()