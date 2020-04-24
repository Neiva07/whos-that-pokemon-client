import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/Auth";
import {
  View,
  ActivityIndicator,
  StatusBar,
  ImageBackground,
} from "react-native";

const Index = (props) => {
  const {
    action: { checkLogin, silentLogin },
  } = useContext(AuthContext);

  const redirect = async () => {
    props.navigation.navigate((await silentLogin()) ? "App" : "Auth");
  };

  useEffect(() => {
    redirect();
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/pikachu-lollipop.jpg")}
      style={{ width: "100%", height: "100%", flex: 1 }}
    >
      <View>
        <StatusBar barStyle="default" />
      </View>
    </ImageBackground>
  );
};

export default Index;
