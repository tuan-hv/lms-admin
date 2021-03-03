import { LoanAccountService } from '../../services/api/loan-account/loan-account.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { loadLoanAccountsBySearchForm, loadLoanAccountsFailure, loadLoanAccountsSuccess } from './loan-account.actions';

@Injectable()
export class AccountEffects {
  loanAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLoanAccountsBySearchForm),
      mergeMap((loanSearchForm) =>
        this.loanAccountService.getLoanAccount(loanSearchForm).pipe(
          map((LoanAccountPayLoad) =>
          loadLoanAccountsSuccess({ payload: LoanAccountPayLoad, searchForm: loanSearchForm })),
          catchError((e) => of(loadLoanAccountsFailure({error: e})))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private loanAccountService: LoanAccountService,
  ) {}
}
