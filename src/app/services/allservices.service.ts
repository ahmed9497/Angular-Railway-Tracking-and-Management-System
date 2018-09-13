import { Injectable, OnInit, OnChanges } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TRY } from '../assignroute/shared/try.model';
import { AngularFireDatabase, } from 'angularfire2/database';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Train } from '../train/shared/train.model';

import { Ticketchecker } from '../ticketchecker/shared/ticketchecker.model';

import { Driver } from '../driver/shared/driver.model';

import { Kitchenrunner } from '../kitchenrunner/shared/kitchenrunner.model';

import { Reservationofficer } from '../reservationofficer/shared/reservationofficer.model';

import { Router } from '@angular/router';

import { Route } from '../../app/assignroute/shared/route.model';

import 'rxjs/add/operator/mergeMap';
import { mergeMap } from 'rxjs/operator/mergeMap';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { TrainRouteModel } from '../train/shared/trainroutemodel.model';
import { SELECT_VALUE_ACCESSOR } from '../../../node_modules/@angular/forms/src/directives/select_control_value_accessor';
import { Passenger } from '../reservationofficer/shared/passenger.model';



@Injectable()
export class AllservicesService implements OnInit,OnChanges{

  citylistCollection: AngularFirestoreCollection<any>;

  citylistDocument: AngularFirestoreDocument<any>;

  selected_city: Observable<any[]>;

  private Updatecity = new BehaviorSubject<any>('');

  castcity = this.Updatecity.asObservable();

  trainlistCollection: AngularFirestoreCollection<Train>;

  trainlistDocument: AngularFirestoreDocument<Train>;

  selected_train: Observable<Train[]>;

  private Updatetrain = new BehaviorSubject<any>('');

  casttrain = this.Updatetrain.asObservable();

  driverlistCollection: AngularFirestoreCollection<Driver>;

  driverlistDocument: AngularFirestoreDocument<Driver>;

  selected_driver: Observable<Driver[]>;

  private Updatedriver = new BehaviorSubject<any>('');

  castdriver = this.Updatedriver.asObservable();

  kitchenrunnerlistCollection: AngularFirestoreCollection<Kitchenrunner>;

  kitchenrunnerlistDocumentation: AngularFirestoreDocument<Kitchenrunner>;

  selected_kitchenrunner: Observable<Kitchenrunner[]>

  private Updatekitchenrunner = new BehaviorSubject<any>('');

  castkitchenrunner = this.Updatekitchenrunner.asObservable();

  ticketcheckerlistCollection: AngularFirestoreCollection<Ticketchecker>;

  ticketcheckerlistDocumentation: AngularFirestoreDocument<Ticketchecker>;

  selected_ticketchecker: Observable<Ticketchecker[]>;

  private Updateticketchecker = new BehaviorSubject<any>('');

  castticketcheckrer = this.Updateticketchecker.asObservable();

  routelistCollection: AngularFirestoreCollection<Route>;

  routelistDocumentation: AngularFirestoreDocument<Route>;

  selected_route: Observable<Route[]>;

  private Updateroute = new BehaviorSubject<any>('');

  castroute = this.Updateroute.asObservable();


  reservationofficerlistCollection: AngularFirestoreCollection<Reservationofficer>;

  reservationofficerlistDocumentation: AngularFirestoreDocument<Reservationofficer>;

  selected_reservationofficer: Observable<Reservationofficer[]>

  private Updatereservationofficer = new BehaviorSubject<any>('');

  castreservationofficer = this.Updatereservationofficer.asObservable();

  trainroutelistCollection: AngularFirestoreCollection<TrainRouteModel>;

  trainroutelistDocumentation: AngularFirestoreDocument<TrainRouteModel>;

  selected_trainroute: Observable<TrainRouteModel[]>

  private Updatetrainroute = new BehaviorSubject<any>('');

  casttrainroute = this.Updatetrainroute.asObservable();

  driverarr: AngularFirestoreCollection<any>;
  driverarray: Observable<any[]>;

  duty: AngularFirestoreCollection<any>;
  date: Date;
  Trainroutes: AngularFirestoreCollection<any>;
  public  g : any;
  tr_id;
  passengercollection : AngularFirestoreCollection<any>;

