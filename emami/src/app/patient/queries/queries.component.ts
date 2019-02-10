import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
export class QueriesComponent implements OnInit {
 
  constructor() { }
  tabs=[
    {
      active:'active',
      tabcontent:'tabcontent',
      doctName:"Dr. rajiv sharma",
      profile:"Genral Physician",
      doctProfileImg:'./assets/images/doctor-profile-pic-1.png',
      date:"Aug 2 2018",diseas:"Diabetic Care",
      massage:"How often should I test my blood sugar and what should I do if it is too high or too low?",
      replies:[
                {
                  msg:"How often should I test my blood sugar and what should I do if it is too high or too low?",
                  time:"2:00 PM",
                  from:"patient",
                  date:"Aug 2 2018"
                },
                  {
                    msg:"As it is a physiological degradation disease, the treatment falls into two categories pharmacological and surgical treatment. Take some sesame oil around one tablespoon and chop one clove of garlic.",
                    time:"2:00 PM",
                    from:"doctor",
                    date:"Aug 2 2018"
                },
                {
                  msg:"abc",
                  time:"2:00 PM",
                  from:"patient",
                  date:"Aug 2 2018"
                }
          ],
        age:"25"
    },
    {active:'',tabcontent:'',doctName:"Dr. rajiv sharma",profile:"Genral Physician",date:"Aug 2 2018",doctProfileImg:'./assets/images/doctor-profile-pic-1.png',diseas:"Diabetic Care",massage:"How often should I test my blood sugar and what should I do if it is too high or too low?",replies:[],age:"25"},
    {active:'',tabcontent:'',doctName:"Dr. rajiv sharma",profile:"Genral Physician",date:"Aug 2 2018",doctProfileImg:'./assets/images/doctor-profile-pic-1.png',diseas:"Diabetic Care",massage:"How often should I test my blood sugar and what should I do if it is too high or too low?",replies:[{msg:"How often should I test my blood sugar and what should I do if it is too high or too low?",time:"2:00 PM",from:"patient"}],age:"25"},
    {active:'',tabcontent:'',doctName:"Dr. rajiv sharma",profile:"Genral Physician",date:"Aug 2 2018",doctProfileImg:'./assets/images/doctor-profile-pic-1.png',diseas:"Diabetic Care",massage:"How often should I test my blood sugar and what should I do if it is too high or too low?",replies:[],age:"25"},
    {active:'',tabcontent:'',doctName:"Dr. rajiv sharma",profile:"Genral Physician",date:"Aug 2 2018",doctProfileImg:'./assets/images/doctor-profile-pic-1.png',diseas:"Diabetic Care",massage:"How often should I test my blood sugar and what should I do if it is too high or too low?",replies:[{msg:"How often should I test my blood sugar and what should I do if it is too high or too low?",time:"2:00 PM",from:"patient"}],age:"25"},
    {active:'',tabcontent:'',doctName:"Dr. rajiv sharma",profile:"Genral Physician",date:"Aug 2 2018",doctProfileImg:'./assets/images/doctor-profile-pic-1.png',diseas:"Diabetic Care",massage:"How often should I test my blood sugar and what should I do if it is too high or too low?",replies:[],age:"25"},
    {active:'',tabcontent:'',doctName:"Dr. rajiv sharma",profile:"Genral Physician",date:"Aug 2 2018",doctProfileImg:'./assets/images/doctor-profile-pic-1.png',diseas:"Diabetic Care",massage:"How often should I test my blood sugar and what should I do if it is too high or too low?",replies:[{msg:"How often should I test my blood sugar and what should I do if it is too high or too low?",time:"2:00 PM",from:"patient"}],age:"25"},
    {active:'',tabcontent:'',doctName:"Dr. rajiv sharma",profile:"Genral Physician",date:"Aug 2 2018",doctProfileImg:'./assets/images/doctor-profile-pic-1.png',diseas:"Diabetic Care",massage:"How often should I test my blood sugar and what should I do if it is too high or too low?",replies:[],age:"25"},
    {active:'',tabcontent:'',doctName:"Dr. rajiv sharma",profile:"Genral Physician",date:"Aug 2 2018",doctProfileImg:'./assets/images/doctor-profile-pic-1.png',diseas:"Diabetic Care",massage:"How often should I test my blood sugar and what should I do if it is too high or too low?",replies:[{msg:"How often should I test my blood sugar and what should I do if it is too high or too low?",time:"2:00 PM",from:"patient"}],age:"25"},

  ];
  ngOnInit() {
    this.msgContent=this.tabs[0];
  }
  msgContent:any;
  openMsg(index){
    for(let tab of this.tabs){
      tab.active='';
    }
    this.tabs[index].active='active';
    this.msgContent=this.tabs[index];
    this.msgContent.index=index;
  }

  newMsg=null;
  sendMessage(){
    this.msgContent.replies.push({msg:this.newMsg,from:'doctor',time:''});
    //this.tabs[this.msgContent.index].replies.push({msg:this.newMsg,from:'doctor',time:''});
    this.newMsg='';
  }
  reset(){
    for(let i=0;this.tabs.length>i;i++){
      this.tabs[i].active='';
      this.tabs[i].tabcontent='hide';
    }
  }




}
