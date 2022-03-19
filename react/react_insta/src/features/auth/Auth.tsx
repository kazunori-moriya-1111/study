import React from 'react'
import { AppDispatch } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Auth.module.css'
import Modal from "react-modal"
import { Formik } from "formik"
import { object, string } from "yup";
import { TextField, Button, CircularProgress } from '@material-ui/core'

import {
  selectIsLoadingAuth,
  selectOpenSignIn,
  selectOpenSignUp,
  setOpenSignIn,
  resetOpenSignIn,
  setOpenSignUp,
  resetOpenSignUp,
  fetchCredStart,
  fetchCredEnd,
  fetchAsyncLogin,
  fetchAsyncRegister,
  fetchAsyncGetMyProf,
  fetchAsyncGetProfs,
  fetchAsyncCreateProf,
} from "./authSlice";

// モーダルのスタイルを定義
const customStyles = {
  overlay: {
    backgroundColor: "#777777",
  },
  content: {
    top: "55%",
    left: "50%",

    width: 280,
    height: 350,
    padding: "50px",
    // top leftはモーダルの左上位置を調整するためモダールの位置を再調整するための設定
    transform: "translate(-50%, -50%)",
  },
};

const Auth: React.FC = () => {
  Modal.setAppElement('#root');
  const openSignIn = useSelector(selectOpenSignIn);
  const openSignUp = useSelector(selectOpenSignUp);
  const isLoadingAuth = useSelector(selectIsLoadingAuth);
  const dispatch: AppDispatch = useDispatch()
  
  return (
    <>
      {/* 新規登録用のモーダル */}
      <Modal
       isOpen={openSignUp}
       // モーダル以外の箇所をクリックしたとき呼び出す関数（openSignUp=falseになるのでモーダルが閉じる）
       onRequestClose={async () => {
         await dispatch(resetOpenSignUp());
       }}
       style={customStyles}
      >
        <Formik
          initialErrors={{ email: "required" }}
          initialValues={{ email: "", password: "" }}
          // values.xxでフォームのデータへアクセスできる
          onSubmit={async (values) => {
            await dispatch(fetchCredStart());
            const resultReg = await dispatch(fetchAsyncRegister(values));
            
            // 新規ユーザが問題なく作成された時のみ実行する 
            if (fetchAsyncRegister.fulfilled.match(resultReg)) {
              await dispatch(fetchAsyncLogin(values));
              await dispatch(fetchAsyncCreateProf({ nickName: "anonymous" }));

              await dispatch(fetchAsyncGetProfs());
              // await dispatch(fetchAsyncGetPosts())
              // await dispatch(fetchAsyncGetComments())
              await dispatch(fetchAsyncGetMyProf());
            }
            await dispatch(fetchCredEnd());
            await dispatch(resetOpenSignUp());
          }}
          validationSchema={object().shape({
            email: string()
              .email("email format is wrong")
              .required("email is must"),
            password: string().required("password is must").min(4)
          })}
        >
          {({
            handleSubmit,
            handleChange,
            // 入力フォームからフォーカスが外れた時に反応するハンドラー
            handleBlur,
            values,
            errors,
            touched,
            isValid,
          }) => 
            <div>
              <form onSubmit={handleSubmit}>
                <div className={styles.auth_signUp}>
                  <h1 className={styles.auth_title}>SNS clone</h1>
                  <br />
                  <div className={styles.auth_progress}>
                    {isLoadingAuth && <CircularProgress />}
                  </div>
                  <br />
                  <TextField 
                    placeholder="email"
                    type="input"
                    name="email"
                    onChange={handleChange} //validationを実行する
                    onBlur={handleBlur} //validationを実行する
                    value={values.email}
                  />
                  <br />
                  {touched.email && errors.email ? (
                    <div className={styles.auth_error}>{errors.email}</div>
                  ) : null}

                  <TextField 
                    placeholder="password"
                    type="password"
                    name="password"
                    onChange={handleChange} //validationを実行する
                    onBlur={handleBlur} //validationを実行する
                    value={values.password}
                  />
                  <br />
                  {touched.password && errors.password ? (
                    <div className={styles.auth_error}>{errors.password}</div>
                  ) : null}
                  <br />
                  <br />

                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!isValid}
                    type="submit"
                  >
                    Register
                  </Button>
                  <br />
                  <br />
                  <span
                    className={styles.auth_text}
                    onClick={async () => {
                      await dispatch(setOpenSignIn());
                      await dispatch(resetOpenSignUp())
                    }}
                  >
                    You already have a account ?
                  </span>
                </div>
              </form>
            </div>}
        </Formik>
      </Modal>
      {/* ログイン用のモーダル */}
      <Modal
        isOpen={openSignIn}
        onRequestClose={async () => {
          await dispatch(resetOpenSignIn());
        }}
        style={customStyles}
      >
        <Formik
          initialErrors={{ email: "required" }}
          initialValues={{ email: "", password: "" }}
          // values.xxでフォームのデータへアクセスできる
          onSubmit={async (values) => {
            await dispatch(fetchCredStart());
            const result = await dispatch(fetchAsyncLogin(values));
            
            // ログインが問題なく作成された時のみ実行する 
            if (fetchAsyncLogin.fulfilled.match(result)) {
              await dispatch(fetchAsyncGetProfs());
              // await dispatch(fetchAsyncGetPosts())
              // await dispatch(fetchAsyncGetComments())
              await dispatch(fetchAsyncGetMyProf());
            }
            await dispatch(fetchCredEnd());
            await dispatch(resetOpenSignIn());
          }}
          validationSchema={object().shape({
            email: string()
              .email("email format is wrong")
              .required("email is must"),
            password: string().required("password is must").min(4)
          })}
        >
          {({
            handleSubmit,
            handleChange,
            // 入力フォームからフォーカスが外れた時に反応するハンドラー
            handleBlur,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <div>
              <form onSubmit={handleSubmit}>
                <div className={styles.auth_signUp}>
                  <h1 className={styles.auth_title}>SNS clone</h1>
                  <br />
                  <div className={styles.auth_progress}>
                    {isLoadingAuth && <CircularProgress />}
                  </div>
                  <br />

                  <TextField 
                    placeholder="email"
                    type="input"
                    name="email"
                    onChange={handleChange} //validationを実行する
                    onBlur={handleBlur} //validationを実行する
                    value={values.email}
                  />
                  <br />
                  {touched.email && errors.email ? (
                    <div className={styles.auth_error}>{errors.email}</div>
                  ) : null}

                  <TextField 
                    placeholder="password"
                    type="password"
                    name="password"
                    onChange={handleChange} //validationを実行する
                    onBlur={handleBlur} //validationを実行する
                    value={values.password}
                  />
                  <br />
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!isValid}
                    type="submit"
                  >
                    Login
                  </Button>
                  <br />
                  <br />
                  <span
                    className={styles.auth_text}
                    onClick={async () => {
                      await dispatch(resetOpenSignIn());
                      await dispatch(setOpenSignUp());
                    }}
                  >
                    You don't have a account ?
                  </span>
                </div>
              </form>
            </div>
          )}
        </Formik>
      </Modal>
    </>
  )
}

export default Auth