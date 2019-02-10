import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboardlink',
  templateUrl: './dashboardlink.component.html',
  styleUrls: ['./dashboardlink.component.css']
})
export class DashboardlinkComponent implements OnInit {


  upcomingappoinments:any[];
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

    ];
    this.upcomingappoinments=[
      {carddatetext:"25th September 2018",
      cardtime:"06:30 pm",
      appoincardtext:"Appointment",
      withtext:"with",
      generaltext:"General Physician",
    },
    {carddatetext:"25th September 2018",
    cardtime:"06:30 pm",
    appoincardtext:"Appointment",
    withtext:"with",
    generaltext:"General Physician",
  },
  {carddatetext:"25th September 2018",
  cardtime:"06:30 pm",
      appoincardtext:"Appointment",
      withtext:"with",
      generaltext:"General Physician",
    },

     
     
    ]
  }
ngOnInit(){}
}
