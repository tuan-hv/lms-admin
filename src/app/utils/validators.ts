import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { AppConstant } from '../services/app/app.constant';

@Injectable({
  providedIn: 'root',
})
export class ValidatorDatePicker {
  dateLessThan(from: string, to: string): any {
    return (group: FormGroup): {[key: string]: any} => {
      const fromDate = group.controls[from];
      const toDate = group.controls[to];
      if (fromDate.value > toDate.value && fromDate.value !== '' && toDate.value !== '') {
        return {
          dates: AppConstant.DATE_LESS_THAN
        };
      }
      return {};
    };
  }
}
