import React from "react";
import { Friendship } from "./types";
import { AuthContext, AuthState } from "./Auth";
interface IContext {
  state: FriendsState;
  action: {
    getAllFriends: () => Promise<boolean>;
  };
}
interface FriendsState {
  friends: Friendship[];
  requests: Friendship[];
  loading: boolean;
}

export const FriendsContext = React.createContext({} as IContext);
export class FriendsProvider extends React.PureComponent<void, FriendsState> {
  static contextType = AuthContext;
  context!: React.ContextType<typeof AuthContext>;

  state = {
    friends: [] as Friendship[],
    requests: [] as Friendship[],
    loading: false
  };

  getAllFriends = async () => {
    const userId = this.context.state.user.userData.id;
    this.setState({ loading: true });
    try {
      const url = `/api/users/${userId}/friendship`;
      const response = await this.context.action.request("GET", url);
      console.log(response);
      if (response.status) {
        const friends = [] as Friendship[];
        const requests = [] as Friendship[];
        for (let friendship of response.friendships) {
          if (friendship.friendshipStatus === 2) {
            friends.push(friendship);
          } else if (friendship.friendshipStatus === 1) {
            requests.push(friendship);
          }
        }
        this.setState({ friends, requests, loading: false });
        return true;
      }
    } catch (err) {
      console.log(err);
      this.setState({ loading: false });
      return false;
    }
  };

  render() {
    const value = {
      state: { ...this.state },
      action: {
        getAllFriends: this.getAllFriends
      }
    };
    return <FriendsContext.Provider value={value} {...this.props} />;
  }
}
