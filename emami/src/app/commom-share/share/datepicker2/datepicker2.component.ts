import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datepicker2',
  templateUrl: './datepicker2.component.html',
  styleUrls: ['./datepicker2.component.css']
})
export class Datepicker2Component implements OnInit {

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
  constructor() {
    this.date=new Date();
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
      this.currentDate = new Date().getDate();
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

  selectDate(day) {
     var thisDate3 = day+"-"+(this.date.getMonth()+1)+"-"+this.date.getFullYear();
this.pass =day+"-"+(this.date.getMonth()+1)+"-"+this.date.getFullYear();
     var thispassdate = day+"-"+(this.date.getMonth()+1)+"-"+this.date.getFullYear();
     var dayofweek = new Date(thispassdate).getDay();
     var weekDay = this.weekdayNames[dayofweek];
  console.log(thispassdate)
    var passdate = this.currentYear+"-"+(this.date.getMonth()+1)+"-"+day;
    this.passdate=passdate
    this.currentDate = day;
     var thisDate2 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 23:59:59";
     //this.date=new Date(thisDate2);
     this.selectedDate.emit(new Date(thisDate2));
     console.log(new Date(thisDate2));
    // this.currentDate= this.caldate;
   }
  ngOnInit() {
  }


}
