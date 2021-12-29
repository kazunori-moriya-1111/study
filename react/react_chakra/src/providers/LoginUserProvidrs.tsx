import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

import { User } from "../types/api/user";

export type LoginUserContextType = {
  loginUser: User | null
  setLoginUser: Dispatch<SetStateAction<User | null>>
}

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

export const LoginUserProvidrs = (props : { children : ReactNode}) => {
  const { children } = props
  const [loginUser, setLoginUser] = useState<User | null>(null)
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  )
}
