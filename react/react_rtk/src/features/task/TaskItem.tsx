import { Button, Checkbox, Stack } from "@chakra-ui/react"
import { useDispatch } from "react-redux"

import { completeTask, deleteTask, task } from "./taskSlice"

type Props = {
  task: task
}

export const TaskItem = (props : Props) => {
  const { task } = props
  const dispatch = useDispatch()
  return(
    <Stack direction="row" mx={10} py={2}>
      <Checkbox
        colorScheme='green'
        onClick={() => dispatch(completeTask(task))}
        defaultIsChecked={task.completed}
      >{task.title}</Checkbox>
      <Button colorScheme='teal' onClick={() => dispatch(deleteTask(task))}>DELETE</Button>
    </Stack>
  )
}