import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Event } from "@angular/router";
import { Subscription } from "rxjs";
import * as _ from "lodash-es";
import { Store } from '@ngrx/store';
import { AppState } from '../store/appState';
import { setBreadscrumbs } from '../store/config/actions/config.action';

@Injectable()
export abstract class FunctionalAbstractComponent implements OnDestroy {

  event: Subscription;

  constructor(
    protected store: Store<AppState>,
    protected route: ActivatedRoute,
    protected router: Router,
  ) {
    this.event = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const breadscrumbs = _.values(this.route.snapshot.data['breadscrumbs']);
        this.store.dispatch(setBreadscrumbs({breadscrumbs: breadscrumbs}));
      }
    });
  }

  ngOnDestroy() {
    this.event.unsubscribe();
  }

}