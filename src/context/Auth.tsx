import React from "react";
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

export const AuthContext = React.createContext({});

export class AuthProvider extends React.Component {

    state = {
        userData : {},
        isLogin : false,
    }

    login = async () => {

        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.setState({userData: {...userInfo}})
          } catch (error) {
              console.log("ola")
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
    }

    render() {
        const value = {
            state : {...this.state},
            action : {
                login : this.login
            }
        }
        return <AuthContext.Provider value={value} {...this.props} />;
    }
}