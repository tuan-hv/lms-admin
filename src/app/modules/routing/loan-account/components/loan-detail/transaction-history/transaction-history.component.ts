import { ValidatorDatePicker } from 'src/app/utils/validators';
import { TimeUtil } from './../../../../../../utils/time';
import { ITransaction, ITransactionSearchForm } from './../../../../../../store/transaction/transaction.reducer';
import { loadListTransactionID } from './../../../../../../store/transaction/transaction.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/appState';
import { Subscription } from 'rxjs';
import { AppConstant } from './../../../../../../services/app/app.constant';
import { IPaginationComponent } from './../../../../../../utils/pagination.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { defaultPage } from 'src/app/configs/configs';
import { IPaging } from 'src/app/utils/pagination.interface';

@Component({
  selector: 'trans-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss'],
})
export class TransactionHistoryComponent implements OnInit {
  @ViewChild('to') toElmDatepicker!: NzDatePickerComponent;

  uuid: string;
  filterForm: FormGroup = this.fb.group({
    fromDate: [''],
    toDate: [''],
  }, {validators: this.validatorDatePicker.dateLessThan('fromDate', 'toDate')});

  paging: IPaging = defaultPage;
  transHistoryList = [];
  transactionSearchForm: ITransactionSearchForm;


  TransactionListSub: Subscription = this.store
  .select((state) => state.transactions)
  .subscribe((transactions) => {

    this.transHistoryList = transactions.data.contents;
    this.paging = transactions.data.paging;

  });

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private validatorDatePicker: ValidatorDatePicker,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.uuid = params['id'];
    });
    this.submitForm();
  }

  submitForm(): void {
    const fromDate = this.getFromDate(this.filterForm.value.fromDate);
    const toDate = this.getToDate(this.filterForm.value.toDate);

    this.transactionSearchForm = {
      uuid: this.uuid,
      fromDate,
      toDate,
      ...this.paging,
    };
    this.store.dispatch(loadListTransactionID(this.transactionSearchForm));
  }

  // disableFrom = (startValue: Date): boolean => {
  //   if (!startValue || !this.filterForm.value.toDate) {return false; }
  //   return startValue.getTime() > this.filterForm.value.toDate;
  // }

  // disableTo = (endValue: Date): boolean => {
  //   if (!endValue || !this.filterForm.value.fromDate) {return false; }
  //   return endValue.getTime() <= this.filterForm.value.fromDate;
  // }

  onPagination(paging: IPaginationComponent): void {
    const fromDate = this.getFromDate(this.filterForm.value.fromDate);
    const toDate = this.getToDate(this.filterForm.value.toDate);

    this.transactionSearchForm = {
      uuid: this.uuid,
      pageSize: paging.itemsPerPage,
      pageNumber: paging.serverPage,
      fromDate,
      toDate,
    };
    this.store.dispatch(loadListTransactionID(this.transactionSearchForm));
  }

  getFromDate(valueDate: any): any{
    if (valueDate == null || valueDate === ''){
      return '';
    }
    return valueDate = valueDate.setHours(0, 0, 0, 0);
  }

  getToDate(valueDate: any): any{
    if (valueDate == null || valueDate === ''){
      return '';
    }
    return valueDate = valueDate.setHours(23, 59, 59, 0);
  }

  showAmount(transaction: ITransaction): number{
    return transaction.type === 'REPAYMENT'
    ? transaction.amount + transaction.interestAmount
    : transaction.amount;
  }

  showTransactionCurrency(): string{
    return AppConstant.CURRENTCY_VIETNAM;
  }

}
