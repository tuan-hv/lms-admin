import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateComponent } from "./components/template/template.component";

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    data: {
      breadscrumbs : [
        { url: '', label: 'Root' },
        { url: 'template', label: 'Template' },
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
