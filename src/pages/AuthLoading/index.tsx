import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/Auth";
import { View, ActivityIndicator, StatusBar } from "react-native";

const Index = props => {
  const {
    action: { checkLogin }
  } = useContext(AuthContext);

  const redirect = async () => {
    props.navigation.navigate((await checkLogin()) ? "App" : "Auth");
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
