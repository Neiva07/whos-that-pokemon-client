import React from "react";
import { ListItem } from "react-native-elements";
import { NavigationStackProp } from "react-navigation-stack";
import { View, FlatList } from "react-native";

interface User {
  name: string;
  avatar_url: string;
  subtitle: string;
}
interface Props {
  users: User[];
  navigation: NavigationStackProp;
}

export const UsersList = (props: Props) => {
  const { navigation } = props;
  const { users } = props;

  const handleLoadGame = () => {
    navigation.navigate("GameSettings");
  };
  const renderItem = ({ item }: { item: User }) => {
    return (
      <ListItem
        leftAvatar={{ source: { uri: item.avatar_url } }}
        title={item.name}
        subtitle={item.subtitle}
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
    <View style={{ flex: 1 }}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={handleMoreLoad}
        onEndReachedThreshold={0}
      />
    </View>
  );
};