  constructor(private firebase: AngularFireDatabase, private fs: AngularFirestore, private route: Router) {
    this.driverlistCollection = this.fs.collection('drivers');
    this.trainlistCollection = this.fs.collection('trains');
    this.ticketcheckerlistCollection = this.fs.collection('ticketcheckers');
    this.kitchenrunnerlistCollection = this.fs.collection('kitchenrunners');
    this.citylistCollection = this.fs.collection('cities');
    this.routelistCollection = this.fs.collection('route');
    this.reservationofficerlistCollection = this.fs.collection('reservationofficer');
    this.trainroutelistCollection = this.fs.collection('trainroutes');
    this.Trainroutes = this.fs.collection('trainroutes');
    this.passengercollection = this.fs.collection('ticketreservedpassengers')
  }
  ngOnChanges(){
   this.MoreStation();
  }
  ngOnInit(){
    this.getIfDriverData();
   // this.UpdateStations();
  }
  
  tr: Observable<any[]>;
  trr: any[] = [];
  trrr: any = [];
  onlyRoute:Observable<any[]>;
  getTrainRoutes() {
    //  this.tr=this.Trainroutes.stateChanges().map(changes=>{
    //    return changes.map(a=>{
    //     const data = a.payload.doc.data();
    //     data.id = a.payload.doc.id;
    //     return data;
    //    });
    // });
    // return this.tr;
    var date =new Date();
    let year=date.getFullYear();
    let month=("0" + (date.getMonth() + 1)).slice(-2);
    let day=("0" + date.getDate()).slice(-2);
    console.log("GET Train route dates "+year+" Month "+month+" DAy "+day);

    this.tr = this.fs.collection('route', ref =>
      ref.where('date', '==',`${year}-${month}-${day}` )).snapshotChanges().map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as TRY;
          const tr_id = data.trainroute_id;
          // return data;

          return this.trainroutelistCollection.doc(tr_id).snapshotChanges().map(actions => {

            const data1 = actions.payload.data();

            const data2 = data1.stations.forEach(element => {

              return this.citylistCollection.doc(element).snapshotChanges().subscribe(actions => {
                console.log(actions.payload.data());

                
                const data5 = actions.payload.data();
                const id = data5.city_name;
                this.trr.push(actions.payload.data());
                this.trrr.push(id);

                return actions.payload.data();

              });

            });

            return data2;

          });
        });
      }).mergeMap(feeds => (Observable.combineLatest(feeds)));
      
    return this.tr;

  }

  getdataofroute() {

    return this.trr;
  }

  getdataofcity_name() {
    this.trrr.forEach(value =>  {
      console.log("this is value of city_name in service in trr array"+value);
    });
    return this.trrr;
  }
  getRoutes() {
    this.selected_route = this.routelistCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Train;
        data.id = a.payload.doc.id;
        return data;
      });
    });

    return this.selected_route;
  }
  // getDateFormat(): string {
  //   this.date = new Date();
  //   const day = this.date.getDate();
  //   const month = this.date.getMonth() + 1;
  //   const year = this.date.getFullYear();
  //   console.log(day + "" + month + "" + year);
  //   return `${month} ${day},${year}`;
  // }
  // // getDatee():string{
  //   let year=date.getFullYear();
  //   let month=0o7;//date.toDateString();
  //   let day=18
  //   return `$year-$month-$day`
  // }
  employeedata: Observable<any[]>;
  Duty() {
    
   var date =new Date();
    let year=date.getFullYear();
    let month=("0" + (date.getMonth() + 1)).slice(-2);
    let day=("0" + date.getDate()).slice(-2);
    console.log("DUTY Year "+year+" Month "+month+" DAy "+day);

   
    this.employeedata = this.fs.collection('route', ref =>
      ref.where('date', '==', `${year}-${month}-${day}`)).snapshotChanges().map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as TRY;
          const driver_id = data.driver_id;
          console.log(driver_id);
          const train_id = data.train_id;
          const kitchenrunner_id = data.kitchenrunner_id;
          const ticketchecker_id = data.ticketchecker_id;
          const id = action.payload.doc.id;

          let driver_info = this.driverlistCollection.doc(driver_id).snapshotChanges().map(actions => {
            return actions.payload.data();
          });
          let train_info = this.trainlistCollection.doc(train_id).snapshotChanges().map(actions => {
            return actions.payload.data();
          });

          let ticketchecker_info = this.ticketcheckerlistCollection.doc(ticketchecker_id).snapshotChanges().map(actions => {
            return actions.payload.data();
          });

          let kitchenrunner_info = this.kitchenrunnerlistCollection.doc(kitchenrunner_id).snapshotChanges().map(actions => {
            return actions.payload.data();
          });

          const combine = Observable.combineLatest(driver_info, train_info, ticketchecker_info , kitchenrunner_info , (data1, data2,data3,data4) => {
            return { driver_name: data1.name, train_name: data2.name ,ticketchecker_name : data3.name , kitchenrunner_name : data4.name };
          });

          return combine.map(dataresult => Object.assign({}, { id, ...data, ...dataresult }));
        });
      }).mergeMap(feeds => Observable.combineLatest(feeds));
  
    console.log(this.duty);
    return this.employeedata;
  }



  // getTrainData() {
  //   this.selected_train = this.trainlistCollection.snapshotChanges().map
  //     (changes => {
  //       return changes.map(a => {
  //         const data = a.payload.doc.data() as Train;
  //         data.id = a.payload.doc.id;
  //         return data;
  //       });
  //     });
  //   return this.selected_train;
  // }

  getTrainData(){
    this.selected_train=this.trainlistCollection.snapshotChanges().map
    (changes => {
      return changes.map (a =>{
        const data = a.payload.doc.data() as Train;
        data.id = a.payload.doc.id;
        const reserve = data.Seats;
        return data;
    });
  });
 
    return this.selected_train;
  }

  trainDataforid : any = [];

  selected_train_data : Observable<any[]>;
  
  // getTrainData2() {
  //   this.selected_train_data = this.trainlistCollection.snapshotChanges().map
  //     (changes => 
  //       {
  //       return changes.map(a => {
  //         const data = a.payload.doc.data() as Train;
  //         data.id = a.payload.doc.id ;
  //         return this.trainlistCollection.doc(data.id).snapshotChanges().subscribe(i=>{

  //           this.trainDataforid.push(i);
  //           console.log(i);
  //           return i;
  //         });
          
          
  //       });
  //     });

  //   return this.selected_train_data;
  // }

  // getTraindataforid(){
  //   return this.trainDataforid;
  // }

  reservetrain : any = [];
