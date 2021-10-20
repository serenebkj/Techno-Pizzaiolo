import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}

 canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
       let url: string = state.url;
 
           return this.checkLogin(url);
       }
       checkLogin(url: string): true | UrlTree {
        console.log("Url: " + url)
        let val: any = "";
        val=localStorage.getItem('isUserLoggedIn');

        if(val != null && val == "true"){
           if(url == "/adminLogin")
              this.router.parseUrl('/expenses');
           else 
              return true;
        } else {
           return this.router.parseUrl('/adminLogin');
        }
        return this.router.parseUrl('/adminLogin');

     }
  
}
