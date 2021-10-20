import { Component, OnInit } from '@angular/core';
import { InfoGetService } from '../info-get.service';


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor(private regionservice:InfoGetService) { }

  ngOnInit(): void {
  }
  
  
}
