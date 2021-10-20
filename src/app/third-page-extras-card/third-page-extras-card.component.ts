import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third-page-extras-card',
  templateUrl: './third-page-extras-card.component.html',
  styleUrls: ['./third-page-extras-card.component.css']
})
export class ThirdPageExtrasCardComponent implements OnInit {

  constructor(private router:Router) { }
  NavigateToPayment()
  {
    console.log("hello")
    this.router.navigateByUrl('payment')
  }

  ngOnInit(): void {
  }

}
