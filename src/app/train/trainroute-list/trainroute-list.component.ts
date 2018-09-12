import { Component, OnInit } from '@angular/core';
import { TrainRouteModel } from '../shared/trainroutemodel.model';
import {AllservicesService} from '../../services/allservices.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-trainroute-list',
  templateUrl: './trainroute-list.component.html',
  styleUrls: ['./trainroute-list.component.css']
})
export class TrainrouteListComponent implements OnInit {

  trainList :TrainRouteModel[];
  trainU :TrainRouteModel;
  train :TrainRouteModel;
 
   constructor(private trainservice : AllservicesService) { }
 
   ngOnInit() {
     var x =this.trainservice.getTrainrouteData().subscribe(items => {
       this.trainList = items;
     });
 }
 
 onEdit(train :TrainRouteModel){
   this.trainservice.updateTrainrouteTransfer(train);
 }
 
 onDelete(train : TrainRouteModel){
   this.trainservice.deleteTrainRoute(train);
 }
 
 reset(){
   this.train = {  
     id : '',
     name : '',
     destination : '',
     source : '',
   }
 
   this.trainservice.updateTrainrouteTransfer(this.train);
 
 }
 
}
