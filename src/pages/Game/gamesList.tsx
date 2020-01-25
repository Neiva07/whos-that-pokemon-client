import React from "react";
import { View, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
// import { User } from "@react-native-community/google-signin";

export const list = [
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Gen: 1, 3, 5"
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Gen: 1, 3, 5"
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Gen: 1, 3, 5"
  }
];
interface Data {
  users: User[];
}
interface User {
  name: string;
  avatar_url: string;
  subtitle: string;
}

export const GamesList = (data: Data) => {
  const handleLoadGame = () => {
    //change to game page
  };
  const renderItem = ({ item }: { item: User }) => {
    console.log(item);
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
        data={data.users}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={handleMoreLoad}
        onEndReachedThreshold={0}
      />
    </View>
  );
};
