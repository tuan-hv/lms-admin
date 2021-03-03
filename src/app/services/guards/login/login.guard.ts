import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Store, select } from "@ngrx/store";
import { AppState } from "src/app/store/appState";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private store: Store
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.store.pipe(
      select((state: AppState) => state.auth.isSignIn),
      map(isSignIn => {
        if (isSignIn) {
          this.router.navigate(['/']);
        }
        return true;
      })
    );

  }
  
}
