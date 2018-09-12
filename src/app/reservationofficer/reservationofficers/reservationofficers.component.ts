import { Component, OnInit } from '@angular/core';
import {AllservicesService} from '../../services/allservices.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { Reservationofficer } from '../shared/reservationofficer.model';

@Component({
  selector: 'app-reservationofficers',
  templateUrl: './reservationofficers.component.html',
  styleUrls: ['./reservationofficers.component.css']
})
export class ReservationofficersComponent implements OnInit {

  reservationofficer :Reservationofficer;
  reservationofficerU : Reservationofficer;

  constructor(private reservationofficerservice : AllservicesService , private toastr  : ToastrService) { }

    ngOnInit() {
    
      this.reservationofficerservice.castreservationofficer.subscribe(items => 
      this.reservationofficerU = items
          );
      this.reservationofficer = {   
        id : this.reservationofficerU.id,
        name : this.reservationofficerU.name,
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
  }

  onSubmit(){
    if(this.reservationofficer.id == ''){
    this.reservationofficerservice.insertReservationOfficer(this.reservationofficer);
    this.toastr.success("successfully Added","Congratulation");
    
  }
    else{
      this.reservationofficerservice.updateReservationOfficer(this.reservationofficer);
      this.toastr.success("successfully Updated");
      
    }
  }

}
