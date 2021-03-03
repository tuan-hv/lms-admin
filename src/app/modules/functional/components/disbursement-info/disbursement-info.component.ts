import { Component, Input, OnInit } from "@angular/core";
import { IApplication } from "src/app/store/application/application.reducer";
import { IBeneficiary } from "src/app/store/beneficiary/beneficiary.reducer";

@Component({
  selector: "app-disbursement-info",
  templateUrl: "./disbursement-info.component.html",
  styleUrls: ["./disbursement-info.component.scss"],
})
export class DisbursementInfoComponent implements OnInit {
  @Input()
  beneficiary: IBeneficiary;

  @Input()
  application: IApplication;

  @Input()
  viewType: string;
  constructor() {}

  ngOnInit(): void {}

  loanStatus(value: number): boolean {
    return value === 0 || value === 4;
  }
}

@Component({
  selector: "be-bank",
  template: `<div nz-row>
    <div nz-col nzSpan="12" class="gray">Beneficiary bank :</div>
    <div nz-col nzSpan="12">{{ be.beneficiaryBank }}</div>
  </div>`,
})
export class BeneficiaryBankComponent {
  @Input() be: IBeneficiary;
}

@Component({
  selector: "be-acc",
  template: `<div nz-row>
    <div nz-col nzSpan="12" class="gray">Beneficiary account :</div>
    <div nz-col nzSpan="12">{{ be.beneficiaryAccount }}</div>
  </div>`,
})
export class BeneficiaryAccountComponent {
  @Input() be: IBeneficiary;
}

@Component({
  selector: "be-name",
  template: `<div nz-row>
    <div nz-col nzSpan="12" class="gray">Beneficiary name :</div>
    <div nz-col nzSpan="12">{{ be.beneficiaryName }}</div>
  </div>`,
})
export class BeneficiaryNameComponent {
  @Input() be: IBeneficiary;
}
@Component({
  selector: "be-method",
  template: `<div nz-row>
    <div nz-col nzSpan="12" class="gray">Disbursement method :</div>
    <div nz-col nzSpan="12">{{ app.disbursedInfo?.disbursedMethod }}</div>
  </div>`,
})
export class DisbursementMethodComponent {
  @Input() app: IApplication;
}
