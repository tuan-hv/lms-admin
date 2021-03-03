import { IPaging } from './../../utils/pagination.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { loadTransactionsSuccess, loadListTransactionsSuccess } from './transaction.actions';
import { IStatus } from '../loan-account/loan-account.reducer';

export const transactionFeatureKey = 'transaction';
export const transactionListFeatureKey = 'transactions';

export interface ITransaction {
  id?: number;
  uuid?: string;
  amount: number;
  balance: null;
  creationDate: Date;
  entryDate: Date;
  feesAmount: number;
  interestAmount: number;
  interestRate: number;
  penaltyAmount: number;
  principalAmount: number;
  principalBalance: number;
  taxOnFeesAmount: number;
  taxOnInterestAmount: number;
  taxOnPenaltyAmount: number;
  type: 'REPAYMENT' | 'FUNDING';
}

export interface ITransactionPayload {
  data: ITransaction;
}

export interface ITransactionSearchForm {
  uuid: string;
  fromDate: number;
  toDate: number;
  pageNumber: number;
  pageSize: number;
}

export interface ILoanTransaction {
  data: {
    contents: ITransaction[];
    paging: IPaging;
  };
  status: IStatus;
}

export const initialState: ITransaction = {
  id: null,
  uuid: '',
  amount: 0,
  balance: null,
  creationDate: null,
  entryDate: null,
  feesAmount: 0,
  interestAmount: 0,
  interestRate: 0,
  penaltyAmount: 0,
  principalAmount: 0,
  principalBalance: 0,
  taxOnFeesAmount: 0,
  taxOnInterestAmount: 0,
  taxOnPenaltyAmount: 0,
  type: null,
};

export const initialStates: ILoanTransaction = {
  data: {
    contents: [],
    paging: {
      pageNumber: 0,
      pageSize: 10,
      totalPage: 0,
      totalRecord: 0,
    },
  },
  status: {
    apiSubErrors: '',
    code: 0,
    message: '',
    timestamp: '',
  }
};

export const transactionReducer = createReducer(
  initialState,
  on(loadTransactionsSuccess, (state, { payload }) => payload),
);

export const transactionListReducer = createReducer(
  initialStates,
  on(loadListTransactionsSuccess, (state, data) => ({ ...state, ...data})),
);

