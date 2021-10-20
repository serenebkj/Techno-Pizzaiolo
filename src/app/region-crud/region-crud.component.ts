import { Component, OnInit } from '@angular/core';
import { Regions } from '../regions';
import { InfoGetService } from '../info-get.service';
@Component({
  selector: 'app-region-crud',
  templateUrl: './region-crud.component.html',
  styleUrls: ['./region-crud.component.css']
})
export class RegionCrudComponent implements OnInit {
  isDisabled?:boolean=true;
  regionId?:number;
  regionName?:string;
  regionDetails?:Regions[];
  regionDetail?:any;
  x?:any;
  stringData?:any;
  constructor(private infoGetServ:InfoGetService ) {
    this.GetAllRegionDetails();
   }

  ngOnInit(): void {
  }
  
  

  OnregionIdValueChanged(event:any){
    console.log("region id is this")
    this.regionDetail.id=this.regionId;
  }
  OnRegionNameValueChanged(event: any){
    this.regionDetail.RegionName=this.regionName;
  }
  GetAllRegionDetails(){
    this.infoGetServ.GetRegionTable().subscribe(
      data=>{
        this.regionDetails=data;
      }
    )
  }
  GetRegionDetailsById(id : any){
    this.infoGetServ.GetRegionById(id).subscribe(
      data => {
        this.regionDetail = data;
        console.log(data);

        this.x=data;
        this.stringData=JSON.stringify(data);
        console.log(this.x);

        this.regionId = this.x[0].id;
        console.log(data.id)
        this.regionName = this.x[0].RegionName; 
        
      }
    );
    this.isDisabled = false;
  }
  UpdateRegion(region : any){
    let regionData : Regions = {
        id : this.regionId,
        RegionName : this.regionName
    }; 
    
    this.infoGetServ.UpdateRegion(regionData).subscribe(
      data => {
       this.GetAllRegionDetails;
      }
    );
  }
  InsertRegion(){
    let regData:Regions=
    {
      id:this.regionId,
      RegionName:this.regionName,
      
    }
    this.infoGetServ.InsertRegion(regData).subscribe(
      data => {
       this.GetAllRegionDetails;
      }
    );
    
  }
  DeleteRegionDetails(regionId : any){
    this.infoGetServ.DeleteRegion(regionId).subscribe(
      data => {}
    );
    this.infoGetServ.GetRegionTable().subscribe(
      data => {
       this.regionDetails = data;
      }
    );
  }
}
