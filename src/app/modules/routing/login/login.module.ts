import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';

import { FunctionalModule } from "src/app/modules/functional/functional.module";
import { ShareModule } from "src/app/modules/share/share.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    FunctionalModule,
    ShareModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
