import axios from "axios"
import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"

import { User } from "../types/api/user"
import { useLoginUser } from "./useLoginUser"
import { useMessage } from "./useMessage"

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser()

  const [loading, setLoading] = useState(false)
  
  const login = useCallback((id: string) => {
    //axiosで正常にデータを取得できたら、/homeへ遷移して、異常の場合はエラーメッセージを表示する
    setLoading(true)
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => {
      if (response.data) {
        console.log("response.data",response.data)
        setLoginUser(response.data)
        showMessage({ title: "ログインしました", status: "success"})
        navigate("/home")
      } else {
        showMessage({ title: "ユーザが見つかりません", status: "error"})
        setLoading(false)
      }
    }).catch(() => {
      showMessage({ title: "ログインできません", status: "error"})
      setLoading(false)
    })
  }, [navigate, setLoginUser, showMessage])
  return { login, loading, setLoading }
}