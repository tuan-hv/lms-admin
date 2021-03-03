import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanDetailContainerComponent } from './components/loan-detail-container/loan-detail-container.component';
import { DisbursementDetailComponent } from './components/disbursement-detail/disbursement-detail.component';

import { LoanAccountComponent } from './components/loan-account/loan-account.component';

const routes: Routes = [
  {
    path: '',
    component: LoanAccountComponent,
    data: {
      breadscrumbs: [
        { url: '', label: 'Loan management' },
        { url: '/loan-account', label: 'Loan accounts' },
      ],
    },
  },
  {
    path: 'detail/:id',
    component: LoanDetailContainerComponent,
    data: {
      breadscrumbs: [
        { url: '', label: 'Loan management' },
        { url: '/loan-account', label: 'Loan accounts' },
        { url: '', label: 'Loan details' },
      ],
    },
  },
  {
    path: 'disbursement/:id',
    component: DisbursementDetailComponent,
    data: {
      breadscrumbs: [
        { url: '', label: 'Loan management' },
        { url: '/loan-account', label: 'Loan accounts' },
        { url: '', label: 'Disbursement' },
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanAccountRoutingModule {}
