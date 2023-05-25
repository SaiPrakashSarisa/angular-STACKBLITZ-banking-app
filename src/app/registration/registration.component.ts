import { Component, OnInit } from '@angular/core';
import { Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import {
  FormGroup,
  FormControl,
  FormControlName,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  title = 'User Registration Form';
  data: Object = {};

  registerForm = new FormGroup(
    {
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern('^[^\\s].*'),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern('^[^\\s].*'),
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.pattern('^[^\\s].*'),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^[^\\s].*'),
      ]),
      repassword: new FormControl('', [Validators.required]),
      contact: new FormControl('', [
        Validators.required,
        Validators.pattern('[6-9]{1}[0-9]{9}'),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.pattern('^[^\\s].*'),
      ]),
    },
    { validators: this.confirmPassword }
  );

  get firstname() {
    return this.registerForm.get('firstname');
  }

  get lastname() {
    return this.registerForm.get('lastname');
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get repassword() {
    return this.registerForm.get('repassword');
  }

  get contact() {
    return this.registerForm.get('contact');
  }

  get address() {
    return this.registerForm.get('address');
  }

  confirmPassword(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('repassword');

    if (password?.value === confirmPassword?.value) {
      return null;
    } else {
      return { confirmPassword: true };
    }
  }

  registerUser() {
    console.log(this.registerForm.value);
    console.log(this.registerForm);
    console.log(this.firstname?.value);
  }
}
