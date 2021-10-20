import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CartComponent } from './cart/cart.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminCrudComponent } from './admin-crud/admin-crud.component';
import { RegionCrudComponent } from './region-crud/region-crud.component';
import { LoginComponent } from './login/login.component';
import { AdminGuardGuard } from './admin-guard.guard';

const routes: Routes = [
  {path: '',component:FirstPageComponent},
  {path:'menu',component:SecondPageComponent},
  {path: 'expandedCart',component:ThirdPageComponent},
  {path:'payment',component:FourthPageComponent},
  {path:'signup',component:LoginPageComponent},
  {path:'login',component:LoginComponent},
  {path:'cart',component:CartComponent},
  {path: 'adminLogin', component:AdminloginComponent},
  {path:'regionCrud',component:RegionCrudComponent,canActivate:[AdminGuardGuard]},
  {path:'admincrud',component:AdminCrudComponent,canActivate:[AdminGuardGuard]}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

