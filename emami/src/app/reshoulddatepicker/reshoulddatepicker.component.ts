import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reshoulddatepicker',
  templateUrl: './reshoulddatepicker.component.html',
  styles: [`
  :host >>> .popover {
   color: #000;
   max-width: 692px;
   top: 278px !important;
left: 0% !important;
 data-trigger:focus;
 } 
 :host >>> .popover .arrow {
  position: absolute;
  display: block;
  width: 1rem;
  height: 0.5rem;
  margin: 0 0.3rem;
  left: 101px;
}
  h3 {
   margin: 0 0 10px;
 }
 .line1InCenter{
   margin: 0 auto; 
   width: 47% !important;
 
 }  
 :host >>> .bs-popover-right .arrow, .bs-popover-auto[x-placement^="right"] .arrow { 
  position: absolute;
  left: calc((0.5rem + 1px) * -1) !important;
  display: block;
  
  width: 1rem;
  
  height: 0.5rem;
  
  margin: 0 0.3rem;
  
  left: 101px;
 } 
 :host >>> .bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^="bottom"][_ngcontent-c5] .arrow[_ngcontent-c5]::before {

  background: url("assets/images/popoverArrow.png") no-repeat;
  border: none;
  top: 1px;
  right: -273px;

} 

:host >>> .bs-popover-bottom .arrow::after, .bs-popover-auto[x-placement^="bottom"] .arrow::after {

  top: 1px;
  border-bottom-color: #fff;

}  

 .main_div{
   float: left;
   width: 594px;
 padding: 2%;
 }
 pre {
   background-color: #f5f5f5;
   padding: 15px;
 }
 th , td {
     padding: 5px;
 }
 .current-day{text-align:center;padding:5px 10px;cursor: pointer;}
 .currentDate{
   font-weight: normal;
   color: #333333;
   background-color: #d6ad66;
   border-radius: 5px;
  padding: 3px 5px;
 }
  .popover .sendbtn123 {
   margin-top: 20px;
   background-color:#d6ad66 !important;
   border: none;
   color: white;
   border-radius: 5px;
   height: 62px;
   width: 192px;
   font-size: 18px;
   text-transform: uppercase;
   cursor: pointer;
 }
 .snd-style{
   background-color:#d6ad66!important;
   margin-top: 20px;
   border: none;
   color: white;
   border-radius: 5px;
   height: 62px;
   width: 192px;
   font-size: 18px;
   text-transform: uppercase;
   cursor: pointer;
 }
 .calendar-date {
     text-align: center;
     margin: 0;
   } 
   .RESCHEDULEBtn{
     border: 1px solid #33a15c;
     font-size: 11px;
    color: #33a15c; 
    background-color: rgba(0, 0, 0, 0.05);
   }
   .currentDatecal {
     
     font-weight: bold;
     / background-color: orange; /
     color: white;
     border-radius: 20px;
   width: 30px;
   height: 30px;
   
     margin: 0 auto;
   }
   [col-1] {
     -webkit-box-flex: 0;
     -webkit-flex: 0 0 8.33333%;
     -ms-flex: 0 0 8.33333%;
     flex: 0 0 14.285714285714286%;
     width: 14.285714285714286%;
     max-width: 14.285714285714286%;
     color: dimgray;
     
     line-height: 30px;
   }
   .next-month{
     color: #999999;
     text-align: center;
     background-color: white;
     padding:5px 10px;
     cursor:pointer;
   }
  
    .last-month {
     color: #999999;
     text-align: center;
     background-color: white;
     padding:5px 10px;
     cursor:pointer;
   }
  
   .grid-container {
  
     display: grid;
     grid-template-columns: auto auto auto auto auto auto auto;
     / background-color: grey; /
     width: 100%;
     
   }
   .btn-green-1{
     font-size: 12px;
     letter-spacing: 1.2px;
     border-radius: 3px;
     color: #402909;
     border: solid 1px #84b367;
     background-color: #bccf60;
     font-family: 'TrajanPro-Bold';
     box-shadow: 0 0 0 2px #bccf60;
     padding: 3px 56px; 
     border-radius: 10px;
     }
   body{
     background:transparent;
   }
   .bgcolor{
    border-radius: 5px 5px 0px 0px;
     padding:6px 8px 10px 8px;
     display: grid;
     grid-template-columns: auto auto auto;
     background-color: #d6ad66;
   }
   .bgitem{
     grid-row: 1;
     color: #402909;
     cursor: pointer; 
     font-family: 'PlayfairDisplay-Bold';
   }
   .gridhead{
     width:100%;
     display: grid;
     grid-template-columns: auto auto auto auto auto auto auto;
     height: 28px;
     padding: 5px 0px;
   }
   .grid-item2{
     padding: 5px;
     / font-size: 30px; /
     text-align: center;
   
   } 
   textarea {

    overflow: auto;
    resize: vertical;
    border: 1px solid #d6ad66;
    border-radius: 5px;
    min-width: 100% !important;

}
   .item {
     grid-row: 1 ;
     padding: 5px;
     / font-size: 30px; /
     text-align: center;
     cursor:pointer;
   
   }
   .grid-item {
     text-align: center;
   
   }
   .calendar-header {
     width: 320px;
     margin: 0 auto;
     text-align: center;
   }
   .right{
     float: right;
     height: 20px; 
     width: 20px;
     padding-right: 10px;
   }
 
   .last-month:nth-child(8n+0) {
       background: #000000 !important;
   }
   * {
     box-sizing:content-box;
 }
 *[_ngcontent-c0] {
   box-sizing: border-box;
 }
 .rowclass{
  width: 227px;
  margin-left: 20px;
   border-radius: 5px;
   box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
   text-align: center;
   font-family: 'TrajanPro-Bold';
 } 
 .close{
  margin-right: 25px;

  margin-top: -16px;
 }
 .rowcol{
  width: 36px;
 } 
 .DotColon{
  margin-top: 20px;
 } 
 .ReshouldLabel{
  font-family: 'TrajanPro-Bold'; 
  font-size: 16px;
 }
 .rowcolmargin{
  margin-left: 54px;
 }
 
 .uline{
   padding-top: 2px;
   font-size: 10px; 
  
 }
 .divtime{
  font-size: 16px;
   text-transform: uppercase;
   font-family: 'TrajanPro-Bold';
 }
 
 .rowfirst {
   padding: 20px;
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   width: 1000
   px;
   -ms-flex-wrap: wrap;
   flex-wrap: wrap;
   margin-right: -15px;
   margin-left: -15px;
 }
 .line1{
 height: 1px;
 background-color: gray; 
 width: 34%; 
 margin: 0 auto;
 }
 .ArrowUpDown{
   margin-left: 2px;
 }
 .foot{
   padding: 20px;
 } 
 
 .col-md-3{
   text-align: center
 }
 hr {
 display: block;
 height: 1px;
 border: 0;
 border-top: 1px solid #ccc;
 margin: 1em 0;
 padding: 0;
 }
 
 .calender {
   width: 48%;
   display: inline-block;
   vertical-align: top; 
   float: left; 
   box-shadow: 0px 0px 15px #eee;
   border: none;
   border-radius: 10px;
 }
 .timepick {
   width: 44%;
   display: inline-block;
   vertical-align: top;
   margin-left: 20px;
   float: left;
 }
 .popover .sendbtn123{
   background-color: #402909!important;
 }
 .btn-trasnp-1{
   font-size: 12px;
   letter-spacing: 1.2px;
   background: transparent;
   border-radius: 5px;
   border: solid 1px #cfa15a;
   font-family: 'TrajanPro-Bold';
   padding: 5px 10px; 
   width: 153px;

height: 22px;
   }
  `],
})
export class ReshoulddatepickerComponent implements OnInit {
  @ViewChild('popover3') popover3: any;
  @Output() flag = new EventEmitter<any>();
  @Output() voted1 = new EventEmitter<any>();
  flag1: boolean = true;
  datetopass: any;
  display: boolean = true;
  currentMonth: any;
  currentYear: any;
  monthNames = [];
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  weekdayNames: any;
  date = new Date();
  currentDate: any;
  pass: any;
  passdate: any;
  day: any = 'am';
  hr: any = 1;
  min: any = 0;
  cal = false;
  p: any;
  date1: any;
  @Output() datesend = new EventEmitter<any>();
  constructor() {
    //  this.flag1=true;
    var date = new Date();
    this.currentDate = date.getDate();
    this.weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    this.getDaysOfMonth();
    this.goToLastMonth();
    this.goToNextMonth();
    this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentYear = this.date.getFullYear();
  }
  onvoted1(thispassdate: any) {
    this.date1 = thispassdate;
   // console.log(this.date1);
    this.datesend.emit(this.date1);

    //console.log(this.date1)
  }
  popup(pop: any, flg: boolean) {
    this.flag1 = flg;
    this.p = pop;
  }
  close() {
    this.flag1 = !this.flag1;
    this.flag.emit(this.flag1)

  }
  getDaysOfMonth() {
    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentYear = this.date.getFullYear();
    if (this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
    } else {
      this.currentDate = 999;
    }
    var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push(i);
      //console.log(i)
    }
    var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    for (var j = 0; j < thisNumOfDays; j++) {
      this.daysInThisMonth.push(j + 1);
    }

