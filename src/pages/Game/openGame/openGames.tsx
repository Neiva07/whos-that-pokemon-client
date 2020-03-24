import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { GamesList } from "../../../util/Components/gamesList";
import { GamesContext } from "../../../context/Games";
import { NavigationStackScreenProps } from "react-navigation-stack";

interface OpenGameProps extends NavigationStackScreenProps {}

export const OpenGame: React.FC<OpenGameProps> = props => {
  const {
    state: { openGames },
    action: { getAllGames }
  } = useContext(GamesContext);

  useEffect(() => {
    getAllGames();
  }, []);

  return (
    <View style={styles.container}>
      <GamesList games={openGames} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
