import React, {useContext} from 'react'
import AppContext from '../contexts/AppContext'

const CompC = () =>{
    // useContextの値を受け取る
    const {dispatchProvided} = useContext(AppContext)
    return(
        <div>
            <button onClick={() => dispatchProvided('add_1')}>Add + 1</button>
        </div>
    )
}

export default CompC