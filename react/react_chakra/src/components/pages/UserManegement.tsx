import { memo, useCallback, useEffect, VFC } from 'react'
import { Center, Spinner, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react'

import { UserCard } from '../organisms/user/UserCard'
import { useAllUsers } from '../../hooks/useAllUsers'
import { UserDetailModal } from '../organisms/user/UserDetailModal'
import { useSelectUser } from '../../hooks/useSelectUser'
import { useLoginUser } from '../../hooks/useLoginUser'

export const UserManegement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { getUsers, users, loading } = useAllUsers()
  const { onSelectUser, selectedUser } = useSelectUser()
  const { loginUser } = useLoginUser()
  
  //第二引数を空配列にすることで最初の一回のみ動作するようになる
  useEffect(() => getUsers(), [getUsers])

  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users, onOpen })
  }, [onOpen, users, onSelectUser])

  return(
    <>
      {loading ? (
        // ローディング中の表示内容
        <Center h="100vh">
          <Spinner/>
        </Center>
      ) : (
        // ローディング後の表示内容
        <Wrap p={{ base: 4, md: 10 }} justify="center">
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                id={user.id}
                ImageUrl={"https://source.unsplash.com/random"}
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isAdmin={loginUser?.isAdmin} isOpen={isOpen} onClose={onClose}/>
    </>
  )
})