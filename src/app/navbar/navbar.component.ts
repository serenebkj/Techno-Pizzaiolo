import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  places:string[]=
  [
    "pettah",
    "vanchiyoor",
    "Nalanchira",
    "Vazhuthacaud"
  ]
  constructor(private router:Router){}

  NavigateLogin()
  {
    console.log("login")
    this.router.navigateByUrl('login')
  }
  ngOnInit(): void {
  }

}
