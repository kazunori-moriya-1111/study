import { ChangeEvent, memo, useState, VFC } from 'react'
import { Box, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react'

import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { useAuth } from '../../hooks/useAuth'

export const Login: VFC = memo(() => {
  const { login, loading } = useAuth()

  const [userId, setUserId] = useState('')
  // テキストボックスの型指定のセオリー
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)

  const onCLickLogin = () => login(userId)

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h2" size="lg" textAlign="center">ユーザ管理アプリ</Heading>
        <Divider my={4}/>
        <Stack spacing={3} py={4} px={10}>
          <Input placeholder="ユーザID" value={userId} onChange={onChangeUserId}/>
          <PrimaryButton onClick={onCLickLogin}>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
})