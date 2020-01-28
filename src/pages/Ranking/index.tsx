import { createStackNavigator } from "react-navigation-stack";
import { FriendsRanking } from "./friendsRanking";
import { GameLogDetails } from "./gameLogDetails";

const RankingRouting = createStackNavigator(
  {
    FriendsGameLog: FriendsRanking,
    GameLog: {
      screen: GameLogDetails,
      navigationOptions: {
        title: "GameLog"
      }
    }
  },
  {
    mode: "card",
    headerMode: "none"
  }
);

export default RankingRouting;
