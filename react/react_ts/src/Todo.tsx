import { TodoType } from './types/todo'

export const Todo = (
  // 必要な要素を選択するPick Partialを死使用することで任意の引数を表現できる
  props: Pick<TodoType, "title" | "userId"> & Partial<Pick<TodoType, "completed">>
  ) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "[完]" : "[未]"
  return<p>{`${completedMark}${title}(ユーザー:${userId})`}</p>
}