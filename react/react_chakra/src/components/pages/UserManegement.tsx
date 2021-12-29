import { memo, useCallback, useEffect, VFC } from 'react'
import { Center, Spinner, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react'

import { UserCard } from '../organisms/user/UserCard'
import { useAllUsers } from '../../hooks/useAllUsers'
import { UserDetailModal } from '../organisms/user/UserDetailModal'

export const UserManegement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { getUsers, users, loading } = useAllUsers()
  //第二引数を空配列にすることで最初の一回のみ動作するようになる
  useEffect(() => getUsers(), [getUsers])

  const onClickUser = useCallback(() => onOpen(), [onOpen])

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
                ImageUrl={"https://source.unsplash.com/random"}
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose}/>
    </>
  )
})