import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { UsersList } from "../../util/Components/usersList";
import { SearchBar } from "react-native-elements";
import { FriendsContext } from "../../context/Friends";

export const FriendsRanking = props => {
  const {
    state: { friends },
    action: { getAllFriends }
  } = useContext(FriendsContext);

  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllFriends();
  }, []);

  const updateSearch = (text: string) => {
    setSearch(text);
  };

  const handleGameLog = () => {
    props.navigation.navigate("GameLog");
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

      <UsersList users={friends} {...props} handleSelectUser={handleGameLog} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
