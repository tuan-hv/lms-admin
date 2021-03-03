import { Component, OnInit } from '@angular/core';
import { AppState } from "src/app/store/appState";
import { Store } from "@ngrx/store";
import { signOutRequest } from "src/app/store/auth/actions/auth.action";
import { toggleSidebar, setLanguage } from "src/app/store/config/actions/config.action";
import { IConfigState } from 'src/app/store/config/config.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isSignIn: boolean = false;
  appConfig: IConfigState;
  language: string;

  constructor(
    private store: Store<AppState>,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.store.select((state: AppState) => state).subscribe((appState: AppState) => {
      this.isSignIn = appState.auth.isSignIn;
      this.appConfig = appState.config;
      this.language = appState.config.language;
    });
  }

  toggleSidebar() {
    this.store.dispatch(toggleSidebar());
  }

  changeLanguage(lang: string) {
    // this.store.dispatch(setLanguage({
    //   language: lang
    // }));
    // this.translate.use(lang);
  }

  signOut() {
    this.store.dispatch(signOutRequest());
  }

}