    var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
    // var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
    for (var k = 0; k < (6 - lastDayThisMonth); k++) {
      this.daysInNextMonth.push(k + 1);
      //console.log()
    }
    var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
    if (totalDays < 36) {
      for (var l = (7 - lastDayThisMonth); l < ((7 - lastDayThisMonth) + 7); l++) {
        this.daysInNextMonth.push(l);
      }
    }
  }
  goToLastMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
  }

  goToNextMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
    this.getDaysOfMonth();
  }

  selectDate(day) {
    //console.log(day)

    var thisDate3 = day + "-" + (this.date.getMonth() + 1) + "-" + this.date.getFullYear();
    this.pass = day + "-" + (this.date.getMonth() + 1) + "-" + this.date.getFullYear();
    var thispassdate = day + "-" + (this.date.getMonth() + 1) + "-" + this.date.getFullYear();
    var dayofweek = new Date(thispassdate).getDay();
    var weekDay = this.weekdayNames[dayofweek];
   // console.log(this.pass)
    var passdate = this.currentYear + "-" + (this.date.getMonth() + 1) + "-" + day;
    this.passdate = passdate

    this.currentDate = day;
    this.voted1.emit(this.pass);

    var thisDate2 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 23:59:59";


    // this.currentDate= this.caldate;
  }

  meridian = true;

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  onvoted(thispassdate: any) {
    this.date = thispassdate

  }
  up() {
    if (this.hr > 11) {

      this.hr = 1;
    }
    else {
      this.hr++;
    }

  }
  down() {
    if (this.hr <= 1) {
      this.hr = 12;
    }
    else {
      this.hr--;
    }

  }
  up1() {
    if (this.min > 59) {

      this.min = 0;
    }
    else {
      this.min++;
    }

  }
  down1() {
    if (this.min <= 1) {
      this.min = 60;
    }
    else {
      this.min--;
    }
  }
  up2() {
    if (this.day == 'am') {
      this.day = 'pm'
    }
    else {
      if (this.day == 'pm') {
        this.day = 'am'
      }
    }
  }
  down2() {
    if (this.day == 'am') {
      this.day = 'pm'
    } else {
      if (this.day == 'pm') {
        this.day = 'am'
      }
    }
  }
  ngOnInit() {
    var date = new Date();
    this.currentDate = date.getDate();
    this.flag1 = true;
  }
 
}