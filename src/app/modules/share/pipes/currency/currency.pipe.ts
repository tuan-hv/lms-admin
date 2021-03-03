import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'currencyMoney'
})
export class CurrencyPipes implements PipeTransform {

  currencyPipe = new CurrencyPipe('en-US');

  transform(value:number, defaultNumber, code = 'VND', display = '', digites = '1.0', local ='en-US') {
    if (defaultNumber) {
      value = value ? value : 0
    }
    return this.currencyPipe.transform(value, code, display, digites, local);
  }

}
