import { VFC } from "react";
import { User } from "./types/User";

type Props = {
  user: User
}

export const UserProfile: VFC<Props> = (props) => {
  const { user} = props;
  return(
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      {/* オプショナルチェイニングで存在しない場合の処理を記述する */}
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  )
}