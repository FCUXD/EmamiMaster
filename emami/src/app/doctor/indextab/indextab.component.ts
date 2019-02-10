import { Component, OnInit, OnDestroy } from '@angular/core';
import { DoctorService } from '../../doctor.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import swal from 'sweetalert2';
import { RestService } from '../../services/rest.service'
import { Constants } from '../../app.constants';
import Swal from 'sweetalert2';
import Utils from '../../services/utils';


@Component({
  selector: 'app-indextab',
  templateUrl: './indextab.component.html',
  styleUrls: ['./indextab.component.css']
})
export class IndextabComponent implements OnInit, OnDestroy {

  upCommingAppList: any = [];
  historyAppList: any = [];
  upCommingAppointmentDetails: any[];
  selectedYear: number;
  selectedMonth:number;

  AppointmentRequest: any = {
    "flag": "0",
    "doctorId": "3421",
    "startDate": "20181001",
    "endDate": "2018-10-31",
    "currentDate": "2018-11-24",
    "previousDate": "2018-11-23"
  }


  selecteddate: any;

  check: boolean = true;
  check1: boolean;
  SpecificDate;
  today_data: any = [];
  tomorrow_data: any = [];
  history_data: any = [];
  specific__data: any = [];
  today: any = [];
  tomorrow: any = [];
  history: any = [];
  specific_date: any = [];
  dr_name;
  username;
  data;
  responsedata: any = [];
  constructor(private formBuilder: FormBuilder,
    private doc: DoctorService,
    private router: Router, private restService: RestService, private constants: Constants) {
    this.username = JSON.parse(localStorage.getItem("userName_Doc"));

  }
  tabs = [
    { active: 'active', tabcontent: 'tabcontent' },
    { active: '', tabcontent: 'hide' },
    { active: '', tabcontent: 'hide' }
  ];
  headers = new Headers({ 'Content-Type': 'application/json' });
  isPrescriptionAdded:any=[];
  ngOnInit() {
    localStorage.setItem("isclickedFromHistory","false");
    localStorage.removeItem("modeOfConsultation");
    this.isPrescriptionAdded = localStorage.getItem("isPrescriptionAdded");

    if(this.isPrescriptionAdded == "true"){
      let dataToSend:any={};
        dataToSend.flag = 0;
        dataToSend.userName = localStorage.getItem("userNameLoginString");
        dataToSend.date = "";
        localStorage.removeItem("isPrescriptionAdded");
        this.isPrescriptionAdded =undefined;
        this.doc.doctorLoginService(dataToSend, this.headers).subscribe((data: any) => {
          this.today_data = data.A_LIST;
          console.log("history:" + JSON.stringify(this.history_data));
        });
      swal("Success", "Prescription Added Successfully, message and email sent to you", 'success');
    }else{
      // localStorage.clear();
      if(this.username == null){
        this.username =localStorage.getItem("userNameLoginString");
      }
    var today = { "flag": 0, "userName": this.username, "date": "" }
    this.doc.doctorLoginService(today, this.headers).subscribe((data: any) => {

      this.today_data = data.A_LIST;
      console.log("this.today_data"+this.today_data)  
      this.check = true;
      localStorage.setItem("userNameLoginString",data.userName);
    });
    }
    
  }

  today_new() {
    this.check = true;
    this.check1 = false;
    var today = { "flag": 0, "userName": this.username, "date": "" }
    this.doc.doctorLoginService(today, this.headers).subscribe((data: any) => {
      this.today_data = data.A_LIST;
      console.log(this.today_data);
    });
  }

  tomorrow_new() {
    this.check = true;
    this.check1 = false;
    var tomorrow = { "flag": 1, "userName": this.username, "date": "" }
    this.doc.doctorLoginService(tomorrow, this.headers).subscribe((data: any) => {
      this.tomorrow_data = data.A_LIST;
       
    });
  }

  history_new() {
    this.check = true;
    this.check1 = false;
    var history = { "flag": -1, "userName": this.username, "date": "" }
    this.doc.doctorLoginService(history, this.headers).subscribe((data: any) => {
      this.history_data = data.A_LIST;
      console.log("history:" + JSON.stringify(this.history_data));
    });
  }

  openCity(index) {
      localStorage.removeItem("isclickedFromHistory");
    if(index == 2){
      localStorage.setItem("isclickedFromHistory","true");
    }else{
      localStorage.setItem("isclickedFromHistory","false");
    }
    
    this.reset();
    this.tabs[index].active = 'active';
    this.tabs[index].tabcontent = 'tabcontent';
  }

