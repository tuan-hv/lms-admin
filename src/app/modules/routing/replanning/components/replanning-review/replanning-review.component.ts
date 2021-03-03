import { IApplication } from 'src/app/store/application/application.reducer';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/appState';
import { FunctionalAbstractComponent } from 'src/app/utils/functional.abstract';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-replanning-review',
  templateUrl: './replanning-review.component.html',
  styleUrls: ['./replanning-review.component.scss']
})
export class ReplanningReviewComponent extends FunctionalAbstractComponent implements OnInit {

  application$: Observable<IApplication> = this.store.select(
    (state) => state.application
  );

  constructor(
    protected store: Store<AppState>,
    protected route: ActivatedRoute,
    protected router: Router
  ) {
    super(store, route, router);
  }

  ngOnInit(): void {
  }

  current = 0;

  index = 'First-content';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

}
