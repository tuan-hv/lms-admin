import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'term'
})
export class TermPipe implements PipeTransform {

  transform(value: unknown, args: string = ''): unknown {
    return value + ' ' + args;
  }

}
