import React, { useEffect } from 'react'
import Auth from '../auth/Auth'
import styles from './Core.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/store'

import { withStyles } from '@material-ui/core/styles'
import {
  Button,
  Grid,
  Avatar,
  Badge,
  CircularProgress,
} from '@material-ui/core/'

import { MdAddAPhoto } from 'react-icons/md'

import {
  editNickname,
  selectProfile,
  selectIsLoadingAuth,
  setOpenSignIn,
  resetOpenSignIn,
  setOpenSignUp,
  resetOpenSignUp,
  setOpenProfile,
  resetOpenProfile,
  fetchAsyncGetMyProf,
  fetchAsyncGetProfs,
} from '../auth/authSlice'

import {
  selectPosts,
  selectIsLoadingPost,
  setOpenNewPost,
  resetOpenNewPost,
  fetchAsyncGetPosts,
  fetchAsyncGetComments,
} from '../post/postSlice'

import Post from "../post/Post";
import EditProfile from "./EditProfile";
import NewPost from "./NewPost";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const Core: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const profile = useSelector(selectProfile);
  const posts = useSelector(selectPosts);
  const isLoadingPost = useSelector(selectIsLoadingPost);
  const isLoadingAuth = useSelector(selectIsLoadingAuth);

  // ブラウザが起動した時に最初に実行される処理
  useEffect(() => {
    const fetchBootLoader = async () => {
      if (localStorage.localJWT) {
        // ローカルストレージにJWTが存在する場合はサインインのモーダルを閉じる
        dispatch(resetOpenSignIn());
        const result = await dispatch(fetchAsyncGetMyProf())
        // JWTの有効期限が切れている場合fetchAsyncGetMyProfでrejectedが帰ってくるためサインインのモーダルを開く
        if (fetchAsyncGetMyProf.rejected.match(result)) {
          dispatch(setOpenSignIn());
          // モーダルを開いた後何も処理せずに関数を抜ける
          return null
        }
        // GetMyProfが正常に成功した場合他の情報も取得する
        await dispatch(fetchAsyncGetPosts())
        await dispatch(fetchAsyncGetProfs())
        await dispatch(fetchAsyncGetComments())
      }
    }
    fetchBootLoader()
  }, [dispatch])
  return (
    <div>
      <Auth />
      <div className={styles.core_header}>
        <h1 className={styles.core_title}>SNS clone</h1>
        {/* profile?はprofileが存在する時に式の評価を行う */}
        {profile?.nickName ? (
          // ログインしている時
          <>
            <button
              className={styles.core_btnModal}
              onClick={() => {
                dispatch(setOpenNewPost())
                dispatch(resetOpenProfile())
              }}
            >
              <MdAddAPhoto />
            </button>
            <div className={styles.core_logout}>
              {(isLoadingPost || isLoadingAuth) && <CircularProgress />}
              <Button
                onClick={() => {
                  localStorage.removeItem('localJWT')
                  dispatch(editNickname(''))
                  dispatch(resetOpenProfile());
                  dispatch(resetOpenNewPost());
                  dispatch(setOpenSignIn())
                }}
              >
                Logout
              </Button>
              <button
                className={styles.core_btnModal}
                onClick={() => {
                  dispatch(setOpenProfile())
                  dispatch(resetOpenNewPost())
                }}
              >
                <StyledBadge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  variant="dot"
                >
                  <Avatar alt="who?" src={profile.img} />{" "}
                </StyledBadge>
              </button>
            </div>
          </>
        ) : (
          // ログインしていない時
          <div>
            <Button
              onClick={() => {
                dispatch(setOpenSignIn())
                dispatch(resetOpenSignUp())
              }}
            >
              Login
            </Button>
            <Button
              onClick={() => {
                dispatch(setOpenSignUp())
                dispatch(resetOpenSignIn())
              }}
            >
              SignUp
            </Button>
          </div>
        )}
      </div>
      {profile?.nickName && (
        <>
          <div className={styles.core_posts}>
            <Grid container spacing={4}>
              {posts
                .slice(0)
                .reverse()
                .map((post) => (
                  <Grid key={post.id} item xs={12} md={4}>
                    <Post
                      postId={post.id}
                      title={post.title}
                      loginId={profile.userProfile}
                      userPost={post.userPost}
                      imageUrl={post.img}
                      liked={post.liked}
                    />
                  </Grid>
                ))
              }
            </Grid>
          </div>
        </>
      )}
    </div>
  )
}

export default Core