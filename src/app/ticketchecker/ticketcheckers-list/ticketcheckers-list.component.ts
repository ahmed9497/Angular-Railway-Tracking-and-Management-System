import { Component, OnInit } from '@angular/core';
import { Ticketchecker } from '../shared/ticketchecker.model';
import {AllservicesService} from '../../services/allservices.service';
import { element } from 'protractor';

@Component({
  selector: 'app-ticketcheckers-list',
  templateUrl: './ticketcheckers-list.component.html',
  styleUrls: ['./ticketcheckers-list.component.css']
})
export class TicketcheckersListComponent implements OnInit {

  ticketcheckerList :Ticketchecker[];
  ticketcheckerU :Ticketchecker;
  ticketchecker :Ticketchecker;

  constructor(private ticketcheckerservice : AllservicesService) { }

  ngOnInit() {
    var x =this.ticketcheckerservice.getTicketCheckerData().subscribe(items => {
      this.ticketcheckerList = items;
    });
}

onEdit(ticketchecker :Ticketchecker){
  this.ticketcheckerservice.updateticketcheckerTransfer(ticketchecker);
}

onDelete(ticketchecker : Ticketchecker){
this.ticketcheckerservice.deleteTicketChecker(ticketchecker);
}

reset(){
  this.ticketchecker = {  
    id : '',
    name : '',
    Cnic : '',
    ContactNo: '',
    Experience : '',
    Skills : '',
    Education : '',
    Address : '',
    Email : '',
    Password : '',
  }

  this.ticketcheckerservice.updateticketcheckerTransfer(this.ticketchecker);

}
}
