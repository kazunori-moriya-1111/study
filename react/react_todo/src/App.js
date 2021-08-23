import React from 'react';
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p>未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>あああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>いいいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <ul>
          <div className="list-row">
            <li>ううううう</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  )
}