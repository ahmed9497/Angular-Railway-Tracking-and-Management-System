import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { AgmDirectionModule } from 'agm-direction'

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { MaindashComponent } from './maindash/maindash.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ReservationofficerComponent } from './reservationofficer/reservationofficer.component';

import{ environment } from '../environments/environment';
import { AllservicesService } from './services/allservices.service';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import { TrainComponent } from './train/train.component';
import { TrainsComponent } from './train/trains/trains.component';
import { TrainsListComponent } from './train/trains-list/trains-list.component';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './HomePage/header/header.component';
import { AboutComponent } from './HomePage/about/about.component';
import { FooterComponent } from './HomePage/footer/footer.component';
import { WhatwedoComponent } from './HomePage/whatwedo/whatwedo.component';
import { StickybuttonComponent } from './HomePage/stickybutton/stickybutton.component';
import { CrudComponent } from './HomePage/crud/crud.component';
import { SliderComponent } from './HomePage/slider/slider.component';
import { HomeComponent } from './HomePage/home/home.component';
import { DriverComponent } from './driver/driver.component';
import { DriversComponent } from './driver/drivers/drivers.component';
import { DriversListComponent } from './driver/drivers-list/drivers-list.component';
import { ReservationofficersComponent } from './reservationofficer/reservationofficers/reservationofficers.component';
import { ReservationofficersListComponent } from './reservationofficer/reservationofficers-list/reservationofficers-list.component';
import { KitchenrunnerComponent } from './kitchenrunner/kitchenrunner.component';
import { KitchenrunnersComponent } from './kitchenrunner/kitchenrunners/kitchenrunners.component';
import { KitchenrunnersListComponent } from './kitchenrunner/kitchenrunners-list/kitchenrunners-list.component';
import { TicketcheckerComponent } from './ticketchecker/ticketchecker.component';
import { TicketcheckersComponent } from './ticketchecker/ticketcheckers/ticketcheckers.component';
import { TicketcheckersListComponent } from './ticketchecker/ticketcheckers-list/ticketcheckers-list.component';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { RouteComponent } from '../app/assignroute/route/route.component';

import { RoutesListComponent } from './assignroute/routes-list/routes-list.component';
import {ProfileComponent} from '../app/driver/profile/profile.component';
import { KrprofileComponent } from './kitchenrunner/krprofile/krprofile.component';
import { TcprofileComponent } from './ticketchecker/tcprofile/tcprofile.component';
import {RoprofileComponent} from './reservationofficer/roprofile/roprofile.component';
import { ReservationformComponent } from './reservationofficer/reservationform/reservationform.component';
import { BookingseatsComponent } from '../app/reservationofficer/bookingseats/bookingseats.component';
import {TrainrouteListComponent} from '../app/train/trainroute-list/trainroute-list.component'
import {TrainrouteComponent} from '../app/train/trainroute/trainroute.component'
import { RoprofilenavbarComponent} from '../app/reservationofficer/roprofilenavbar/roprofilenavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    MaindashComponent,
    NotificationsComponent,
    ReservationofficerComponent, 
    TrainComponent,
    TrainsComponent,
    TrainsListComponent,
    HeaderComponent,
    AboutComponent,
    SliderComponent,
    FooterComponent,
    WhatwedoComponent,
    AboutComponent,
    CrudComponent,
    HomeComponent,
    StickybuttonComponent,
    DriverComponent,
    DriversComponent,
    DriversListComponent,
    ReservationofficersComponent,
    ReservationofficersListComponent,
    KitchenrunnerComponent,
    KitchenrunnersComponent,
    KitchenrunnersListComponent,
    TicketcheckerComponent,
    TicketcheckersComponent,
    TicketcheckersListComponent,
    RouteComponent,
    RoutesListComponent,
    ProfileComponent,
    KrprofileComponent,
    TcprofileComponent,
    RoprofileComponent,
    ReservationformComponent,
    BookingseatsComponent,    
    TrainrouteListComponent,
    TrainrouteComponent,
    RoprofilenavbarComponent  
  ],

  imports: [
    BrowserModule,
    FormsModule,
    CommonModule, 
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBwwPjOA9wBNM0393EXi8jfq4Rn0JXggiA'
    }),   
    AgmDirectionModule,
    AngularFireModule.initializeApp(environment.firebaseConfig , 'simple'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path:'', redirectTo:'home/login', pathMatch:'full'},
      {path:'home', component:HomeComponent},
      {path:'home/about', component:AboutComponent},
      {path:'home/login', component:LoginComponent},
      {path:'home/profile', component:ProfileComponent},
      {path:'home/ronavbar', component:RoprofilenavbarComponent,
      children:[
        {path:'', redirectTo:'roprofile', pathMatch:'full'},
        {path:'booking/reservationform', component:ReservationformComponent},
        {path:'roprofile', component:RoprofileComponent},
        {path : 'booking', component:BookingseatsComponent}      
      ]
    },
    // {path:'home/login/reservationform', component:ReservationformComponent},
    // {path:'home/login/booking', component:BookingseatsComponent},
    

      {path:'home/tcprofile', component:TcprofileComponent},
     
      
      {path:'reservationofficer', component:ReservationofficerComponent},
      {path:'home/login/dashboard', component:DashboardComponent,
      children:[
        {path:'',redirectTo:'maindash', pathMatch:'full'},
        {path:'maindash', component:MaindashComponent},
        {path:'assignroutelist/assignroute', component:RouteComponent},
        {path:'assignroutelist', component:RoutesListComponent},
        {path:'trainroutelist', component:TrainrouteListComponent},
        {path:'trainroutelist/trainroute', component:TrainrouteComponent},
        {path:'showList', component:TrainsListComponent},
        {path : 'showList/register' , component : TrainsComponent},
        {path:'driverlist', component:DriversListComponent},  
        {path:'driverlist/driverregister', component:DriversComponent},
        {path:'reservationofficerlist', component:ReservationofficersListComponent},  
        {path:'reservationofficerlist/reservationofficerregister', component:ReservationofficersComponent},
        {path:'ticketcheckerlist', component:TicketcheckersListComponent},  
        {path:'ticketcheckerlist/ticketcheckerregister', component:TicketcheckersComponent},
        {path:'kitchenrunnerslist', component:KitchenrunnersListComponent},  
        {path:'kitchenrunnerslist/kitchenrunnersregister', component:KitchenrunnersComponent},  
        {path:'routeslist', component:RoutesListComponent},  
        {path:'routeslist/routesregister', component:RouteComponent},    
        {path:'profile', component:ProfileComponent},
        {path:'notifications', component:NotificationsComponent},
      ]},
      
          
    ]),

  ],
  providers: [AllservicesService,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
