import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { FriendsList } from "./friendsList";
import { RequestsList } from "./requestsList";

const topFriendNavigationBar = createMaterialTopTabNavigator({
  Friends: FriendsList,
  Requests: RequestsList
});

export default topFriendNavigationBar;
