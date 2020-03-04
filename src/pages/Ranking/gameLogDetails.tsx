import React from "react";
import { View, StyleSheet } from "react-native";
import { GamesList } from "../../util/Components/gamesList";
import { Game } from "../../context/types";

export const GameLogDetails = props => {
  return (
    <View style={styles.container}>
      <GamesList users={[] as Game[]} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
