import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { SecondPageComponent } from './second-page/second-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { FirstPageHomePageComponent } from './first-page-home-page/first-page-home-page.component';
import { FirstPageImageComponent } from './first-page-image/first-page-image.component';
import { ThirdPageExtrasCardComponent } from './third-page-extras-card/third-page-extras-card.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { FourthPageAdreesComponent } from './fourth-page-adrees/fourth-page-adrees.component';
import { FourthPageBillComponent } from './fourth-page-bill/fourth-page-bill.component';
import { FourthPageHorizontalBarComponent } from './fourth-page-horizontal-bar/fourth-page-horizontal-bar.component';
import { FourthPageImageComponent } from './fourth-page-image/fourth-page-image.component';
import { FourthPageNavBarComponent } from './fourth-page-nav-bar/fourth-page-nav-bar.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

import { AdminCrudComponent } from './admin-crud/admin-crud.component';
import { RegionCrudComponent } from './region-crud/region-crud.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    //CartComponent,
    NavbarComponent,
    LoginComponent,
    SecondPageComponent,
    FirstPageComponent,
    FirstPageHomePageComponent,
    FirstPageImageComponent,
    ThirdPageExtrasCardComponent,
    ThirdPageComponent,
    FourthPageAdreesComponent,
    FourthPageBillComponent,
    FourthPageHorizontalBarComponent,
    FourthPageImageComponent,
    FourthPageNavBarComponent,
    FourthPageComponent,
    LoginPageComponent,
    CartComponent,
    AdminloginComponent,
    AdminCrudComponent,
    RegionCrudComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
