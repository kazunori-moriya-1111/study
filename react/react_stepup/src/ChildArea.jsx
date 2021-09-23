import { memo } from "react"

const style = {
    width: "100%",
    height: "200px",
    backgroundColor: 'khaki'
}

// 親コンポーネントが変更されてもpropsが変更されなければ、レンダリングしない
export const ChildArea = memo((props) => {
    const {open} = props
    console.log("ChildAreaレンダリング確認")
    const data = [...Array(2000).keys()]
    data.forEach(() => {
        console.log("...")
    })
    
    console.log(data)
    return(
        <>
        {open ? (<div style={style}><p>子コンポーネント</p></div>) : (null)} 
        </>
    )
})