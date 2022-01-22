import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios"

const apiurl = "http://localhost:8000/api/tasks";
const token = localStorage.localJWT;


export interface taskState{
  tasks: [
    {
      id: number,
      title: string,
      created_at: string,
      updated_at: string,
    }
  ],
  editedTask: {
    id: number,
    title: string,
    created_at: string,
    updated_at: string
  },
  selectedTask: {
    id: number,
    title: string,
    created_at: string,
    updated_at: string
  }

}

const taskSlice = createSlice({
  name: "task",
  initialState : { 
    tasks: [
      {
        id: 0,
        title: "",
        created_at: "",
        updated_at: "",
      }
    ],
    editedTask: {
      id: 0,
      title: "",
      created_at: "",
      updated_at: ""
    },
    selectedTask: {
      id: 0,
      title: "",
      created_at: "",
      updated_at: ""
    }
  } as taskState,
  reducers: {
    editTask(state, action){
      state.editedTask = action.payload
    },
    selectedTask(state, action){
      state.selectedTask = action.payload
    }
  }
})