import { Component, OnInit } from '@angular/core';
import {AllservicesService} from '../../services/allservices.service';
import {Passenger} from '../shared/passenger.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-reservationform',
  templateUrl: './reservationform.component.html',
  styleUrls: ['./reservationform.component.css']
})
export class ReservationformComponent implements OnInit {
  name:string;
  reservedseats : any[];
  passingreservedseats : string[];
  passenger : Passenger;
  train_id : any;
  date : any;
  passengerseats : any[];
  passengerreeservedseats : string[]
  
  constructor(private service : AllservicesService, private  toastr : ToastrService ) {
    this.service.castReservedSeats.subscribe(items => 
      this.reservedseats = items
          );
          this.service.castTrainid.subscribe(i => {
            this.train_id = i;
          })
      
         this.service.castdate.subscribe(i => {
          this.date = i;
        })
        this.service.castepassengerreserve.subscribe(i => {
          this.passengerseats = i;
        })
       //console.log(this.train_id);
          // this.reservedseats.forEach((i,index) => {
          //   this.passingreservedseats[index] = i.toString();
          // })
      
  
   }

  ngOnInit() {
    this.passingreservedseats = this.reservedseats.map(function(value) {
      return String(value);
     });
     this.passengerreeservedseats = this.passengerseats.map(function(value) {
      return String(value);
     });
    this.passenger = {   
      id : '',
      name : '',
      Cnic : '',
      ContactNo : '',
      Address : '',
      seats : this.passengerreeservedseats,
      train_id : this.train_id,
      date : this.date,
      route_id : ''
    }
   
  }

  onSubmit(){

    console.log(this.passenger.name)
    if(this.passenger.id == ''){
    this.service.insertpassenger(this.passenger,this.passingreservedseats);
    this.toastr.success("successfully Added","Congratulation");
    
  }

  }
}
