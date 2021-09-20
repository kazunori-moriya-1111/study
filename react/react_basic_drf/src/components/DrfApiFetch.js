import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DrfApiFetch = () =>{

    const [tasks, setTasks] = useState([])
    const [selectedTask, setSelectedTask] = useState([])
    const [id, setId] = useState(2)

    // useEffectの第二引数を空にすることで最初のレンダリング時のみに実行する関数を表現
    useEffect(() => {
        axios.get('http://localhost:8000/api/tasks/',{
            headers:{
                'Authorization' : 'Token 1b0734ef46b2790a8512679604d6592c276181e2'
            }
        })
        .then(res => {setTasks(res.data)})
    }, [])

    const getTask = () => {
        axios.get(`http://localhost:8000/api/tasks/${id}/`,{
            headers:{
                'Authorization' : 'Token 1b0734ef46b2790a8512679604d6592c276181e2'
            }
        })
        .then(res => {setSelectedTask(res.data)})
    }

    const deleteTask = () => {
        axios.delete(`http://localhost:8000/api/tasks/${id}/`,{
            headers:{
                'Authorization' : 'Token 1b0734ef46b2790a8512679604d6592c276181e2'
            }
        })
        .then(res => console.log(res.data))
    }

    return(
        <div>
            <ul>
                {tasks.map(task => <li key={task.id}>{task.title} {task.id}</li>)}
            </ul>
            Set ID<br />
            <input type='text' value={id} onChange={env => (setId(env.target.value))}></input>
            <br />
            <button type='button' onClick={() => getTask()}>Get tasks</button>
            <button type='button' onClick={() => deleteTask()}>Delete tasks</button>
            <br />
            <h3>{ selectedTask.title }</h3>
        </div>
    )
}

export default DrfApiFetch