reserveSeats : any[] = [];
 
getTrainData2(train){

   this.reservetrain = this.trainlistCollection.doc(train).snapshotChanges().subscribe
    (a => {
      
       const data = a.payload.data() as Train;
       console.log(data);
       const id = a.payload.id;
       const seats = data.Seats;
       this.reserveSeats.push(seats);
       console.log(seats);
       return data.Seats;
 
  });
  return this.reservetrain;
}

routereserveseat : any = [];
status : any;

getrouteData2(train,date){
  console.log(train +''+date);
  if(this.fs.collection('route' , ref => ref.where('train_id','==',train).where('date','==',date))){
    this.status = false;
  }
  return this.fs.collection('route' , ref => ref.where('train_id','==',train).where('date','==',date)).snapshotChanges().map
  (changes =>
     {
    return changes.map( a => {
      const data = a.payload.doc.data() as Route;
      data.id = a.payload.doc.data().id;
      console.log(a.payload.doc.id);
      a.payload.doc.data().reserved_seats.forEach( i => {
        console.log(i);
 
        this.routereserveseat.push(i);
      });
  
      return a.payload.doc.data().reserved_seats;
    });
});

}



  getReserveTrainSeats(){
    return this.routereserveseat;

  }



  getTotalTrainSeats(){
    return this.reserveSeats;
  }

  updateReservedSeats(arrayy : any){

    this.fs.collection('route').doc('7xQLpKHWYH64lDrZh8Tn').update({'reserved_seats' : arrayy});
  
  }

  insertTrain(train: Train) {
    // this.trainlist.push({
    //   name : train.name,
    //   Train_No : train.Train_No,
    //   Engine_No: train.Engine_No,
    //   Bogies : train.Bogies,
    //   Seats : train.Seats,
    //   Economy_seats : train.Economy_seats,
    //   Business_class : train.Business_class,
    //   Destination : train.Destination,
    //   Source : train.Source
    // });
    this.trainlistCollection.add(train);
  }

  // login(email:string,password){
  //   this.af.auth.signInWithEmailAndPassword(email,password)
  //   .then(()=>{
  //     this.route.navigate(['login/dashboard']);
  //   }).catch(error=>console.log(error));
  //   }

  //   login2(email:string,password){
  //     this.af.auth.signInWithEmailAndPassword(email,password)
  //     .then(()=>{
  //       this.route.navigate(['login/ReservePassenger']);
  //     }).catch(error=>console.log(error));
  //     }


  updateTrain(train: Train) {
    this.trainlistDocument = this.fs.doc(`trains/${train.id}`);
    this.trainlistDocument.update(train);
  }

  updatetrainTransfer(train: Train) {
    this.Updatetrain.next(train);
  }

  deleteTrain(train: Train) {
    this.trainlistDocument = this.fs.doc(`trains/${train.id}`);
    this.trainlistDocument.delete();
  }

  getDriverData() {
    this.selected_driver = this.driverlistCollection.snapshotChanges().map
      (changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Driver;
          data.id = a.payload.doc.id;
          return data;
        });
      });
    return this.selected_driver;
  }

  Driver_ids : any = [];
  
  getIfDriverData() {
    return this.driverlistCollection.snapshotChanges().map
      (changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Driver;
          const id = a.payload.doc.id;
          return data;
        });
      });
    
 
  }
  getIfdriverDataarray(){
   return this.Driver_ids;
  }
  insertDriver(driver: Driver) {
    this.driverlistCollection.add(driver);
  }

  updateTransfer(driver: Driver) {
    this.Updatedriver.next(driver);
  }


  updateDriver(driver: Driver) {
    this.driverlistDocument = this.fs.doc(`drivers/${driver.id}`);
    this.driverlistDocument.update(driver);
  }

  deleteDriver(driver: Driver) {
    this.driverlistDocument = this.fs.doc(`drivers/${driver.id}`);
    this.driverlistDocument.delete();
  }


  getReservationOfficerData() {
    this.selected_reservationofficer = this.reservationofficerlistCollection.snapshotChanges().map
      (changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Reservationofficer;
          data.id = a.payload.doc.id;
          return data;
        });
      });
    return this.selected_reservationofficer;
  }


  insertReservationOfficer(reservationofficer: Reservationofficer) {
    this.reservationofficerlistCollection.add(reservationofficer);
  }

  updateReservationOfficer(reservationofficer: Reservationofficer) {
    this.reservationofficerlistDocumentation = this.fs.doc(`reservationofficer/${reservationofficer.id}`);
    this.reservationofficerlistDocumentation.update(reservationofficer);
  }

  updateTransferReservationOfficer(reservationofficer: Reservationofficer) {
    this.Updatereservationofficer.next(reservationofficer);
  }

  deleteReservationOfficer(reservationofficer: Reservationofficer) {
    this.reservationofficerlistDocumentation = this.fs.doc(`reservationofficer/${reservationofficer.id}`);
    this.reservationofficerlistDocumentation.delete();
  }

  getKitchenRunnerData() {
    this.selected_kitchenrunner = this.kitchenrunnerlistCollection.snapshotChanges().map
      (changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Kitchenrunner;
          data.id = a.payload.doc.id;
          return data;
        });
      });
    return this.selected_kitchenrunner;
  }


  insertKitchenRunner(kitchenrunner: Kitchenrunner) {
    this.kitchenrunnerlistCollection.add(kitchenrunner);
  }


  updateKitchenRunner(kitchenrunner: Kitchenrunner) {
    this.kitchenrunnerlistDocumentation = this.fs.doc(`kitchenrunners/${kitchenrunner.id}`);
    this.kitchenrunnerlistDocumentation.update(kitchenrunner);
  }

  updatekitchenrunnerTransfer(kitchenrunner: Kitchenrunner) {
    this.Updatekitchenrunner.next(kitchenrunner);
  }
  deleteKitchenRunner(kitchenrunner: Kitchenrunner) {
    this.kitchenrunnerlistDocumentation = this.fs.doc(`kitchenrunners/${kitchenrunner.id}`);
    this.kitchenrunnerlistDocumentation.delete();
  }

  getTicketCheckerData() {
    this.selected_ticketchecker = this.ticketcheckerlistCollection.snapshotChanges().map
      (changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Ticketchecker;
          data.id = a.payload.doc.id;
          return data;
        });
      });
    return this.selected_ticketchecker;
  }


  insertTicketChecker(ticketchecker: Ticketchecker) {
    this.ticketcheckerlistCollection.add(ticketchecker);
  }

  updateTicketChecker(ticketchecker: Ticketchecker) {
    this.ticketcheckerlistDocumentation = this.fs.doc(`ticketcheckers/${ticketchecker.id}`);
    this.ticketcheckerlistDocumentation.update(ticketchecker);
  }

  updateticketcheckerTransfer(ticketchecker: Ticketchecker) {
    this.Updateticketchecker.next(ticketchecker);
  }

  deleteTicketChecker(ticketchecker: Ticketchecker) {
    this.ticketcheckerlistDocumentation = this.fs.doc(`ticketcheckers/${ticketchecker.id}`);
    this.ticketcheckerlistDocumentation.delete();
  }


  getcityData() {
    this.selected_city = this.citylistCollection.snapshotChanges().map
      (changes => {
        return changes.map(a => {
          const data = a.payload.doc.data();
          data.id = a.payload.doc.id;
          return data;
        });
      });
    return this.selected_city;
  }

  insertRoute(route: Route) {
    this.routelistCollection.add(route);
  }

  getrouteData() {
    this.selected_route = this.routelistCollection.snapshotChanges().map
      (changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Route;
          data.id = a.payload.doc.id;
          return data;
        });
      });
    return this.selected_route;
  }

  // updateRoute(route: Route) {
  //   this.routelistDocumentation = this.fs.doc(`route/${route.id}`);
  //   this.routelistDocumentation.update(route);
  // }

  deleteRoute(route: Route) {
    this.routelistDocumentation = this.fs.doc(`route/${route.id}`);
    this.routelistDocumentation.delete();
  }

  updaterouteTransfer(route: Route) {
    this.Updateroute.next(route);
  }

  insertTrainRoute(trainroute: TrainRouteModel) {
    this.trainroutelistCollection.add(trainroute);
  }

  getTrainrouteData() {
    this.selected_trainroute = this.trainroutelistCollection.snapshotChanges().map
      (changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as TrainRouteModel;
          data.id = a.payload.doc.id;
          return data;
        });
      });
    return this.selected_trainroute;
  }

  updateTrainRoute(trainroute: TrainRouteModel) {
    this.trainroutelistDocumentation = this.fs.doc(`trainroutes/${trainroute.id}`);
    this.trainroutelistDocumentation.update(trainroute);
  }

  updateTrainrouteTransfer(trainroute: TrainRouteModel) {
    this.Updatetrainroute.next(trainroute);
  }

  deleteTrainRoute(trainroute: TrainRouteModel) {
    this.trainroutelistDocumentation = this.fs.doc(`trainroutes/${trainroute.id}`);
    this.trainroutelistDocumentation.delete();
  }


  driverdataforroute: any;
  traindataforroute: any;

  getEmployeeInfo() {
    // const collection = this.fs.collection<any>('route');
    // return collection.snapshotChanges()
    //   .map(participants => {
    //     return participants.map(participant => {
    //       const data = participant.payload.doc.data();
    //       const id = participant.payload.doc.id;
    //       return this.fs.doc('drivers/' + id).valueChanges()
    //         .map(data2 => Object.assign({}, {id, ...data, ...data2}));
    //     });
    //   }).flatMap(observables => Observable.combineLatest(observables));
    // }
    this.selected_route = this.routelistCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        //here you get the data without first names
        const data = a.payload.doc.data() as Route;
        data.id = a.payload.doc.id;
        const id = a.payload.doc.id;
        const trains = data.train_id;
        const drivers = data.driver_id;
        const kitchenrunners = data.kitchenrunner_id;
        const ticketcheckers = data.ticketchecker_id;


        // return this.trainlistCollection.doc(trains)
        // .snapshotChanges().subscribe(items => {

        //       console.log(this.driverdataforroute);
        // var dataa = items.payload.data();

        //.valueChanges()
        //       .map(data2 => Object.assign({}, {drivers, ...data, ...data2}));
        //   });
        // }).flatMap(observables => Observable.combineLatest(observables));
        //         // .snapshotChanges().map(items=>{

        //         // this.driverdataforroute = items.payload.data();
        //         //   // console.log(this.driverdataforroute);
        //         //   return items;
        //         // });


        //         //  this.trainlistCollection.doc(trains).snapshotChanges().subscribe(items=>{

        //         //   this.traindataforroute = items;

        //         //   })


        //   //   });

        //   // })

        // // })    //   .snapshotChanges().subscribe(actions => {
        //   //     const data = actions.payload.data();
        //   //     console.log(data)
        //   //     return data;
        //   //   })
        //   //     });
        //   // })
        let driverr = this.fs.collection('drivers').doc(drivers).snapshotChanges().map(actions => {
         
          console.log(actions.payload.data());
           return actions.payload.data();
        });

        let trainss = this.trainlistCollection.doc(trains).snapshotChanges().map(actions => {
         
          return actions.payload.data();
        });

        // let kitchenrunnerss =  this.kitchenrunnerlistCollection.doc(kitchenrunners).snapshotChanges().map(actions => {              
        //   console.log(actions.payload.data());
        //   return actions.payload.data();           
        // });

        // let ticketcheckerss =  this.ticketcheckerlistCollection.doc(ticketcheckers).snapshotChanges().map(actions => {              
        //   return actions.payload.data();           
        // });

        const combine = Observable.combineLatest(driverr, trainss, (data1, data2) => {
          return { driver_name: data1.name, train_name: data2.name };
        });

        return combine.map(dataresult => Object.assign({}, { id, ...data, ...dataresult }));
      });
    }).mergeMap(feeds => Observable.combineLatest(feeds));

    console.log(this.selected_route);

    return this.selected_route;
  }

  //    getdriverdataforroute(){
  // //           return this.driverdataforroute;
  //      this.driverlistCollection.doc(this.driverdataforroute).snapshotChanges().subscribe(changes =>{
  //       console.log(changes.payload.data());
  //      return changes.payload.data();
  //       })


  //     }
  //   //    gettraindataforroute(){
  //      console.log(this.traindataforroute);
  //      return this.traindataforroute;
  //    }

  //  }



  driverarrr : any[] ;
  dataaa : any;
  getProfile(cnic: string, pass: string, person: string) {
    console.log(cnic + "   " + pass);
    //debugger;
    this.driverarr = this.fs.collection(person, ref =>
      ref.where('Cnic', '==', cnic).where('Password', '==', pass));

      this.fs.collection(person, ref =>
        ref.where('Cnic', '==', cnic).where('Password', '==', pass)).snapshotChanges().subscribe(i => {
             i.map(data => {
              this.driverarrr.push(data.payload.doc.id)
              console.log(data.payload.doc.id)
              this.dataaa = data.payload.doc.id;
            })
            this.driverarrr.push(this.dataaa)
           
        })
    // this.driverarray = this.driverarr.valueChanges();
    // this.driverarray=this.driverarr.valueChanges();
    // console.log(this.driverarr);
    //
        // console.log(this.dataaa);
        // this.driverarrr.forEach(i => {
        //   console.log(i)
        // })
    //this.route.navigate(['home/profile']); 


  }

  private EmployeeDetailCollection: AngularFirestoreCollection<any>;
  selected_EmployeeDetail: Observable<any[]>;
  private EmployeeDetailDocumentation: AngularFirestoreDocument<any>;

  getdata() {
    return this.driverarr.valueChanges();

    //console.log(this.driverarr);
  }

  getdata2(){
    setTimeout(()=>{
    console.log(this.dataaa);
    return this.dataaa;
  },4000)
  
  }
  getEmployeedata() {
    // const collection = this.fs.collection<any>('route');
    // this.selected_EmployeeDetail = collection.snapshotChanges()
    //   .map(participants => {
    //     return participants.map(participant => {
    //       const data = participant.payload.doc.data();
    //       const id = participant.payload.doc.id;

    //       return this.fs.doc('drivers/' + id).valueChanges()
    //         .map(data2 => {

    //           Object.assign({}, {id, ...data, ...data2})
    //           });
    //     });
    //   }).flatMap(observables => Observable.combineLatest(observables));
    this.EmployeeDetailCollection = this.fs.collection('route');
    this.selected_EmployeeDetail = this.EmployeeDetailCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        //here you get the data without first name
        const data = a.payload.doc.data() as TRY;
        //get the signup_id for getting doc from coll-signup
        const signupId = data.driver_id;
        //get the related document

        return this.fs.collection('drivers').doc(signupId).snapshotChanges().map(actions => {


          return actions.payload.data();
        }).map(signup => {
          //export the data in feeds interface format

          return { name: signup.name, ...data };
        });
      })
    }).mergeMap(feeds => Observable.combineLatest(feeds));
    return this.selected_EmployeeDetail;
  }

  station:Observable<any[]>;
  cities_station:any=[];

  MoreStation(value?):any{
    //console.log("sation valuein service"+value );
    this.station =  this.fs.collection('trainroutes', ref =>
    ref.where('destination', '==','236' )).snapshotChanges().map(changes=>{
    return changes.map(a=>{
     // const data=a.payload.doc.data();
      //data.lat=a.payload.doc.data().long;
     const data = a.payload.doc.data();
      data.id=a.payload.doc.id;
      data.stations.forEach(element => {
        console.log(element);
        this.cities_station.push(element);
      });
      //this.cities_station.push(this.station);
      console.log(this.cities_station);
      //console.log(data.stations);        // this.g = data.stations[0];
      return data.station;
    }); 
    });
    //console.log(this.station);
    // this.station.forEach(value=>{
    //   console.log("Data from firestore"+value);
    // });
     // console.log(this.g);
     console.log(this.cities_station);
    return this.station;
   
  }

  get_cities_station(){
    return this.cities_station;
  }
  activeStatus(driver? : string,train? : string,kitchenrunner? : string,ticketchecker? : string){

    this.fs.collection('drivers').doc(driver).update({'status':'active'});
    this.fs.collection('trains').doc(train).update({'status':'active'});
    this.fs.collection('ticketcheckers').doc(ticketchecker).update({'status':'active'});
    this.fs.collection('kitchenrunners').doc(kitchenrunner).update({'status':'active'});

}

