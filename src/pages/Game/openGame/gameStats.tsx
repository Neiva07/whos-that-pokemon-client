import React, { useContext, useEffect, useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { AuthContext } from "../../../context/Auth";
import { NavigationContainerProps } from "react-navigation";
import { material, materialColors } from "react-native-typography";
import { Game } from "../../../context/types";
import { GamesContext } from "../../../context/Games";

interface GameStatsProps extends NavigationContainerProps {}

export const GameStats: React.FC<GameStatsProps> = props => {
  const {
    state: { user }
  } = useContext(AuthContext);
  const {
    action: { getGame },
    state: { game }
  } = useContext(GamesContext);
  const gameId: string = props.navigation.getParam("gameId");

  useEffect(() => {
    getGame(gameId);
  }, []);

  return (
    <View>
      <View>
        <View>
          <Image
            source={{
              uri: user.userData.photo
            }}
            style={styles.image}
            resizeMode="center"
          />
          <Text style={styles.score}>{}</Text>
        </View>
        <Image
          source={{
            uri: game.photo
          }}
          style={styles.image}
          resizeMode="center"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {},
  score: { ...material.headlineObject, color: materialColors.blackTertiary }
});
