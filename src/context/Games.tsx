import React from "react";
import { Game, GameInput } from "./types";
import { AuthContext, AuthState } from "./Auth";
interface IContext {
  state: GamesState;
  action: {
    getAllGames: () => Promise<boolean>;
    getGame: (gameId: string) => Promise<boolean>;
    createGame: (game: GameInput, friendId: number) => Promise<boolean>;
  };
}
interface GamesState {
  openGames: Game[];
  requests: Game[];
  loading: boolean;
  game: Game;
}

export const GamesContext = React.createContext({} as IContext);
export class GamesProvider extends React.PureComponent<void, GamesState> {
  static contextType = AuthContext;
  context!: React.ContextType<typeof AuthContext>;

  state = {
    openGames: [] as Game[],
    requests: [] as Game[],
    loading: false,
    game: {} as Game
  };

  createGame = async (game: GameInput, friendId: number) => {
    const userId = this.context.state.user.userData.id;
    this.setState({ loading: true });
    try {
      const url = `/api/users/${userId}/games/${friendId}`;
      const response = await this.context.action.request("POST", url, game);
      if (response.status) {
        const newGame = response.game;
        this.setState(prevState => {
          return {
            loading: false,
            openGames: { ...prevState.openGames, newGame },
            ...prevState
          };
        });
      }
      return true;
    } catch (err) {
      console.log(err);
      this.setState({ loading: false });
      return false;
    }
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
  getGame = async (gameId: string) => {
    this.setState({ loading: true });
    try {
      const url = `/api/games/${gameId}`;
      const response = await this.context.action.request("GET", url);
      if (response.satatus) {
        const { game } = response;
        this.setState({ game, loading: false });
        return true;
      }
      this.setState({ game: {} as Game, loading: false });
    } catch (err) {
      console.log(err);
      this.setState({ loading: false });
    }
  };

  render() {
    const value = {
      state: { ...this.state },
      action: {
        getAllGames: this.getAllGames,
        getGame: this.getGame,
        createGame: this.createGame
      }
    };
    return <GamesContext.Provider value={value} {...this.props} />;
  }
}
