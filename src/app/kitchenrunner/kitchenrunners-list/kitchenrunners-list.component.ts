import { Component, OnInit } from '@angular/core';
import {AllservicesService} from '../../services/allservices.service';
import {Kitchenrunner} from '../shared/kitchenrunner.model';
import { element } from 'protractor';

@Component({
  selector: 'app-kitchenrunners-list',
  templateUrl: './kitchenrunners-list.component.html',
  styleUrls: ['./kitchenrunners-list.component.css']
})
export class KitchenrunnersListComponent implements OnInit {


  kitchenrunnerList : Kitchenrunner[];
  kitchenrunnerU : Kitchenrunner;
  kitchenrunner : Kitchenrunner;

  constructor(private kitchenrunnerservice : AllservicesService) { }

  ngOnInit() {
    var x =this.kitchenrunnerservice.getKitchenRunnerData().subscribe(items => {
      this.kitchenrunnerList = items;
    });
}

onEdit(kitchenrunner :Kitchenrunner){
  this.kitchenrunnerservice.updatekitchenrunnerTransfer(kitchenrunner);
}

onDelete(kitchenrunner : Kitchenrunner){
this.kitchenrunnerservice.deleteKitchenRunner(kitchenrunner);
}

reset(){
  this.kitchenrunner = {  
    id : '',
    name : '',
    Cnic : '',
    ContactNo: '',
    Experience : '',
    BestReceipe : '',
    Address : '',
    Email : '',
    Password : '',
  }

  this.kitchenrunnerservice.updatekitchenrunnerTransfer(this.kitchenrunner);

}

}
