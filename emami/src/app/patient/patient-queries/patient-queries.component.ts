import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/user.service';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';

@Component({
  selector: 'app-patient-queries',
  templateUrl: './patient-queries.component.html',
  styleUrls: ['./patient-queries.component.css']
})
export class PatientQueriesComponent implements OnInit {
  headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private router: Router, private user: UserService,
    private http: HttpClient) { }

  queriesForm = {
    writeQuery: null,
    doctorDropDown: null
  }
  singleMessageSelected: any = [];
  tabs = [
    {
      active: 'active',
      tabcontent: 'tabcontent',
      doctName: "Dr. rajiv sharma",
      profile: "Genral Physician",
      doctProfileImg: './assets/images/doctor-profile-pic-1.png',
      patientProfileImg: './assets/images/patient-profile-img-1.png',
      date: "Aug 2 2018", diseas: "Diabetic Care",
      massage: "How often should I test my blood sugar and what should I do if it is too high or too low?",
      replies: [
        {
          msg: "How often should I test my blood sugar and what should I do if it is too high or too low?",
          time: "2:00 PM",
          from: "patient",
          date: "Aug 2 2018"
        },
        {
          msg: "As it is a physiological degradation disease, the treatment falls into two categories pharmacological and surgical treatment. Take some sesame oil around one tablespoon and chop one clove of garlic.",
          time: "2:00 PM",
          from: "doctor",
          date: "Aug 2 2018"
        },
        {
          msg: "abc",
          time: "2:00 PM",
          from: "patient",
          date: "Aug 2 2018"
        }
      ],
      age: "25"
    },
    { active: '', tabcontent: '', doctName: "Dr. rajiv sharma", profile: "Genral Physician", date: "Aug 2 2018", doctProfileImg: './assets/images/doctor-profile-pic-1.png', patientProfileImg: './assets/images/patient-profile-img-1.png', diseas: "Diabetic Care", massage: "How often should I test my blood sugar and what should I do if it is too high or too low?", replies: [], age: "25" },
    { active: '', tabcontent: '', doctName: "Dr. rajiv sharma", profile: "Genral Physician", date: "Aug 2 2018", doctProfileImg: './assets/images/doctor-profile-pic-1.png', patientProfileImg: './assets/images/patient-profile-img-1.png', diseas: "Diabetic Care", massage: "How often should I test my blood sugar and what should I do if it is too high or too low?", replies: [{ msg: "How often should I test my blood sugar and what should I do if it is too high or too low?", time: "2:00 PM", from: "patient" }], age: "25" },
    { active: '', tabcontent: '', doctName: "Dr. rajiv sharma", profile: "Genral Physician", date: "Aug 2 2018", doctProfileImg: './assets/images/doctor-profile-pic-1.png', patientProfileImg: './assets/images/patient-profile-img-1.png', diseas: "Diabetic Care", massage: "How often should I test my blood sugar and what should I do if it is too high or too low?", replies: [], age: "25" },
    { active: '', tabcontent: '', doctName: "Dr. rajiv sharma", profile: "Genral Physician", date: "Aug 2 2018", doctProfileImg: './assets/images/doctor-profile-pic-1.png', patientProfileImg: './assets/images/patient-profile-img-1.png', diseas: "Diabetic Care", massage: "How often should I test my blood sugar and what should I do if it is too high or too low?", replies: [{ msg: "How often should I test my blood sugar and what should I do if it is too high or too low?", time: "2:00 PM", from: "patient" }], age: "25" },
    { active: '', tabcontent: '', doctName: "Dr. rajiv sharma", profile: "Genral Physician", date: "Aug 2 2018", doctProfileImg: './assets/images/doctor-profile-pic-1.png', patientProfileImg: './assets/images/patient-profile-img-1.png', diseas: "Diabetic Care", massage: "How often should I test my blood sugar and what should I do if it is too high or too low?", replies: [], age: "25" },
    { active: '', tabcontent: '', doctName: "Dr. rajiv sharma", profile: "Genral Physician", date: "Aug 2 2018", doctProfileImg: './assets/images/doctor-profile-pic-1.png', patientProfileImg: './assets/images/patient-profile-img-1.png', diseas: "Diabetic Care", massage: "How often should I test my blood sugar and what should I do if it is too high or too low?", replies: [{ msg: "How often should I test my blood sugar and what should I do if it is too high or too low?", time: "2:00 PM", from: "patient" }], age: "25" },
    { active: '', tabcontent: '', doctName: "Dr. rajiv sharma", profile: "Genral Physician", date: "Aug 2 2018", doctProfileImg: './assets/images/doctor-profile-pic-1.png', patientProfileImg: './assets/images/patient-profile-img-1.png', diseas: "Diabetic Care", massage: "How often should I test my blood sugar and what should I do if it is too high or too low?", replies: [], age: "25" },
    { active: '', tabcontent: '', doctName: "Dr. rajiv sharma", profile: "Genral Physician", date: "Aug 2 2018", doctProfileImg: './assets/images/doctor-profile-pic-1.png', patientProfileImg: './assets/images/patient-profile-img-1.png', diseas: "Diabetic Care", massage: "How often should I test my blood sugar and what should I do if it is too high or too low?", replies: [{ msg: "How often should I test my blood sugar and what should I do if it is too high or too low?", time: "2:00 PM", from: "patient" }], age: "25" },

  ];
  recievedChatData: any[] = [];
  ngOnInit() {
    this.msgContent = this.tabs[0];
    let dataToSend: any = {};
    let respData: any = {};

    dataToSend.userId = localStorage.getItem("userId");
    this.user.patientQueryMain(dataToSend, this.headers).subscribe((data) => {
      respData = data;
      
      if(respData.CONVERSATION_LIST.length > 0){
        this.recievedChatData = respData.CONVERSATION_LIST;
        for (let i = 0; i < this.recievedChatData.length; i++) {
          this.recievedChatData[i].active = "";
        }
        this.recievedChatData[0].active = "active";
        this.openMsg(0,this.recievedChatData[0].doctorId,this.recievedChatData[0].doctorName,this.recievedChatData[0].patientId,this.recievedChatData[0].conversationId);
     

      }else{
        
        swal("Error", "You do not have any consultation completed with any doctor!!!!!", 'error');
        return false;
      }
      });
  }
  msgContent: any;
  globalDocName:any;
  globalDocId:any;
  globalPatId:any;
  patientConversationId:any;
  whichTabClicked:any;
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
    // this.msgContent = this.tabs[index];
    // this.msgContent.index = index;
  }

  newMsg = null;
  sendMessage() {
    //this.msgContent.replies.push({msg:this.newMsg,from:'doctor',time:''});

    this.msgContent.replies.push({ msg: this.newMsg, from: 'patient', time: '' });


    //this.tabs[this.msgContent.index].replies.push({msg:this.newMsg,from:'doctor',time:''});
    this.newMsg = '';


  }
  reset() {
    for (let i = 0; this.tabs.length > i; i++) {
      this.tabs[i].active = '';
      this.tabs[i].tabcontent = 'hide';
    }
  }

  modal = "modal";
  doctorListForQuery: any = [];
  openmodal() {
    
    let dataToSend: any = {};
    let respData: any = {};
    let headers = new Headers({ 'Content-Type': 'application/json' });
    dataToSend.userId = localStorage.getItem("userId");
    this.user.patientPostQueryGetDoctorList(dataToSend, headers).subscribe((data) => {
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

  closemodal() {
    this.modal = 'modal';
  }

  submitmodal() {
    if (!this.queriesForm.writeQuery) { Swal("Please Write Query") }
    console.log(this.queriesForm)
    // if (!this.queriesForm.doctorDropDown) { Swal("Please Select Doctor") } else

  }
  selecteddate: any;
  onvoted(thispassdate: any) {
    this.selecteddate = thispassdate

  }
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
    this.user.patientPostQuery(dataToSend, headers).subscribe((data) => {
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
  submitDoctorQuery2(binpTxt){
    let dataToSend: any = {};
    let respData: any = {};
    let headers = new Headers({ 'Content-Type': 'application/json' });
    
    dataToSend.userId = this.globalPatId;
    dataToSend.queryDescription = binpTxt;
    dataToSend.doctorNameIDStr = this.globalDocId+'###'+this.globalDocName;
    dataToSend.patientConversationId = this.patientConversationId;
    this.user.patientPostQuery(dataToSend, headers).subscribe((data) => {
      respData = data;
      this.recievedChatData = respData.CONVERSATION_LIST;
      for (let i = 0; i < this.recievedChatData.length; i++) {
        this.recievedChatData[i].active = "";
      }
      this.recievedChatData[this.whichTabClicked].active = "active";
      this.openMsg(this.whichTabClicked,this.recievedChatData[this.whichTabClicked].doctorId,this.recievedChatData[this.whichTabClicked].doctorName,this.recievedChatData[this.whichTabClicked].patientId,this.recievedChatData[this.whichTabClicked].conversationId);
    
    });
  }

}
