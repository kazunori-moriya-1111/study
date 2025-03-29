import sys
sys.path.append("/src/")

import uvicorn # type: ignore
from fastapi import FastAPI, HTTPException, Depends # type: ignore
from pydantic import BaseModel # type: ignore
from sqlalchemy import create_engine, Column, Integer, String # type: ignore
from sqlalchemy.ext.declarative import declarative_base # type: ignore
from sqlalchemy.orm import sessionmaker, Session # type: ignore

from scraping.race_result import ScrapeRaceResult
# # データベース設定
# SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
# engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# # モデルの定義
# Base = declarative_base()

# class Item(Base):
#     __tablename__ = 'items'
#     id = Column(Integer, primary_key=True, index=True)
#     name = Column(String, index=True)
#     description = Column(String)

# # データベーステーブルを作成
# Base.metadata.create_all(bind=engine)

# FastAPIアプリケーションのインスタンス
app = FastAPI()

# # Pydanticモデル（入力・出力用）
# class ItemCreate(BaseModel):
#     name: str
#     description: str

class Input(BaseModel):
    race_no: str
    race_field_no: str
    date: str

#     class Config:
#         orm_mode = True

# # データベースセッションを取得するための依存関係
# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()

# CRUD操作



# アイテムを作成
@app.post("/race_result/")
def insert_race_result(input:Input):
    srr = ScrapeRaceResult(input.race_no, input.race_field_no, input.date)
    srr.insert_race_result()
    
    return {"message": "success"}
# # アイテムを取得
# @app.get("/items/{item_id}", response_model=ItemOut)
# def read_item(item_id: int, db: Session = Depends(get_db)):
#     db_item = db.query(Item).filter(Item.id == item_id).first()
#     if db_item is None:
#         raise HTTPException(status_code=404, detail="Item not found")
#     return db_item

# # アイテムを更新
# @app.put("/items/{item_id}", response_model=ItemOut)
# def update_item(item_id: int, item: ItemCreate, db: Session = Depends(get_db)):
#     db_item = db.query(Item).filter(Item.id == item_id).first()
#     if db_item is None:
#         raise HTTPException(status_code=404, detail="Item not found")
#     db_item.name = item.name
#     db_item.description = item.description
#     db.commit()
#     db.refresh(db_item)
#     return db_item

# # アイテムを削除
# @app.delete("/items/{item_id}")
# def delete_item(item_id: int, db: Session = Depends(get_db)):
#     db_item = db.query(Item).filter(Item.id == item_id).first()
#     if db_item is None:
#         raise HTTPException(status_code=404, detail="Item not found")
#     db.delete(db_item)
#     db.commit()
#     return {"detail": "Item deleted successfully"}

if __name__ == '__main__':
    # reloadは本番環境では使用しない
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)