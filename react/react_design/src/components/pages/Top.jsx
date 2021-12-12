import styled from "styled-components"
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { UserContext } from "../../providers/UseProvider";
import axios from "axios"

export const Top = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserContext)
  const onClickAdmin = () => {
    setUserInfo({isAdmin : true})
    navigate("/users");
  }
  const onClickGeneral = () => {
    setUserInfo({isAdmin : false})
    navigate("/users");
  }

  const onClickUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data)
    }).catch((err) => {console.log(err)})
  }

  const onClickUser1 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users?id=1").then((res) => {
      console.log(res.data)
    }).catch((err) => {console.log(err)})
  }
  return(
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br /><br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      <br /><br />
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のusers</button>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`