import { createAction, props } from "@ngrx/store";
import { IUser, IUserInfo } from "src/app/store/auth/auth.model";

export const SIGNIN_REQUEST = '[Auth] SignIn';
export const signInRequest = createAction(SIGNIN_REQUEST, props<IUser>());

export const SIGNIN_SUCCESS = '[Auth] SignIn Success';
export const signInSucess  = createAction(SIGNIN_SUCCESS);

export const SIGNIN_FAILURE = '[Auth] SignIn Failure';
export const signInFailure = createAction(SIGNIN_FAILURE);

export const SIGNOUT_REQUEST = '[Auth] SignOut';
export const signOutRequest = createAction(SIGNOUT_REQUEST);

export const SIGNOUT_SUCCESS = '[Auth] SignOut Success';
export const signOutSuccess = createAction(SIGNOUT_SUCCESS);

export const SIGNOUT_FAILURE = '[Auth] SignOut Failure';
export const signOutFailure = createAction(SIGNOUT_FAILURE);

export const SIGNUP_REQUEST = '[Auth] SignUp';
export const signUpRequest = createAction(SIGNUP_REQUEST, props<IUser>());

export const SIGNUP_SUCCESS = '[Auth] SignUp Success';
export const signUpSuccess = createAction(SIGNUP_SUCCESS, props<IUser>());

export const SIGNUP_FAILURE = '[Auth] SignUp Failure';
export const signUpFailure = createAction(SIGNUP_FAILURE);

export const SET_USER_INFO = '[Auth] Set User Info';
export const setUserInfo = createAction(SET_USER_INFO, props<IUserInfo>());

export const authAction = {
  SIGNIN_REQUEST,
  signInRequest,
  SIGNIN_SUCCESS,
  signInSucess,
  SIGNIN_FAILURE,
  signInFailure,
  SIGNOUT_REQUEST,
  signOutRequest,
  SIGNOUT_SUCCESS,
  signOutSuccess,
  SIGNOUT_FAILURE,
  signOutFailure,
  SIGNUP_REQUEST,
  signUpRequest,
  SIGNUP_SUCCESS,
  signUpSuccess,
  SIGNUP_FAILURE,
  signUpFailure,
  SET_USER_INFO,
  setUserInfo
}
