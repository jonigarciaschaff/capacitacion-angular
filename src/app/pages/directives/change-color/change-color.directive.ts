import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(
    private eleRef: ElementRef
  ) {
    this.eleRef.nativeElement.style.background = 'red';
   }


}
