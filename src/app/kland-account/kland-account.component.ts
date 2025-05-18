import { Component } from '@angular/core';

@Component({
  selector: 'app-kland-account',
  templateUrl: './kland-account.component.html',
  styleUrls: ['./kland-account.component.css']
})
export class KlandAccountComponent {
  isLoggedIn = false;
  email = '';
  password = '';

  user = {
    firstName: 'Test',
    lastName: 'Test',
    email: 'test@yopmail.com',
    countryCode: '965',
    phone: '98563214',
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  onLogin() {
    if (this.email && this.password) {
      this.isLoggedIn = true;
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.email = '';
    this.password = '';
  }

  onSave() {
    alert('Profile saved!');
  }
}