import React, {useState, useEffect} from 'react'

const Timer = (props) =>{

    const [count, setCount] = useState(0)

    const time = () => {
        setCount(prevcount => setCount(prevcount + 1))
    }

    useEffect(() => {
        const interval = setInterval(time, 1000)
        // コンポーネントが破棄された（有効でなくなった）時に実行される
        return () => {
            clearInterval(interval)
            console.log("clera")
        }
    }, [])
    return(
        <div>
            {count}
        </div>
    )
}

export default Timer