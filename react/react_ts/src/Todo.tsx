type TodoType = {
  userId: number;
  title: string;
  completed?: boolean; //末尾に?を付与することで必須の引数ではなくなる
}

export const Todo = (props:TodoType) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "[完]" : "[未]"
  return<p>{`${completedMark}${title}(ユーザー:${userId})`}</p>
}