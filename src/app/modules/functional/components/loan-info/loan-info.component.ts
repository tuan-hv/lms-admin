import { Component, Input, OnInit } from "@angular/core";
import { IApplication } from "src/app/store/application/application.reducer";
import { TimeUtil } from "src/app/utils/time";

@Component({
  selector: "app-loan-info",
  templateUrl: "./loan-info.component.html",
  styleUrls: ["./loan-info.component.scss"],
})
export class LoanInfoComponent implements OnInit {
  @Input()
  application: IApplication;

  @Input()
  viewType: string;

  constructor() {}

  ngOnInit(): void {}

}

@Component({
  selector: "acc-num",
  template: `<div nz-row>
    <div nz-col nzSpan="12" class="gray">
      {{ label ? label : "Account number :" }}
    </div>
    <div nz-col nzSpan="12">{{ app.accountNumber }}</div>
  </div>`,
})
export class AccountNumberComponent {
  @Input()
  app: IApplication;

  @Input()
  label: string;
}

@Component({
  selector: "ost-blanc",
  template: `<div nz-row>
    <div nz-col nzSpan="12" class="gray">Outstanding balance :</div>
    <div nz-col nzSpan="12">
      {{ app.outstandingBalance | currencyMoney: true }}
    </div>
  </div>`,
})
export class OutstandingBalanceComponent {
  @Input() app: IApplication;
}

@Component({
  selector: "ist-due",
  template: `<div nz-row>
    <div nz-col nzSpan="12" class="gray">Interest due :</div>
    <div nz-col nzSpan="12">{{ app.interestDue | currencyMoney: true }}</div>
  </div>`,
})
export class InterestDueComponent {
  @Input() app: IApplication;
}
@Component({
  selector: "ln-rate",
  template: `<div nz-row>
    <div nz-col nzSpan="12" class="gray">Interest rate :</div>
    <div nz-col nzSpan="12">
      {{ (app.interestRate ? app.interestRate : 0) | percent }}
    </div>
  </div>`,
})
export class InterestRateComponent {
  @Input() app: IApplication;
}
@Component({
  selector: "ln-term",
  template: `<div nz-row>
    <div nz-col nzSpan="12" class="gray">Loan term :</div>
    <div nz-col nzSpan="12">{{ app.loanTerm + " " + app.termUnit }}</div>
  </div>`,
})
export class LoanTermComponent {
  @Input() app: IApplication;
}
@Component({
  selector: "ln-status",
  template: `<div nz-row>
    <div nz-col nzSpan="12" class="gray">Loan status :</div>
    <div nz-col nzSpan="12">
      {{ app.loanStatusName }}
    </div>
  </div>`,
})
export class LoanStatusComponent {
  @Input() app: IApplication;
}
@Component({
  selector: "ln-exp-date",
  template: `<div nz-row>
    <div nz-col nzSpan="12" class="gray">Expiry date :</div>
    <div nz-col nzSpan="12">{{ app.expireDate | timeZone | date: "dd/MM/yyyy" }}</div>
  </div>`,
})
export class LoanExpiryDateComponent {
  @Input() app: IApplication;
}

@Component({
  selector: "ln-type",
  template: `<div nz-row>
    <div nz-col nzSpan="12" class="gray">Loan type :</div>
    <div nz-col nzSpan="12">{{ app.loanType }}</div>
  </div>`,
})
export class LoanTypeComponent {
  @Input() app: IApplication;
}

@Component({
  selector: "ln-sgnoff-date",
  template: `<div nz-row>
    <div nz-col nzSpan="12" class="gray">Sign-off date :</div>
    <div nz-col nzSpan="12">{{ app.signedOffDate | timeZone | date: "dd/MM/yyyy" }}</div>
  </div>`,
})
export class SignOffDateComponent {
  @Input() app: IApplication;
}

@Component({
  selector: "ln-cre-date",
  template: `<div nz-row>
    <div nz-col nzSpan="12" class="gray">Create Date :</div>
    <div nz-col nzSpan="12">{{ app.createdDate | timeZone | date: "dd/MM/yyyy" }}</div>
  </div>`,
})
export class CreateDateComponent {
  @Input() app: IApplication;
}

@Component({
  selector: "ln-amnt",
  template: `<div nz-row>
    <div nz-col nzSpan="12" class="gray">
      {{ label ? label : "Loan amount :" }}
    </div>
    <div nz-col nzSpan="12">{{ app.loanAmount | currencyMoney: true }}</div>
  </div>`,
})
export class LoanAmountComponent {
  @Input() app: IApplication;
  @Input() label: string;
}

@Component({
  selector: "ln-curr",
  template: `<div nz-row>
    <div nz-col nzSpan="12" class="gray">Currency :</div>
    <div nz-col nzSpan="12">{{ app.currency }}</div>
  </div>`,
})
export class LoanCurrencyComponent {
  @Input() app: IApplication;
}

@Component({
  selector: "ln-dis-date",
  template: `<div nz-row>
    <div nz-col nzSpan="12" class="gray">Disbursement date :</div>
    <div nz-col nzSpan="12">{{ app.disburseDate | timeZone | date: "dd/MM/yyyy" }}</div>
  </div>`,
})
export class DisbursementDateComponent {
  @Input() app: IApplication;
}

@Component({
  selector: "ln-per-name",
  template: `<div nz-row>
    <div nz-col nzSpan="12" class="gray">Customer name :</div>
    <div nz-col nzSpan="12">
      {{
        app.loanPersonalInformation?.length > 0
          ? app.loanPersonalInformation[0].fullName
          : ""
      }}
    </div>
  </div>`,
})
export class PersonNameComponent {
  @Input() app: IApplication;
}

@Component({
  selector: "ln-dis-info",
  template: `<div nz-row>
    <div nz-col nzSpan="12" class="gray">Amount :</div>
    <div nz-col nzSpan="12">
      {{ app?.disbursedInfo?.disbursedAmount | currencyMoney: true }}
    </div>
  </div>`,
})
export class DisbursedInfoComponent {
  @Input() app: IApplication;
}
@Component({
  selector: "ln-pay-freq",
  template: `<div nz-row>
    <div nz-col nzSpan="12" class="gray">Payment frequency :</div>
    <div nz-col nzSpan="12">
      {{ app.paymentFrequency ? app.paymentFrequency + " " + app.termUnit : "" }}
    </div>
  </div>`,
})
export class PaymentFrequencyComponent {
  @Input() app: IApplication;
}
