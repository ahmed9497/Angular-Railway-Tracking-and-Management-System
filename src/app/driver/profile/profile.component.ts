import { Component, OnInit } from '@angular/core';
import { AllservicesService} from '../../services/allservices.service';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from '../../../../node_modules/rxjs';
import { TRY } from '../../assignroute/shared/try.model';
@Component({    
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  profile:Observable<any[]>;
  array:AngularFirestoreCollection<any>;
  duty:any[];
  today:Observable<any[]>;

  date:Date;
  constructor(private fs :AngularFirestore , private service:AllservicesService) { }

  ngOnInit() {
    
    this.getProfile();
    this.getDuty();
    
   
    //this.getDateFormat();
  }
 
  getProfile(){
   
    this.profile = this.service.getdata();
    console.log(this.service.getdata2());
    //console.log(this.getDateFormat());
    }
  getDuty(){

    this.today=this.service.getRoutes();
    this.service.Duty().subscribe(items => {
      this.duty = items;
    });
    console.log(this.duty);
    console.log(this.duty+"/n"+this.today);
   // console.log("Today \n"+this.today);
  }  



      // console.log("Service\n"+this.service.driverarray);

  

  
  
}
