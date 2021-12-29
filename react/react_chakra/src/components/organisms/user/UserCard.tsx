import { memo, VFC } from 'react'
import { Box, Image, Stack, Text } from '@chakra-ui/react'

type Props = {
  ImageUrl: string
  userName: string
  fullName: string
}

export const UserCard: VFC<Props> = memo((props) => {
  const { ImageUrl, userName, fullName } = props
  
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"p={4}
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={ImageUrl}
          alt="プロフィール画像"
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">{userName}</Text>
        <Text fontSize="sm" color="gray">{fullName}</Text>
      </Stack>
    </Box>
  )
})