export interface IUser {
  username: string;
  password: string;
  sex?    : number;
}

export interface IUserRefreshToken {
  refreshToken: string;
}

export interface IAuthState {
  isSignIn    : boolean;
  refreshToken: string;
  token       : string;
  user        : IUserInfo;
}

export interface IUserInfo {
  username?   : string;
  displayName?: string;
  phoneNumber?: number;
  photoURL?   : string;
}