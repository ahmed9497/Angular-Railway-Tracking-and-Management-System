import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AllservicesService } from '../../services/allservices.service';
import { Driver } from 'selenium-webdriver/opera';
import { Train } from '../../train/shared/train.model';
import { Router } from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-bookingseats',
  templateUrl: './bookingseats.component.html',
  styleUrls: ['./bookingseats.component.css']
})
export class BookingseatsComponent implements OnInit{

  trains : Train[];
  train_id : any;
  date : any;
  tempReserve = [];
  trainTotalSeats : any = [];
  trainReservedSeats : any = [];
  totaltrainitem :any[];
  totalreserveitem:any=[];
 
  constructor(private service : AllservicesService , private router : Router) { 
  }
 
  data:any = [] ;
  
  ngOnInit() {
   
    this.service.getTrainData().subscribe(i => {
      this.trains = i;
    });

  //   $('button').click(function(){
  //    // alert("Alert is calling on clik");
  //     if (this.colour){
  //     $(this).css("color", "red");
  //       this.colour=false;
  //     }
  //     else{
  //       $(this).css("color", "blue");
  //       this.colour=true;
  //     }
     
  //   });
  //   $("#b").click(function(){
  //     alert("You entered p1!");
  // });
  //   $("p" , "#b").click(function(){
  //     alert("The paragraph was clicked.");
  //     $(this).hide(); 
  // });
   
}



populate(){
    for(let i=0;i <= this.trainTotalSeats[0] ;i++){  
      this.trainTotalSeats.push(i.toString());
    }

    // $.each(this.array, function( index, value ) {
    //   alert( index + ": " + value );
    // });
  }

  
compare(){
  console.log('running');
  setTimeout ( () =>{
  for(var i = 0; i<this.trainReservedSeats.length ; i++){
    console.log(this.trainReservedSeats[i])
    for(var ii= 0 ; ii< this.trainTotalSeats.length ; ii++){
      console.log(this.trainTotalSeats[ii])
      if(this.trainTotalSeats[ii]== this.trainReservedSeats[i]){
        console.log("matched");
        this.trainTotalSeats[ii] = 'reserve';
      }
    }
  }
  },300);
}

onClicked(){

    console.log(this.train_id);
    this.totaltrainitem = this.service.getTrainData2(this.train_id);  
    console.log(this.totaltrainitem);
    this.trainTotalSeats.length =0;
    this.trainTotalSeats = this.service.getTotalTrainSeats();
    console.log(this.trainTotalSeats);
    this.totalreserveitem = this.service.getrouteData2(this.train_id,this.date).subscribe(i => {

      console.log(i);
    });
    console.log(this.totalreserveitem);
    this.trainReservedSeats.length = 0
    this.trainReservedSeats = this.service.getReserveTrainSeats();

    console.log(this.trainReservedSeats);

    setTimeout(() => {
  
      this.compare();  
      this.populate(); 
      this.trainTotalSeats.forEach(element => {
        //   this.data.push(element);
            console.log(element);
            
         });
         
         this.trainReservedSeats.forEach(element => {
           console.log('ressssssred'+ '' +element);
         });
         
        

        },500);


  setTimeout(() => {
    $('input').click(function(){
      // alert("Alert is calling on clik");
      // $(this).css("background-color", "red");
       if ($(this).css("background-color")=='rgb(255, 255, 255)'){
        $(this).css("background-color", "red");
        }
        else{
          $(this).css("background-color", "white");
        }
    });
    
  }, 1000);
}

confirmClick(){
  for(var i = 0 ; i<=this.tempReserve.length ; i++){
    this.trainReservedSeats.push(this.tempReserve[i]);
  }
  this.trainReservedSeats.forEach(element => {
    console.log(element);
  });
  this.service.ReservedSeatsFunction(this.trainReservedSeats,this.train_id,this.date,this.tempReserve);

  //this.service.updateReservedSeats(this.trainReservedSeats);
}

saveInTempArray(b){
   var a = true;
   for(var i = this.tempReserve.length - 1; i >= 0; i--) {
    if(this.tempReserve[i] === b) {
       this.tempReserve.splice(i, 1);
       a=false;
       this.tempReserve.forEach(i => console.log(i));
       
    }
  }  
  console.log(a);
  if(a==true){
      this.tempReserve.push(b);
    }
}

  COLOR(b,valuee){
    console.log("buttin is clicked"+b+" "+ valuee.target.value);
    // $('button').click(function(){
    //      // alert("Alert is calling on clik");
    //       if (this.colour){
    //       $(this).css("color", "red");
    //         this.colour=false;
    //       }
    //       else{
    //         $(this).css("color", "blue");
    //         this.colour=true;
    //       }
         
    //     });
}

}
