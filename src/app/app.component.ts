import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'capacitacion-angular';
  author:string = 'Joni';
  clickCounter:number = 1;
  isHover = 'no';
  participants = ['Joni', 'Manucho', 'Juan', 'Elias'];
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(35)]],
      age: ['', [Validators.maxLength(3), Validators.min(18), Validators.max(120)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]]
    });
  }

  clickme() {
    this.clickCounter++;
  }

  hoverIn() {
    this.isHover = 'yes';
  }
  
  hoverOut() {
    this.isHover = 'no';
  }

  get nameControl() {
    return this.form.get('name');
  }

  get ageControl() {
    return this.form.get('age');
  }

  get emailControl() {
    return this.form.get('email');
  }

  submitForm(){

    if(!this.form.valid){
      console.warn('Escribi bien marmota');
      return;
    }

    console.log('log', this.form.value);
  }

}
