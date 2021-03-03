import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadApplicationByID } from 'src/app/store/application/application.actions';
import { IApplication } from 'src/app/store/application/application.reducer';
import { AppState } from 'src/app/store/appState';
import { loadBeneficiaryByApplicationID } from 'src/app/store/beneficiary/beneficiary.actions';
import { IBeneficiary } from 'src/app/store/beneficiary/beneficiary.reducer';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.scss'],
})
export class ApplicationDetailComponent implements OnInit {
  @Input()
  viewType: 'LOAN_DETAIL' | 'DISBURSEMENT';

  application$: Observable<IApplication> = this.store.select(
    (state) => state.application
  );
  beneficiary$: Observable<IBeneficiary> = this.store.select(
    (state) => state.beneficiary
  );

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap) => {
      const uuid = paramMap.get('id');
      if (uuid) {
        this.store.dispatch(loadApplicationByID({ uuid }));
        this.store.dispatch(loadBeneficiaryByApplicationID({ uuid }));
      } else {
        console.warn("No uuid");

      }
    });
  }
}
