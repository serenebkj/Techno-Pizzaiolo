import { Component, OnInit } from '@angular/core';
import { Bill } from '../bill';
import { AddingService } from '../adding.service';
@Component({
  selector: 'app-fourth-page-bill',
  templateUrl: './fourth-page-bill.component.html',
  styleUrls: ['./fourth-page-bill.component.css']
})
export class FourthPageBillComponent implements OnInit {
  Bill:any;
  constructor(private add:AddingService) {this.GetBill() }

  GetBill(){
    this.add.GetBill().subscribe(data=>
      {
        this.Bill=data
      })
  }
  ngOnInit(): void {
  }
  



}
