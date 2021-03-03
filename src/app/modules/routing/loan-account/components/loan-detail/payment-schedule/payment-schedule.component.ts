import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { defaultPageForm } from 'src/app/configs/configs';
import { AppState } from 'src/app/store/appState';
import { loadRepayments } from 'src/app/store/repayment/repayment.actions';
import { IRepaymentForm } from 'src/app/store/repayment/repayment.reducer';
import { IPaginationComponent } from 'src/app/utils/pagination.interface';
import { PaymentScheduleSearchForm } from '../payment-schedule-search-form/payment-schedule-search-form.component';

@Component({
  selector: 'app-payment-schedule',
  templateUrl: './payment-schedule.component.html',
  styleUrls: ['./payment-schedule.component.scss'],
})
export class PaymentScheduleComponent implements OnInit {
  form: IRepaymentForm = {
    uuid: '',
    fromDate: null,
    toDate: null,
    paging: defaultPageForm
  };

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const uuid = paramMap.get('id');

      this.form = {
        ...this.form,
        uuid
      };
    });

  }

  submitForm(data: PaymentScheduleSearchForm): void {

    const fromDate = data.fromDate.setHours(0, 0, 0, 0);
    this.form = {
      ...this.form,
      fromDate,
      toDate: data.toDate.getTime(),
    };
    this.store.dispatch(loadRepayments(this.form));

  }

  pageChange(paging: IPaginationComponent) {
    this.form = {
      ...this.form,
      paging
    };

    this.store.dispatch(loadRepayments(this.form));
  }
}
