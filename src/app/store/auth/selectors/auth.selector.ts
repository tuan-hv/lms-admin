import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/appState";
import { IAuthState } from "src/app/store/auth/auth.model";

export const getSignInState = (state: AppState) => state.auth;

export const selectFeatureCount = createSelector(
  getSignInState,
  (state: IAuthState) => state.isSignIn
);