import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text>Ranking</Text>
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
