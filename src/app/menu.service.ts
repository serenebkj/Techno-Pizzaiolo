import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from './menu-item';

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  url:string="https://localhost:44343/api/Menu"
  constructor(private http:HttpClient) { }

  GetMenu():Observable<MenuItem[]>{
    return this.http.get<MenuItem[]>("https://localhost:44343/api/Menu/GetMenu");
  }
  
  GetItem(id:number):Observable<MenuItem>{
    return this.http.get<MenuItem>(this.url+"/GetItem/"+id);
  }

}
