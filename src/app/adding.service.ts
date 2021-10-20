import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuItem } from './menu-item';
import { HttpClient } from '@angular/common/http';
import { Bill } from './bill';
@Injectable({
  providedIn: 'root'
})
export class AddingService {

  public cartItemList: any = [];
  h?: string
  public productList = new BehaviorSubject<any>([]);
  public proob = new Observable<any>();
  constructor(private http: HttpClient) { }

  public Bill = new BehaviorSubject<any>([]);
  total: number = 0;
  url: string = "https://localhost:44343/api/Bill/"
  BillNew: Bill = {
    BillTotal: 0,
    BillTotalWithTax: 0

  };
  getProduct() {
    return this.productList.asObservable();
  }
  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }


  addtoCart(product: any) {

    this.cartItemList?.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)

  }


  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.Price;
    })
    this.total = grandTotal;
    return grandTotal;
  }

  AddBill(total: any) {

    this.BillNew.BillTotal = total;
    this.BillNew.BillTotalWithTax = (total += (total * 16) / 100)

  }

  GetBill(): Observable<Bill> {
    return this.http.post<Bill>(this.url + "BillAdd", this.BillNew);
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.PizzaName === a.PizzaName) {
        this.cartItemList.splice(index, 1);
      }
      this.productList.next(this.cartItemList);
      this.getTotalPrice();
    })

  }
}
