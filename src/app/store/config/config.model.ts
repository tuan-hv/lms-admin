import { IBreadscrumb } from "src/app/modules/share/models/breadscrumb";

export interface IConfigState {
  isSidebarCollapsed: boolean;
  spinner: boolean;
  language: string;
  breadscrumbs: IBreadscrumb[]
}

export interface ILanguage {
  language: string
}