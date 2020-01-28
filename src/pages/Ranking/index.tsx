import React from "react";
import { View } from "react-native";
import { FriendsRanking } from "./friendsRanking";
const Index = props => {
  return (
    <View style={{ flex: 1 }}>
      <FriendsRanking {...props} />
    </View>
  );
};

export default Index;
