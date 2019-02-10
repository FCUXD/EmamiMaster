import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../services/rest.service';

@Component({
  selector: 'app-your-query-tabs',
  templateUrl: './your-query-tabs.component.html',
  styleUrls: ['./your-query-tabs.component.css']
})
export class YourQueryTabsComponent implements OnInit {
  selecteddate:any;
  constructor(private server:RestService) { }
  onvoted(thispassdate: any) {
    this.selecteddate = thispassdate
    
}

  tabs=[
    {active:'active',tabcontent:'tabcontent',name:"RAJIV SINGH",date:"Aug 2 2018",page:"35",massage:"Hi doctor, I am suffering from insomnia for a few years. i had also taken some sleeping pills. i am willing to take Ayurveda treatment.",replies:[{msg:"abc",time:"2:00 PM",from:"patient"},{msg:"abc",time:"2:00 PM",from:"doctor"},{msg:"abc",time:"2:00 PM",from:"patient"}],age:"25"},
    {active:'',tabcontent:'',name:"RAJIV SINGH",date:"Aug 2 2018",page:"35",massage:"Hi doctor, I am suffering from insomnia for a few years. i had also taken some sleeping pills. i am willing to take Ayurveda treatment.",replies:[],age:"25"},
    {active:'',tabcontent:'',name:"RAJIV SINGH",date:"Aug 2 2018",page:"35",massage:"Hi doctor, I am suffering from insomnia for a few years. i had also taken some sleeping pills. i am willing to take Ayurveda treatment.",replies:[{msg:"abc",time:"2:00 PM",from:"patient"}],age:"25"},

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
