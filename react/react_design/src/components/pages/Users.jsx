import { useContext } from "react"
import styled from "styled-components"
import { UserContext } from "../../providers/UseProvider"
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { SearchInput } from "../molecules/SearchInput"
import { UserCard } from "../organisms/user/UserCard"

const users = [...Array(10).keys()].map(((val) => {
  return{
    id: val,
    name: `kazu-${val}`,
    image: "https://source.unsplash.com/h4EN_2k_L0A",
    email: "abc@gmail.com",
    phone: "090-1111-2222",
    company: {
      name: "abc株式会社"
    },
    website: "https://google.com"
  }
}))

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext)
  const onClickSwitch = () => {
    setUserInfo({isAdmin : !userInfo.isAdmin})
  }
  return(
    <SContainer>
      <h2>ユーザ一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
          ))}
      </SUserArea>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`