import React from "react";
import { UserProfile } from "../../util/Components/userProfile";
import { View } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { Friendship } from "../../context/types";

interface FriendProfileProps extends NavigationStackScreenProps {}

export const FriendProfile: React.FC<FriendProfileProps> = props => {
  const friend: Friendship = props.navigation.getParam("user");

  return (
    <View style={{ flex: 1 }}>
      <UserProfile user={friend} {...props} />
    </View>
  );
};
