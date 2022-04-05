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
  // 投稿が存在する時に中身を返却する
  if (title){
    return (
      <div className={styles.post}>
        {/* 投稿者アバターと投稿者nicknameと投稿画像 */}
        <div className={styles.post_header}>
          <Avatar className={styles.post_avatar} src={prof[0]?.img} />
          <h3>{prof[0]?.nickName}</h3>
        </div>
        <img className={styles.post_img} src={imageUrl} alt="" />
        {/* いいねボタンとアバターグループ */}
        <h4 className={styles.post_text}>
          <Checkbox
            className={styles.post_checkBox}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            checked={liked.some((like) => like === loginId)}
            onChange={hendlerLiked}
          />
          <strong>{prof[0]?.nickName}</strong> {title}
          <AvatarGroup max={7}>
            {liked.map((like) => (
              <Avatar 
                className={styles.post_avatarGroup}
                key={like}
                src={profiles.find((prof) => prof.userProfile === like)?.img}
              />
            ))}
          </AvatarGroup>
        </h4>

        <Divider />
        {/* コメント部分 */}
        <div className={styles.post_comments}>
          {commentsOnPost.map((comment) => (
            <div key={comment.id} className={styles.post_comment}>
              <Avatar
                src={
                  profiles.find(
                    (prof) => prof.userProfile === comment.userComment
                  )?.img
                }
                className={classes.small}
              />
              <p>
                <strong className={styles.post_strong}>
                  {
                    profiles.find(
                      (prof) => prof.userProfile === comment.userComment
                    )?.nickName
                  }
                </strong>
                {comment.text}
              </p>
            </div>
          ))}
        </div>
        {/* コメント投稿部分 */}
        <form className={styles.post_commentBox}>
          <input
            className={styles.post_input}
            type="text"
            placeholder="add a comment"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            disabled={!text.length}
            className={styles.post_button}
            type="submit"
            onClick={postComment}
          >
            Post
          </button>
        </form>
      </div>
    )
  }
  return null
}

export default Post