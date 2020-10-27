import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicate'
})
export class MultiplicatePipe implements PipeTransform {

  transform(value: number, multiplicator: number = 2): number {
    return value * multiplicator;
  }

}
