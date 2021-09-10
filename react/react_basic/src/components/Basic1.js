import React, {useState} from 'react'

const Basic1 = (props) =>{
    const clickHandler = () =>{
        console.log("click")
    }

    const [count, setCount] = useState(0)

    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Click {count}</button>
            <h1>Hello {props.name}</h1>
            <h1>Hello React2</h1>
        </div>
    )
}

export default Basic1