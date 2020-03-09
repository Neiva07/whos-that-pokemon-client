import React, { useCallback } from "react";
import { ListItem, Avatar } from "react-native-elements";
import { NavigationStackScreenProps } from "react-navigation-stack";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  GestureResponderEvent
} from "react-native";
import { Friendship } from "../../context/types";

interface UserListProps extends NavigationStackScreenProps {
  users: Friendship[];
  handleSelectUser?: (friend: Friendship) => void;
}

export const UsersList: React.FC<UserListProps> = props => {
  const { navigation } = props;
  const { users } = props;

  const handleLoadGame = () => {
    navigation.navigate("GameSettings");
  };

  const renderItem = ({ item }: { item: Friendship }) => {
    const handleSelection = () => props.handleSelectUser(item);
    const names = item.name.split(" ");
    const initials = names.map(name => name[0]);
    const initialsString = initials.join("");

    const avatar = item.photo ? (
      { source: { uri: item.photo } }
    ) : (
      <Avatar size="small" rounded title={initialsString} activeOpacity={0.7} />
    );

    const friendScore = item.friendTotalScore || 0;
    const myScore = item.userTotalScore || 0;

    return (
      <ListItem
        leftAvatar={avatar}
        title={item.name}
        subtitle={`${myScore}x${friendScore}`}
        bottomDivider
        chevron
        onPress={props.handleSelectUser ? handleSelection : handleLoadGame}
      />
    );
  };

  const handleMoreLoad = () => {
    //load more data
  };
  const keyExtractor = (item, index) => index.toString();
  return (
    <View style={{ flex: 1 }}>
      {users.length > 0 ? (
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          onEndReached={handleMoreLoad}
          onEndReachedThreshold={0}
        />
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.text}> No Friends :(</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    textAlign: "center"
  },
  textContainer: {
    justifyContent: "center",
    flexDirection: "column",
    flex: 1
  }
});
