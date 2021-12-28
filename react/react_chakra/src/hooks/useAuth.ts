import axios from "axios"
import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"

import { User } from "../types/api/user"

export const useAuth = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false)
  
  const login = useCallback((id: string) => {
    //axiosで正常にデータを取得できたら、/homeへ遷移して、異常の場合はエラーメッセージを表示する
    setLoading(true)
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => {
      if (response.data) {
        navigate("/home")
      } else {
        alert("ユーザが見つかりません")
      }
    }).catch(() => alert("ログインできません")).finally(() => setLoading(false))
  }, [navigate])
  return { login, loading }
}