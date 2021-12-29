import { useCallback, useState } from "react"
import { User } from "../types/api/user"

type Props = {
  id: number;
  users: Array<User>
  onOpen: () => void
}

// 選択したユーザを特定しモーダルを表示
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props
    const targetUser = users.find((user) => user.id === id)
    // undefindの可能性はないため、末尾に!付与でコンパイラにnull undefindがあり得ないことを伝える（Non-null assertion operator）
    setSelectedUser(targetUser!)
    onOpen()
  }, [])
  
  return { onSelectUser, selectedUser }
}