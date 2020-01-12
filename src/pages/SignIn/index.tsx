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
const Index = () => {
  const {
    action: { login }
  } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={login}
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
