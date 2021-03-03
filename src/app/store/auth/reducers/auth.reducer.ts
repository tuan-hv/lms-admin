import { createReducer, Action, on } from "@ngrx/store";
import {
  signInSucess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  setUserInfo
} from "../actions/auth.action";
import { IAuthState, IUserInfo } from "../auth.model";

export const initState: IAuthState = {
  isSignIn    : false,
  token       : '',
  refreshToken: '',
  user: {
    username   : '',
    displayName: '',
    photoURL   : '',
    phoneNumber: 0,
  }
};

export const registerAuthReducer = createReducer(
  initState,
  on(signInSucess, (state: IAuthState, user) => {
    return {
      ...state,
      isSignIn: true,
    }
  }),
  on(signInFailure, state => ({...state, isSignIn: false})),
  on(signOutSuccess, (state: IAuthState) => ({
    ...state,
    isSignIn: false,
    user: {}
  })),
  on(signOutFailure, state => ({...state, isSignIn: true})),
  on(setUserInfo, (state, user: IUserInfo) => {
    return {
      ...state,
      user: {
        username   : user.username,
        displayName: user.displayName,
        phoneNumber: user.phoneNumber,
        photoURL   : user.photoURL,
      }
    }
  })
)

export function authReducer(state: IAuthState | undefined, action: Action) {
  return registerAuthReducer(state, action);
}