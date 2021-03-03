import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { IApplication } from './application.reducer';

export const loadApplications = createAction(
  '[Application] Load Applications'
);

export const loadApplicationByID = createAction(
  '[Application] Load Application By ID', props<{uuid: string}>()
);

export const loadApplicationsSuccess = createAction(
  '[Application] Load Applications Success',
  props<{ payload: IApplication }>()
);

export const loadApplicationsFailure = createAction(
  '[Application] Load Applications Failure',
  props<{ error: HttpErrorResponse }>()
);
