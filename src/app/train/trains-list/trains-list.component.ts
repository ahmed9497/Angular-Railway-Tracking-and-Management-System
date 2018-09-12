import { Component, OnInit } from '@angular/core';
import {AllservicesService} from '../../services/allservices.service';
import {Train} from '../shared/train.model';
import { element } from 'protractor';

@Component({
  selector: 'app-trains-list',
  templateUrl: './trains-list.component.html',
  styleUrls: ['./trains-list.component.css']
})
export class TrainsListComponent implements OnInit {

 trainList :Train[];
 trainU :Train;
 train :Train;

  constructor(private trainservice : AllservicesService) { }

  ngOnInit() {
    var x =this.trainservice.getTrainData().subscribe(items => {
      this.trainList = items;
    });
}

onEdit(train :Train){
  this.trainservice.updatetrainTransfer(train);
}

onDelete(train : Train){
  this.trainservice.deleteTrain(train);
}

reset(){
  this.train = {  
    id : '',
    name : '',
    Train_No : '',
    Engine_No : '',
    Bogies : '',
    Seats : '',
    Longitude : '',
    Latitude :'',
  }

  this.trainservice.updatetrainTransfer(this.train);

}

}