import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

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

  ngOnInit(): void {
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
      console.warn('form is not valid!');
      return;
    }

    console.log('log', this.form.value);
  }

}
