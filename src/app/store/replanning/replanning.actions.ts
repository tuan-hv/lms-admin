import { IReplanSearchForm, IReplanningPayLoad } from './replanning.reducer';

import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export const LoadReplannings = createAction(
  '[Replanning] Load Replans'
);

export const loadReplanningBySearchForm = createAction(
  '[Replanning] Load Replans By Param', props<IReplanSearchForm>()
);

export const loadReplanningsSuccess = createAction(
  '[Replanning] Load Replans Success',
  props<{ payload: IReplanningPayLoad, searchForm: IReplanSearchForm}>()
);

export const loadReplanningsFailure = createAction(
  '[Replanning] Load Replans Failure',
  props<{ error: HttpErrorResponse }>()
);
