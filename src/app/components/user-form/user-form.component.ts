import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { noSpace } from 'src/app/validators/nospace.validators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  form: any;

  constructor(fb:FormBuilder) {
    this.form = fb.group({
      username: ['', [
        Validators.required,
        Validators.minLength(5),
        noSpace.noSpaceValidations
      ]],
      password: ['', Validators.required]
    })
  }

  get fc() {
    return this.form.controls;
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
