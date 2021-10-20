import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit 
{
  registerForm! : FormGroup;
  submit: boolean = false;
  firstName:string="";
  lastName?:string;
  email:any;
  address:any;
  housenumber?:number;
  number:any;
  insertbool:any;
  Customer:Customer=
  {
    FirstName:"",
    LastName:"",
    Adress:"",
    Email:"",
    HouseNumber:0,
    MobileNumber:0
  };
  constructor(private formBuilder : FormBuilder, private customerService:CustomerService,private router:Router) { this.myForm()};

  ngOnInit(): void {
    

}
myForm()
{
  this.registerForm = this.formBuilder.group({
    firstName :['',Validators.required],
    lastName : ['',Validators.required],
    email : ['',[Validators.required,Validators.email]],
    address : ['',Validators.required],
    housenumber :['',[Validators.required,Validators.pattern("[0-9 ]{3}")]],
    number: ['',[Validators.required, Validators.pattern("[0-9 ]{10}")] ]
    
    
}
  );
}
NavigateToPayment()
  {
    console.log("hello")
    this.router.navigateByUrl('payment')
  }
get getForm(){
  return this.registerForm.controls;
}
// onReset(){
//   this.submitted = false; 
//   this.registerForm.reset();
// }

onSubmit(){
  this.submit = true;
  if(this.registerForm?.invalid){

    console.log(this.firstName)
    console.log(this.lastName)
    console.log(this.address);
    console.log(this.email);
    console.log(this.housenumber)
    console.log(this.number)
    return;
  }
  
  alert("Success");
}
StoreValue()
  {
  let Customer:Customer=
  {
    FirstName:"",
    LastName:"",
    Adress:"",
    Email:"",
    HouseNumber:0,
    MobileNumber:0
  };
    this.Customer.FirstName=this.firstName;
    this.Customer.LastName=this.lastName;
    this.Customer.MobileNumber=this.number;
    this.Customer.Email=this.email;
    this.Customer.Adress=this.address;
    this.Customer.HouseNumber=this.housenumber;

    this.customerService.InsertOrder(this.Customer).subscribe(data=>
      {
        this.insertbool=data;
      });

      



    
    
  }


}

