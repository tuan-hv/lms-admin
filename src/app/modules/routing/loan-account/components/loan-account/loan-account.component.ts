import { ILoanSearchForm } from './../../../../../store/loan-account/loan-account.reducer';
import { IPaginationComponent } from './../../../../../utils/pagination.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/appState';
import { loadLoanAccountsBySearchForm } from 'src/app/store/loan-account/loan-account.actions';
import { FunctionalAbstractComponent } from 'src/app/utils/functional.abstract';


@Component({
  selector: 'app-loan-account',
  templateUrl: './loan-account.component.html',
  styleUrls: ['./loan-account.component.scss'],
})
export class LoanAccountComponent
  extends FunctionalAbstractComponent
  implements OnInit {
  searchForm: ILoanSearchForm;

  constructor(
    protected store: Store<AppState>,
    protected route: ActivatedRoute,
    protected router: Router
  ) {
    super(store, route, router);
  }

  ngOnInit(): void {}

  submitForm(data: ILoanSearchForm): void {
    const createFrom = data.createFrom.setHours(0, 0, 0, 0);
    this.searchForm = {
      ...data,
      createFrom,
      createTo: data.createTo.getTime(),
    };
    this.store.dispatch(loadLoanAccountsBySearchForm(this.searchForm));
  }

  pageChange(paging: IPaginationComponent): void {
    this.searchForm = {
      ...this.searchForm,
      pageSize: paging.itemsPerPage,
      pageNumber: paging.serverPage,
    };

    this.store.dispatch(loadLoanAccountsBySearchForm(this.searchForm));
  }
}
