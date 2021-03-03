import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/appState";
import {
  clearBeneficiary,
  processDisbursement,
  resendOTP,
  verifyOTP,
} from "src/app/store/beneficiary/beneficiary.actions";
import { loadApplicationByID } from "src/app/store/application/application.actions";
import { Location } from "@angular/common";
import { FunctionalAbstractComponent } from "src/app/utils/functional.abstract";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Disbursement } from "src/app/store/beneficiary/beneficiary.reducer";

const second: number = 60;
enum PageStatus {
  INIT = 1,
  CONFIRMED,
  FAILED,
}

@Component({
  selector: "app-disbursement-detail",
  templateUrl: "./disbursement-detail.component.html",
  styleUrls: ["./disbursement-detail.component.scss"],
})
export class DisbursementDetailComponent extends FunctionalAbstractComponent
  implements OnInit, OnDestroy {
  isVisible = false;
  otp: string = "";
  url: string = null;
  num: number = second;
  uuid: string = "";
  interval: any;
  public pageStatusType = PageStatus;
  pageStatus: PageStatus; //PageStatus.INIT;
  error: string = "";

  @ViewChild("otpForm") public otpForm: NgForm;

  beSub: Subscription;

  application$ = this.store.select((state) => state.application);

  constructor(
    protected store: Store<AppState>,
    protected route: ActivatedRoute,
    // private location: Location,
    protected router: Router
  ) {
    super(store, route, router);

    this.beSub = this.store
      .select((state) => state.beneficiary)
      .subscribe((beneficary) => {
        // if (beneficary.verifyStatus === OtpStatus.FAIL) {
        //   this.pageStatus = PageStatus.FAILED;
        //   this.error = beneficary.error;
        // } else if (beneficary.verifyStatus === OtpStatus.OK) {
        //   this.pageStatus = PageStatus.CONFIRMED;
        //   this.error = null;
        //   this.store.dispatch(loadApplicationByID({ uuid: this.uuid }));
        // } else if (beneficary.resendStatus === OtpStatus.FAIL) {
        //   this.error = beneficary.error;
        // } else if (beneficary.resendStatus === OtpStatus.OK) {
        //   this.error = null;
        //   this.timer();
        // }

        if (beneficary.disbursed === Disbursement.PROCESSED) {
          console.log("Disbursement.PROCESSED");

          this.pageStatus = PageStatus.CONFIRMED;
          this.error = null;
          this.store.dispatch(loadApplicationByID({ uuid: this.uuid }));
          this.isVisible = true;
        } else if (beneficary.disbursed === Disbursement.FAILED) {
          console.log("Disbursement.FAILED");

          this.pageStatus = PageStatus.FAILED;
          this.error = beneficary.error;
          this.isVisible = true;
        }
        //  else if (beneficary.errorURL) {
        //   this.pageStatus = PageStatus.FAILED;
        //   this.error = beneficary.errorURL;
        //   this.isVisible = true;
        // }
      });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.uuid = paramMap.get("id");
      // this.store.dispatch(loadBeneficiaryURLByApplicationID({ uuid : this.uuid }));
    });
    // this.beSub = this.store.select((state) => state.beneficiary.url).subscribe( url => this.url = url);
  }

  ngOnDestroy(): void {
    this.beSub.unsubscribe();
    this.store.dispatch(clearBeneficiary());
  }

  showModal(): void {
    // this.store.dispatch(loadBeneficiaryURLByApplicationID({ uuid : this.uuid }));
    this.store.dispatch(
      processDisbursement({
        data: this.uuid,
        status: {
          code: 200
        },
      })
    );

    // this.store.dispatch( resendOTP({ url : this.url }) );
  }

  timer(): void {
    this.num = second;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.num--;
      if (this.num < 1) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
    this.num = second;
  }

  handleSkip(event: Event): void {
    event.preventDefault();
    this.handleCancel();
  }

  handleReinput(event: Event): void {
    event.preventDefault();
    // this.pageStatus = PageStatus.INIT;
    this.error = null;
  }

  handleConfirm(event: Event): void {
    event.preventDefault();

    if (this.otpForm.valid) {
      this.onSubmit();
    } else {
      this.otpForm.control.markAllAsTouched();
    }
  }

  handleResend(event: Event): void {
    event.preventDefault();
    this.store.dispatch(resendOTP({ url: this.url }));
  }

  // back(): void {
  //   this.location.back();
  // }

  onSubmit(): void {
    console.log("submit form otp: ", this.otp);
    this.store.dispatch(verifyOTP({ url: this.url, otp: this.otp }));
  }
}
