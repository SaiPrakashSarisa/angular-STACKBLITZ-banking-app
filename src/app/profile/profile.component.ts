import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: any = {};

  constructor() {}

  ngOnInit() {
    const user = localStorage.getItem('currentUser');
    // this.user = user ? JSON.parse(user) : {};
    if (user) {
      try {
        const parsedData = JSON.parse(user);

        if (parsedData && parsedData.address) {
          const address = parsedData.address;
          const street = address.street;
          const city = address.city;
          const state = address.state;
          const zip = address.zip;

          this.user = user ? parsedData : {};
          this.user = { ...this.user, street, city, state, zip };

          // console.log(street, city, state, zip);
          console.log(this.user);
        } else {
          console.log('Address data not found or invalid');
        }
      } catch (error) {
        console.log('Error parsing data:', error);
      }
    } else {
      console.log('Data not found in local storage');
    }
  }
}
