import React from "react";
import { OpenGame as OpenGamesScreen } from "./openGames";
import { GameStats } from "./gameStats";
import { createStackNavigator } from "react-navigation-stack";

export const OpenGame = createStackNavigator({
  OpenGamesScreen: {
    screen: OpenGamesScreen
  },
  GameStats: {
    screen: GameStats
  }
});
