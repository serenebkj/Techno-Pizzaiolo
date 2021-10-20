import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Regions } from './regions';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoGetService {
  url:string="https://localhost:44343//api/Regions"

  constructor(private http:HttpClient) { }
  
  GetRegionTable(): Observable<Regions[]> {
    return this.http.get<Regions[]>("https://localhost:44343//api/Regions/getAllRegions");
  }
  GetRegionById(regionId:number):Observable<Regions>{
    return this.http.get<Regions>("https://localhost:44343//api/Regions/getRegionById/"+regionId);
  }

  InsertRegion(region : Regions):Observable<Regions> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Regions>(this.url+"/insertRegion" , region,httpOptions);
  }
  UpdateRegion(region : Regions):Observable<Regions> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put(this.url+"/UpdateRegion/" + region.id,region,httpOptions);
  }
  DeleteRegion(regionId : number) : Observable<Regions>{
    return this.http.delete(this.url+'/deleteRegion/'+regionId);
  }

}
