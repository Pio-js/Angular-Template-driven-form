import { Component } from '@angular/core';
import { FormControl, NgForm, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //REACTIVE FORM
  form: any;
  emailRegex: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
  contactRegex: string = "[0-9][0-9]{10}";

  constructor(fb: FormBuilder) {

    //using 'FormBuilder'
    //this is the same as below
    this.form = fb.group({
      fullName: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],

      email: ['', [
        Validators.required,
        Validators.pattern(this.emailRegex)
      ]],

      contactDetails: fb.group({
        address: ['', Validators.required],
        shippingAddress: ['', Validators.required],
        contactNumber: ['', [
          Validators.required,
          Validators.pattern(this.contactRegex)
        ]]
      }),

      skills: fb.array([])
    })

    //this is another version without 'FormBuilder'.
    /* this.form = new FormGroup({
      fullName: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
        ]),
      email: new FormControl('',[
        Validators.required,
        Validators.pattern(this.emailRegex)
        ]),
      //creating a nested form group
      contactDetails: new FormGroup({
        address: new FormControl('', Validators.required),
        shippingAddress: new FormControl('', Validators.required),
        contactNumber: new FormControl('', [
          Validators.required,
          Validators.pattern(this.contactRegex)
        ])
      }),

      skills: new FormArray([])
    }); */
  }

  get fullNameR() {
    return this.form.get('fullName');
  }

  get emailR() {
    return this.form.get('email');
  }

  get addressR() {
    return this.form.get('contactDetails.address');
  }

  get shippingAddressR() {
    return this.form.get('contactDetails.shippingAddress');
  }

  get contactNumberR() {
    return this.form.get('contactDetails.contactNumber');
  }

  get skillsR() {
    return this.form.get('skills') as FormArray;
  }

  onSubmitR() {
    console.log(this.form.value);
  }

  addSkills(skills: HTMLInputElement) {
    this.skillsR.push(
      new FormControl(skills.value)
    );

    skills.value = '';

    console.log(this.form.value);
  }

  removeSkills(index: number) {
    this.skillsR.removeAt(index);
  }


  //TEMPLATE-DRIVEN FORM

  onSubmit(f:NgForm) {
    console.log(f.value);
  }

  getValue(f:FormControl) {
    console.log(f);
  }
}
