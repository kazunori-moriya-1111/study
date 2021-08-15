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

    // liタグの子要素に書く要素を設定
    li.appendChild(div.appendChild(p))

    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li)
}

document.getElementById("add-button").addEventListener("click", () => onClickAdd())