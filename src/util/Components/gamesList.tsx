import React from "react";
import { ListItem } from "react-native-elements";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { Game } from "../../context/types";
import { Avatar } from "react-native-elements";
interface GameListProps extends NavigationStackScreenProps {
  games: Game[];
  handleSelectGame?: () => void;
}

export const GamesList: React.FC<GameListProps> = props => {
  const { navigation } = props;
  const { games } = props;

  const handleLoadGame = () => {};
  const renderItem = ({ item }: { item: Game }) => {
    const names = item.name.split(" ");

    const initials = names.map(name => name[0]);

    const initialsString = initials.join("");

    const avatar = item.photo ? (
      { source: { uri: item.photo } }
    ) : (
      <Avatar size="small" rounded title={initialsString} activeOpacity={0.7} />
    );

    const friendScore = item.friendScore || 0;
    const userScore = item.userScore || 0;

    return (
      <ListItem
        leftAvatar={avatar}
        title={item.name}
        subtitle={`${userScore} x ${friendScore}`}
        bottomDivider
        chevron
        onPress={handleLoadGame}
      />
    );
  };

  const handleMoreLoad = () => {
    //load more data
  };
  const keyExtractor = (item, index) => index.toString();
  return (
    <View style={styles.container}>
      {games.length > 0 ? (
        <FlatList
          data={games}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          onEndReached={handleMoreLoad}
          onEndReachedThreshold={0}
        />
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.text}>No games :(</Text>
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
