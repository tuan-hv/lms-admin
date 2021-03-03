import { loadReplanningBySearchForm, loadReplanningsFailure, loadReplanningsSuccess } from './replanning.actions';
import { ReplanningService } from './../../services/api/replanning/replanning.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap} from 'rxjs/operators';
import { Injectable } from '@angular/core';



@Injectable()
export class ReplanningEffects {
  replanning$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadReplanningBySearchForm),
      mergeMap((replanSearchForm) =>
        this.replanningService.getReplans(replanSearchForm).pipe(
          map((ReplanPayLoad) =>
          loadReplanningsSuccess({ payload: ReplanPayLoad, searchForm: replanSearchForm })),
          catchError((e) => of(loadReplanningsFailure({error: e})))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private replanningService: ReplanningService
    ) {}
}
