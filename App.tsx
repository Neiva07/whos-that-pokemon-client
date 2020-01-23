import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { GoogleSignin } from "@react-native-community/google-signin";
import { AuthProvider } from "./src/context/Auth";
import Router from "./src/routes";

export default function App() {
  GoogleSignin.configure();
  return (
    <ImageBackground
      source={require("./src/assets/wallpaper-pokemon-mew.jpeg")}
      style={{ width: "100%", height: "100%", flex: 1 }}
    >
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
