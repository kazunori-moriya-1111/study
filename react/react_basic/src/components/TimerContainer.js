import React, {useState} from 'react'
import Timer from './Timer'

const TimerContainer = (props) =>{

    const [display, setDisplay] = useState(true)

    return(
        <div>
            <button onClick={() => {setDisplay(!display)}}>Switch Display</button>
            { display && <Timer/> }
        </div>
    )
}

export default TimerContainer