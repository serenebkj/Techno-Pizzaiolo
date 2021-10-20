import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Toppings } from './toppings';

@Injectable({
  providedIn: 'root'
})
export class NonVegToppingsService {

  
  url:string="https://localhost:44343/api/NonVegToppings"
  constructor(private http:HttpClient) { }

  GetNonVegToppingsMenu():Observable<Toppings[]>{
    console.log("hi");
    return this.http.get<Toppings[]>(this.url+"/GetNonVegToppingsTable");
  }
}
