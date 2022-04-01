export interface File extends Blob {
  readonly lastModified: number;
  readonly name: string;
}
// *authSlice.ts*で使用
export interface PROPS_AUTHEN {
  email: string;
  password: string;
}

export interface PROPS_PROFILE {
  id: number;
  nickName: string;
  img: File | null;
}

export interface PROPS_NICKNAME {
  nickName: string;
}
// *postSlice.tsで使用
export interface PROPS_NEWPOST {
  title: string;
  img: File | null;
}

export interface PROPS_LIKED {
  id: number;
  titile: string;
  current: number[];
  new: number
}

export interface PROPS_COMMENT {
  text: string;
  post: number;
}
// Post.tsxで使用
export interface PROPS_POST {
  postId: number;
  loginId: number;
  userPost: number;
  title: string;
  imageUrl: string;
  liked: number[];
}