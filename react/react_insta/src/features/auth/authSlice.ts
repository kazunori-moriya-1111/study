import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from "axios"
import { PROPS_AUTHEN, PROPS_PROFILE, PROPS_NICKNAME } from "../types"

const apiUrl = process.env.REACT_APP_DEV_API_URL;

// jwtトークンを取得する関数
export const fetchAsyncLogin = createAsyncThunk(
  "auth/post",
  async (authen: PROPS_AUTHEN) => {
    const res = await axios.post(`${apiUrl}authen/jwt/create`, authen, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data
  }
);

// 新規アカウント作成する関数
export const fetchAsyncRegister = createAsyncThunk(
  "auth/register",
  async (auth: PROPS_AUTHEN) => {
    const res = await axios.post(`${apiUrl}api/register`, auth, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  }
)

// プロフィールを作成する関数
export const fetchAsyncCreateProf = createAsyncThunk(
  "profile/post",
  async (nickName: PROPS_NICKNAME) => {
    const res = await axios.post(`${apiUrl}api/profile/`, nickName, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.localJWT}`,
      },
    });
    return res.data;
  }
)

// プロフィールを更新する関数
export const fetchAsyncUpdateProf = createAsyncThunk(
  "profile/put",
  async (profile: PROPS_PROFILE) => {
    const uploadData = new FormData();
    uploadData.append('nickName', profile.nickName);
    profile.img && uploadData.append('img', profile.img, profile.img.name);
    const res = await axios.put(
      `${apiUrl}api/profile/${profile.id}`,
      uploadData,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${localStorage.localJWT}`,
        },
      }
    );
    return res.data
  }
)

// ログインしているユーザのプロフィールを取得する関数
export const fetchAsyncGetMyProf = createAsyncThunk(
  'profile/get',
  async() => {
    const res = await axios.get(`${apiUrl}api/myprofile/`, {
      headers: {
        Authorization: `JWT ${localStorage.localJWT}`,
      },
    });
    return res.data[0]
  }
);

// 全ユーザのプロフィールを取得する関数
export const fetchAsyncGetProfs = createAsyncThunk(
  'profiles/get',
  async() => {
    const res = await axios.get(`${apiUrl}api/profile/`, {
      headers: {
        Authorization: `JWT ${localStorage.localJWT}`,
      },
    });
    return res.data
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    openSignIn: true,
    openSignUp: false,
    openProfile: false,
    isLoadingAuth: false,
    myprofile: {
      id: 0,
      nickName: "",
      userProfile: 0,
      created_on: "",
      img: "",
    },
    profiles: [
      {
        id: 0,
        nickName: "",
        userProfile: 0,
        created_on: "",
        img: "",
      },
    ],
  },
  reducers: {
    fetchCredStart(state) {
      state.isLoadingAuth = true;
    },
    fetchCredEnd(state) {
      state.isLoadingAuth = false;
    },
    setOpenSingIn(state) {
      state.openSignIn = true;
    },
    resetOpenSingIn(state) {
      state.openSignIn = false;
    },
    setOpenSignUp(state) {
      state.openSignUp = true;
    },
    resetOpenSignUp(state) {
      state.openSignUp = false;
    },
    setOpenProfile(state) {
      state.openProfile = true;
    },
    resetOpenProfile(state) {
      state.openProfile = false;
    },
    editNickname(state, action) {
      state.myprofile.nickName = action.payload
    },
  },
  extraReducers: (builder) => {
    // jwtトークンを取得する関数が成功した後はローカルストレージにJWTトークンをsetする
    builder.addCase(fetchAsyncLogin.fulfilled, (state, action) => {
      localStorage.setItem('localJWT', action.payload.access);
    });
    // 新規アカウント作成する関数が成功した時はmyprofileのstateを更新する
    builder.addCase(fetchAsyncCreateProf.fulfilled, (state, action) => {
      state.myprofile = action.payload;
    });
    // ログインしているユーザのプロフィールを取得する関数が成功した時はmyprofileのstateを更新する
    builder.addCase(fetchAsyncGetMyProf.fulfilled, (state, action) => {
      state.myprofile = action.payload;
    });
    // 全ユーザのプロフィールを取得する関数が成功した時はprofilesのstateを更新する
    builder.addCase(fetchAsyncGetProfs.fulfilled, (state, action) => {
      state.profiles = action.payload;
    });
    // プロフィールを更新する関数が成功した時は
    builder.addCase(fetchAsyncUpdateProf.fulfilled, (state, action) => {
      state.myprofile = action.payload;
      state.profiles = state.profiles.map((prof) => 
        prof.id === action.payload.id ? action.payload : prof
      )
    });
  },
});

export const {
  fetchCredStart,
  fetchCredEnd,
  setOpenSingIn,
  resetOpenSingIn,
  setOpenSignUp,
  resetOpenSignUp,
  setOpenProfile,
  resetOpenProfile,
  editNickname
} = authSlice.actions;

export const selectIsLoadingAuth = (state: RootState) => state.auth.isLoadingAuth
export const selectOpenSignIn = (state: RootState) => state.auth.openSignIn;
export const selectOpenSignUp = (state: RootState) => state.auth.openSignUp;
export const selectOpenProfile = (state: RootState) => state.auth.openProfile;
export const selectProfile = (state: RootState) => state.auth.myprofile;
export const selectProfiles = (state: RootState) => state.auth.profiles;

export default authSlice.reducer;
