import React, {useState, useEffect} from 'react'

const BasicUseEffect = (props) =>{

    const [count, setCount] = useState(0)
    const [item, setItem] = useState('')

    // 反応してほしいstateを第二引数に指定する
    useEffect(() => {
        console.log("test useEffect")
    }, [count])

    return(
        <div>
            <button onClick = {() => setCount(prevCount => prevCount + 1)}>click :{count}</button>
            <input type="text" value={item} onChange={env => setItem(env.target.value)} />
        </div>
    )
}

export default BasicUseEffect