import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShareModule } from "src/app/modules/share/share.module";
import { FunctionalModule } from "src/app/modules/functional/functional.module";

import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { Spinner } from 'src/app/services/interceptor/spinner/spinner.service';
import { TokenInvalid } from 'src/app/services/interceptor/tokenInvalid/token-invalid.service';

// ngrx/store
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule, MetaReducer } from '@ngrx/store';
import { rootReducer } from "src/app/store/appState";

// effect
import { EffectsModule } from "@ngrx/effects";
import { appEffect } from "src/app/store/appEffect";

// sync ngrx-store data to localstorage
import { localStorageSyncReducer } from "src/app/services/localStorage/localStorage";
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

// enviroment
import { environment } from "src/environments/environment";

// ngx-translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
registerLocaleData(en);

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ShareModule,
    FunctionalModule,
    StoreModule.forRoot(rootReducer, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot(appEffect),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
  })
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: Spinner, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInvalid, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
