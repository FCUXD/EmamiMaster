import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-patient-feedback',
  templateUrl: './patient-feedback.component.html',
  styleUrls: ['./patient-feedback.component.css']
})
export class PatientFeedbackComponent implements OnInit {
  // feedbackData:any=[]=[ ]
  constructor(private router:Router, private fb:FormBuilder,private user:UserService) { }
  feedbackData:FormGroup
  ngOnInit() {
     this.feedbackData = this.fb.group({
      recommendRating : [''],
      consultExperienceRating: [''],
      custExperienceRating: [''],
      priceRating: [''],
      fdbkComment: ['']
     })
  }
  public fdbkdoctinfo: any[] = [
    { doctId: 1, doctName: 'dr. swapnil kumar', doctExp: '35 Years Experience', doctCare: 'diabetic care', appoDoctImg: 'assets/images/doctor-profile-pic-1.png' }
  ];
public fdbkQuestions:any[]= [
  { fdbkQId: 1, fdbkQ:"Based on your overall experience , how likely are you to recommend Zandu XYZ to a friend or relative ?"},
  { fdbkQId: 2, fdbkQ:"How was your recent Doctor consultation experience ?"},
  { fdbkQId: 3, fdbkQ:"Please rate us on the following:"},
  { fdbkQId: 4, fdbkQ:"We would love to hear more from you. It will help us improve our products and services"}
];
  
allfeedback:any[]=[];
feedback6:any;
// All:[]=[];
feedBack:any[];

submitFeedback(feedbackForm) {
  debugger
  let id = localStorage.getItem('UserId')
  this.feedBack = [
    
    {
      ids: "15",
      starId: feedbackForm.value.recommendRating,
      text: ""
    },
    {
      ids: "16",
      starId: feedbackForm.value.consultExperienceRating,
      text: ""
    },
    {
      "ids": "17",
      starId: feedbackForm.value.custExperienceRating,
      text: ""
    },
    {
      "ids": "18",
      starId: feedbackForm.value.priceRating,
      text: ""
    },
    {
   
      ids: "25",
      starId: "",
      text: feedbackForm.value.fdbkComment
    }]
  console.log(JSON.stringify(feedbackForm.value));
  debugger
  //  this.All = feedbackData
 var param = { 
    feedbackAnswer : this.feedBack,
    feedback6 : feedbackForm.value.fdbkComment,
    doctorId        : (localStorage.getItem("doctorUserId")),
    userId       : (localStorage.getItem("uID")),
    appointmentId       : (localStorage.getItem("appointmentId"))
 }
 
var headers = new Headers({ 'Content-Type': 'application/json' });
this.user.feedBack(param, headers).subscribe((data: any) => {
  console.log(data)
})
  // this.feedBack = JSON.stringify(this.feedBack)
  this.router.navigate(['/patientAppointment'])
  //alert(feedbackData.value);
}   
}
