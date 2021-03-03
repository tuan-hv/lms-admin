import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percent'
})
export class PercentPipe implements PipeTransform {

  transform(value: string): unknown {
    return isNaN(parseFloat(value)) ? "N/A" : (parseFloat(value)*100).toFixed(1) + " %";
  }

}
