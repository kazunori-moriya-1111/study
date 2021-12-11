import styled from "styled-components"
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  console.log(onClick)
  return(
    <SButton onClick={onClick}>{children}</SButton>
  )
}

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;

//　そのまま適用する方法
// const SButton = styled.button`
//   background-color: #11999e;
//   color: #fff;
//   padding: 6px 24px;
//   border: none;
//   border-radius: 999px;
//   outline: none;
//   &:hover {
//     cursor: pointer;
//     opacity: 0.8;
//   }
// `;