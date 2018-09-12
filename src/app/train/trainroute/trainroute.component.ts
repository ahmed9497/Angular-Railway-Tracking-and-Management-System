import { Component, OnInit } from '@angular/core';
import { TrainRouteModel } from '../shared/trainroutemodel.model';
import {AllservicesService} from '../../services/allservices.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Observable} from 'rxjs/Rx';

 
@Component({
  selector: 'app-trainroute',
  templateUrl: './trainroute.component.html',
  styleUrls: ['./trainroute.component.css']
})
export class TrainrouteComponent implements OnInit {

  trainrouteU : TrainRouteModel;
  trainroute :TrainRouteModel;
  citiess:any[];
  ar=[];    
  
  constructor(private trainrouteservice : AllservicesService , private toastr  : ToastrService) { }

  ngOnInit() {
          
    this.trainrouteservice.getcityData().subscribe(items => {
      this.citiess = items;
    });

    this.trainrouteservice.casttrainroute.subscribe(train => 
      this.trainrouteU = train
      );
      this.trainroute = {   
        id : this.trainrouteU.id,
        name : this.trainrouteU.name,
        source : this.trainrouteU.source,
        destination :this.trainrouteU.destination
            }

          }
  
  onSubmit(){
    if(this.trainroute.id == ''){
    this.trainroute.stations= this.ar;    
     
    this.trainrouteservice.insertTrainRoute(this.trainroute);
    this.toastr.success("successfully Added","Congratulation");
  }
    else{
      this.trainrouteservice.updateTrainRoute(this.trainroute);
      this.toastr.success("successfully Updated");
    }
  }

  value(city,event){
    if(event.target.checked){
      this.ar.forEach(items => {
        if(city == items){
          city = null;
        }
      })
      if(city != null){
        this.ar.push(city);    
      }
  }
  else{

  for(var i = this.ar.length - 1; i >= 0; i--) {
    if(this.ar[i] === city) {
       this.ar.splice(i, 1);
    }
  }
}
  this.ar.forEach(items => {
    console.log(items);
  })
   
}

}
