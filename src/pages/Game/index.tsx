import React from "react";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { MainPage as NewGame } from "./newGame/index";
import { OpenGame } from "./openGame/openGame";
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
