import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AllservicesService} from '../services/allservices.service';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {TRY} from '../../app/assignroute/shared/try.model';
import {TrainRouteModel} from '../../app/train/shared/trainroutemodel.model';
import { Observable } from 'rxjs';
import { Driver } from '../../../node_modules/@types/selenium-webdriver/safari';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  person:string;  
  cnic:string;  
  pass:string;
  arr:AngularFirestoreCollection<any>;
  array:Observable<any[]>;
  tr:any[];
  temp : any[];
  tempany : any[];
  constructor(private afs:AngularFirestore,private services : AllservicesService,private router:Router) { }

  ngOnInit() {
    // this.afs.collection('drivers').valueChanges().subscribe(changes=>{
    //   this.array=changes;
    //   this.array.valuecha
    // });
    // this.getTrainRouteoftrain();
    // this.services.getIfDriverData().subscribe(i => {
    //   this.tempany = i;
    // });
  
  }

  onSubmit(){
  console.log("it is calling");
  console.log(this.person +"     Password = "+this.pass+" CNIC= "+this.cnic,this.person);

  this.services.getProfile(this.cnic,this.pass,this.person);
    if(this.person == 'drivers'){
      console.log('driver');
    this.router.navigate(['home/profile']); 
    }
    else if (this.person =='reservationofficer'){
      console.log('Reservation officer');
      this.router.navigate(['home/ronavbar']);
    }
    else if (this.person =='admin'){
      console.log('Admin');
      this.router.navigate(['home/login/dashboard']);
    }
    else if (this.person =='ticketcheckers'){
      console.log('Ticket Checker');
      this.router.navigate(['home/tcprofile']);
    }
    else if (this.person=='kitchenrunners'){
      console.log('Kitchen Runner');
      this.router.navigate(['home/krprofile']);
    }
    

  
}

// getTrainRouteoftrain(){
//   // this.services.getTrainRoutes().subscribe(i=>{
//   //   this.tr = i;
//   // });
//   this.services.getTrainRoutes().forEach(element => {
//     console.log(element);
//   });
//     console.log("this is TR "+this.tr);

//     this.tr= this.services.getdataofroute();
    
// } 




// myFunction(ll:TRY){
//   console.log(ll.id);
// }


  //this.router.navigate(['home/profile']);
  // if(user.email == "admin@gmail.com")
  // this.services.login(user.email,user.password);
  // else
  // this.service.login2(user.email,user.password);
}

