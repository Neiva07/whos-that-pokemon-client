import { createAppContainer, createSwitchNavigator } from "react-navigation";

import SignIn from "./pages/SignIn";
import AuthLoadingScreen from "./pages/AuthLoading";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Game from "./pages/Game";
import Friends from "./pages/Friends";
import Profile from "./pages/Profile";
import Ranking from "./pages/Ranking";

const MainApp = createAppContainer(
  createBottomTabNavigator({
    Play: Game,
    Friends,
    Ranking,
    Profile
  })
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
