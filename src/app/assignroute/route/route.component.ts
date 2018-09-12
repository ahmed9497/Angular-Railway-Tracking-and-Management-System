import { Component, OnInit } from '@angular/core';
import {AllservicesService} from '../../services/allservices.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { Driver } from '../../driver/shared/driver.model';
import {Router} from '@angular/router';
import { AUTH_PROVIDERS } from 'angularfire2/auth';
import {Kitchenrunner} from '../../kitchenrunner/shared/kitchenrunner.model';
import {Ticketchecker} from '../../ticketchecker/shared/ticketchecker.model';
import {Train} from '../../train/shared/train.model';
import {Route} from '../../assignroute/shared/route.model';
import {TrainRouteModel} from '../../train/shared/trainroutemodel.model';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  driver : Driver[];
  ticketchecker : Ticketchecker[];
  kitchenrunner : Kitchenrunner[];
  train : Train[];
  city : any[];
  route : Route;
  routeU : Route;
  trainroute : TrainRouteModel[];
  
  constructor(private routeservice : AllservicesService, private toastr :ToastrService) { }

  ngOnInit() {
    this.routeservice.getDriverData().subscribe(items => 
      this.driver = items
    );
    this.routeservice.getKitchenRunnerData().subscribe(items => 
      this.kitchenrunner = items
    );
    this.routeservice.getTicketCheckerData().subscribe(items => 
      this.ticketchecker = items
    );
    this.routeservice.getTrainData().subscribe(items => 
      this.train = items
    );
    this.routeservice.getcityData().subscribe(items => 
      this.city = items
    );
    this.routeservice.castroute.subscribe(route => 
      this.routeU = route
      );
      this.routeservice.getTrainrouteData().subscribe(items => 
        this.trainroute = items
      );
      
    this.route = {
      id:this.routeU.id,
      train_id : this.routeU.train_id,
      driver_id : this.routeU.driver_id,
      ticketchecker_id : this.routeU.ticketchecker_id,
      kitchenrunner_id : this.routeU.kitchenrunner_id,
      trainroute_id : this.routeU.trainroute_id,
      date : this.routeU.date,
      reserved_seats : this.routeU.reserved_seats,
      }
    }


  onSubmit(){    
    console.log(this.route.train_id);
     if( this.route.id == ''){
       console.log(this.route.train_id);
      this.routeservice.activeStatus(this.route.driver_id,this.route.train_id,this.route.kitchenrunner_id,this.route.ticketchecker_id);
      this.routeservice.insertRoute(this.route);
      this.toastr.success("successfully Added","Congratulation");
  
     }
    else{     

      this.routeservice.updateDriver(this.route);
      this.toastr.success("successfully Updated","Congratulation");
     
      
     }
   }
}
