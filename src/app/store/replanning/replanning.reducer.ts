import { TimeUtil } from 'src/app/utils/time';
import { IPaging } from 'src/app/utils/pagination.interface';
import { createReducer, on } from '@ngrx/store';
import { loadReplanningsFailure, loadReplanningsSuccess } from './replanning.actions';


export const replanFeatureKey = 'replans';

export interface IReplanSearchForm {
  loanType: string;
  loanAccount: string;
  status: string;
  approveDueDate: any;
  customerName: string;
  cardNumber: string;
  fromDate: any;
  toDate: any;

  pageNumber: number;
  pageSize: number;
}

export interface IStatus {
  apiSubErrors: string;
  code: number;
  message: string;
  timestamp: string;
}

export interface IReplanning {
  customerId: string;
  amount: number;
  currency: string;
  customerName: string;
  approveDueDate: Date;
  id: number;
  loanAccount: string;
  loanType: string;
  rate: string;
  status: string;
  outstandingBalance: string;
  termUnit: string;
  uuid: string;
  createdDate: string;
}

export interface IReplanningTypes {
  data: [];
  status: IStatus;
}

export interface IReplanningPayLoad {
  data: {
    contents: IReplanning[];
    paging: IPaging;
  };
  status: IStatus;
  searchForm: IReplanSearchForm;
}

export const initialState: IReplanningPayLoad = {
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
    approveDueDate: TimeUtil.createToDefault().getTime(),
    cardNumber: '',
    fromDate: TimeUtil.createFromDefault().getTime(),
    toDate: TimeUtil.createToDefault().getTime(),
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
  fromDate: TimeUtil.createFromDefault().getTime(),
  toDate: TimeUtil.createToDefault().getTime(),
  pageNumber: 0,
  pageSize: 10,
};


export const replanReducer = createReducer(
  initialState,
  on(loadReplanningsSuccess, (state, data) => ({
    ...state,
    ...data.payload,
    searchForm: data.searchForm
  })),
  on(loadReplanningsFailure, (state, { error }) => ({
    ...initialState,
    error: error.message,
  }))

);

