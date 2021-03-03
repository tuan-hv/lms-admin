import { IPaging } from './../../utils/pagination.interface';
import { TimeUtil } from './../../utils/time';
import { createReducer, on } from '@ngrx/store';
import {
  loadLoanAccountsSuccess,
  loadLoanAccountsFailure,
} from './loan-account.actions';

export const loanAccountFeatureKey = 'accounts';

export interface ILoanSearchForm {
  loanType: string;
  loanAccount: string;
  status: string;
  customerName: string;
  cardNumber: string;
  createFrom: any;
  createTo: any;

  pageNumber: number;
  pageSize: number;
}

export interface IStatus {
  apiSubErrors: string;
  code: number;
  message: string;
  timestamp: string;
}

export interface ILoanAccount {
  customerId: string;
  amount: number;
  currency: string;
  customerName: string;
  totalAmount: number;
  createdDate: Date;
  id: number;
  loanAccount: string;
  loanType: string;
  rate: string;
  status: string;
  term: string;
  termUnit: string;
  uuid: string;
}

export interface ILoanAccountTypes {
  data: [];
  status: IStatus;
}

export interface ILoanAccountPayLoad {
  data: {
    contents: ILoanAccount[];
    paging: IPaging;
  };
  status: IStatus;
  searchForm: ILoanSearchForm;
}

export const initialState: ILoanAccountPayLoad = {
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
  },
  searchForm: {
    loanType: '',
    loanAccount: '',
    status: '',
    customerName: '',
    cardNumber: '',
    createFrom: TimeUtil.createFromDefault().getTime(),
    createTo: TimeUtil.createToDefault().getTime(),
    pageNumber: 0,
    pageSize: 10,

  },
};

const defaultLSF = {
  loanType: '',
  loanAccount: '',
  status: '',
  customerName: '',
  cardNumber: '',
  createFrom: TimeUtil.createFromDefault().getTime(),
  createTo: TimeUtil.createToDefault().getTime(),
  pageNumber: 0,
  pageSize: 10,
};

function loanAccountSearchFrom(loanAccount: ILoanSearchForm): ILoanSearchForm {
  return !loanAccount ? defaultLSF : loanAccount;
}

export const loanAccountReducer = createReducer(
  initialState,
  on(loadLoanAccountsSuccess, (state, data) => ({
    ...state,
    ...data.payload,
    searchForm: data.searchForm
  })),
  on(loadLoanAccountsFailure, (state, { error }) => ({
    ...initialState,
    error: error.message,
  }))
);
