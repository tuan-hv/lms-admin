import * as moment from 'moment';

export class TimeUtil {

  static getTime(time: any): number {
    return new Date(time).getTime() + new Date().getTimezoneOffset() * 60 * 1000;
  }

  static getDisplayDate(milliseconds: number, separator: string = '/'): string {
    const date  = new Date(milliseconds).getDate();
    const month = new Date(milliseconds).getMonth() + 1;
    const year  = new Date(milliseconds).getFullYear();
    return date + separator + (month < 10 ? '0' + month.toString() : month.toString()) + separator + year;
  }

  static createFromDefault(): Date {
    return moment().clone().subtract(90, 'days').toDate();
  }

  static createToDefault(): Date {
    return moment().clone().toDate();
  }

  static disableYear(): Date {
    return moment().clone().subtract(5, 'years').toDate();
  }
}

