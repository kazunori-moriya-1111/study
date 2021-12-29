import { memo, useEffect, VFC } from 'react'
import { Center, Spinner, Wrap, WrapItem } from '@chakra-ui/react'
import { UserCard } from '../organisms/user/UserCard'
import { useAllUsers } from '../../hooks/useAllUsers'

export const UserManegement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers()

  //第二引数を空配列にすることで最初の一回のみ動作するようになる
  useEffect(() => getUsers(), [])

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
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  )
})