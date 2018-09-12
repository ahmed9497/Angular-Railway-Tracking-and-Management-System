import { Component, OnInit } from '@angular/core';
import {AllservicesService} from "../services/allservices.service";

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css'],
  providers : [AllservicesService]
})
export class TrainComponent implements OnInit {

  constructor(private trainservice : AllservicesService) { }

  ngOnInit() {
  }

}
