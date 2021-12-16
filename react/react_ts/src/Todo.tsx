import { TodoType } from './types/todo'
import { VFC } from "react";

// 必要な要素を選択するPick Partialを死使用することで任意の引数を表現できる
export const Todo: VFC<Pick<TodoType, "title" | "userId"> & Partial<Pick<TodoType, "completed">>> = (props) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "[完]" : "[未]"
  return<p>{`${completedMark} ${title}(ユーザー:${userId})`}</p>
}