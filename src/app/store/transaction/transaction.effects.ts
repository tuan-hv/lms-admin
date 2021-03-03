import { LoanDetailService } from 'src/app/services/api/loan-account/loan-detail.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { TransactionService } from 'src/app/services/api/transaction/transaction.service';
import {
  loadByTransactionID,
  loadTransactionsSuccess,
  loadTransactionsFailure,
  loadListTransactionID,
  loadListTransactionsSuccess
} from './transaction.actions';

@Injectable()
export class TransactionEffects {
  loadTraction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadByTransactionID),
      mergeMap((id) =>
        this.transactionService.getById(id).pipe(
          map((TransactionPayload) =>
            loadTransactionsSuccess({ payload: TransactionPayload.data })
          ),
          catchError(() =>  of(loadTransactionsFailure))
        )
      )
    )
  );

  loadListTraction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadListTransactionID),
      mergeMap((searchForm) =>
        this.loanDetailService.searchTransactionHistory(searchForm).pipe(
          map((LoanTransaction) =>
          loadListTransactionsSuccess(LoanTransaction)
          ),
          catchError(() =>  of(loadTransactionsFailure))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private transactionService: TransactionService,
    private loanDetailService: LoanDetailService,
  ) {}
}
