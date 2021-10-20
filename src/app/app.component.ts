import { Component } from '@angular/core';
import { Submitted } from './submitted';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PizzaMenu';
  
  constructor() {

}

// get isAdmin() {
//     return this.user && this.user.role === Role.Admin;
// }

// logout() {
//     this.authenticationService.logout();
// }

}
