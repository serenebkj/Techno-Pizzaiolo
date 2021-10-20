import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';
import { Submitted } from './submitted';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();

  constructor() { }

  sendmsg(submitted:Submitted)
  {
    this.subject.next(submitted)
    
  }

  getmesg(){}
  // :Observable<Submitted[]>
  // {
  //   let submit:Observable<any>;
  //   return submit;
  // }
}
