import { Component, Input, OnInit } from '@angular/core';
import { Submitted } from '../submitted';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MessengerService } from '../messenger.service';
import { MenuService } from '../menu.service';
import { MenuItem } from '../menu-item';
import { AddingService } from '../adding.service';
import { ThirdPageExtrasCardComponent } from '../third-page-extras-card/third-page-extras-card.component';
import { VegToppingsService } from '../veg-toppings.service';
import { Toppings } from '../toppings';
import { NonVegToppingsService } from '../non-veg-toppings.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu?:MenuItem[];
  sizes:string[]=["small","medium","large"]
  medium="medium"
  crusts:string[]=["hand tossed","cheese Burst","fresh pan pizza","100% wheat thin crust"]
   i:number=0;
   PizzaName?: any;
   isItemAdded=false;
   submit:any;
   addCheese?=false;
   Customize:any;
   CustomizeName:any;
   CustomizePrice:number=0;
   sizeAddition:string="size";
   crustAddition:any;
   orginalPrice:any;
   newOrginal:any;
   menuItem:MenuItem={
     id:0,
     PizzaName:"",
     Price:0,


   };
   
 

   vegToppings?:Toppings[];
   nonVegToppings?:Toppings[];


  

  ngOnInit(): void 
  { let submit:Submitted;
    
  }
  constructor(private menuService:MenuService, private router:Router, 
    private add:AddingService, private vegTop:VegToppingsService, private nonVegTop:NonVegToppingsService)
  {
    this.GetAllMenuItems()
    this.GetAllVegToppingsItem();
    this.GetAllNonVegToppingsItem();
  }
  GetAllMenuItems()
  {
    this.menuService.GetMenu().subscribe(
      data=>
      {
        this.menu=data;
      }
    )

  }
  GetAllVegToppingsItem()
  {
    this.nonVegTop.GetNonVegToppingsMenu().subscribe(data=>
      {
        this.vegToppings=data;
      })

  }
  GetAllNonVegToppingsItem()
  {
    this.vegTop.GetVegtoppingsMenu().subscribe(data=>
      {
        this.nonVegToppings=data;
      })

  }
  menutable=this.menu;
  NavigateToExpandedCart()
  {
    console.log("hello")
    this.router.navigateByUrl('expandedCart')
  }
  AddtoCart(name:string,price:number)
  {      
    let menuItem:MenuItem={
      id:0,
      PizzaName:"",
      Price:0,
      
 
    };
    menuItem.PizzaName=name;
    menuItem.Price=price;

    
    
    this.add.addtoCart(menuItem);
       
    }

    cheeseTick(){
      this.addCheese=!this.addCheese;
      if(this.addCheese)
      {
        this.CustomizePrice+=75;
      }
      else
      {
        this.CustomizePrice-=75;
      }
    }
    vegToppingsTick(item:any){
      item.added=!item.added;
      if(item.added)
      {
        this.CustomizePrice+=60;
      }
      else
      {
        this.CustomizePrice-=60;
      }
    }
    nonVegToppingsTick(item:any){
      item.added=!item.added;
      if(item.added)
      {
        this.CustomizePrice+=75;
      }
      else
      {
        this.CustomizePrice-=75;
      }
    }

    displayCUstomize(items:any)
    { this.addCheese=false; 
      this.CustomizeName=items.PizzaName;
      this.CustomizePrice=items.Price;
      this.orginalPrice=items.Price;
      this.newOrginal=items.Price;

    }

    priceChange(event:any)
    {

      this.crustAddition="hand tossed"
      this.CustomizePrice=this.orginalPrice
      if( this.sizeAddition==="small")
      {
        this.CustomizePrice=this.orginalPrice;
        this.newOrginal=this.CustomizePrice;

      }
      
      else if ( this.sizeAddition==="large")
      {
        this.CustomizePrice+=200;
        this.newOrginal=this.CustomizePrice;
      }
      else if(this.sizeAddition==="medium")
      {
        this.CustomizePrice+=100;
        this.newOrginal=this.CustomizePrice;
      }
      
    }
    priceChangeForCrust(event:any)
    {
      this.CustomizePrice=this.newOrginal
      if (this.crustAddition==="cheese Burst")
      {
        this.CustomizePrice+=150;
      }
      else if(this.crustAddition==="fresh pan pizza")
      {
        this.CustomizePrice+=100;
      }
      else if(this.crustAddition==="100% wheat thin crust")
      {
        this.CustomizePrice+=50;
      }
    }
    
   

    
    
  }
 
  
