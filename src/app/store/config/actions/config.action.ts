import { createAction, props } from "@ngrx/store";
import { ILanguage } from '../config.model';
import { IBreadscrumb } from "src/app/modules/share/models/breadscrumb";

const TOGGLE_SIDEBAR   = '[Config] toggle sidebar';
const SHOW_SPINNER     = '[Config] show spinner';
const HIDE_SPINNER     = '[Config] hide spinner';
const SET_LANGUAGE     = '[Config] set language';
const SET_BREADSCRUMBS = '[Config] set breadscrumbs';

export const toggleSidebar   = createAction(TOGGLE_SIDEBAR);
export const showSpinner     = createAction(SHOW_SPINNER);
export const hideSpinner     = createAction(HIDE_SPINNER);
export const setLanguage     = createAction(SET_LANGUAGE, props<ILanguage>());
export const setBreadscrumbs = createAction(SET_BREADSCRUMBS, props<{breadscrumbs: IBreadscrumb[]}>());