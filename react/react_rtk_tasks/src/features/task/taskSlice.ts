import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios"
import { RootState } from '../../app/store';

// グローバル変数定義
const apiurl = "http://localhost:8000/api/tasks/";
const token = localStorage.localJWT;

// 非同期関数定義
export const fetchAsyncGet = createAsyncThunk('task/get', async() => {
  const res = await axios.get(apiurl, {
    headers: {
      Authorization: `JWT ${token}`, 
    },
  })
  return res.data
})

export const fetchAsyncCreate = createAsyncThunk<taskState, taskState>('task/post', async(task) => {
  const res = await axios.post(apiurl, task, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`, 
    },
  })
  return res.data
})

export const fetchAsyncUpdate = createAsyncThunk<taskState, taskState>('task/put', async(task) => {
  const res = await axios.put(`${apiurl}${task.id}/`, task, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`, 
    },
  })
  return res.data
})

export const fetchAsyncDelete = createAsyncThunk<number, number>('task/delete', async(id) => {
  await axios.delete(`${apiurl}${id}/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`, 
    },
  })
  return id
})

// initialStateの型定義
export interface taskState{
  id: number,
  title: string,
  created_at: string,
  updated_at: string,
}

export interface tasksState{
  tasks: Array<taskState>,
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

// slice作成
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
  } as tasksState,
  reducers: {
    editTask(state, action){
      state.editedTask = action.payload
    },
    selectTask(state, action){
      state.selectedTask = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGet.fulfilled, (state, action) => {
      return {
        ...state,
        tasks: action.payload
      }
    })
    builder.addCase(fetchAsyncCreate.fulfilled, (state, action) => {
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      }
    })
    builder.addCase(fetchAsyncUpdate.fulfilled, (state, action) => {
      return {
        ...state,
        tasks: state.tasks.map((t) => 
          t.id === action.payload.id ? action.payload : t
        ),
        selectedTask: action.payload
      }
    })
    builder.addCase(fetchAsyncDelete.fulfilled, (state, action) => {
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
        selectedTask: { id:0, title:"", created_at:"", updated_at:"",},
      }
    })
  }
})

// export対応
export const { editTask, selectTask } = taskSlice.actions

export const selectSelectedTask = (state: RootState) => state.task.selectedTask
export const selectEditedTask = (state: RootState) => state.task.editedTask
export const selectTasks = (state: RootState) => state.task.tasks

export default taskSlice.reducer