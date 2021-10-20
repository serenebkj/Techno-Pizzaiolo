import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Region } from './region';
import { HttpHeaders } from '@angular/common/http';
import { Regions } from './regions';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  url:string="https://localhost:44339/api/tbRegion";
  constructor(private http : HttpClient) { }

  GetAllRegions():Observable<Regions[]>{
    return this.http.get<Regions[]>("https://localhost:44339/api/tbRegion/getAllRegions");
  }
}
