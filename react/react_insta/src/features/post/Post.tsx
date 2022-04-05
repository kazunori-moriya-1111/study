import React, { useState } from 'react'
import styles from './Post.module.css'

import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Divider, Checkbox } from '@material-ui/core'
import { Favorite, FavoriteBorder } from '@material-ui/icons'

import AvatarGroup from '@material-ui/lab/AvatarGroup'

import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/store'

import { selectProfiles } from '../auth/authSlice'

import { 
  selectComments,
  fetchPostStart,
  fetchPostEnd,
  fetchAsyncPostComment,
  fetchAsyncPatchLiked,
} from './postSlice'

import { PROPS_POST } from '../types'

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
}));

const Post : React.FC<PROPS_POST>= ({
  postId,
  loginId,
  userPost,
  title,
  imageUrl,
  liked,
}) => {
  const classes = useStyles();
  const dispatch: AppDispatch = useDispatch();
  const profiles = useSelector(selectProfiles);
  const comments = useSelector(selectComments);
  const [text, setText] = useState('');
  // postIdに対応したコメントのみを抽出する
  const commentsOnPost = comments.filter((com) => {
    return com.post === postId;
  })
  // 投稿したユーザのプロフィールを抽出
  const prof = profiles.filter((prof) => {
    return prof.userProfile === userPost;
  })
  // コメントが記入されて実行ボタンがクリックされた時に動作する関数
  const postComment = async (e: React.MouseEvent<HTMLElement>) => {
    // 無駄なリフレッシュを無効化
    e.preventDefault();
    const packet = { text: text, post: postId };
    await dispatch(fetchPostStart());
    await dispatch(fetchAsyncPostComment(packet))
    await dispatch(fetchPostEnd())
    setText("")
  }
  // いいねボタンがクリックされた時にlikedを更新する関数
  const hendlerLiked = async () => {
    const packet = {
      id: postId,
      title: title,
      current: liked,
      new: loginId,
    };
    await dispatch(fetchPostStart());
    await dispatch(fetchAsyncPatchLiked(packet));
    await dispatch(fetchPostEnd());
  }
  return (
    <div>Post</div>
  )
}

export default Post