import { Component, OnInit } from '@angular/core';
import { Constants } from '../../app.constants';
import { RestService } from '../../services/rest.service'
import { DataStorageService } from '../../services/data-storage.service';
import Swal from 'sweetalert2';
import { UserService } from '../../user.service';
import { toDate } from '@angular/common/src/i18n/format_date';
import Utils from '../../services/utils';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

 


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  upCommingAppList: any = [];
  historyAppList: any = [];
  AppointmentRequest: any = {
    "flag": "0",
    "patientId": "3421",
    "startDate": "20181001",
    "endDate": "2018-10-31",
    "currentDate": "2018-11-24",
    "previousDate": "2018-11-23"
  }

  userdatap;
  constructor(private user: UserService, private constants: Constants, private restService: RestService,
    public dataStorageService: DataStorageService,private router:Router) {

  }

  isMobile = false;
  isDesktop = false;
  upCommingAppointmentDetails: any[];
  selectedYear: number;
  selectedMonth:number;

  ngOnInit() {

    this.setCurrDateAtFirst();
    if (window.innerWidth > window.innerHeight) {
      this.isDesktop = true;
    } else {
      this.isMobile = true;
    }
  }

  monthsSlideArr: any = [
    {
      id: 1,
      monthName: 'Jan'
    },
    {
      id: 2,
      monthName: 'Feb'
    },
    {
      iid: 3,
      monthName: 'Mar'
    },
    {
      id: 4,
      monthName: 'Apr'
    },
    {
      id: 5,
      monthName: 'May'
    },
    {
      id: 6,
      monthName: 'Jun'
    },

    {
      id: 7,
      monthName: 'Jul'
    },

    {
      id: 8,
      monthName: 'Aug'
    },
    {
      id: 9,
      monthName: 'Sep'
    },
    {
      id: 10,
      monthName: 'Oct'
    }, {
      id: 11,
      monthName: 'Nov'
    },
    {
      id: 12,
      monthName: 'Dec'
    }

  ];


  setCurrDateAtFirst() {//logic  to set current month as a first element on slider
    let currMonth = new Date().getMonth();
    this.selectedYear = new Date().getFullYear();
    for (var i = 0; i < this.monthsSlideArr.length; i++) {//first loop arrray of months
      if (i === currMonth) {// if ith elelemt  == month index in array 
        for (var j = 0; j < i; j++) {// loop i times to  push i number of elemets of array to last so that we get current month array element  at top
          let firstEle = this.monthsSlideArr.shift();//remove first element
          this.monthsSlideArr.push(firstEle);//add it to last
        }
        //let month=firstEle.id==12?1:firstEle.id+1;
        this.getAppointmentData(this.selectedYear, currMonth + 1);
        return;
      }
    }

  }


  nextSlide() {
    let firstEle = this.monthsSlideArr.shift();//remove first element
    this.monthsSlideArr.push(firstEle);//add it to last
    let month = firstEle.id == 12 ? 1 : firstEle.id + 1;
    this.getAppointmentData(this.selectedYear, month);
  }

  previousSlide() {
    let lastEle = this.monthsSlideArr.pop();//remove last element
    this.monthsSlideArr.unshift(lastEle);//add it to first
    this.getAppointmentData(this.selectedYear, lastEle.id);
  }

  singleMonthSelect(clickedMonthIndex, whichMonth) {

    var patientId = localStorage.getItem("userId")

    this.getAppointmentData(this.selectedYear, whichMonth);
    for (var i = 0; i < clickedMonthIndex; i++) {
      let firstEle = this.monthsSlideArr.shift();//remove first element
      this.monthsSlideArr.push(firstEle);//add it to last
    }
  }

  yearChanged(year) {
    this.getAppointmentData(year,this.selectedMonth);
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

  rescheduleAppointment(item,resheduleData){
    resheduleData.appointmentId=item.id;
    debugger
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
      },
      error => {
        console.log("error");
      }
    );
  }

  joinVideoCall(appointmentId) {

    let dataToSend: any = {};
    
    dataToSend.appointmentId = appointmentId;
   
    
    var headers = new Headers({ 'Content-Type': 'application/json' });
    this.user.joinVideoCall(dataToSend, headers).subscribe((data: any) => {
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
  setAppointmentId(id){
    debugger
    for(let i=0;i<this.historyAppList.length;i++){
      if(id==this.historyAppList[i].id){
        localStorage.setItem("doctorUserId",this.historyAppList[i].drid)
        localStorage.setItem("appointmentId",this.historyAppList[i].id)
        localStorage.setItem("uID",this.historyAppList[i].patientId)
      }
    }
    
    let  headers = new Headers({ 'Content-Type': 'application/json' });
    let params:any = {}
    params.appointmentId = localStorage.getItem("appointmentId")
    debugger
      this.user.patientPrescription(params, headers).subscribe((data:any)=>{
        if(data.STATUS=="ERROR"){
        swal('No Prescription added')
        }
        else{
          this.router.navigate(['/patientPrescription/{{item.id}}'])
        }
  // this.patientPrescription = data;
// console.log(this.patientPrescription)
      })
    
   
  }
  setAppointmentIdFeed(id){
    for(let i=0;i<this.historyAppList.length;i++){
      if(id==this.historyAppList[i].id){
        localStorage.setItem("doctorUserId",this.historyAppList[i].drid)
        localStorage.setItem("appointmentId",this.historyAppList[i].id)
        localStorage.setItem("uID",this.historyAppList[i].patientId)
      }
    }
  }
  // public upCommingAppointmentDetails: any[] = [
  //   { appoId: 1, appoDate: '23rd August, 2018',currDate:'23rd August, 2018',appoTime:'2:00 pm', appoDoctName:'Ayurveda Expert',appoDoctExp:'35 Years Experience',appoDisease:'diabetic care',appoDoctImg:'assets/images/user-profile-pic-blank.png'},
  //   { appoId: 2, appoDate: '23rd August, 2018',currDate:'23rd August, 2018',appoTime:'2:00 pm', appoDoctName:'Ayurveda Expert',appoDoctExp:'35 Years Experience',appoDisease:'diabetic care',appoDoctImg:'assets/images/user-profile-pic-blank.png'},
  //   { appoId: 3, appoDate: '23rd August, 2018',currDate:'23rd August, 2018',appoTime:'2:00 pm', appoDoctName:'Ayurveda Expert',appoDoctExp:'35 Years Experience',appoDisease:'diabetic care',appoDoctImg:'assets/images/user-profile-pic-blank.png'},
  //   { appoId: 4, appoDate: '23rd August, 2018',currDate:'23rd August, 2018',appoTime:'2:00 pm', appoDoctName:'Ayurveda Expert',appoDoctExp:'35 Years Experience',appoDisease:'diabetic care',appoDoctImg:'assets/images/user-profile-pic-blank.png'}
  // ];


  // public pastAppointmentDetails: any[] = [
  //   { appoId: 1, appoDate: '23rd August, 2018', currDate: '23rd August, 2018', appoTime: '2:00 pm', appoDoctName: 'Ayurveda Expert', appoDoctExp: '35 Years Experience', appoDisease: 'diabetic care', appoDoctImg: './assets/images/doctor-profile-pic-1.png' },
  //   { appoId: 2, appoDate: '23rd August, 2018', currDate: '23rd August, 2018', appoTime: '2:00 pm', appoDoctName: 'Ayurveda Expert', appoDoctExp: '35 Years Experience', appoDisease: 'diabetic care', appoDoctImg: './assets/images/doctor-profile-pic-1.png' },
  //   { appoId: 3, appoDate: '23rd August, 2018', currDate: '23rd August, 2018', appoTime: '2:00 pm', appoDoctName: 'Ayurveda Expert', appoDoctExp: '35 Years Experience', appoDisease: 'diabetic care', appoDoctImg: './assets/images/doctor-profile-pic-1.png' },
  //   { appoId: 4, appoDate: '23rd August, 2018', currDate: '23rd August, 2018', appoTime: '2:00 pm', appoDoctName: 'Ayurveda Expert', appoDoctExp: '35 Years Experience', appoDisease: 'diabetic care', appoDoctImg: './assets/images/doctor-profile-pic-1.png' }
  // ];
}


