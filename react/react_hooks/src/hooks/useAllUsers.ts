import axios from "axios";
import { useState } from "react";
import { User } from "../types/api/user";
import { userProfile } from "../types/userProfile";

// 全ユーザー一覧を取得するカスタムフック
export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<Array<userProfile>>([])
  // 読み込み中か判定するstate
  const [loading, setLoading] = useState(false);
  // API取得結果がerrorか判定するstate
  const [error, setError] = useState(false);

  const getUSers = () => {
    setLoading(true);
    setError(false);

    axios.get<Array<User>>('https://jsonplaceholder.typicode.com/users').then((response) => {
      //取得したデータを整形してdataへ格納
      const data = response.data.map((user) => ({
        id : user.id,
        name : `${user.name}(${user.username})`,
        email : user.email,
        address : `${user.address.city} ${user.address.suite} ${user.address.city}`
      }))
      setUserProfiles(data)
    }).catch(() => {
      // エラーをキャッチしたら実行される
      setError(true)
    }).finally(() => {
      // then or catchの後実行される
      setLoading(false);
    })
  }

  return { getUSers, userProfiles, loading, error }
}