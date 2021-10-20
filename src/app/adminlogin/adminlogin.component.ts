import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  userName ?: string;
  password? :string;
  formData!: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formData= new FormGroup({
      userName: new FormControl("userName"),
      password: new FormControl("password")
    });
  
  }
  onClickSubmit(data: any){
    this.userName=data.userName;
    this.password=data.password;
    this.authService.login(this.userName,this.password).subscribe(
      data=>{
        console.log("Is Login Success"+ data);
        if(data){
          this.router.navigate(['/admincrud']);
        }
      }
      )
  }
}
