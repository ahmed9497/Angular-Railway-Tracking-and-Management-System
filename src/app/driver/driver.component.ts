import { Component, OnInit } from '@angular/core';
import {AllservicesService} from "../services/allservices.service";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css'],
  providers : [AllservicesService]
})
export class DriverComponent implements OnInit {

  constructor(private driverservice : AllservicesService) { }

  ngOnInit() {
  }

}
