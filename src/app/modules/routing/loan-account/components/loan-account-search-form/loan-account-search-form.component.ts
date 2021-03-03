import { ValidatorDatePicker } from 'src/app/utils/validators';
import { AppState } from 'src/app/store/appState';
import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanAccountService } from 'src/app/services/api/loan-account/loan-account.service';
import {
  IPaging,
  IPaginationComponent,
} from 'src/app/utils/pagination.interface';
import { Subscription } from 'rxjs';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import { TimeUtil } from 'src/app/utils/time';
import { defaultPage, URL_CONFIG } from 'src/app/configs/configs';
import { ILoanSearchForm } from 'src/app/store/loan-account/loan-account.reducer';

@Component({
  selector: 'app-loan-account-search-form',
  templateUrl: './loan-account-search-form.component.html',
  styleUrls: ['./loan-account-search-form.component.scss'],
})
export class LoanAccountSearchFormComponent implements OnInit, OnDestroy {
  @ViewChild('endDatePicker') toElmDatepicker!: NzDatePickerComponent;
  @Output() onSubmit = new EventEmitter();
  @Output() onPageIndexChange = new EventEmitter();

  searchForm: FormGroup = this.fb.group({
    loanType: [''],
    loanAccount: [''],
    status: [''],
    customerName: [''],
    cardNumber: [''],
    createFrom: [TimeUtil.createFromDefault(), [Validators.required]],
    createTo: [TimeUtil.createToDefault(), [Validators.required]],
  }, {validator: this.validatorDatePicker.dateLessThan('createFrom', 'createTo')});

  dataTable = [];
  loanTypes = [];
  loanStatus = [1, 2, 3, 4, 5];
  status = [
    { name: 'Drop_off', color: '#808080' },
    { name: 'Approved', color: '#FB32DB' },
    { name: 'Rejected', color: '#FF5756' },
    { name: 'Signed-off', color: '#007AFF' },
    { name: 'Active', color: '#4AAF05' },
    { name: 'Closed', color: '#808080' },
  ];

  iconPaymentActive = './assets/img/icon-payment-active.png';
  iconPayment = './assets/img/icon-payment.png';

  iconDisbursementActive = './assets/img/icon-disburt-active.png';
  iconDisbursement = './assets/img/icon-disburt.png';

  iconView = './assets/img/icon-view.png';

  paging: IPaging = defaultPage;

  loanAccountSub: Subscription = this.store
  .select((state) => state.accounts)
  .subscribe((loanAccount) => {
    const lASearch = loanAccount.searchForm;
    const lAPaging = loanAccount.data.paging;

    this.dataTable = loanAccount.data.contents.filter(d => d.status != '0');
    this.paging = lAPaging;

    this.searchForm.setValue({
      loanType: lASearch.loanType,
      loanAccount: lASearch.loanAccount,
      status: lASearch.status,
      customerName: lASearch.customerName,
      cardNumber: lASearch.cardNumber,
      createFrom: new Date(lASearch.createFrom),
      createTo: new Date(lASearch.createTo),
    });
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private validatorDatePicker: ValidatorDatePicker,
    private loanAccountService: LoanAccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.onSubmit.emit(
      {
        ...this.searchForm.value,
        ...this.paging
      } as ILoanSearchForm
    );
    this.getLoanTypes();
  }

  submitForm(): void {
    this.onSubmit.emit(
      {
        ...this.searchForm.value,
        ...this.paging
      } as ILoanSearchForm
    );
  }

  disableFrom = (startValue: Date): boolean => {
// block Date from should be less than Date to
//    if (!startValue || !this.searchForm.value.createTo) {return false; }
    if (this.disabledDate(startValue)) {return true; }
//   return startValue.getTime() > this.searchForm.value.createTo;
  }

  disableTo = (endValue: Date): boolean => {
//   if (!endValue || !this.searchForm.value.createFrom) {return false; }
    if (this.disabledDate(endValue)) {return true; }
//   return endValue.getTime() <= this.searchForm.value.createFrom;
  }

  onPagination(paging: IPaginationComponent): void {
    this.onPageIndexChange.emit(paging);
  }

  dbClickRouterLoanInfo(uuid: string): void {
    this.router.navigate([URL_CONFIG.loanAccount.loanDetail, uuid]);
  }

  getLoanTypes(): void {
    this.loanAccountService.getLoanType().subscribe((res) => {
      if (res.status.code === 200) {
        this.loanTypes = res.data;
      }
    });
  }

  disabledDate = (current: Date): boolean => {
    return differenceInCalendarDays(current, TimeUtil.disableYear()) < 0;
  }

  onClear(): void{
    this.searchForm.reset({
      loanType: '',
      loanAccount: '',
      status: '',
      customerName: '',
      cardNumber: '',
      createFrom: TimeUtil.createFromDefault(),
      createTo: TimeUtil.createToDefault(),
    });
  }

  ngOnDestroy(): void {
    this.loanAccountSub.unsubscribe();
  }
}
