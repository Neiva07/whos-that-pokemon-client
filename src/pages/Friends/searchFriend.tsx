import React from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export const SearchFriend = props => {
  const handleSearchEmail = () => {
    props.navigation.navigate("FriendProfile");
  };

  return (
    <View style={{ flex: 1 }}>
      <Input
        placeholder="Type an email to look up for a friend"
        leftIcon={<Icon name="envelope" size={24} color="black" />}
        autoCompleteType={"email"}
        keyboardType={"email-address"}
        onSubmitEditing={handleSearchEmail}
      />
    </View>
  );
};
