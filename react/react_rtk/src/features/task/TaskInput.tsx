import { Button, FormControl, Input, Stack } from "@chakra-ui/react"
import { ChangeEvent, FormEvent, useState } from "react"
import { useDispatch } from "react-redux"


import { newTask } from "./taskSlice"

export const TaskInput = () => {
  const dispatch = useDispatch()
  const [editTitle ,setEditTitle] = useState("")
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value)
  }
  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(newTask(editTitle))
    setEditTitle("")
  }
  return(
    // formの一部飲みをchakra-ui適用すると正常に動作しなくなる
    <Stack direction="row" ml={2} py={2}>
      <form onSubmit={handleSubmit}>
        <input value={editTitle} onChange={handleTitleChange} placeholder="please type task-name"></input>
        <button>NEW</button>
      </form>
    </Stack>
  )
}