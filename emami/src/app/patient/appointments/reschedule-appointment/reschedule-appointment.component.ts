import { Component, OnInit, Output, EventEmitter } from '@angular/core';
 
@Component({
    selector: 'reschedule-appointment',
    templateUrl: 'reschedule-appointment.html',
    styleUrls: ['./reschedule-appointment.css']
})

export class RescheduleAppointmentPopoverComponent implements OnInit {


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
    min: any = '00';
    cal = false;
    p: any;
    date1: any;

    finalDate:string;
    finalTime :string;

    @Output('onReschedule') onReschedule:EventEmitter<any>=new EventEmitter<any>() 

    constructor() {

        this.date = new Date();
        this.currentDate = this.date.getDate();
        this.weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
       // this.goToLastMonth();
      //  this.goToNextMonth();
        this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentYear = this.date.getFullYear();

        this.getDaysOfMonth();
    }

    ngOnInit() { 

        // var date = new Date();
        // this.currentDate = date.getDate();
         
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
        var thisDate2 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 23:59:59";

        this.date=new Date(this.date.getFullYear(),this.date.getMonth(),day);
        

        // this.currentDate= this.caldate;
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
        if (this.min == '00') {
            this.min = '30'
        }
        else {
            if (this.min == '30') {
                this.min = '00'
            }
        }

    }
    down1() {
        if (this.day == 'am') {
            this.day = 'pm'
        } else {
            if (this.day == 'pm') {
                this.day = 'am'
            }
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

    reschedule(reason)
    {
        //debugger
        this.custom = "modal"
        this.finalDate =`${this.date.getFullYear()}-${this.date.getMonth()+1}-${this.date.getDate()}`;
        this.finalTime =`${this.pad(this.hr)}:${this.min}${this.day}`
        this.onReschedule.emit({nextAppointmentDate:this.finalDate,nextAppointmentTime:this.finalTime,rescheduleReasson:reason});
        return true ;
    }

      pad(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }

    custom="modal";
popup1(){
  this.custom="show";
}
close1(){
  this.custom="modal";
} 
}