UpdateStations(array){
  //let array=["amjac","adas","asdads","rrrty"]
 console.log(array);
  this.fs.collection('trainroutes').doc('eimLNgMP80o0mutjz6Wf')
  
  .update({ stations: array});
}

ChangeStatusToAvailable(route : Route){
    this.fs.collection('drivers').doc(route.driver_id).update({'status':''});
    this.fs.collection('trains').doc(route.train_id).update({'status':''});
    this.fs.collection('ticketcheckers').doc(route.ticketchecker_id).update({'status':''});
    this.fs.collection('kitchenrunners').doc(route.kitchenrunner_id).update({'status':''});
};

ReservedSeatsFunction(reservedseats: any[],train_id : any,date : any,passengerreserve :any) {
  this.ReservedSeats.next(reservedseats);
  this.train_id.next(train_id);
  this.datee.next(date);
  this.passengerreserve.next(passengerreserve);
}

private ReservedSeats = new BehaviorSubject<any>('');

castReservedSeats = this.ReservedSeats.asObservable();

private train_id = new BehaviorSubject<any>('');

castTrainid = this.train_id.asObservable();

private datee = new BehaviorSubject<any>('');

castdate = this.datee.asObservable();

private passengerreserve = new BehaviorSubject<any>('');

castepassengerreserve = this.passengerreserve.asObservable();

