import { useDispatch } from "react-redux"

import { completeTask, deleteTask, task } from "./taskSlice"

type Props = {
  task: task
}

export const TaskItem = (props : Props) => {
  const { task } = props
  const dispatch = useDispatch()
  return(
    <>
      <input
        type="checkbox"
        onClick={() => dispatch(completeTask(task))}
        defaultChecked={task.completed}
      />
      <span>{task.title}</span>
      <button onClick={() => dispatch(deleteTask(task))}>DELETE</button>
    </>
  )
}