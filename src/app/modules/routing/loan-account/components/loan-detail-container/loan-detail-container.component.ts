import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NzTabSetComponent } from 'ng-zorro-antd/tabs';
import { AppState } from 'src/app/store/appState';
import { FunctionalAbstractComponent } from 'src/app/utils/functional.abstract';

@Component({
  selector: 'app-loan-detail-container',
  templateUrl: './loan-detail-container.component.html',
  styleUrls: ['./loan-detail-container.component.scss'],
})
export class LoanDetailContainerComponent extends FunctionalAbstractComponent implements OnInit {

  @ViewChild('tabs') nzTabset!: NzTabSetComponent;

  constructor(
    protected store: Store<AppState>,
    protected route: ActivatedRoute,
    protected router: Router
  ) {
    super(store, route, router);
  }

  ngOnInit(): void { }

  switchTab(data: any) {    
    let index: number = parseInt(data);
    if (!index) {
      index = 0;
    }
    this.nzTabset.setSelectedIndex(index);
  }
}