temp : string;
insertpassenger(passenger : Passenger,totalreservedseats : string[] ){

  this.fs.collection('route' , ref => ref.where('train_id','==',passenger.train_id).where('date','==',passenger.date)).snapshotChanges().subscribe(i => {
    i.map(ii => {
      console.log(ii.payload.doc.id);
      passenger.route_id = ii.payload.doc.id;
      this.temp = ii.payload.doc.id;
    })
    this.passengercollection.add(passenger);
    this.routelistCollection.doc(this.temp).update({'reserved_seats': totalreservedseats})
  });



  
}

 





updateStations(array?){
  //let arra=["amjac","adas","asdads","rrrty"]
 console.log(array);
  this.fs.collection('trainroutes').doc(this.tr_id)
  
  .update({ stations: array});
  //this.empty();
}



GetDoc(value?){
  // console.log("get doc is called by add astatitnk");
  //  this.trainlistCollection.doc('2c7Dz3ETJwBJg3oQwrvh').
  //  valueChanges().subscribe(i=>{console.log(i)});
  console.log("In GetDoc func "+value);

  
  this.station =  this.fs.collection('route', ref =>
  ref.where('train_id', '==',value )).snapshotChanges().map(changes=>{
  return changes.map(a=>{
    console.log(a.payload.doc.data().trainroute_id);
    
     this.tr_id=a.payload.doc.data().trainroute_id;
      //this.Gotid(id);
      console.log("Trainroutd id in getDoc "+this.tr_id); 
  }); 
  });

  this.station.subscribe(i=>{
    //console.log(i); 
  });    
   


  











  
}



    s:Observable<any>;
    Gotid():any{
      this.cities_station.length=0;
      console.log("Trainroute id in Gotid"+this.tr_id); 
      // this.trainroutelistCollection.doc(value).
      //   valueChanges().subscribe(i=>{console.log(i)});
      
      this.s =  this.fs.collection('trainroutes').doc(this.tr_id).snapshotChanges().map(a=>{
        
          console.log(a.payload.data());
          //data.lat=a.payload.doc.data().long;
        const data = a.payload.data();
          data.id=a.payload.id;

          console.log("stations are 0 index  "+data.stations[0]);
          data.stations.forEach(element => {
            console.log(element);
            this.cities_station.push(element);
          });
          data.stations=[];
          console.log("cities arra "+this.cities_station);
          
          return data.station;
        }); 
        
       // console.log(this.station);
        // this.station.forEach(value=>{
        //   console.log("Data from firestore"+value);
        // });
        console.log(this.g);
        console.log(this.cities_station);
        
        return this.s;


}


