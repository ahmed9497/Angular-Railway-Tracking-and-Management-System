import { Component, OnInit} from '@angular/core';
import {AllservicesService} from '../../services/allservices.service';
import {Route} from '../../assignroute/shared/route.model'
import{Observable} from 'rxjs';

@Component({
  selector: 'app-routes-list',
  templateUrl: './routes-list.component.html',
  styleUrls: ['./routes-list.component.css']
})
export class RoutesListComponent implements OnInit {

  routeList : Route[];
  routeU : Route;
  route : Route;

  constructor(private routeservice : AllservicesService) { }

  ngOnInit() {
  
    setTimeout(()=> {
      this.routeservice.getEmployeeInfo().subscribe(items => {
        this.routeList = items;
      });
    },4000)
  
     
    // this.routeservice.getrouteData().subscribe()
    // // x.snapshotChanges().subscribe(item =>{
    //     this.routeList = [];
    //     item.forEach(element => {
    //       var y = element.payload.toJSON(); 
    //       y["$key"] = element.key;
    //       this.routeList.push(y as route);
    //     });
    // });
}

// onEdit(route : Route){
//   this.routeservice.updaterouteTransfer(route);
// }



onDelete(route : Route){
  this.routeservice.ChangeStatusToAvailable(route);
  this.routeservice.deleteRoute(route);
}

reset(){
  this.route = {  
    id : '',
    train_id : '',
    driver_id : '',
    ticketchecker_id : '',
    kitchenrunner_id : '',
    trainroute_id:'',
    date : '',
    reserved_seats : [],
  }

  this.routeservice.updaterouteTransfer(this.route);

}


}

