import React from "react";
import { View } from "react-native";
import { UserProfile } from "../../util/Components/userProfile";

export const MainProfile = props => {
  return (
    <View style={{ flex: 1 }}>
      <UserProfile {...props} />
    </View>
  );
};