t_id:any = [];

getTrainMarkers(){
  
  var date =new Date();
    let year=date.getFullYear();
    let month=("0" + (date.getMonth() + 1)).slice(-2);
    let day=("0" + date.getDate()).slice(-2);
   // console.log("DUTY Year "+year+" Month "+month+" DAy "+day);
    
   
     return this.fs.collection('route', ref =>
      ref.where('date', '==', `${year}-${month}-${day}`)).snapshotChanges().map(changes => {
        return changes.map(a=>{
      //   console.log(a);
         
         
          this.getTrainIds(a.payload.doc.data().train_id);

          console.log("t_id arrary "+a.payload.doc.data().train_id);
         
          return a.payload.doc.data();

        });
       
});
  

 
}

getTrainIds(value?):any{
console.log("value is= "+value);
this.trainlistCollection.doc(value).snapshotChanges().subscribe
    (a => {
      console.log("sfds"+a.payload.data());
      this.t_id.push({
              lat:a.payload.data().Latitude,
              lng:a.payload.data().Longitude,
              id:a.payload.id,
              name:a.payload.data().name
            })
      
          });
  
    console.log("sfds"+this.t_id);
    return this.t_id;
}

getidss(){
  return this.t_id;
}

empty(){
  console.log("empty is called");
  this.cities_station.length =0;
}




}



