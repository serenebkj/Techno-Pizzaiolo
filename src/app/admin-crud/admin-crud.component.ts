import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-admin-crud',
  templateUrl: './admin-crud.component.html',
  styleUrls: ['./admin-crud.component.css']
})
export class AdminCrudComponent implements OnInit {


  isDisabled?:boolean;

  constructor(private router:Router,private auth:AuthService) {
    
  }

  ngOnInit(): void {
  }
  // get isAdmin() {
  //   return this.user && this.user.role === Role.Admin;
  // }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('')
  }
 
  NavigateToRegionCrud(){
    this.router.navigateByUrl('regionCrud')
  }
}
