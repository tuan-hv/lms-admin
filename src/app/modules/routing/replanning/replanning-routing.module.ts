import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReplanningComponent } from './components/replanning/replanning.component';
import { ReplanningReviewComponent } from './components/replanning-review/replanning-review.component';


const routes: Routes = [
  {
    path: '',
    component: ReplanningComponent,
    data: {
      breadscrumbs: [
        { url: '', label: 'Loan Management' },
        { url: '/replanning', label: 'Replanning' }
      ]
    }
  },
  {
    path: 'review/:id',
    component: ReplanningReviewComponent,
    data: {
      breadscrumbs: [
        { url: '', label: 'Loan management' },
        { url: '/replanning', label: 'Replanning' },
        { url: '', label: 'Review' },
      ],
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReplanningRoutingModule { }
