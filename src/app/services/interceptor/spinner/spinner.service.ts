import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, interval, throwError } from 'rxjs';
import { hideSpinner, showSpinner } from "src/app/store/config/actions/config.action";
import { map, finalize, tap, delay, retry, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from "src/app/store/appState";

@Injectable({
  providedIn: 'root'
})
export class Spinner implements HttpInterceptor {

  totalRequests = 0;

  constructor(private store: Store<AppState>) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    this.totalRequests++;
    this.store.dispatch(showSpinner());

    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests === 0) {
          setTimeout(() => {
            this.store.dispatch(hideSpinner());
          }, 1000);
        }
      })
    );
    
  }
}
