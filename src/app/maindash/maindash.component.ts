import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Train } from '../train/shared/train.model';
@Component({
  selector: 'app-maindash',
  templateUrl: './maindash.component.html',
  styleUrls: ['./maindash.component.css']
})
export class MaindashComponent implements OnInit {
  lat: number = 30.3753;
  lng: number = 69.3451;
  mylat:number;
  mylng:number;
  zoom: number = 8;
  public origin: {}
  public destination: {}
  icon: string = "assets/images/icon.png";
  routemarker :any[]; 
  markers :any;
  stationId:any;
  //city_name: any[];
  a:any=[];
  b:any[] = [];
  public mstation:any[];
  cities:any;
  name:'';
  constructor(private service: AllservicesService,private afs: AngularFirestore) {
    //this.service.GetDoc();  
    this.GetCities();
  }

  ngOnInit() {
     this.getUserLocation();
    this.getDirection();
    
     this.GetRoutemarker();
     
  }
  // choselocation(event) {
  //   console.log(event);
  //   this.lat = event.coords.lat;
  //   this.lng = event.coords.lng;
  // }
  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.mylat=this.lat;
        this.mylng=this.lng;
      });
    }
  //   setTimeout(() => {    //<<<---    using ()=> syntax
  //     this.getUserLocation();
  //     this.lat = 32.4945;
  //     this.lng = 74.5229;
  //   }, 5000);
   }
  // removeMarker(marker) {
  //   console.log("remove marker is clicked");
  //   for (var i = 0; i < this.markers.length; i++) {
  //     if (marker.lat == this.markers[i].lat && marker.lng == this.markers[i].lng) {
  //       this.markers.splice(i, 1);
  //     }
  //   }
  // }
  // onChange(deviceValue) {
  //   console.log(deviceValue);
  //   this.addMarker();
  // }
  // markers: marker[] = [
  //   {
  //     name: 'Sialkot',
  //     lat: 32.4945,
  //     lng: 74.5229,
  //     label: 'S',
  //     draggable: false
  //   },
  //   {
  //     name: 'Lahore',
  //     lat: 31.5204,
  //     lng: 74.3587,
  //     label: 'L',
  //     draggable: false
  //   },
  //   {
  //     name: 'Islamabad',
  //     lat: 33.6844,
  //     lng: 73.0479,
  //     label: 'I',
  //     draggable: false
  //   }
  // ]
  // addMarker(){
  //   this.markers.push({
  //     name:'Karachi',
  //     lat: 24.8607,
  //     lng:  67.0011,
  //     label: 'K',
  //     draggable: false
  //   })
  // }
  
  getDirection() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log(this.lat+" LAT AND LNG "+this.lng);
        this.mylat=Number(this.lat);
        this.mylng=Number(this.lng);
      })
    }
    
     this.mylat=33.6844;
     this.mylng=73.0479;
    this.origin = { lat:this.mylat, lng:this.mylng}
    this.destination = { lat: 31.5204, lng: 74.3587 }
    console.log(this.origin);
    // this.origin = 'Taipei Main Station'
    // this.destination = 'Taiwan Presidential Office'
  }

  clickedMarker(label: string, id: number) {
    console.log(`clicked the marker: ${label}--${id}`);
    this.stationId=id;
    console.log("st   "+this.stationId);
    this.service.GetDoc(this.stationId);
  }

  city_name : any = [];
  
  GetRoutemarker() {
    
    

//
  //  setTimeout(() => {
      this.service.getTrainMarkers().subscribe(i=>{});
      
        //console.log(i);
    //  });

   
     
this.markers= this.service.getidss();
console.log(this.markers);

    

   //  },4000);


this.service.empty();
    

    
  }

 arr:any = [];
  addStation(){
    console.log("clicked" +this.name);
    this.a.push(this.name);
    console.log(this.a);
    // this.service.UpdateStations();
    //this.service.GetDoc();
 
   // this.arr = this.service.get_cities_station();
    this.service.Gotid().subscribe(i =>this.mstation = i );


    console.log("ahmed"+this.mstation);
    this.arr = this.service.get_cities_station();
    console.log(this.arr);
    this.arr.forEach(value=>{
      console.log(value);
      
    });
    setTimeout(() => {
    this.arr.forEach(element => {
      console.log(element);
      if (element != null) {
      this.a.push(element);
      }
    });
    console.log("this is a="+this.a);
    this.service.updateStations(this.a);
    this.a.length=0;
    this.service.empty();

  },2000);
  //this.a=this.arr;
 // this.arr.push(this.name);
  console.log("this is a arrrrt "+this.arr);
 //
 
    // this.arr.forEach(value=>{
    //   console.log(value);
     
    // });
    // this.a.forEach(value=>{
    //   console.log(value);
     
    // });
    
    
    //console.log(this.mstation[0]);
  }
GetCities(){
  let a;
  a=this.service.getcityData().
  subscribe(i=>{
   // console.log("cities "+i);
    this.cities=i;
    //console.log("cities "+this.cities);
  });
}



}



// just an interface for type safety.
interface marker {
  name: string,
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}