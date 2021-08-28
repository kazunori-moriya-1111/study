import React from 'react';

export const IncompleteTodos = (props) => {
    const {todos, onClickComplete, onClickDelete} = props;
    return(
        <div className="incomplete-area">
            <p className="title">未完了のTODO</p>
            <ul>
            {todos.map((todo, index) => {
                return(
                <div key={todo} className="list-row">
                    <li>{todo}</li>
                    {/* onCllickで関数に引数を渡したい場合アロー関数で書かないと引数を渡すごとに動作してしまう */}
                    <button onClick={() => onClickComplete(index)}>完了</button>
                    <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
                )
            })}
            </ul>
        </div>
    )
}