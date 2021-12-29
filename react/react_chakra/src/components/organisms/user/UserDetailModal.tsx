import { memo, VFC } from 'react'
import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack } from '@chakra-ui/react'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay />
      <ModalContent pg={6}>
        <ModalHeader>ユーザ詳細</ModalHeader>
        <ModalCloseButton></ModalCloseButton>
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value="kazu" isReadOnly/>
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value="kazu" isReadOnly/>
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input value="kazu" isReadOnly/>
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input value="kazu" isReadOnly/>
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
})