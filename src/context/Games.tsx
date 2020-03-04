import React from "react";
import { Game } from "./types";
import { AuthContext, AuthState } from "./Auth";
interface IContext {
  state: GamesState;
  action: {
    getAllGames: () => Promise<boolean>;
  };
}
interface GamesState {
  openGames: Game[];
  requests: Game[];
  loading: boolean;
}

export const GamesContext = React.createContext({} as IContext);
export class GamesProvider extends React.PureComponent<void, GamesState> {
  static contextType = AuthContext;
  context!: React.ContextType<typeof AuthContext>;

  state = {
    openGames: [] as Game[],
    requests: [] as Game[],
    loading: false
  };

  getAllGames = async () => {
    const userId = this.context.state.user.userData.id;
    this.setState({ loading: true });
    try {
      const url = `/api/users/${userId}/games`;
      const response = await this.context.action.request("GET", url);
      console.log(response);
      if (response.status) {
        const openGames = [] as Game[];
        const requests = [] as Game[];
        for (let game of response.games as Game[]) {
          if (game.status === 2) {
            openGames.push(game);
          } else if (game.status === 1) {
            requests.push(game);
          }
        }
        this.setState({ openGames, requests, loading: false });
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
        getAllGames: this.getAllGames
      }
    };
    return <GamesContext.Provider value={value} {...this.props} />;
  }
}
