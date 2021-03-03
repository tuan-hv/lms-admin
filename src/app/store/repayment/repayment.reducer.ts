import { Action, createReducer, on } from '@ngrx/store';
import { IPaginationComponent } from 'src/app/utils/pagination.interface';
import { loadRepayments, loadRepaymentsFailure, loadRepaymentsSuccess } from './repayment.actions';

export const repaymentFeatureKey = 'repayment';

export interface IRepaymentForm {
  fromDate: number;
  paging: IPaginationComponent;
  toDate: number;
  uuid: string;
}

export interface IRepayment {
  uuid: string;
  dueDate: Date;
  interestDue: number;
  principalDue: number;
  state: string;
  totalAmount: number;
  currency: string;
}

export interface IPaging {
  pageNumber: number;
  pageSize: number;
  totalPage: number;
  totalRecord: number;
}

export interface IRepaymentPayLoad {
  data: {
    contents: IRepayment[];
    paging: IPaging;
  };
}

export const initialState: IRepaymentPayLoad = {
  data: {
    contents: [],
    paging: {
      pageNumber: 0,
      pageSize: 10,
      totalPage: 0,
      totalRecord: 0,
    },
  },
};

export const repaymentReducer = createReducer(
  initialState,
  on(loadRepaymentsSuccess, (state, payload) => ({ ...state, ...payload })),
  on(loadRepaymentsFailure, (state, { error }) => ({
    ...initialState,
    error: error.message,
  }))
);
