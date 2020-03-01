import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/Auth";
import { View, ActivityIndicator, StatusBar } from "react-native";

const Index = props => {
  const {
    action: { checkLogin, silentLogin }
  } = useContext(AuthContext);

  const redirect = async () => {
    props.navigation.navigate((await silentLogin()) ? "App" : "Auth");
  };

  useEffect(() => {
    redirect();
  }, []);

  return (
    <View>
      <ActivityIndicator />

      <StatusBar barStyle="default" />
    </View>
  );
};

export default Index;
