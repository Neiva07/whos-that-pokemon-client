import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Button, ListItem } from "react-native-elements";
import { SearchFriendModal } from "../Friends/searchFriendModal";
import { list } from "./gamesList";
export const PlayWithFriend = () => {
  const handleNewFriend = () => {};
  const startGame = () => {};

  const friendsList = ({ item }) => (
    <ListItem
      leftAvatar={{ source: { uri: item.avatar_url } }}
      title={item.name}
      subtitle={item.subtitle}
      bottomDivider
      chevron
      onPress={startGame}
    />
  );

  const handleMoreLoad = () => {};

  const keyExtractor = (item, index) => index.toString();

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Button
          // type="outline"
          style={styles.container}
          onPress={handleNewFriend}
          title="Add a Friend"
          buttonStyle={styles.button}
        />
      </View>

      <FlatList
        renderItem={friendsList}
        data={list}
        keyExtractor={keyExtractor}
        onEndReached={handleMoreLoad}
        onEndReachedThreshold={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    backgroundColor: "#D94230",
    width: 200,
    marginBottom: 12,
    marginTop: 12,
    justifyContent: "center"
  }
});
