import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MainProfile as Profile } from "./mainProfile";

const Index = props => {
  return (
    <View style={{ flex: 1 }}>
      <Profile {...props} />
    </View>
  );
};

export default Index;
