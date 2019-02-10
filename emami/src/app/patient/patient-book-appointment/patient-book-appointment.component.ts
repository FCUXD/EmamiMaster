import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/user.service';
import Swal from 'sweetalert2'
import { parse } from 'querystring';
import swal from 'sweetalert2';
import {NavigationEnd } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-patient-book-appointment',
  templateUrl: './patient-book-appointment.component.html',
  styleUrls: ['./patient-book-appointment.component.css']
})
export class PatientBookAppointmentComponent implements OnInit {


  string = "Choose a Health Issue";
  userName: {};

  singleCheck: any = {
    PRIMARY_HEALTH_ISSUE_LIST: []
  };
  bookAppointmentForm:any = {
    healthIssue: null,
    modeOfonsultation: null,
    appointmentDate: new Date(),
    appointmentTime: null,
    drPref: null,
    note: null,
    userName: JSON.parse(localStorage.getItem("data_p"))
  }

  constructor(private http: HttpClient,
    private router: Router,
    private user: UserService,
    private act: ActivatedRoute) {
    //this.userName1 = localStorage.getItem("data_p"));
  }

  btn = ["colorchanged", "btn", "btn", "btn"];


  addTimeSlot(index) {
    for (let i = 0; i < this.btn.length; i++) {
      this.btn[i] = "btn";
    }
    this.btn[index] = "colorchanged";
  }

  ngOnInit() { 
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });

    var userData = JSON.parse(localStorage.getItem("data_p"));
    var data1 = { userName: userData }
    var headers = new Headers({ 'Content-Type': 'application/json' });
    this.user.AppointmentReq(data1, headers).subscribe((data: any) => {
      this.singleCheck = data;
      console.log("ng......." + this.singleCheck);
      if (this.singleCheck) {
        this.router.navigate(['/patientbookappointment']);
      }

    });
  }



  bookAppointment() {
    //debugger
    if (!this.bookAppointmentForm.healthIssue) { Swal("", "Please Select Your Health Issue",) } else
      if (!this.bookAppointmentForm.modeOfonsultation) { Swal("", "Please Select Preferred mode of Appointment", ) } else
        if (!this.bookAppointmentForm.appointmentDate) { Swal("", "Please Select preferred Date", ) } else
          if (!this.bookAppointmentForm.appointmentTime) { Swal("", "Please Select preferred Time Slot",) } 
           // if (!this.bookAppointmentForm.gender) { Swal("Warning", "Please Select Doctor Preferrence", 'warning') }
            else {
              console.log(JSON.stringify(this.bookAppointmentForm));
              let newDate = new Date(this.bookAppointmentForm.appointmentDate);
              let d = newDate.getDate();  
              let m = newDate.getMonth() + 1; 
              let y = newDate.getFullYear();  
              let finaldate = y+"-"+m+"-"+d;
              this.bookAppointmentForm.appointmentDate = finaldate;
              var json = this.bookAppointmentForm;
              var REGISTRATION_VALIDATION = this.bookAppointmentForm;

              var headers = new Headers({ 'Content-Type': 'application/json' });
              this.user.BookAppointmentReq(json, headers).subscribe((data: any) => {
                this.singleCheck = data;
                console.log(this.singleCheck);

                if (this.singleCheck.STATUS === "SUCCESS") {
                  // Swal("Success", "Appointment is successfully booked", 'success');
                  this.router.navigate(['/appoinmentconfirmed']);
                }

                this.user.PatientHome(REGISTRATION_VALIDATION, headers).subscribe((data: any) => {
                  
                  this.singleCheck = data;
                  console.log(this.singleCheck);
                });

              });
            }

  }

  Audio = "Audio";
  Video = "Video";
  male = "male";
  female = "female";
  other = "other";
  audio_call() {
    this.Audio = "green";
    this.Video = "Video";
  }
  video_call() {
    this.Video = "green";
    this.Audio = "call";
  }
  males() {
    debugger
    this.male = "green";
    this.female = "female";
    this.other = "other";
  }
  females() {
    this.male = "male";
    this.female = "green";
    this.other = "other";
  }
  others() {
    this.male = "male";
    this.female = "female";
    this.other = "green";
  }
  Time:boolean=false
time(hr){
  debugger
  var d = new Date(); // for now
let hrs :any = (d.getHours()); // => 9
// if(hrs>12){
//   // hrs = (hrs-12)+':00'+'pm';
//   hrs = (hrs-12)
// }
// else{
//   // hrs = (hrs)+':00'+'am';
//   hrs = (hrs)
// }
d.getMinutes(); // =>  30
d.getSeconds(); // => 51
 let num = hr
  // if(hr<hrs){
  //   swal('warning','Select other Time','warning')
  //   this.Time = true
  // }else{
  //   this.Time = false
  // }
  
}
}
