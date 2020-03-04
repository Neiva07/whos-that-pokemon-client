import React from "react";
import {
  GoogleSignin,
  statusCodes,
  User as GoogleUser
} from "@react-native-community/google-signin";
import { HOST } from "react-native-dotenv";
import { Token, UserAccount, UserData } from "./types";

interface IContext {
  state: AuthState;
  action: {
    checkLogin(): Promise<boolean>;
    login(): Promise<void>;
    request(
      method: "GET" | "POST" | "PUT" | "DELETE",
      url: string,
      data?: any
    ): Promise<any>;
    silentLogin(): Promise<boolean>;
    signOut(): Promise<void>;
  };
}
export interface AuthState {
  tokens: Token;
  user: UserAccount;
  isLogin: boolean;
}

export const AuthContext = React.createContext({} as IContext);

export class AuthProvider extends React.PureComponent<void, AuthState> {
  state = {
    user: {} as UserAccount,
    isLogin: false,
    tokens: {
      idToken: "",
      accessToken: ""
    }
  };

  login = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const data = { authCode: userInfo.serverAuthCode };
      this.setState({
        user: {
          scopes: userInfo.scopes,
          idToken: userInfo.idToken,
          serverAuthCode: userInfo.serverAuthCode,
          userData: {} as UserData
        }
      });
      const response = await this._request()("POST", "/api/users/signin", data);
      if (response.status) {
        this.setState({
          user: {
            ...this.state.user,
            userData: { ...(response.user as UserData) }
          },
          isLogin: true
        });
        await this._handleSignInResult();
        return;
      } else {
        console.log(response);
      }
    } catch (error) {
      this.setState({ user: {} as UserAccount, isLogin: false });
      console.log("error catched");
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("SignIn has been cancelled");
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("SignIn is in progress already");
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("SignIn play services not available");
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ user: {} as UserAccount });
    } catch (error) {
      console.error(error);
    }
  };

  checkLogin = async () => {
    const isLogin = await GoogleSignin.isSignedIn();
    this.setState({ isLogin });
    return isLogin;
  };

  silentLogin = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      const data = { authCode: userInfo.serverAuthCode };
      const response = await this._request()("POST", "/api/users/signin", data);
      if (response.status) {
        this.setState({
          user: { userData: { ...response.user }, ...this.state.user },
          isLogin: true
        });
        await this._handleSignInResult();
        return;
      } else {
        console.log(response);
        return;
      }
      await this._handleSignInResult();
      return true;
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
      } else {
        // some other error
      }
      return false;
    }
  };
  _handleSignInResult = async () => {
    try {
      const tokens = await GoogleSignin.getTokens();
      this.setState({ tokens });
      //send to backend
    } catch (err) {
      console.log(err);
    }
  };

  _request = () => {
    const serverAuthCode = this.state.user && this.state.user.serverAuthCode;
    const host = HOST;

    return async (
      method: "GET" | "POST" | "PUT" | "DELETE",
      url: string,
      data?: any
    ): Promise<any> => {
      const options: RequestInit = {
        method: method
      };
      const header = new Headers();
      if (serverAuthCode)
        header.append("Authorization", `Bearer ${serverAuthCode}`);

      const route = new URL(url, host);

      if (method === "GET" && data) {
        Object.keys(data).forEach(key =>
          route.searchParams.append(key, data[key])
        );
      } else if (data && data instanceof FormData) {
        options["body"] = data;
      } else {
        options["body"] = JSON.stringify(data);
        header.append("Content-Type", "application/json");
      }

      options["headers"] = header;
      console.log(route.href, options);
      try {
        const response = await fetch(route.href, options).then(res =>
          res.json()
        );
        return response;
      } catch (err) {
        console.log(err);
      }
    };
  };

  render() {
    const value = {
      state: { ...this.state },
      action: {
        login: this.login,
        signOut: this.signOut,
        silentLogin: this.silentLogin,
        checkLogin: this.checkLogin,
        request: this._request()
      }
    };
    return <AuthContext.Provider value={value} {...this.props} />;
  }
}
