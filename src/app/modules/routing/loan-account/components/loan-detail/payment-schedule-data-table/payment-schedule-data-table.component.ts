import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { defaultPage } from 'src/app/configs/configs';
import { AppState } from 'src/app/store/appState';
import { IRepayment } from 'src/app/store/repayment/repayment.reducer';
import { IPaging, IPaginationComponent } from 'src/app/utils/pagination.interface';

@Component({
  selector: 'app-payment-schedule-data-table',
  templateUrl: './payment-schedule-data-table.component.html',
  styleUrls: ['./payment-schedule-data-table.component.scss'],
})
export class PaymentScheduleDataTableComponent implements OnInit, OnDestroy {

  dataTable: IRepayment[] = [];
  paging: IPaging = defaultPage;

  repaymentSub: Subscription;
  @Output() onPageIndexChange = new EventEmitter();

  constructor(private store: Store<AppState>) {}

  ngOnDestroy(): void {
    this.repaymentSub.unsubscribe();
  }

  ngOnInit(): void {

    this.repaymentSub = this.store.select( state => state.repayment ).subscribe( repayment => {
      this.dataTable = repayment.data.contents;
      const paging = repayment.data.paging;
      console.log("Server Return", paging);
      this.paging = paging;
    })
  }

  onPagination(paging: IPaginationComponent) {
    this.onPageIndexChange.emit(paging);
  }

}
