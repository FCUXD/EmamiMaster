import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  spinner=0;
  Contacts = ["abc","pqr","lmn","xyz"];
  tabs = [
    {active:'active',tabcontent:'tabcontent'},
    {active:'',tabcontent:'hide'},
    {active:'',tabcontent:'hide'},
  ];
  default:string="default";
  default2="tab-hbright";
  default3="default3";
openTabs(index){
    this.reset();  
    this.tabs[index].active='active';
    this.tabs[index].tabcontent='tabcontent';
    if(index==0){
      this.default="default";
      this.default2="tab-hbright";
      this.default3="default3;"
    }
    if(index==1){
      this.default="default";
      this.default2="default2";
      this.default3="default3;"
    }
    if(index==2){
      this.default="tab-hbright";
      this.default2="default2";
      this.default3="default3;"
    }
    }
  
    reset(){
      for(let i=0;this.tabs.length>i;i++){
        this.tabs[i].active='';
        this.tabs[i].tabcontent='hide';
      }
    }
  tableoneheader:Array<any>=[];
  tableonedata:Array<any>=[];
  tabletwoheader:Array<any>=[];
  tabletwodata:Array<any>=[];
  recommendation:Array<any>=[];

  constructor() { 
    this.Dropi=[{name:"Last 30 days"},{name:"Last 10 days"}];
    this.tableoneheader=[{orderdate:'9th june,18',expecteddelivery:'12th june,18',oid:'00125876',total:'80.00',}]
    this.tableonedata=[{pimg:'assets/images/zendupanch.png',product:'Satavarex (250 gm)',total:'80.00',iprice:'100.00',save:'20',qty:'1'},]
    this.tabletwoheader=[{orderdate:'9th june,18',expecteddelivery:'12th june,18',oid:'00125876',total:'80.00',}]
    this.tabletwodata=[{pimg:'assets/images/zendupanch.png',product:'Satavarex (250 gm)',total:'80.00',iprice:'100.00',save:'20',qty:'1'},
    {pimg:'assets/images/zendupanch.png',product:'Satavarex (250 gm)',total:'80.00',iprice:'100.00',save:'20',qty:'1'},
    {pimg:'assets/images/zendupanch.png',product:'Satavarex (250 gm)',total:'80.00',iprice:'100.00',save:'20',qty:'1'},
    {pimg:'assets/images/zendupanch.png',product:'Satavarex (250 gm)',total:'80.00',iprice:'100.00',save:'20',qty:'1'},
    ]
    this.recommendation=[{pimg:'assets/images/zandulilima.png',product:'Zandu Lalima',description:'Lalima is a 100% Ayurvedic Blood &...',price:'175',offer:'10%',},
    {pimg:'assets/images/zandulilima.png',product:'Zandu Lalima',description:'Lalima is a 100% Ayurvedic Blood &...',price:'175',offer:'10%',},
    {pimg:'assets/images/zandulilima.png',product:'Zandu Lalima',description:'Lalima is a 100% Ayurvedic Blood &...',price:'175',offer:'10%',},
    
  ]

  }

Dropi=[];
 sring="Last 30 Days";

  custom="custom";
drop(){
  if(this.custom=="custom"){
    this.custom='show';
  }
  else if(this.custom=="show"){
    this.custom='custom';
  }

}
closed(){
  this.custom='custom';
}

down(){
  if(this.spinner>0 ){
    
  this.spinner=this.spinner-1 
  }
  }
  ngOnInit() {
  }

}
