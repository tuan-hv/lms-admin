import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { EMPTY, of, forkJoin } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/appState";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  setUserInfo,
  SIGNIN_REQUEST,
  signInSucess,
  SIGNOUT_REQUEST,
  signOutSuccess,
  SIGNUP_REQUEST,
  signUpSuccess,
  SIGNUP_SUCCESS,
  signInRequest
} from "src/app/store/auth/actions/auth.action";
import { AuthService } from "src/app/services/auth/auth.service";
import { IUser, IUserInfo } from "src/app/store/auth/auth.model";

@Injectable()
export class AuthEffect {

  signInEffect = createEffect(() => {
    return this.actions$.pipe(
      ofType(SIGNIN_REQUEST),
      mergeMap((user: IUser) => {
        return this.authService.signIn({
          username: user.username,
          password: user.password
        })
      }),
      map((response) => {
        const userInfo: IUserInfo = {
          displayName: response['displayName'],
          username   : response['username'],
          phoneNumber: response['phoneNumber'],
          photoURL   : response['photoURL'],
        }
        this.store.dispatch(setUserInfo(userInfo));
        this.router.navigate(['/']);
        return signInSucess();
      })
    );
  });

  signOutEffect = createEffect(() => {
    return this.actions$.pipe(
      ofType(SIGNOUT_REQUEST),
      tap(() => this.authService.signOut()
      )).pipe(
        map(() => {
          this.router.navigate(['/logout']);
          return signOutSuccess();
        }),
        catchError(() => EMPTY)
      );
  });

  signUpEffect = createEffect(() => {
    return this.actions$.pipe(
      ofType(SIGNUP_REQUEST),
      mergeMap((user: IUser) => forkJoin(this.authService.signUp(user), of(user))),
      map((response) => {
        return signUpSuccess({
          username: response[1]['username'],
          password: response[1]['password']
        });
      })
    );
  });

  signUpSuccessEffect = createEffect(() => {
    return this.actions$.pipe(
      ofType(SIGNUP_SUCCESS),
      map((user: IUser) => {
        return signInRequest(user);
      })
    );
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) { }

}
