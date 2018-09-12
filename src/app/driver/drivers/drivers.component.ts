import { Component, OnInit, Input } from '@angular/core';
import {AllservicesService} from '../../services/allservices.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { Driver } from '../shared/driver.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {


  driverU : Driver;
  driver :Driver;
  
  constructor(private route:Router,private driverservice : AllservicesService , private toastr  : ToastrService) { 
     
 
  }

  ngOnInit() {
    
      this.driverservice.castdriver.subscribe(driverr => 
      this.driverU = driverr
  
      );
      this.driver = {   
        id : this.driverU.id, 
        name : this.driverU.name,
        Cnic : this.driverU.Cnic,
        ContactNo:  this.driverU.ContactNo,
        Experience :  this.driverU.Experience,
        LicenseNo :  this.driverU.LicenseNo,
        Education : this.driverU.Education,
        LicenseExpiryDate :  this.driverU.LicenseExpiryDate,
        Address :  this.driverU.Address,
        Email :  this.driverU.Email,
        Password :  this.driverU.Password,
      }
      debugger;
    }

   onSubmit(){    
     if( this.driver.id == ''){
      
      this.driverservice.insertDriver(this.driver);
      this.toastr.success("successfully Added","Congratulation");

    }
    else{     

      this.driverservice.updateDriver(this.driver);
      this.toastr.success("successfully Updated","Congratulation");
     // this.route.navigate(['driverlist']);
      
     }
   }
}
