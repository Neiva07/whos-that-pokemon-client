import { User as GoogleUser } from "@react-native-community/google-signin";

export interface Token {
  idToken: string;
  accessToken: string;
}

export interface UserData {
  id: number;
  givenName: string;
  familyName: string;
  photo: string;
  name: string;
  email: string;
  googleID: string;
}

export interface UserAccount {
  userData: UserData;
  scopes: GoogleUser["scopes"];
  idToken: GoogleUser["idToken"];
  serverAuthCode: GoogleUser["serverAuthCode"];
}

export interface Friendship {
  familyName: string;
  givenName: string;
  friendshipStatus: 1 | 2 | 3;
  friendTotalScore: number;
  userTotalScore: number;
  friendId: number;
  name: string;
  photo: string;
}

export interface Game {
  givenName: string;
  familyName: string;
  name: string;
  email: string;
  photo: string;
  userScore: number;
  friendScore: number;
  friendID: number;
  userID: number;
  createdAt: Date;
  timer: number;
  status: 1 | 2;
}