  reset() {
    for (let i = 0; this.tabs.length > i; i++) {
      this.tabs[i].active = '';
      this.tabs[i].tabcontent = 'hide';
    }
  }

  onvoted(thispassdate: any) {
    this.selecteddate = thispassdate

    var headers = new Headers({ 'Content-Type': 'application/json' });
    var jsondata = { "flag": "2", "date": this.selecteddate, "userName": "kiranjd" }
    this.doc.SpecificAppointmentDate(jsondata, headers).subscribe((data: any) => {
      this.responsedata = data.A_LIST;
      this.check = false;
      this.check1 = true;
    });
  }

  ngOnDestroy() {
  }

  consult(AppointmentId,modeOfConsultation) {
    debugger
    localStorage.removeItem("symptomsList");

    localStorage.setItem("modeOfConsultation",modeOfConsultation);
    var data = { appointmentId: AppointmentId }
    
    var key = "appointmentId";
    localStorage.setItem(key, JSON.stringify(AppointmentId));
    
    var headers = new Headers({ 'Content-Type': 'application/json' });
    this.doc.ConsultationReq(data, headers).subscribe((data) => {
      this.responsedata = data
      //debugger
      if (this.responsedata.STATUS === "PATIENT-PROFILE_REDIRECT") {
        let user_Id  =  this.responsedata.userId_;
        let doctor_Id =  this.responsedata.doctorId_;
        let app_Id  =  this.responsedata.appointmentId_;
        localStorage.setItem("user_Id",user_Id);
        localStorage.setItem("doctor_Id",doctor_Id);
        localStorage.setItem("appointment_Id",app_Id);
        var key = "gender";
        localStorage.setItem(key, JSON.stringify(this.responsedata.gender));
        // alert(this.responsedata.gender)
        var key = "mobile";
        localStorage.setItem(key, JSON.stringify(this.responsedata.mobile));

        var key = "health";
        localStorage.setItem(key, JSON.stringify(this.responsedata.health));

        var key = "age";
        localStorage.setItem(key, JSON.stringify(this.responsedata.age));

        var key = "name";
        localStorage.setItem(key, JSON.stringify(this.responsedata.name));

        localStorage.setItem("patientHistory",JSON.stringify(this.responsedata));
        this.router.navigate(['consultPatientProfile']);
      } else {
        alert("error")
      }
    });
  }
  sendData(id){
    debugger
    localStorage.setItem("docRescheduleAid",id)
    // let today = new Date();
    // let calMonth = today.getMonth()+1;
  
    // let calYear=today.getFullYear()
    // this.getAppointmentData(calYear,calMonth);
  }
  cancel(item) {
    var key = "dataId";
    localStorage.setItem(key, JSON.stringify(item));
  }

  doctor_rescheduleAppointment(item,resheduleData){
    resheduleData.appointmentId=item.id;
    debugger
    this.restService.postRequest(this.constants.doctor_rescheduleAppointment,resheduleData).subscribe((data:any)=>{
      if(data.STATUS== "SUCCESS"){
        Swal("Appointment Reschedule","Appointment rescheduled successfully..","success");
      this.getAppointmentData(this.selectedYear,this.selectedMonth);
      }
    });
  }

  getAppointmentData(year, month) {
    debugger
    this.selectedMonth=month;

    let calDate = new Date(year, month - 1, 10); 
    let today = new Date();
    let calMonth = calDate.getMonth();
    let thisMonth = today.getMonth();
    let tmy=eval(today.getFullYear()+''+thisMonth);
    let calmy=eval(calDate.getFullYear()+''+calMonth);
    
    
    this.AppointmentRequest.flag = tmy == calmy ? 1 : (tmy > calmy ? 0 : 2);

    this.AppointmentRequest.doctorId = localStorage.getItem('doctor_Id');
    
    this.AppointmentRequest.startDate = Utils.formatDate(new Date(calDate.getFullYear(), calMonth, 1));
    this.AppointmentRequest.endDate = Utils.formatDate(new Date(calDate.getFullYear(), calMonth + 1, 0));
    this.AppointmentRequest.currentDate = Utils.formatDate(today);
    
    let prevDate = new Date();
    prevDate.setDate(today.getDate() - 1);
    this.AppointmentRequest.previousDate = Utils.formatDate(prevDate);

    this.restService.postRequest(this.constants.getPatientAppointment, this.AppointmentRequest).subscribe(
      (data: any) => {
        console.log(data)
        this.upCommingAppList = data.appointmentUpcomingList;
        this.historyAppList = data.appointmentHistoryList;
      },
      error => {
        console.log("error");
      }
    );
  }


}

