import React from "react";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { MainPage as NewGame, MyModals } from "./newGame/index";
import { OpenGame } from "./openGame";
import { createStackNavigator } from "react-navigation-stack";
const MainGamePage = createMaterialTopTabNavigator(
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

const GameTabs = createStackNavigator(
  {
    MainGamePage,
    MyModals
  },
  {
    headerMode: "none",
    mode: "modal"
  }
);

export default GameTabs;
