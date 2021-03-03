import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { ApplicationService } from 'src/app/services/api/application/application.service';
import {
  loadApplicationByID,
  loadApplicationsFailure,
  loadApplicationsSuccess,
} from './application.actions';

@Injectable()
export class ApplicationEffects {
  application$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadApplicationByID),
      mergeMap((payload) =>
        this.applicationService.getApplicationById(payload.uuid).pipe(
          map((application) =>
            loadApplicationsSuccess({ payload: application.data })
          ),
          catchError((e) => of(loadApplicationsFailure({error: e})))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private applicationService: ApplicationService
  ) {}
}
