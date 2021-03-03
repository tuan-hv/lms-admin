import { createAction, props } from '@ngrx/store';
import { IRepaymentForm, IRepaymentPayLoad } from './repayment.reducer';

export const loadRepayments = createAction(
  '[Repayment] Load Repayments',
  props<IRepaymentForm>()
);

export const loadRepaymentsSuccess = createAction(
  '[Repayment] Load Repayments Success',
  props<IRepaymentPayLoad>()
);

export const loadRepaymentsFailure = createAction(
  '[Repayment] Load Repayments Failure',
  props<{ error: any }>()
);
