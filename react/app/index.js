const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // liを生成
    const li = document.createElement("li")
    
    // divを生成
    const div = document.createElement("div")
    div.className = "list-row"

    // pを生成
    const p = document.createElement("p")
    p.className = "contents"
    p.innerText = inputText

    // button(完了)タグを作成
    const completeButton = document.createElement("button")
    completeButton.innerText = "完了"
    completeButton.addEventListener("click", () => {
        alert("完了")
    })
    // button(削除)タグを作成
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "削除"
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンを親タグを未完了リストから削除
        const deleteTarget = deleteButton.parentNode.parentNode
        document.getElementById("incomplete-list").removeChild(deleteTarget)
    })

    // divタグの子要素を設定する
    div.appendChild(p)
    div.appendChild(completeButton)
    div.appendChild(deleteButton)

    // liタグの子要素に書く要素を設定
    li.appendChild(div)

    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li)
}

document.getElementById("add-button").addEventListener("click", () => onClickAdd())