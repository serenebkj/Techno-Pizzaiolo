import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url="https://localhost:44343/api/Customer/"
  PhoneNumber=0;
 

  constructor(private http:HttpClient) { }

  InsertOrder(cus:Customer):Observable<boolean>
  {
    console.log("service")
    this.PhoneNumber=cus.MobileNumber;
    return this.http.post<boolean>(this.url+"PostCustomer",cus)
    
  }
  GetCustomer(number:number):Observable<Customer>{
    this.PhoneNumber=number;
    return this.http.get<Customer>(this.url+"GetCustomerByNumber/"+number);
  }
  GetCurrentNumber()
  {
    return this.PhoneNumber;
  }
  GetCustomerForAdress(Customer:Customer)
    {
      this.GetCustomer(Customer.MobileNumber).subscribe(data=>{
        Customer.FirstName=data.FirstName;
        Customer.LastName=data.LastName;
        Customer.Email=data.Email;
        Customer.Adress=data.Adress;
        Customer.HouseNumber=data.HouseNumber;
      })

    }
    
  }


