import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css'],
})
export class SavingsComponent implements OnInit {

  userForm : FormGroup|undefined;
  constructor(private fb : FormBuilder) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      username : new FormControl(''),
      gender : new FormControl(''),
      age : new FormControl(''),
      education : new FormControl(''),
      dob : new FormControl('')
    })

    }
  }
}
