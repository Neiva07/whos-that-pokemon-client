import React from "react";
import {
  GoogleSignin,
  statusCodes
} from "@react-native-community/google-signin";

const defaultState = {
  userData: {},
  isLogin: false
};

export const AuthContext = React.createContext({
  state: { ...defaultState },
  action: { checkLogin: async () => false, login: async () => {} }
});

export class AuthProvider extends React.Component {
  state = { ...defaultState };

  login = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userData: { ...userInfo }, isLogin: true });
      alert(`context worked: ${userInfo.user.email}`);
    } catch (error) {
      this.setState({ userData: {}, isLogin: false });
      console.log("error catched");
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  checkLogin = async () => {
    const isLogin = await GoogleSignin.isSignedIn();
    this.setState({ isLogin });

    return isLogin;
  };

  render() {
    const value = {
      state: { ...this.state },
      action: {
        login: this.login,
        checkLogin: this.checkLogin
      }
    };
    return <AuthContext.Provider value={value} {...this.props} />;
  }
}
