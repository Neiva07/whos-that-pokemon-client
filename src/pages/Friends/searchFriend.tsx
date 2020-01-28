import React, { useState } from "react";
import { View } from "react-native";
import { Input, SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export const SearchFriend = props => {
  const handleSearchEmail = () => {
    //handle error
    props.navigation.navigate("FriendProfile");
  };
  const [search, setSearch] = useState("");

  const updateSearch = (text: string) => {
    setSearch(text);
  };
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        placeholder="Type an email to search"
        onChangeText={updateSearch}
        value={search}
        round={true}
        platform={"android"}
        onSubmitEditing={handleSearchEmail}
      />
    </View>
  );
};
