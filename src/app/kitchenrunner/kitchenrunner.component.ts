import { Component, OnInit } from '@angular/core';
import {AllservicesService} from "../services/allservices.service";

@Component({
  selector: 'app-kitchenrunner',
  templateUrl: './kitchenrunner.component.html',
  styleUrls: ['./kitchenrunner.component.css'],
  providers : [AllservicesService]
})
export class KitchenrunnerComponent implements OnInit {

  constructor(private trainservice : AllservicesService) { }

  ngOnInit() {
  }

}
