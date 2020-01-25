import React from "react";
import { View, StyleSheet } from "react-native";
import { GamesList, list } from "./gamesList";
export const OpenGame = () => {
  return (
    <View style={styles.container}>
      <GamesList users={list} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
