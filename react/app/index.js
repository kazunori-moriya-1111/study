// 未完了リストから指定の要素を削除する関数
const deleteFromImcompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target)
}

//未完了リストに追加する関数
const createImcompleteList = (text) => {
    // liを生成
    const li = document.createElement("li")

    // divを生成
    const div = document.createElement("div")
    div.className = "list-row"

    // pを生成
    const p = document.createElement("p")
    p.className = "contents"
    p.innerText = text

    // button(完了)タグを作成
    const completeButton = document.createElement("button")
    completeButton.innerText = "完了"
    completeButton.addEventListener("click", () => {
        // 押された完了ボタンの親タグを未完了リストから削除
        deleteFromImcompleteList(completeButton.parentNode.parentNode)

        // 完了リストに追加する要素
        const addTarget = completeButton.parentNode
        
        // TODO内容テキストを取得
        const text = addTarget.firstElementChild.innerText

        // div以下を初期化
        addTarget.textContent = null
        
        // pタグを生成
        const p = document.createElement("p")
        p.className = "contents"
        p.innerText = text

        // buttonタグを生成
        const backButton = document.createElement("button")
        backButton.innerText = "戻す"
        backButton.addEventListener("click", ()=> {
            // 押された戻すボタンの親タグを完了リストから削除
            const deleteTarget = backButton.parentNode.parentNode
            document.getElementById("complete-list").removeChild(deleteTarget)

            // テキストを取得
            const text = backButton.parentNode.firstElementChild.innerText
            // 未完了リストへ追加
            createImcompleteList(text)
    })

    // addTargetに要素を追加する
    addTarget.appendChild(p)
    addTarget.appendChild(backButton)

    // 生成liタグにaddTargerの要素を追加する
    const li = document.createElement("li")
    li.appendChild(addTarget)

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(li)
    })
    // button(削除)タグを作成
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "削除"
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンの親タグを未完了リストから削除
        deleteFromImcompleteList(deleteButton.parentNode.parentNode)
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

// 追加ボタンをクリックした時の動作
const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    // 未完了リストへ追加
    createImcompleteList(inputText)
}

document.getElementById("add-button").addEventListener("click", () => onClickAdd())