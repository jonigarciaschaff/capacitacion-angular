import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLog]'
})
export class LogDirective {

  @Input('value') value: string;
 
  constructor() { }
 
  @HostListener('click', ['$event']) onClick($event){
    console.info('log value', this.value);
  }

}
