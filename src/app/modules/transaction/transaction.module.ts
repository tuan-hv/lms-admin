import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';
import { TransactionRoutingModule } from './transaction-routing.module';
import { StoreModule } from '@ngrx/store';
import { transactionReducer, transactionFeatureKey } from 'src/app/store/transaction/transaction.reducer';
import { ShareModule } from '../share/share.module';
import { EffectsModule } from '@ngrx/effects';
import { TransactionEffects } from 'src/app/store/transaction/transaction.effects';



@NgModule({
  declarations: [TransactionDetailComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    StoreModule.forFeature(transactionFeatureKey, transactionReducer),
    EffectsModule.forFeature([TransactionEffects]),
    ShareModule
  ]
})
export class TransactionModule { }
