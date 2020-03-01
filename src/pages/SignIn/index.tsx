// import statusCodes along with GoogleSignin
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton
} from "@react-native-community/google-signin";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/Auth";
import { StyleSheet, View } from "react-native";

// Somewhere in your code
const Index = props => {
  const {
    action: { login }
  } = useContext(AuthContext);

  const signIn = async () => {
    await login();
    props.navigation.navigate("App");
  };

  return (
    <View style={styles.container}>
      <GoogleSigninButton
        style={{ width: 208, height: 60 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={signIn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default Index;
