import { ValidatorDatePicker } from 'src/app/utils/validators';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn
} from '@angular/forms';
import * as moment from 'moment';

export interface PaymentScheduleSearchForm {
  fromDate: Date;
  toDate: Date;
}

@Component({
  selector: 'app-payment-schedule-search-form',
  templateUrl: './payment-schedule-search-form.component.html',
  styleUrls: ['./payment-schedule-search-form.component.scss'],
})
export class PaymentScheduleSearchFormComponent implements OnInit {
  @ViewChild('endDatePicker') toElmDatepicker!: NzDatePickerComponent;
  validateForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private validatorDatePicker: ValidatorDatePicker,
  ) {}

  @Output()
  onSubmit = new EventEmitter();

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      this.onSubmit.emit(
        {
          fromDate : this.validateForm.get('fromDate').value,
          toDate : this.validateForm.get('toDate').value,
        } as PaymentScheduleSearchForm
      );
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      formLayout: ['inline'],
      fromDate: [moment().clone().endOf('month').subtract(90, 'days').toDate(), [this.dateValidator()]],
      toDate: [moment().clone().endOf('month').toDate(), [this.dateValidator()]],
    }, {validators: this.validatorDatePicker.dateLessThan('fromDate', 'toDate')
  });

    //Get data on init
    this.onSubmit.emit(
      {
        fromDate : this.validateForm.get('fromDate').value,
        toDate : this.validateForm.get('toDate').value,
      } as PaymentScheduleSearchForm
    );
  }

  dateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return control.value === null ? { dateInvalid: true } : null;
    };
  }

  // disableFrom = (startValue: Date): boolean => {
  //   if (!startValue || !this.validateForm.value.toDate) {
  //     return false;
  //   }
  //   return startValue.getTime() > this.validateForm.value.toDate;
  // }

  // disableTo = (endValue: Date): boolean => {
  //   if (!endValue || !this.validateForm.value.fromDate) {
  //     return false;
  //   }
  //   return endValue.getTime() <= this.validateForm.value.fromDate;
  // }
}
