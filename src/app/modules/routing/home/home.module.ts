import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';

import { FunctionalModule } from "src/app/modules/functional/functional.module";
import { ShareModule } from "src/app/modules/share/share.module";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FunctionalModule,
    ShareModule
  ]
})
export class HomeModule { }
