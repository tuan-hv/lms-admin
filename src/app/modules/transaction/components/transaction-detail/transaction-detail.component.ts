import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, pipe } from 'rxjs';
import { AppState } from 'src/app/store/appState';
import { loadByTransactionID } from 'src/app/store/transaction/transaction.actions';
import { Transaction } from 'src/app/store/transaction/transaction.reducer';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss'],
})
export class TransactionDetailComponent implements OnInit {
  transaction$: Observable<Transaction> = this.store.select(
    (state) => state.transaction
  );
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(
      loadByTransactionID({ id: 'e84dca0d-c065-4c64-bff9-8a3c0b3be1b0' })
    );
  }
}
