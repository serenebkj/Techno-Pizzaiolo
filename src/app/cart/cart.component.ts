import { Component, Input, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AddingService } from '../adding.service';
import { MenuItem } from '../menu-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  grandTotal?: number;

  PizzaCart?: any[];
  public productList = new BehaviorSubject(this.PizzaCart);
  Pizzaset: any;
  pizzaName: any;
  public products: any = [];

  constructor(private add: AddingService, private router: Router) {

  }
  NavigateToBill() {
    this.add.AddBill(this.grandTotal)
    this.router.navigateByUrl('payment')
  }

  removeItem(item: any) {
    this.add.removeCartItem(item);
  }
  ngOnInit(): void {

    this.add.getProduct()
      .subscribe(res => {
        this.products = res;
        this.grandTotal = this.add.getTotalPrice();
        console.log(this.products);
      })



  }
}


