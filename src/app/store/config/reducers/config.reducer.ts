import { createReducer, Action, on } from "@ngrx/store";
import { IBreadscrumb } from "src/app/modules/share/models/breadscrumb";
import {
  toggleSidebar,
  showSpinner,
  hideSpinner,
  setLanguage,
  setBreadscrumbs
} from "../actions/config.action";
import { IConfigState, ILanguage } from "../config.model";

export const initState: IConfigState = {
  isSidebarCollapsed: false,
  spinner: false,
  language: "en",
  breadscrumbs: []
};

export const registerConfigReducer = createReducer(
  initState,
  on(toggleSidebar, (state: IConfigState) => ({
    ...state,
    isSidebarCollapsed: !state.isSidebarCollapsed
  })),
  on(showSpinner, (state: IConfigState) => ({
    ...state,
    spinner: true
  })),
  on(hideSpinner, (state: IConfigState) => ({
    ...state,
    spinner: false
  })),
  on(setLanguage, (state: IConfigState, payload: ILanguage) => {
    return {
      ...state,
      language: payload.language
    }
  }),
  on(setBreadscrumbs, (state: IConfigState, payload) => {
    return {
      ...state,
      breadscrumbs: payload.breadscrumbs
    }
  })
)

export function configReducer(state: IConfigState | undefined, action: Action) {
  return registerConfigReducer(state, action);
}