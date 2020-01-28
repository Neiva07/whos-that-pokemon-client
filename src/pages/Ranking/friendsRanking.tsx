import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { list } from "../Game/gamesList";
import { UsersList } from "../../util/Components/usersList";
import { SearchBar } from "react-native-elements";

export const FriendsRanking = props => {
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

      <UsersList users={list} {...props} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
