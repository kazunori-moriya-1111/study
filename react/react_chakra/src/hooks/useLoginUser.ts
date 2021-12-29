import { useContext } from "react";

import { LoginUserContext, LoginUserContextType } from "../providers/LoginUserProvidrs";

export const useLoginUser = (): LoginUserContextType => useContext(LoginUserContext)