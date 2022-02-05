import styles from "./TaskDetail.module.css"
import { useSelector } from "react-redux"
import { selectSelectedTask } from "./taskSlice"

const TaskDetail = () => {
  const selectedTask =useSelector(selectSelectedTask)
  return (
    <div className={styles.details}>
      {selectedTask.title && (
        <>
          <h2>{selectedTask.title}</h2>
          <p>created_at</p>
          <h3>{selectedTask.created_at}</h3>
          <p>updated_at</p>
          <h3>{selectedTask.updated_at}</h3>
        </>
      )}
    </div>
  ) 
}

export default TaskDetail