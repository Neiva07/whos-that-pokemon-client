import React from "react";
import { View } from "react-native";
import { GamesList, list } from "../gamesList";

export const RequestsList = props => {
  return (
    <View style={{ flex: 1 }}>
      <GamesList users={list} {...props} />
    </View>
  );
};
