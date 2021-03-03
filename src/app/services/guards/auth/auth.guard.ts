import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { Store, select } from "@ngrx/store";
import { AppState } from "src/app/store/appState";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  pass = new Subject<boolean>();

  constructor(
    private router: Router,
    private store: Store<AppState>
    ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.store.pipe(
        select((state: AppState) => state.auth.isSignIn),
        map(isSignIn => {
          if (isSignIn) return true;
          this.router.navigate(['/login']);
          return false;
        })
      );
    
  }
  
}
