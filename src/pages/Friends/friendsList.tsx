import React, { useState, useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  GestureResponderEvent
} from "react-native";
import { SearchBar } from "react-native-elements";
import { UsersList } from "../../util/Components/usersList";
import { FriendsContext } from "../../context/Friends";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { Friendship } from "../../context/types";

interface FriendsProps extends NavigationStackScreenProps {}

export const FriendsList: React.FC<FriendsProps> = props => {
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

  const handleClickFriend = (friend: Friendship) => {
    console.log("reached here");
    props.navigation.navigate("FriendProfile", {
      user: friend
    });
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

      <UsersList
        users={friends}
        {...props}
        handleSelectUser={handleClickFriend}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
