import { Component, OnInit } from '@angular/core';
import {
  Validators,
  ValidationErrors,
  ValidatorFn,
  FormArray,
} from '@angular/forms';
import {
  FormGroup,
  FormControl,
  FormControlName,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  users: any[] = [];

  title = 'User Registration Form';
  data: Object = {};

  constructor(private route: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  OnInit() {}
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
      // address: new FormControl('', [
      //   Validators.required,
      //   Validators.pattern('^[^\\s].*'),
      // ]),
      address: new FormArray([this.createAddressGroup()]),
    },
    { validators: this.confirmPassword }
  );

  createAddressGroup(): FormGroup {
    return new FormGroup({
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required]),
    });
  }

  get address(): FormArray {
    return this.registerForm.get('address') as FormArray;
  }

  addAddress(): void {
    const addressGroup = this.createAddressGroup();
    this.address.push(addressGroup);
  }

  removeAddress(index: number): void {
    this.address.removeAt(index);
  }

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

  // get address() {
  //   return this.registerForm.get('address');
  // }

  get street() {
    return this.address.at(0).get('street');
  }

  get city() {
    return this.address.at(0).get('city');
  }

  get state() {
    return this.address.at(0).get('state');
  }

  get zip() {
    return this.address.at(0).get('zip');
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

    if (this.registerForm.valid) {
      console.log(this.registerForm.value);

      const user = {
        firstName: this.firstname!.value,
        lastName: this.lastname!.value,
        userName: this.username!.value,
        email: this.email!.value,
        password: this.password!.value,
        address: {
          street: this.street?.value,
          city: this.city?.value,
          state: this.state?.value,
          zip: this.zip?.value,
        },
      };

      console.log('The Created object is ', user);

      const userData = localStorage.getItem('userData');
      this.users = userData ? JSON.parse(userData) : [];

      this.users.push(user);

      localStorage.setItem('userData', JSON.stringify(this.users));

      this.route.navigate(['/login']);
    } else {
      console.log('invalid form');
    }
  }
}
