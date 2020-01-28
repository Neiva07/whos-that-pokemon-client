import React from "react";
import { View, StyleSheet } from "react-native";
import { GamesList, list } from "../Game/gamesList";
export const RequestsList = props => {
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