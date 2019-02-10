import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-first-login-patient-dashboard',
  templateUrl: './first-login-patient-dashboard.component.html',
  styleUrls: ['./first-login-patient-dashboard.component.css']
})
export class FirstLoginPatientDashboardComponent implements OnInit {
  data : any;
  date: Date = new Date();
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MM-yyyy',
        defaultOpen: true
    }
    
  recommendedArticles:any[];
  recent_order:any[];
  constructor() { 
    this.data = [
      {"date":"10 September 2018","name":"kiran","doctor":"Dr Vishal1"},
      {"date":"23-08-2018","name":"kiran","doctor":"Dr Vishal2"},
      {"date":"23-08-2018","name":"kiran","doctor":"Dr Vishal3"}
    ];
    this.recommendedArticles=[
      {  
        image:"././assets/images/Article1.png",
        head2:"skin",
        data:"Saffron for good health..",
        link:""
      },
      {  
        image:"././assets/images/Article2.png",
        head2:"Digestive Health",
        data:"14 best & worst foods ...",
        link:""
      },
      {  
        image:"././assets/images/Article1.png",
        head2:"skin",
        data:"Saffron for good health..",
        link:""
      },
      {  
        image:"././assets/images/Article2.png",
        head2:"Digestive Health",
        data:"14 best & worst foods...",
        link:""
      }
    ];

    this.recent_order=[
      {image:"././assets/images/Order1.png",
      data:"zandu sona chandi chyawan plus",
      date:"Wed,Nov 23 2018"},

     
      {image:"././assets/images/Order2.png",
      data:"zandu sona chandi chyawan plus",
      date:"Wed,Nov 23 2018"},

      {image:"././assets/images/Order1.png",
      data:"zandu sona chandi chyawan plus",
      date:"Wed,Nov 23 2018"},
      
      {image:"././assets/images/Order2.png",
      data:"zandu sona chandi chyawan plus",
      date:"Wed,Nov 23 2018"},
      
      {image:"././assets/images/Order1.png",
      data:"zandu sona chandi chyawan plus",
      date:"Wed,Nov 23 2018"},
      
      {image:"././assets/images/Order2.png",
      data:"zandu sona chandi chyawan plus",
      date:"Wed,Nov 23 2018"}

    ]
    
  }

   

  chart = []; // This will hold our chart info
  LineChart: any;
  chart2 = []; // This will hold our chart info
  LineChart2: any; 
  chart3 = []; // This will hold our chart info
  LineChart3: any;
  selecteddate:any;
  ngOnInit() {
    this.LineChart = new Chart('lineChart',{
      type:"line",
      data : {
        labels : ["100","200","300","400","500","600","700","800","900","1000"],
        datasets : [{
          label : '',
          data : [100,50,300,100,300,300,700,100,100,1000],
          fill : false,
          lineTension : 0,
          borderColor  : "Black",
          borderWidth : 2
        },
       
      ]
      },
      options : {
        title :{
          text : "line chart",
          display : false
        },
        scales : {
          yAxes :[{
            ticks :{
              beginAtZero:true
            },
            zeroLineColor: {
              color: 'rgba(255, 0, 0, 1)' // makes grid lines from y axis red
            },
            tickMarkLength : {
              Number : 200
            }
          }]
        }
      }
    })
  


    this.LineChart2 = new Chart('lineChart2',{
      type:"line",
      data : {
        labels : ["100","200","300","400","500","600","700","800","900","1000"],
        datasets : [{
          label : '',
          data : [100,50,300,100,300,300,700,100,100,1000],
          fill : false,
          lineTension : 0,
          borderColor  : "Black",
          borderWidth : 2
        },
       
      ]
      },
      options : {
        title :{
          text : "line chart",
          display : false
        },
        scales : {
          yAxes :[{
            ticks :{
              beginAtZero:true
            },
            zeroLineColor: {
              color: 'rgba(255, 0, 0, 1)' // makes grid lines from y axis red
            },
            tickMarkLength : {
              Number : 200
            }
          }]
        }
      }
    }) 

    this.LineChart3 = new Chart('lineChart3',{
      type:"line",
      data : {
        labels : ["100","200","300","400","500","600","700","800","900","1000"],
        datasets : [{
          label : '',
          data : [100,50,300,100,300,300,700,100,100,1000],
          fill : false,
          lineTension : 0,
          borderColor  : "Black",
          borderWidth : 2
        },
       
      ]
      },
      options : {
        title :{
          text : "line chart",
          display : false
        },
        scales : {
          yAxes :[{
            ticks :{
              beginAtZero:true
            },
            zeroLineColor: {
              color: 'rgba(255, 0, 0, 1)' // makes grid lines from y axis red
            },
            tickMarkLength : {
              Number : 200
            }
          }]
        }
      }
    })
    var datee= new Date();
var day=datee.getDate();
var month=datee.getMonth()+1;
var year=datee.getFullYear();
this.selecteddate = day+"-"+month+"-"+year
  
  }
  onvoted(thispassdate: any) {
    this.selecteddate = thispassdate
    
    }
    
    tabs=[
      {active:'active',tabcontent:'tabcontent'},
      {active:'',tabcontent:'hide'},
      {active:'',tabcontent:'hide'}
    ];
  
    openCity(index){
      this.reset();  
      this.tabs[index].active='active';
      this.tabs[index].tabcontent='tabcontent';
      }
    
      reset(){
        for(let i=0;this.tabs.length>i;i++){
          this.tabs[i].active='';
          this.tabs[i].tabcontent='hide';
        }
      } 
      
}

