import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  submit:boolean=false; 
  number:any;
  displayTable=false;
  Customer:Customer=
  {
    FirstName:"",
    LastName:"",
    Adress:"",
    Email:"",
    HouseNumber:0,
    MobileNumber:0
  };
    //Create FormGroup
    requiredForm!: FormGroup;
    constructor(private fb: FormBuilder,private customerService:CustomerService,private router:Router) {
       this.myForm();
    }
 
    //Create required field validator for name
    myForm() {
       this.requiredForm = this.fb.group({
       number: ['', [Validators.required, Validators.pattern("[0-9 ]{10}")] ]
       });
    }

    onSubmit(){
      this.submit = true;
      if(this.requiredForm?.invalid){
        return;
      }
      alert("Success");
    }
    NavigateToPayment()
  {
    console.log("hello")
    this.router.navigateByUrl('payment')
  }

    searchForDetails(number:number)
    {
      this.customerService.GetCustomer(number).subscribe(data=>
        {
          this.Customer.FirstName=data.FirstName;
          this.Customer.LastName=data.LastName;
          this.Customer.Email=data.Email;
          this.Customer.Adress=data.Adress;
          this.Customer.HouseNumber=data.HouseNumber;
        });
        if(this.Customer.FirstName!="")
        {
          this.displayTable=true;
        }
    }
  
  

  ngOnInit(): void {
   

  }

  

}
