import { Component, OnInit } from '@angular/core';
import {AllservicesService} from '../../services/allservices.service';
import {Reservationofficer} from '../shared/reservationofficer.model';
import { element } from 'protractor';

@Component({
  selector: 'app-reservationofficers-list',
  templateUrl: './reservationofficers-list.component.html',
  styleUrls: ['./reservationofficers-list.component.css']
})
export class ReservationofficersListComponent implements OnInit {

  reservationofficerList : Reservationofficer[];
  reservationofficer : Reservationofficer;
  
  constructor(private reservationofficerservice : AllservicesService) { }

  ngOnInit() {
    this.reservationofficerservice.getReservationOfficerData().subscribe(items => {
        this.reservationofficerList = items;
    })
    
    }

onEdit(reservationofficer :Reservationofficer){
  this.reservationofficerservice.updateTransferReservationOfficer(reservationofficer);

}

onDelete(reservationofficer : Reservationofficer){
this.reservationofficerservice.deleteReservationOfficer(reservationofficer);
}

reset(){
  this.reservationofficer = {  
    id : '',
    name : '',
    Cnic : '',
    ContactNo : '',
    Experience : '',
    Skills : '',
    Education : '',
    BranchName : '',
    Address : '',
    Email : '',
    Password : '',
  }

  this.reservationofficerservice.updateTransferReservationOfficer(this.reservationofficer);

}

}