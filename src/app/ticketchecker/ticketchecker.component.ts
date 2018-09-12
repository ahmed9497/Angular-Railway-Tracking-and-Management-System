import { Component, OnInit } from '@angular/core';
import {AllservicesService} from "../services/allservices.service";

@Component({
  selector: 'app-ticketchecker',
  templateUrl: './ticketchecker.component.html',
  styleUrls: ['./ticketchecker.component.css'],
  providers : [AllservicesService]
})
export class TicketcheckerComponent implements OnInit {


  constructor(private trainservice : AllservicesService) { }

  ngOnInit() {
  }

}
