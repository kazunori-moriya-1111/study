import { memo, VFC } from 'react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { UserCard } from '../organisms/user/UserCard'

export const UserManegement: VFC = memo(() => {
  return(
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard ImageUrl={"https://source.unsplash.com/random"} userName="m" fullName="kafe"></UserCard>
      </WrapItem>
    </Wrap>
  )
})