// import statusCodes along with GoogleSignin
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-community/google-signin';
import React, { useState } from "react";

// Somewhere in your code
const Index = () => {

    const [userData, setUserData] = useState()


    const signIn = async () => {
        try {
          console.log('ol')
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          setUserData({...userInfo})
          alert(`worked : ${userInfo.user.email}`)

        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            alert(`not worked : cancelled`)
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            alert(`not worked : in progress`)
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            alert(`not worked : play services not available`)
            // play services not available or outdated
          } else {
            alert(`not worked : don't know, ${error}`)
            // some other error happened
          }
        }
      };

      return (
        <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn} 
        />
      )
}
export default Index
