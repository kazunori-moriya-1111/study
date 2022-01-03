import { Button, Input, Stack } from "@chakra-ui/react"
import { ChangeEvent, MouseEvent, useState } from "react"
import { useDispatch } from "react-redux"


import { newTask } from "./taskSlice"

export const TaskInput = () => {
  const dispatch = useDispatch()
  const [editTitle ,setEditTitle] = useState("")
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value)
  }
  const handleSubmit = (e : MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(newTask(editTitle))
    setEditTitle("")
  }
  return(
    <Stack direction="row" ml={2} py={2}>
      <Input value={editTitle} onChange={(e) => handleTitleChange(e)} placeholder="please type task-name"></Input>
      <Button onClick={(e) => handleSubmit(e)}>NEW</Button>
    </Stack>
  )
}