import { Component, OnInit } from '@angular/core';
import { AllservicesService} from '../../services/allservices.service';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-tcprofile',
  templateUrl: './tcprofile.component.html',
  styleUrls: ['./tcprofile.component.css']
})
export class TcprofileComponent implements OnInit {
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

}
