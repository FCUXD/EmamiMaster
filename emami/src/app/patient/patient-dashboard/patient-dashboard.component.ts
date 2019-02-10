import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Chart } from 'chart.js';
import { Constants } from '../../app.constants';
import { RestService } from '../../services/rest.service'
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { DataStorageService } from '../../services/data-storage.service';
import { UserService } from '../../user.service';
import Swal from 'sweetalert2';
import { Jsonp } from '@angular/http';
import swal from 'sweetalert2';
import Utils from '../../services/utils';
import { Router, NavigationEnd } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css'],
})
export class PatientDashboardComponent implements OnInit {
  upCommingAppList;
  first_name = "";

  starting_div: boolean = true;
  updated_div: boolean = false;

  data: any;
  date: Date = new Date();
  settings = {
    bigBanner: true,
    timePicker: false,
    format: 'dd-MM-yyyy',
    defaultOpen: true
  }

  recommendedArticles: any[];
  recent_order: any[];

  public vitalListPreview:any[] = []; 
  
  email_id; guardian_name; gender; picture_url; is_email_verified; maratial_status; thumbnail_url; title; guardian_relationship;
  mobile_verification_code; u_id; last_modification_date; id; create_time; original_contact_no;
  email_verification_code; last_name; is_mobile_verified; creater_id; alternate_number; dob; updated_by; blood_group;
  mobile_number;
  pincode; address_lne_2; city; latitude; telephone; enabled; location_type; cancellation_fees; rescheduling_fees;
  address_line_1; name; location; state; landmark; longitude;
  feet; occupation; prefered_mode_of_consultation; source; profile_status; last_purchase_store_id; inches; primary_health_issue;
  no_of_free_consultation; subscription_preference; first_consultation_done; height; profile_incomplete_popup; parent_user_id;
  refer_by_id; refer_by_name; weight; user_registration_status; creator_role; bloodgroup; default_store_id; last_delivery_address_id

  userDetails;
  tipoftheday;
  resp: any;
  resp1: any = [];
  SUGGESTED_PRODUCTS:any = [];
 
  // upCommingAppList: any = [];
  historyAppList: any = [];
  AppointmentRequest: any = {};
  selectedYear: number;
  selectedMonth:number;
  constructor(
    private constants: Constants,
    private restService: RestService,
    private userService: UserService,
    public dataStorageService: DataStorageService,
    private router:Router) {
let date = new Date();
this.selectedMonth = date.getMonth()+1;
this.selectedYear = date.getFullYear();
    console.log("all data " + JSON.stringify(this.resp1));
    this.tipoftheday = localStorage.getItem("tipoftheday")
    console.log(this.tipoftheday)
    this.SUGGESTED_PRODUCTS = JSON.parse(localStorage.getItem('SUGGESTED_PRODUCTS'))
    this.name = localStorage.getItem("name")
  }

  chart = []; // This will hold our chart info
  LineChart: any;
  chart2 = []; // This will hold our chart info
  LineChart2: any;
  chart3 = []; // This will hold our chart info
  LineChart3: any;
  selecteddate: any;

  UpcommingUppointment: any;

