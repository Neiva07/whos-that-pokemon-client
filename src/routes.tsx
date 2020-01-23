import { createAppContainer, createSwitchNavigator } from "react-navigation";
import React from "react";
import SignIn from "./pages/SignIn";
import AuthLoadingScreen from "./pages/AuthLoading";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Game from "./pages/Game";
import Friends from "./pages/Friends";
import Profile from "./pages/Profile";
import Ranking from "./pages/Ranking";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "./CustomIcon";
import Icons from "react-native-vector-icons/FontAwesome";

const MainApp = createAppContainer(
  createMaterialBottomTabNavigator(
    {
      Battle: {
        screen: Game,
        navigationOptions: {
          tabBarIcon: ({ focused, horizontal, tintColor }) => (
            <Icon name="star" size={24} />
          )
        }
      },
      Friends: {
        screen: Friends,
        navigationOptions: {
          tabBarIcon: ({ focused, horizontal, tintColor }) => (
            <Icon name="pokedex" size={20} />
          )
        }
      },
      Ranking: {
        screen: Ranking,
        navigationOptions: {
          tabBarIcon: ({ focused, horizontal, tintColor }) => (
            <Icon name="crown" size={20} />
          )
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          tabBarIcon: ({ focused, horizontal, tintColor }) => (
            <Icon name="pokemon-trainer" size={20} />
          )
        }
      }
    },
    {
      initialRouteName: "Battle",
      activeColor: "#163C73",
      inactiveColor: "#3e2465",
      labeled: true,
      barStyle: { backgroundColor: "#FBCB05" }
    }
  )
);
const Router = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: SignIn,
      App: MainApp
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);

export default Router;
