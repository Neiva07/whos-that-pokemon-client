import React from "react";
import { View, StyleSheet } from "react-native";
import { GamesList, list } from "../gamesList";
export const OpenGame = props => {
  console.log(`open game props`);
  console.log(props);
  return (
    <View style={styles.container}>
      <GamesList users={list} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
