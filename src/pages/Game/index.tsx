import React from "react";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { NewGame } from "./newGame";
import { OpenGame } from "./openGame";
const GameTabs = createMaterialTopTabNavigator(
  {
    NewGame: {
      screen: NewGame,
      navigationOptions: {
        title: "New Game"
      }
    },
    OpenGame: {
      screen: OpenGame,
      navigationOptions: {
        title: "Open Game"
      }
    }
  },
  {
    initialRouteName: "NewGame",
    tabBarOptions: { style: { backgroundColor: "#D94230" } }
  }
);

export default GameTabs;
