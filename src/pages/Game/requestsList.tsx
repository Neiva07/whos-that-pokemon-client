import React from "react";
import { View } from "react-native";
import { GamesList, list } from "./gamesList";

export const RequestsList = () => {
  return (
    <View style={{ flex: 1 }}>
      <GamesList users={list} />
    </View>
  );
};
