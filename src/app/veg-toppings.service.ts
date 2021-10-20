import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Toppings } from './toppings';

@Injectable({
  providedIn: 'root'
})
export class VegToppingsService {

  url:string="https://localhost:44343/api/VegToppings"
  constructor(private http:HttpClient) { }

  GetVegtoppingsMenu():Observable<Toppings[]>{
    console.log("hi");
    return this.http.get<Toppings[]>("https://localhost:44343/api/VegToppings/api/GetVegToppingsTb");
  }
}
