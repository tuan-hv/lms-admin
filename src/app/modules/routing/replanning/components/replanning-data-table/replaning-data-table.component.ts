import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/appState';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { defaultPage } from 'src/app/configs/configs';
import { IPaging, IPaginationComponent } from 'src/app/utils/pagination.interface';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReplanningService } from 'src/app/services/api/replanning/replanning.service';

@Component({
  selector: 'app-replaning-data-table',
  templateUrl: './replaning-data-table.component.html',
  styleUrls: ['./replaning-data-table.component.scss']
})
export class ReplaningDataTableComponent implements OnInit {

  @Output() onPageIndexChange = new EventEmitter();
  @Output() onSubmit = new EventEmitter();

  searchForm: FormGroup;

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

  iconReviewActive = './assets/img/icon-review-active.png';
  iconReview = './assets/img/icon-review.png';

  iconApproveActive = './assets/img/icon-approve-active.png';
  iconApprove = './assets/img/icon-approve.png';

  iconView = './assets/img/icon-view.png';

  paging: IPaging = defaultPage;

  loanAccountSub: Subscription = this.store
  .select((state) => state.replans)
  .subscribe(replan => {

    const lASearch = replan.searchForm;
    const lAPaging = replan.data.paging;

    this.dataTable = replan.data.contents;
    this.paging = lAPaging;

    // this.searchForm.setValue({
    //   loanType: lASearch.loanType,
    //   loanAccount: lASearch.loanAccount,
    //   status: lASearch.status,
    //   customerName: lASearch.customerName,
    //   cardNumber: lASearch.cardNumber,
    //   fromDate: new Date(lASearch.fromDate),
    //   toDate: new Date(lASearch.toDate),
    // });
  });

  constructor(
      private store: Store<AppState>,
    ) { }

  ngOnInit(): void {
  }

  onPagination(paging: IPaginationComponent): void {
    this.onPageIndexChange.emit(paging);
  }

}
