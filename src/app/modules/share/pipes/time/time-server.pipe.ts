import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeZone'
})
export class TimeZonePipe implements PipeTransform {

  transform(value: Date): unknown {
    return  moment.utc(new Date(value)).local();
  }

}
