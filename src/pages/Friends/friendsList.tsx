import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { SearchBar } from "react-native-elements";
import { UsersList } from "../../util/Components/usersList";
import { FriendsContext } from "../../context/Friends";

export const FriendsList = props => {
  const {
    state: { friends, loading },
    action: { getAllFriends }
  } = useContext(FriendsContext);
  const [search, setSearch] = useState("");

  const updateSearch = (text: string) => {
    setSearch(text);
  };

  useEffect(() => {
    getAllFriends();
  }, []);

  useEffect(() => {
    console.log(friends);
  }, [friends]);

  const handleClickFriend = () => {
    props.navigation.navigate("GameSettings");
  };

  return loading ? (
    <ActivityIndicator />
  ) : (
    <View style={styles.container}>
      <SearchBar
        placeholder="Filter"
        onChangeText={updateSearch}
        value={search}
        round={true}
        platform={"android"}
      />

      <UsersList users={friends} {...props} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
