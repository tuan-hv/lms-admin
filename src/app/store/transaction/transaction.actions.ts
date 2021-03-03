import { ILoanTransaction } from 'src/app/store/transaction/transaction.reducer';
import { createAction, props } from '@ngrx/store';
import { ITransaction, ITransactionSearchForm } from './transaction.reducer';

export const loadTransactions = createAction(
  '[Transaction] Load Transactions'
);

export const loadByTransactionID = createAction(
  '[Transaction] Load Transaction', props<{id: string}>()
);

export const loadTransactionsSuccess = createAction(
  '[Transaction] Load Transactions Success',
  props<{ payload: ITransaction }>()
);

export const loadTransactionsFailure = createAction(
  '[Transaction] Load Transactions Failure',
  props<{ error: any }>()
);

export const loadListTransactionID = createAction(
  '[Transaction] Load List Transaction', props<ITransactionSearchForm>()
);

export const loadListTransactionsSuccess = createAction(
  '[Transaction] Load List Transactions Success',
  props<ILoanTransaction>()
);
