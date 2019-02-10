import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import swal from 'sweetalert2';

@Component({
  selector: 'app-datepicker3',
  templateUrl: './datepicker3.component.html',
  styleUrls: ['./datepicker3.component.css']
})
export class Datepicker3Component implements OnInit {

  @Output() selectedDate = new EventEmitter<Date>();
 
  @Input() date: Date;
  datetopass:any;
  currentMonth:any;
  currentYear:any;
  monthNames=[];
  daysInThisMonth:any;
  daysInLastMonth:any;
  daysInNextMonth:any;
  weekdayNames:any;
  currentDate:any;
  pass:any;
  passdate:any;
  cDay:any;
  constructor() {
    this.date=new Date();
    this.cDay = this.date.getDate();
    this.weekdayNames = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    this.getDaysOfMonth();
   this.goToLastMonth();
   this.goToNextMonth();
    this.monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentYear = this.date.getFullYear();
  }
  dropmonth(){
    
  }
  getDaysOfMonth() {
    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentYear = this.date.getFullYear();
    if(this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = (new Date().getDate());
    } else {
      this.currentDate = 999;
    }
   var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    for(var i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push(i);
      
    }
    var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
    for (var j = 0; j < thisNumOfDays; j++) {
      this.daysInThisMonth.push(j+1);
    }

    var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
    // var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
    for (var k = 0; k < (6-lastDayThisMonth); k++) {
      this.daysInNextMonth.push(k+1);
      
    }
    var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
   if(totalDays<36) {
      for(var l = (7-lastDayThisMonth); l < ((7-lastDayThisMonth)+7); l++) {
        this.daysInNextMonth.push(l);
      }
    }
  }
  goToLastMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
  }

  goToNextMonth() {
   
    this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
    this.getDaysOfMonth();
   
 
  }
  monthCheck:any;
  flag:boolean=false;
  yearCheck:any;
  selectDate(day) {
    debugger
    var date=this.date;
    date.setDate(day)
    let selectedMonth = (date.getMonth())+1;
    let selectedDate = date.getDate();
    let selectedYear = date.getFullYear();
    let CDATE = new Date();
    let Cdate = CDATE.getDate();
    let Cmonth = CDATE.getMonth()+1;
    let Cyear = CDATE.getFullYear();

    //logic to calculate 6 month from today
    if(Cmonth>6){
    this.monthCheck =  (Cmonth)-6;
    this.flag = true
    this.yearCheck = Cyear+1;
    }
    else{

      this.monthCheck = Cmonth+6
    }
   if(date < new Date() ){
     
    }
    else
    if(this.flag){
      if(selectedYear<this.yearCheck){
         
          var thisDate3 = day+"/"+(this.date.getMonth()+1)+"/"+this.date.getFullYear();
          this.pass =day+"/"+(this.date.getMonth()+1)+"/"+this.date.getFullYear();
               var thispassdate = day+"/"+(this.date.getMonth()+1)+"/"+this.date.getFullYear();
               var dayofweek = new Date(thispassdate).getDay();
               var weekDay = this.weekdayNames[dayofweek];
               console.log(thispassdate)
              var passdate = day+"/"+(this.date.getMonth()+1)+"/"+this.currentYear;
              this.passdate=passdate
              this.currentDate = day;
               var thisDate2 = this.date.getFullYear()+"/"+(this.date.getMonth()+1)+"/"+day+" 23:59:59";
               //this.date=new Date(thisDate2);
               this.selectedDate.emit(new Date(thisDate2));
     
         
     
    } else  if(selectedMonth<=this.monthCheck && selectedYear==this.yearCheck){
      var thisDate3 = day+"/"+(this.date.getMonth()+1)+"/"+this.date.getFullYear();
      this.pass =day+"/"+(this.date.getMonth()+1)+"/"+this.date.getFullYear();
           var thispassdate = day+"/"+(this.date.getMonth()+1)+"/"+this.date.getFullYear();
           var dayofweek = new Date(thispassdate).getDay();
           var weekDay = this.weekdayNames[dayofweek];
           console.log(thispassdate)
          var passdate = day+"/"+(this.date.getMonth()+1)+"/"+this.currentYear;
          this.passdate=passdate
          this.currentDate = day;
           var thisDate2 = this.date.getFullYear()+"/"+(this.date.getMonth()+1)+"/"+day+" 23:59:59";
           //this.date=new Date(thisDate2);
           this.selectedDate.emit(new Date(thisDate2));
 
    }
    else{
      swal('Warning','You can only book till 6 month, select another date ','warning')
    }
  }
    else
    
    if(selectedMonth<=this.monthCheck && selectedYear==Cyear ){
     
    
     var thisDate3 = day+"/"+(this.date.getMonth()+1)+"/"+this.date.getFullYear();
     this.pass =day+"/"+(this.date.getMonth()+1)+"/"+this.date.getFullYear();
          var thispassdate = day+"/"+(this.date.getMonth()+1)+"/"+this.date.getFullYear();
          var dayofweek = new Date(thispassdate).getDay();
          var weekDay = this.weekdayNames[dayofweek];
          console.log(thispassdate)
         var passdate = day+"/"+(this.date.getMonth()+1)+"/"+this.currentYear;
         this.passdate=passdate
         this.currentDate = day;
          var thisDate2 = this.date.getFullYear()+"/"+(this.date.getMonth()+1)+"/"+day+" 23:59:59";
          //this.date=new Date(thisDate2);
          this.selectedDate.emit(new Date(thisDate2));

          

          console.log(new Date(thisDate2));
         // this.currentDate= this.caldate;

    }
   }


  ngOnInit() {
  }


}
