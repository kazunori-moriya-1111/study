export const Todo = (props:any) => {
  const { title, userid} = props;
  return<p>{`${title}(ユーザー:${userid})`}</p>
}