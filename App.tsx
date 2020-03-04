import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { GoogleSignin } from "@react-native-community/google-signin";
import { AuthProvider } from "./src/context/Auth";
import Router from "./src/routes";
import { GOOGLE_CLIENT_ID } from "react-native-dotenv";
import { FriendsProvider } from "./src/context/Friends";
import { GamesProvider } from "./src/context/Games";

export default function App() {
  GoogleSignin.configure({
    webClientId: GOOGLE_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: "" // specifies a hosted domain restriction
    // forceConsentPrompt: true // [Android] if you want to show the authorization prompt at each login.
  });
  return (
    <ImageBackground
      source={require("./src/assets/wallpaper-pokemon-mew.jpeg")}
      style={{ width: "100%", height: "100%", flex: 1 }}
    >
      <AuthProvider>
        <FriendsProvider>
          <GamesProvider>
            <Router />
          </GamesProvider>
        </FriendsProvider>
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
