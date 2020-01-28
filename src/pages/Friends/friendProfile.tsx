import React from "react";
import { UserProfile } from "../../util/Components/userProfile";
import { View } from "react-native";

export const FriendProfile = props => {
  return (
    <View style={{ flex: 1 }}>
      <UserProfile />
    </View>
  );
};
