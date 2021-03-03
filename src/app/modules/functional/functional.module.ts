import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ShareModule } from 'src/app/modules/share/share.module';

// ng-zorro-antd
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { IconsProviderModule } from 'src/app/icons-provider.module';

import { routes } from 'src/app/app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ApplicationDetailComponent } from './components/application-detail/application-detail.component';
import { StoreModule } from '@ngrx/store';
import {
  applicationFeatureKey,
  applicationReducer,
} from 'src/app/store/application/application.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ApplicationEffects } from 'src/app/store/application/application.effects';
import { BeneficiaryEffects } from 'src/app/store/beneficiary/beneficiary.effects';
import {
  beneficiaryFeatureKey,
  beneficiaryReducer,
} from 'src/app/store/beneficiary/beneficiary.reducer';
import {
  LoanInfoComponent,
  AccountNumberComponent,
  LoanAmountComponent,
  OutstandingBalanceComponent,
  InterestDueComponent,
  InterestRateComponent,
  LoanTermComponent,
  LoanStatusComponent,
  LoanExpiryDateComponent,
  LoanTypeComponent,
  SignOffDateComponent,
  CreateDateComponent,
  LoanCurrencyComponent,
  DisbursementDateComponent,
  PersonNameComponent,
  DisbursedInfoComponent,
  PaymentFrequencyComponent,

} from './components/loan-info/loan-info.component';
import {
  DisbursementInfoComponent,
  BeneficiaryBankComponent,
  BeneficiaryAccountComponent,
  BeneficiaryNameComponent,
  DisbursementMethodComponent,

} from './components/disbursement-info/disbursement-info.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavigationComponent,
    ApplicationDetailComponent,
    LoanInfoComponent,
    DisbursementInfoComponent,

    AccountNumberComponent,
    LoanAmountComponent,
    OutstandingBalanceComponent,
    InterestDueComponent,
    InterestRateComponent,
    LoanTermComponent,
    LoanStatusComponent,
    LoanExpiryDateComponent,
    LoanTypeComponent,
    SignOffDateComponent,
    CreateDateComponent,
    LoanCurrencyComponent,
    DisbursementDateComponent,
    DisbursedInfoComponent,
    PaymentFrequencyComponent,


    BeneficiaryBankComponent,
    BeneficiaryAccountComponent,
    BeneficiaryNameComponent,
    PersonNameComponent,
    DisbursementMethodComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ShareModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzDropDownModule,
    StoreModule.forFeature(applicationFeatureKey, applicationReducer),
    StoreModule.forFeature(beneficiaryFeatureKey, beneficiaryReducer),
    EffectsModule.forFeature([ApplicationEffects, BeneficiaryEffects]),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ApplicationDetailComponent,
  ],
})
export class FunctionalModule {}
