import { Component, OnInit } from '@angular/core';
import {AllservicesService} from '../../services/allservices.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { Reservationofficer } from '../../reservationofficer/shared/reservationofficer.model';
import { Kitchenrunner } from '../shared/kitchenrunner.model';

@Component({
  selector: 'app-kitchenrunners',
  templateUrl: './kitchenrunners.component.html',
  styleUrls: ['./kitchenrunners.component.css']
})
export class KitchenrunnersComponent implements OnInit {


  kitchenrunner : Kitchenrunner;
  kitchenrunnerU : Kitchenrunner;

  constructor(private kitchenrunnerservice : AllservicesService , private toastr  : ToastrService) { }

  ngOnInit() {
    this.kitchenrunnerservice.castkitchenrunner.subscribe(kitchenrunner => 
      this.kitchenrunnerU = kitchenrunner
      );
      this.kitchenrunner = {   
        id : this.kitchenrunnerU.id,
        name : this.kitchenrunnerU.name,
        Cnic :  this.kitchenrunnerU.Cnic,
        ContactNo: this.kitchenrunnerU.ContactNo,
        Experience :  this.kitchenrunnerU.Experience,
        BestReceipe :  this.kitchenrunnerU.BestReceipe,
        Address :  this.kitchenrunnerU.Address,
        Email :  this.kitchenrunnerU.Email,
        Password :  this.kitchenrunnerU.Password,
      }

  }

  onSubmit(){
    if(this.kitchenrunner.id == ''){
    this.kitchenrunnerservice.insertKitchenRunner(this.kitchenrunner);
    this.toastr.success("successfully Added","Congratulation");
    
  }
    else{
      this.kitchenrunnerservice.updateKitchenRunner(this.kitchenrunner);
      this.toastr.success("successfully Updated");
      
    }
  }

}
