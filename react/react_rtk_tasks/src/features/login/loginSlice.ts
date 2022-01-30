import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios"
import { RootState } from '../../app/store';

const apiurl = "http://localhost:8000/"
const token = localStorage.localJWT

export const fetchAsyncLogin = createAsyncThunk<any, any>('login/post', async(auth) => {
  const res = await axios.post(`${apiurl}authen/jwt/create`, auth, {
    headers: {
      "Content-Type": "application/json"
    },
  })
  return res.data
})

export const fetchAsyncRegister = createAsyncThunk<any, any>('login/register', async(auth) => {
  const res = await axios.post(`${apiurl}api/register/`, auth, {
    headers: {
      "Content-Type": "application/json"
    },
  })
  return res.data
})

export const fetchAsyncProf = createAsyncThunk('login/get', async() => {
  const res = await axios.get(`${apiurl}api/myself/`, {
    headers: {
      Authorization: `JWT ${token}`, 
    },
  })
  return res.data
})

export interface loginState {
  authen: {
    username: string,
    password: string,
  },
  isLoginView: boolean,
  profile: {
    id: number,
    username: string,
  }
}

const initialState: loginState = {
  authen: {
    username: '',
    password: '',
  },
  isLoginView: true,
  profile: {
    id: 0,
    username: '',
  }
}
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    editUsername(state, action){
      state.authen.username = action.payload
    },
    editPassword(state, action){
      state.authen.password = action.payload
    },
    toggleMode(state){
      state.isLoginView = !state.isLoginView
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncLogin.fulfilled, (state, action) => {
      localStorage.setItem('localJWT', action.payload.access)
      action.payload.access && (window.location.href = "/tasks")
    })
    builder.addCase(fetchAsyncProf.fulfilled, (state, action) => {
      state.profile = action.payload
    })
  }
})
export const {editUsername, editPassword, toggleMode} = loginSlice.actions
export const selectAuthen = (state: RootState) => state.login.authen
export const selectIsloginView = (state: RootState) => state.login.isLoginView
export const selectProfile = (state: RootState) => state.login.profile

export default loginSlice.reducer