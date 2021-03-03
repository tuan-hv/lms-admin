import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IApplication } from 'src/app/store/application/application.reducer';
import { AppState } from 'src/app/store/appState';
import { Location } from '@angular/common';

@Component({
  selector: 'app-loan-detail',
  templateUrl: './loan-detail.component.html',
  styleUrls: ['./loan-detail.component.scss']
})
export class LoanDetailComponent implements OnInit {
  application$: Observable<IApplication> = this.store.select(
    (state) => state.application
  );
  constructor(private store: Store<AppState>,) { }

  ngOnInit(): void {
  }

}
