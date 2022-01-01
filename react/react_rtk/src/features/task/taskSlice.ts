import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface task {
  id: number;
  title: string;
  completed: boolean
}

export interface CounterState {
  idCount: number;
  tasks: Array<task>;
}

const initialState: CounterState = {
  idCount: 3,
  tasks: [
    { id: 1, title: "TASK A", completed: false },
    { id: 2, title: "TASK B", completed: true },
    { id: 3, title: "TASK C", completed: false },
  ]
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  
  reducers: {
    // 新規タスクを追加するアクション
    newTask: (state, action) => {
      state.idCount += 1;
      const newItem = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      }
      state.tasks = [newItem, ...state.tasks]
    },
    // completedをtoggleするアクション
    completeTask: (state, action: PayloadAction<{id : number}>) => {
      const task = state.tasks.find((t) => t.id === action.payload.id)
      if (task) {
        task.completed = !task.completed
      }
    },
    // タスクを削除するアクション
    deleteTask: (state, action: PayloadAction<{id : number}>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id)
    },
  },
});

export const { newTask, completeTask, deleteTask } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.task.tasks

export default taskSlice.reducer;
