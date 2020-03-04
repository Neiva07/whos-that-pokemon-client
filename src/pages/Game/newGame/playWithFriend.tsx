import React, { useContext, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Button, ListItem } from "react-native-elements";
import { SearchFriend } from "../../Friends/searchFriend";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { FriendsContext } from "../../../context/Friends";
import { UsersList } from "../../../util/Components/usersList";

interface PlayWithFriendsProps extends NavigationStackScreenProps {}

export const PlayWithFriend: React.FC<PlayWithFriendsProps> = props => {
  const {
    state: { friends },
    action: { getAllFriends }
  } = useContext(FriendsContext);

  useEffect(() => {
    getAllFriends();
  }, []);

  const handleNewFriend = () => {
    props.navigation.navigate("NewFriend");
  };
  const startGame = () => {
    props.navigation.navigate("GameSettings");
  };

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

      <UsersList users={friends} {...props} />
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
