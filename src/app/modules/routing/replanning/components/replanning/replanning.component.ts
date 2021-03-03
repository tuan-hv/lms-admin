import { IReplanSearchForm } from './../../../../../store/replanning/replanning.reducer';
import { IPaginationComponent } from 'src/app/utils/pagination.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/appState';
import { FunctionalAbstractComponent } from 'src/app/utils/functional.abstract';
import { loadReplanningBySearchForm } from 'src/app/store/replanning/replanning.actions';

@Component({
  selector: 'app-replanning',
  templateUrl: './replanning.component.html',
  styleUrls: ['./replanning.component.scss']
})
export class ReplanningComponent extends FunctionalAbstractComponent implements OnInit {

  searchForm: IReplanSearchForm;

  constructor(
    protected store: Store<AppState>,
    protected route: ActivatedRoute,
    protected router: Router,
  ) {
    super(store, route, router);
  }

  ngOnInit(): void {
  }

  submitForm(data: IReplanSearchForm): void {

    const fromDate = data.fromDate.setHours(0, 0, 0, 0);
    this.searchForm = {
      ...this.searchForm,
      fromDate,
      toDate: data.toDate.getTime(),
    };
    this.store.dispatch(loadReplanningBySearchForm(this.searchForm));

  }

  pageChange(paging: IPaginationComponent) {
    this.searchForm = {
      ...this.searchForm,
      pageSize: paging.itemsPerPage,
      pageNumber: paging.serverPage,
    };

    this.store.dispatch(loadReplanningBySearchForm(this.searchForm));
  }

}
