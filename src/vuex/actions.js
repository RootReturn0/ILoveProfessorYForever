import { userUrl } from "./getters";

export const setAccount = ({commit},userAccount) => {
    commit("Account",userAccount)
  }

  export const setToken = ({commit},userToken) => {
    commit("Token",userToken)
  }

  export const setUrl =({commit},userUrl) =>{
    commit("UserUrl",userUrl)
  }
