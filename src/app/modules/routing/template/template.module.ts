import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './components/template/template.component';

import { FunctionalModule } from "src/app/modules/functional/functional.module";
import { ShareModule } from "src/app/modules/share/share.module";

@NgModule({
  declarations: [TemplateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TemplateRoutingModule,
    FunctionalModule,
    ShareModule
  ]
})
export class TemplateModule { }
