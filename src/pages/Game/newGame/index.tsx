import { createAppContainer, createSwitchNavigator } from "react-navigation";
import React from "react";
import { NewGame as MainPageScreen } from "./mainPage";
import { createStackNavigator } from "react-navigation-stack";
import { PlayWithFriend as PlayWithFriendScreen } from "./playWithFriend";
import { RequestsList } from "./requestsList";
import { SearchFriend as SearchFriendScreen } from "../../Friends/searchFriend";
import { FriendProfile as FriendProfileScreen } from "../../Friends/friendProfile";
import { GameSettings as GameSettingsScreen } from "../gameSettings";

const PlayWithFriend = createStackNavigator({
  FriendsList: PlayWithFriendScreen,
  NewFriend: SearchFriendScreen,
  FriendProfile: FriendProfileScreen
});

const MyModals = createSwitchNavigator({
  PlayWithFriend,
  Requests: {
    screen: RequestsList
  },
  GameSettings: GameSettingsScreen
});

export const MainPage = createStackNavigator(
  {
    Main: {
      screen: MainPageScreen
    },
    Modals: MyModals
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