  ngOnInit() { 
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });

    debugger
    var patientId = localStorage.getItem("userId");
 localStorage.setItem('UID',patientId)
    var date = new Date();
    var month = date.getMonth() + 1;
    var whichYear = "2019"//currently hardcoded
    var tempObj: any = {};
    tempObj.appointmentEndDate = whichYear + "-" + month + "-" + "31";
    tempObj.patientId = patientId;
    var json = tempObj;
    var headers = new Headers({ 'Content-Type': 'application/json' });
    
    this.userService.UpCommingHistoryAppointments(json, headers).subscribe((data: any) => {
      console.log(data);
      if (data.appointmentResponseList) {
        //localStorage.setItem("patientAppointmentDetailsData",JSON.stringify(data.appointmentResponseList));
        this.upCommingAppList = data.appointmentResponseList;
        console.log(this.upCommingAppList);
        if (this.upCommingAppList) {
          for (let i = 0; i < this.upCommingAppList.length; i++) {
            this.resp1.push(this.upCommingAppList[i]);
          }
        }
        this.getVitalDataForDashbord();
        
      }
    });
    this.getPatientQueries();
    var datee = new Date();
    var day = datee.getDate();
    var month = datee.getMonth() + 1;
    var year = datee.getFullYear();
    this.selecteddate = day + "-" + month + "-" + year



    this.data = [
      { "date": "10 September 2018", "name": "kiran", "doctor": "Dr Vishal1" },
      { "date": "23-08-2018", "name": "kiran", "doctor": "Dr Vishal2" },
      { "date": "23-08-2018", "name": "kiran", "doctor": "Dr Vishal3" }
    ];
    this.recommendedArticles = [
      {
        image: "././assets/images/Article1.png",
        head2: "skin",
        data: "Saffron for good health..",
        link: ""
      },
      {
        image: "././assets/images/Article2.png",
        head2: "Digestive Health",
        data: "14 best & worst foods ...",
        link: ""
      },
      {
        image: "././assets/images/Article1.png",
        head2: "skin",
        data: "Saffron for good health..",
        link: ""
      },
      {
        image: "././assets/images/Article2.png",
        head2: "Digestive Health",
        data: "14 best & worst foods...",
        link: ""
      }
    ];

    this.recent_order = [
      {
        image: "././assets/images/Order1.png",
        data: "zandu sona chandi chyawan plus",
        date: "Wed,Nov 23 2018"
      },


      {
        image: "././assets/images/Order2.png",
        data: "zandu sona chandi chyawan plus",
        date: "Wed,Nov 23 2018"
      },

      {
        image: "././assets/images/Order1.png",
        data: "zandu sona chandi chyawan plus",
        date: "Wed,Nov 23 2018"
      },

      {
        image: "././assets/images/Order2.png",
        data: "zandu sona chandi chyawan plus",
        date: "Wed,Nov 23 2018"
      },

      {
        image: "././assets/images/Order1.png",
        data: "zandu sona chandi chyawan plus",
        date: "Wed,Nov 23 2018"
      },

      {
        image: "././assets/images/Order2.png",
        data: "zandu sona chandi chyawan plus",
        date: "Wed,Nov 23 2018"
      }

    ]
   
  }

  getVitalDataForDashbord(){
    let userName = localStorage.getItem("data_p");
    console.log("UserName===>"+userName);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.userService.PatientHome( { userName: JSON.parse(userName) }, headers).subscribe((data: any) => 
    {
      this.vitalListPreview =  data.VITAL_DATA_LIST;
      
    });
    
  }

  onvoted(thispassdate: any) {
    this.selecteddate = thispassdate

  }

  tabs = [
    { active: 'active', tabcontent: 'tabcontent' },
    { active: '', tabcontent: 'hide' },
    { active: '', tabcontent: 'hide' }
  ];

  openCity(index) {
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

  respCancel;
  data11;
  newData: any = [];

  // CancelAppointment(id, uid) {
  //   console.log("id  ......" + id + "   " + uid)
    
  //   this.data11 = { "appointmentId": id, "userId": uid }
  //   //this.data11 =JSON.stringify(this.data11)
  //   console.log(this.data11)
  //   var headers = new Headers({ 'Content-Type': 'application/json' });
  //   this.userService.cancelAppointment(this.data11, headers).subscribe((data: any) => {
  //     this.respCancel = data;
  //     console.log("cancel resp  " + this.respCancel.STATUS)
  //     location.reload();
  //   });
  //   Swal("Success", "Cancel Appointment ", 'success')
  //  // this.ngOnInit();
  // }

  // ReschedulesAppointment(Pid, UId) {
  //   alert(Pid);
  //   alert(UId);
  // }
  joinVideoCall(appointmentId) {

    let dataToSend: any = {};
    
    dataToSend.appointmentId = appointmentId;
   
    
    var headers = new Headers({ 'Content-Type': 'application/json' });
    this.userService.joinVideoCall(dataToSend, headers).subscribe((data: any) => {
      let responseData: any = [];
      responseData = data;

      if (responseData.IFRAME.indexOf("iframe") > 0) {
        let height = window.innerHeight;
        let width =window.innerWidth;
        console.log("height = "+height);
        console.log("width = "+width);
        let popupPositionLeft = width-450;
        let popupPositionTop = height-385;
        window.open(responseData.URL,"mywindow","menubar=0,resizable=0,width=453,height=380,top="+popupPositionTop+",left="+popupPositionLeft+" ");
      
        // $("#video_call_notification").modal("show");
        // $("#video_call_notification-body_txt").html(data);
      } else {
        //$("#video_call_notification_show").modal("show");
        //$("#video_call_notification-body_txt_show").html(data);
        Swal("Error", "Something Went Wrong!!!!!", 'error');
      }
    });

  }
  recievedChatData: any[] = [];
  getPatientQueries(){
    let dataToSend: any = {};
    let respData: any = {};

    dataToSend.userId = localStorage.getItem("userId");
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.userService.patientQueryMain(dataToSend, headers).subscribe((data) => {
      respData = data;
      
      if(respData.NO_CONSULTATION == true){
       
      }
      this.recievedChatData = respData.CONVERSATION_LIST;
      for (let i = 0; i < this.recievedChatData.length; i++) {
        this.recievedChatData[i].active = "";
      }
      this.recievedChatData[0].active = "active";
      this.openMsg(0,this.recievedChatData[0].doctorId,this.recievedChatData[0].doctorName,this.recievedChatData[0].patientId,this.recievedChatData[0].conversationId);
    });
  }
  globalDocName:any;
  globalDocId:any;
  globalPatId:any;
  patientConversationId:any;
  whichTabClicked:any;
  singleMessageSelected: any = [];
  queriesForm = {
    writeQuery: null,
    doctorDropDown: null
  }
  openMsg(index,docId,docName,patId,patConvId) {
    this.whichTabClicked = index;
    this.globalDocName = docName;
    this.globalDocId = docId;
    this.globalPatId = patId;
    this.patientConversationId = patConvId;
    for (let i = 0; i < this.recievedChatData.length; i++) {
      this.recievedChatData[i].active = "";
    }
    this.recievedChatData[index].active = "active";


    this.singleMessageSelected = this.recievedChatData[index];
    this.singleMessageSelected.index = index;
  }
  doctorListForQuery: any = [];
  submitPatientQuery(queryText, selectedDoctorId,pcId) {
    let dName:any="";
    let dataToSend: any = {};
    let respData: any = {};
    let headers = new Headers({ 'Content-Type': 'application/json' });
    
      
    for(let i=0;i<this.doctorListForQuery.length;i++){
      if(selectedDoctorId == this.doctorListForQuery[i].doctorId){
        let fullName = this.doctorListForQuery[i].fname+this.doctorListForQuery[i].lname;
        dName = fullName;
      }
    }
    
    dataToSend.queryDescription = queryText;
    dataToSend.userId = localStorage.getItem("userId");
    
    dataToSend.doctorNameIDStr = selectedDoctorId+'###'+dName;
    dataToSend.patientConversationId = 0;
    this.userService.patientPostQuery(dataToSend, headers).subscribe((data) => {
      respData = data;
      this.recievedChatData = respData.CONVERSATION_LIST;
      for (let i = 0; i < this.recievedChatData.length; i++) {
        this.recievedChatData[i].active = "";
      }
      this.closemodal();
      this.recievedChatData[this.whichTabClicked].active = "active";
      this.openMsg(this.whichTabClicked,this.recievedChatData[this.whichTabClicked].doctorId,this.recievedChatData[this.whichTabClicked].doctorName,this.recievedChatData[this.whichTabClicked].patientId,this.recievedChatData[this.whichTabClicked].conversationId);
    
    });
  }
  modal = "modal";
  closemodal() {
    this.modal = 'modal';
  }
  openmodal() {
    
    let dataToSend: any = {};
    let respData: any = {};
    let headers = new Headers({ 'Content-Type': 'application/json' });
    dataToSend.userId = localStorage.getItem("userId");
    this.userService.patientPostQueryGetDoctorList(dataToSend, headers).subscribe((data) => {
      respData = data;
      if(respData.NO_CONSULTATION == true){
        swal("Error", "You do not have any consultation completed with any doctor!!!!!", 'error');
        return false;
      }
      this.modal = 'show';
      this.doctorListForQuery = respData.DOCTOR_LIST;
      if (respData.STATUS == "SUCCESS") {
        swal("Succes", "Query posted!", 'success');
      }
    });
  }
  newMsg;
  submitDoctorQuery2(binpTxt){
    this.newMsg="";
    let dataToSend: any = {};
    let respData: any = {};
    let headers = new Headers({ 'Content-Type': 'application/json' });
    
    dataToSend.userId = this.globalPatId;
    dataToSend.queryDescription = binpTxt;
    dataToSend.doctorNameIDStr = this.globalDocId+'###'+this.globalDocName;
    dataToSend.patientConversationId = this.patientConversationId;
    this.userService.patientPostQuery(dataToSend, headers).subscribe((data) => {
      respData = data;
      this.recievedChatData = respData.CONVERSATION_LIST;
      for (let i = 0; i < this.recievedChatData.length; i++) {
        this.recievedChatData[i].active = "";
      }
      this.recievedChatData[this.whichTabClicked].active = "active";
      this.openMsg(this.whichTabClicked,this.recievedChatData[this.whichTabClicked].doctorId,this.recievedChatData[this.whichTabClicked].doctorName,this.recievedChatData[this.whichTabClicked].patientId,this.recievedChatData[this.whichTabClicked].conversationId);
    
    });
  }
  

  rescheduleAppointment(item,resheduleData){
    resheduleData.appointmentId=item.id;
   
    this.restService.postRequest(this.constants.rescheduleAppointment,resheduleData).subscribe((data:any)=>{
      if(data.STATUS== "SUCCESS"){
        Swal("Appointment Reschedule","Appointment rescheduled successfully..","success");
      this.getAppointmentData(this.selectedYear,this.selectedMonth);
      }
    });
  }
  getAppointmentData(year, month) {
  
    this.selectedMonth=month;

    let calDate = new Date(year, month - 1, 10); 
    let today = new Date();
    let calMonth = calDate.getMonth();
    let thisMonth = today.getMonth();
    let tmy=eval(today.getFullYear()+''+thisMonth);
    let calmy=eval(calDate.getFullYear()+''+calMonth);
    
    
    this.AppointmentRequest.flag = tmy == calmy ? 1 : (tmy > calmy ? 0 : 2);

    this.AppointmentRequest.patientId = localStorage.getItem('userId');

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
        // if (this.upCommingAppList) {
        //   for (let i = 0; i < this.upCommingAppList.length; i++) {
        //     this.resp1.push(this.upCommingAppList[i]);
        //   }
        // }
      },
      error => {
        console.log("error");
      }
    );
  }

  cancelAppointment(appointment,reason)
  {
    
    if(appointment)
    {
      
        let delAppObj={
          "userId" : this.dataStorageService.getUserId(),
          "appointmentId" : appointment.id,
          "calcelationReason":reason
        };
        this.restService.postRequest(this.constants.deleteAppointment,delAppObj).subscribe((data:any)=>{
          if(data.STATUS== "SUCCESS"){
            Swal("Appointment Cancellation","Appointment cancelled successfully...","success");
          this.getAppointmentData(this.selectedYear,this.selectedMonth);
        
          }
        });
       
    }
  }

}
