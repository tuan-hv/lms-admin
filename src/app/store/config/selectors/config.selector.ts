import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/appState";
import { IConfigState } from "src/app/store/config/config.model";

export const getConfigState = (state: AppState) => state.config;

export const getConfig = createSelector(
  getConfigState,
  (state: IConfigState) => state
);