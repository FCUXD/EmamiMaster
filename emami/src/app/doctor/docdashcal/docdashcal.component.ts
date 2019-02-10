import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docdashcal',
  templateUrl: './docdashcal.component.html',
  styles: [`
 
  h3 {
    margin: 0 0 10px;
  }
  
  pre {
    background-color: #f5f5f5;
    padding: 15px;
  }
  th , td {
      padding: 5px;
  }

  .currentDate{
      font-weight: bold;
        
  }
  .calendar-date {
      text-align: center;
      margin: 0;
    }
    .currentDatecal {
      
      font-weight: bold;
      /* background-color: orange; */
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
      /* font-size: 90%; */
      /* padding: 5px; */
      text-align: center;
    }
   .padlrn{
     padding:0px;
   }
   .title{
    font-family: TrajanPro;
    font-size: 18.5px;
    font-weight: normal;
    color: #000000;
    height: 82px;
}
   .dcc{
    font-family: TrajanPro;
    font-size: 18.5px;
    font-weight: normal;
    color: #000000;
   }
    .outer{
      border-radius: 5px;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  }
     .last-month {
          color: #999999;
      /* font-size: 90%; */
     
      text-align: center;
      background-color: white;
    }
   
    .grid-container {
   text-align : center;
       display: grid;
      grid-template-columns: auto auto auto auto auto auto auto;
      /* background-color: grey; */
      
      
    }
    app-datepicker {
      cursor: pointer;
  }
  .box-min-height{
    min-height: 413px;
}
    .bgcolor{
      border-radius: 5px;
      padding: 0px;
      padding-top: 13px;
      display: grid;
      grid-template-columns: auto auto auto;
      background-color:  #fbf8ee;;
      font-family: TrajanPro;
      font-size: 14px;
      font-weight: bold;
      color: #333333!important;
    }
    .bgitem1 {
      color: #333333!important;
  }
    .radio-holder{
      border-radius: 5px;
      border: solid 1px #dbb778;
      height:36px;
      padding-top:5px;
      Background-color:#ffffff;
      width:80%;
     vertical-align:middle;
  }
  .outer-style{
    padding:20px;
    border-radius: 5px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    background-color: #fbf8ee;
  }
  .bttext{
      background-color: #ffffff;
      font-family: TrajanPro-Regular;
      font-size: 12px;
      font-weight: bold;
      color: #333333;
  }
    .calfield{
      position:relative;
      font-family: TrajanPro-Regular;
      font-size: 18px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.78;
      letter-spacing: 0.9px;
      color: #333333;
      height:50px;
      background-color: #ffffff!important;
      float:right;
      border: 1px solid #fbf8ee;
    }
    .last-month {
      text-align: center;
      background-color: white;
      font-family: TrajanPro-Regular;
  font-size: 18px;
  font-weight: normal;
  border: 1px solid #fbf8ee!important;
  color: rgba(51, 51, 51, 0.5);
  }
  .next-month {
    color: #999999;
    text-align: center;
    border: 1px solid #fbf8ee;
    background-color: white;
    font-family: TrajanPro-Regular;
font-size: 18px;
font-weight: normal;
color: rgba(51, 51, 51, 0.5);
background-color: #ffffff!important;
border: 1px solid #fbf8ee!important;
}
.event-span{
  position: absolute;
    left: 4px!important;
    bottom: 0px!important;
    background-color: #fbf8ee!important;
    font-size: 14px;
    font-weight: bold;
    color: #cfa15a;
}

    .bgitem{
      width: 33px!important;
    }
    .gridhead{
      
      display: grid;
      grid-template-columns: auto auto auto auto auto auto auto;
      /* background-color: #6cb043; */
      width: 100%;
      height: 28px;
      padding: 5px;
      padding-left: 9px;

      font-family: TrajanPro;
      font-size: 14px;
      font-weight: bold;
      color: #333333;
    }
    .grid-item2{
      padding: 5px;
      /* font-size: 30px; */
      text-align: center;
    
    }
    .item {
      grid-row: 1 ;
      padding: 5px;
      /* font-size: 30px; */
      text-align: center;
    
    }
    .grid-item {
     
      
      /* font-size: 30px; */
      text-align: center;
    
    }
    .calendar-header {
      width: 320px;
      text-align: center;
    }
    .right{
      margin-top: -3px;
      padding-right: 15px;
    }
    .m-top-2{
      margin-top: 2px;
    }
    .last-month:nth-child(8n+0) {
        background: #000000 !important;
    }
    * {
      box-sizing:content-box;
  }
  .btnhold{
    display:flex;
  }
  @media screen and (max-width:992px) {
    .btnhold{
      display:block;
    }
    .radio-holder{
      margin-top:10px!important;
    }
    }
    @media screen and (max-width:480px) {
      .item {
         font-size: 10px;     
     }
    }
`]
})
export class DocdashcalComponent implements OnInit {
 
  datetopass:any;
  currentMonth:any;
  currentYear:any;
  monthNames=[];
  daysInThisMonth:any;
  daysInLastMonth:any;
  daysInNextMonth:any;
  weekdayNames:any;
  date=new Date();
  currentDate:any;
  pass:any;
  passdate:any;
  constructor() {
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
    this.currentDate= day;
     var thisDate3 = day+"-"+(this.date.getMonth()+1)+"-"+this.date.getFullYear();
this.pass =day+"-"+(this.date.getMonth()+1)+"-"+this.date.getFullYear();
     var thispassdate = day+"-"+(this.date.getMonth()+1)+"-"+this.date.getFullYear();
     var dayofweek = new Date(thispassdate).getDay();
     var weekDay = this.weekdayNames[dayofweek];
  console.log(thispassdate)
    var passdate = this.currentYear+"-"+(this.date.getMonth()+1)+"-"+day;
    this.passdate=passdate;
    day = this.pass;
    // this.currentDate = this.pass
   
     var thisDate2 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 23:59:59";
    
    // this.currentDate= this.caldate;
   }
  ngOnInit() {
  }


}
