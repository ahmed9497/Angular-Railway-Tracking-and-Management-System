import { Component, OnInit } from '@angular/core';
import {AllservicesService} from "../services/allservices.service";

@Component({
  selector: 'app-reservationofficer',
  templateUrl: './reservationofficer.component.html',
  styleUrls: ['./reservationofficer.component.css'],
  providers : [AllservicesService]
})
export class ReservationofficerComponent implements OnInit {

  constructor(private trainservice : AllservicesService) { }

  ngOnInit() {
  }

}
