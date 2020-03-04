import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { GamesList } from "../../../util/Components/gamesList";
import { GamesContext } from "../../../context/Games";
import { NavigationStackScreenProps } from "react-navigation-stack";
// import { BottomTabBarProps } from "react-navigation-tabs";

interface RequestListProps extends NavigationStackScreenProps {}

export const RequestsList: React.FC<RequestListProps> = props => {
  const {
    state: { requests },
    action: { getAllGames }
  } = useContext(GamesContext);

  useEffect(() => {
    getAllGames();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <GamesList games={requests} {...props} />
    </View>
  );
};
