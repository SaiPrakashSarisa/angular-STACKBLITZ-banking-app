import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css'],
})
export class SavingsComponent implements OnInit {
  users: any[] = [];

  constructor() {}

  ngOnInit() {}

  userForm = new FormGroup({
    username: new FormControl(''),
    gender: new FormControl(''),
    age: new FormControl(''),
    education: new FormControl(''),
    dob: new FormControl(''),
  });

  get username() {
    return this.userForm.get('username')!.value;
  }
  get gender() {
    return this.userForm.get('gender');
  }

  get age() {
    return Number(this.userForm.get('age')!.value);
  }

  get education() {
    return this.userForm.get('education')!.value;
  }

  get dob() {
    return this.userForm.get('dob')!.value;
  }

  submit() {
    let usersData = this.userForm.value;

    let genderCode = this.gender!.value === 'Male' ? 'M' : 'F';

    let ageCode;
    if (this.age <= 15) {
      ageCode = 'AC';
    } else if (this.age > 15 && this.age <= 30) {
      ageCode = 'AT';
    } else if (this.age > 30 && this.age <= 55) {
      ageCode = 'AM';
    } else {
      ageCode = 'AS';
    }

    let edCode;
    if (this.education === '10th') {
      edCode = 'ES';
    } else if (this.education === 'College') {
      edCode = 'EC';
    } else if (this.education === 'Graduation') {
      edCode = 'EG';
    } else if (this.education === 'Post Graduation') {
      edCode = 'EP';
    } else if (this.education === 'Master') {
      edCode = 'EM';
    } else {
      edCode = 'EN';
    }
    const userdob = usersData.dob;
    const date = userdob!.slice(8);
    const month = userdob!.slice(5, 7);
    const year = userdob!.slice(0, 4);

    const unicode = genderCode + ageCode + edCode + '_' + date + month + year;

    const user = {
      username: this.username,
      gender: this.gender!.value,
      age: this.age,
      education: this.education,
      dob: this.dob,
      code: unicode,
    };

    this.users.push(user);

    console.log(this.users);
  }
}
