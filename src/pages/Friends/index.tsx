import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { FriendsList } from "./friendsList";
import { RequestsList } from "./requestsList";
import { FriendProfile } from "./friendProfile";

const FriendsScreen = createStackNavigator(
  {
    FriendsList,
    FriendProfile
  },
  {
    headerMode: "none",
    mode: "card"
  }
);
const topFriendNavigationBar = createMaterialTopTabNavigator({
  Friends: FriendsScreen,
  Requests: RequestsList
});

export default topFriendNavigationBar;
