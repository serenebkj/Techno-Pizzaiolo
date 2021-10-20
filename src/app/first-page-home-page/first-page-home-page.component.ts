import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Regions } from '../regions';
import { InfoGetService } from '../info-get.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-first-page-home-page',
  templateUrl: './first-page-home-page.component.html',
  styleUrls: ['./first-page-home-page.component.css']
  
})
export class FirstPageHomePageComponent implements OnInit {
 
  regions?:Regions[];
  names?:string[];
  constructor(private router:Router,private regionservice:InfoGetService) { 

    this.GetAllRegions();
  }
  NavigateToMenu()
  {
    console.log("hello")
    this.router.navigateByUrl('menu')
  }
  GetAllRegions()
  {
    this.regionservice.GetRegionTable().subscribe(
      data=> {
        console.log(data)
        console.log("hello")
        this.regions=data;}
      
    );
  }


  ngOnInit(){
  }

}
