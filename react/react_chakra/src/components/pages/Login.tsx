import { memo, VFC } from 'react'
import { Box, Button, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react'

export const Login: VFC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h2" size="lg" textAlign="center">ユーザ管理アプリ</Heading>
        <Divider my={4}/>
        <Stack spacing={3} py={4} px={10}>
          <Input placeholder="ユーザID"/>
          <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>ログイン</Button>
        </Stack>
      </Box>
    </Flex>
  )
})