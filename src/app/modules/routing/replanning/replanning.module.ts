import { LoanAccountModule } from './../loan-account/loan-account.module';
import { replanFeatureKey, replanReducer } from 'src/app/store/replanning/replanning.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FunctionalModule } from 'src/app/modules/functional/functional.module';
import { ShareModule } from 'src/app/modules/share/share.module';

import { ReplanningRoutingModule } from './replanning-routing.module';
import { ReplanningComponent } from './components/replanning/replanning.component';
import { ReplanningSearchFormComponent } from './components/replanning-search-form/replanning-search-form.component';
import { ReplaningDataTableComponent } from './components/replanning-data-table/replaning-data-table.component';
import { ReplanningEffects } from 'src/app/store/replanning/replanning.effects';
import { ReplanningReviewComponent } from './components/replanning-review/replanning-review.component';
import { ReplanInformationComponent } from './components/replanning-review/replan-information/replan-information.component';
import { LoanInformationComponent } from './components/replanning-review/loan-information/loan-information.component';



@NgModule({
  declarations: [
    ReplanningComponent,
    ReplanningSearchFormComponent,
    ReplaningDataTableComponent,
    ReplanningReviewComponent,
    ReplanInformationComponent,
    LoanInformationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReplanningRoutingModule,
    FunctionalModule,
    ShareModule,
    StoreModule.forFeature(replanFeatureKey, replanReducer),
    EffectsModule.forFeature([ReplanningEffects])
  ]
})
export class ReplanningModule { }
