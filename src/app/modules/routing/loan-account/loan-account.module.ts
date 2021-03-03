import { TransactionEffects } from 'src/app/store/transaction/transaction.effects';
import { transactionListReducer, transactionListFeatureKey } from './../../../store/transaction/transaction.reducer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoanAccountRoutingModule } from './loan-account-routing.module';
import { LoanAccountComponent } from './components/loan-account/loan-account.component';

import { FunctionalModule } from "src/app/modules/functional/functional.module";
import { ShareModule } from "src/app/modules/share/share.module";
import { LoanAccountSearchFormComponent } from './components/loan-account-search-form/loan-account-search-form.component';
import { LoanDetailComponent } from './components/loan-detail/loan-detail.component';
import { LoanDetailContainerComponent } from './components/loan-detail-container/loan-detail-container.component';
import { DisbursementDetailComponent } from './components/disbursement-detail/disbursement-detail.component';
import { TransactionHistoryComponent } from './components/loan-detail/transaction-history/transaction-history.component';
import { ReplanHistoryComponent } from './components/loan-detail/replan-history/replan-history.component';
import { PaymentScheduleComponent } from './components/loan-detail/payment-schedule/payment-schedule.component';
import { PaymentScheduleSearchFormComponent } from './components/loan-detail/payment-schedule-search-form/payment-schedule-search-form.component';
import { PaymentScheduleDataTableComponent } from './components/loan-detail/payment-schedule-data-table/payment-schedule-data-table.component';
import { EffectsModule } from '@ngrx/effects';
import { RepaymentEffects } from '../../../store/repayment/repayment.effects';
import { StoreModule } from '@ngrx/store';
import { repaymentFeatureKey, repaymentReducer } from 'src/app/store/repayment/repayment.reducer';
import { EmpInfoComponent } from './components/emp-info/emp-info.component';
import { RefInfoComponent } from './components/ref-info/ref-info.component';
import { PersonInfoComponent } from './components/person-info/person-info.component';
import { AccountEffects } from 'src/app/store/loan-account/loan-account.effects';
import { loanAccountReducer, loanAccountFeatureKey } from 'src/app/store/loan-account/loan-account.reducer';



@NgModule({
  declarations: [
    LoanAccountComponent,
    LoanAccountSearchFormComponent,
    LoanDetailComponent,
    LoanDetailContainerComponent,
    DisbursementDetailComponent,
    TransactionHistoryComponent,
    ReplanHistoryComponent,
    PaymentScheduleComponent,
    PaymentScheduleSearchFormComponent,
    PaymentScheduleDataTableComponent,
    EmpInfoComponent,
    RefInfoComponent,
    PersonInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoanAccountRoutingModule,
    FunctionalModule,
    ShareModule,
    StoreModule.forFeature(repaymentFeatureKey, repaymentReducer),
    StoreModule.forFeature(loanAccountFeatureKey, loanAccountReducer),
    StoreModule.forFeature(transactionListFeatureKey, transactionListReducer),
    EffectsModule.forFeature([RepaymentEffects, AccountEffects, TransactionEffects])
  ],
})
export class LoanAccountModule { }
