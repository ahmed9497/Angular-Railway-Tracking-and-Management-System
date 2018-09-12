import { Component, OnInit } from '@angular/core';
import { AllservicesService} from '../../services/allservices.service';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-krprofile',
  templateUrl: './krprofile.component.html',
  styleUrls: ['./krprofile.component.css']
})
export class KrprofileComponent implements OnInit {
  profile:Observable<any[]>;
  array:AngularFirestoreCollection<any>;

  constructor(private fs :AngularFirestore , private service:AllservicesService) { }

  ngOnInit() {
    this.getProfile();

  }
  getProfile(){
    
    this.profile = this.service.getdata();
       
    console.log(this.profile);
    }

      // console.log("Service\n"+this.service.driverarray);

}
