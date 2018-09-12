import { Component, OnInit } from '@angular/core';
import {AllservicesService} from '../../services/allservices.service';
import {Driver} from '../shared/driver.model';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  driverList : Driver[];
  driverU : Driver;
  driver : Driver;
  
  constructor(private driverservice : AllservicesService) { }

  ngOnInit() {

    var x =this.driverservice.getDriverData().subscribe(items => {
      this.driverList = items;
    });

    // this.driverservice.getDriverData().subscribe()
    // // x.snapshotChanges().subscribe(item =>{
    //     this.driverList = [];
    //     item.forEach(element => {
    //       var y = element.payload.toJSON(); 
    //       y["$key"] = element.key;
    //       this.driverList.push(y as Driver);
    //     });
    // });
}

onEdit(driver : Driver){
  this.driverservice.updateTransfer(driver);
}

onDelete(driver : Driver){
this.driverservice.deleteDriver(driver);
}

reset(){
  this.driver = {  
    id:'',  
    name : '',
    Cnic : '',
    ContactNo: '',
    Experience : '',
    LicenseNo : '',
    Education : '',
    LicenseExpiryDate : '',
    Address : '',
    Email : '',
    Password : ''
  }

  this.driverservice.updateTransfer(this.driver);

}


}
