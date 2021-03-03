import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { ILoanAccountPayLoad, ILoanSearchForm } from './loan-account.reducer';

export const loadLoanAccounts = createAction(
  '[LoanAccount] Load LoanAccounts'
);

export const loadLoanAccountsBySearchForm = createAction(
  '[LoanAccount] Load LoanAccounts By Param', props<ILoanSearchForm>()
);

export const loadLoanAccountsSuccess = createAction(
  '[LoanAccount] Load LoanAccounts Success',
  props<{ payload: ILoanAccountPayLoad, searchForm: ILoanSearchForm}>()
);

export const loadLoanAccountsFailure = createAction(
  '[LoanAccount] Load LoanAccounts Failure',
  props<{ error: HttpErrorResponse }>()
);
