export const Account = (state,userAccount) => {
    if (userAccount){
      state.account = userAccount;
      state.isLogin = true
    } else if (userAccount == null){
      //登出的时候，清空sessionStorage里的东西
      sessionStorage.setItem("account",null);
      sessionStorage.setItem("token","");
      state.account = null;
      state.isLogin = false;
      state.token = "";
    }
  }

  export const Token = (state,userToken) => {
    if (userToken) {
      state.token = true;
    } else {
      state.token = false;
    }
  }

  export const Url = (state,userUrl) => {
    if (userUrl){
      state.userUrl=userUrl;
    }else {
    }
  }