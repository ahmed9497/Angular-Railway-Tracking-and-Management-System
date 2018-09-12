import { Component, OnInit } from '@angular/core';
import {AllservicesService} from '../services/allservices.service';

@Component({
  selector: 'app-assignroute',
  templateUrl: './assignroute.component.html',
  styleUrls: ['./assignroute.component.css'],
  providers : [AllservicesService]
})
export class AssignrouteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
