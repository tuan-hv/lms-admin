import { Component } from '@angular/core';
import { AppState } from "src/app/store/appState";
import { Store } from "@ngrx/store";
import { IConfigState } from 'src/app/store/config/config.model';
import { IAuthState } from './store/auth/auth.model';
import { TranslateService } from '@ngx-translate/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { ActivatedRoute } from '@angular/router';
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  environment: boolean;
  title = "SmartOSC Fintech | LMS";
  appConfig: IConfigState;
  appAuth: IAuthState;  

  constructor(
    private store: Store<AppState>,
    private translate: TranslateService,
    // private nzConfigService: NzConfigService,
    // private route: ActivatedRoute
    
  ) {
    this.environment = environment.production;
  }

  ngOnInit(): void {
    this.store.select((state: AppState) => state.config).subscribe((config: IConfigState) => {
      this.appConfig = config;
      this.translate.setDefaultLang(config.language);
      this.translate.use(config.language);
    });
    this.store.select((state: AppState) => state.auth).subscribe((auth: IAuthState) => {
      this.appAuth = auth;
    });
  }

}
