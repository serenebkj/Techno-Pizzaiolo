import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fourth-page-adrees',
  templateUrl: './fourth-page-adrees.component.html',
  styleUrls: ['./fourth-page-adrees.component.css']
})
export class FourthPageAdreesComponent implements OnInit {

  PhoneNumber:any=0;
  Customer:Customer=
  {
    FirstName:"",
    LastName:"",
    Adress:"",
    Email:"",
    HouseNumber:0,
    MobileNumber:this.PhoneNumber
  };
 
  constructor(private customerService:CustomerService,private router:Router) {
    this.GetCustomerNumber()
    this.GetCustomerInfo()

   }

  ngOnInit(): void {
  }

  GetCustomerNumber()
  {
    this.PhoneNumber=this.customerService.GetCurrentNumber();
  }

  GetCustomerInfo()
  {
    this.customerService.GetCustomer(this.PhoneNumber).subscribe(data=>
      {
        this.Customer.FirstName=data.FirstName;
        this.Customer.LastName=data.LastName;
        this.Customer.Email=data.Email;
        this.Customer.Adress=data.Adress;
        this.Customer.HouseNumber=data.HouseNumber;
      });
  }
  NavigateLogin()
  {
    console.log("login")
    this.router.navigateByUrl('login')
  }
  NavigateSignUp()
  {
    console.log("login")
    this.router.navigateByUrl('signup')
  }
  


}
