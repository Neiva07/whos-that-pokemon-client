import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { GamesList, list } from "../Game/gamesList";
import { SearchBar } from "react-native-elements";

export const FriendsList = props => {
  const [search, setSearch] = useState("");

  const updateSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Filter"
        onChangeText={updateSearch}
        value={search}
        round={true}
        platform={"android"}
      />

      <GamesList users={list} {...props} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
