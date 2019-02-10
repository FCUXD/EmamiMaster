import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Chart } from 'chart.js';
import { style } from '@angular/animations';
import { DoctorService } from 'src/app/doctor.service';

@Component({
  selector: 'app-doctor-piechart',
  templateUrl: './doctor-piechart.component.html',
  styleUrls: ['./doctor-piechart.component.css']
})
export class DoctorPiechartComponent implements OnInit {

 constructor(private doc:DoctorService){}

  tabs=[
    {active:'active',tabcontent:'tabcontent'},
    {active:'',tabcontent:'hide'},
    {active:'',tabcontent:'hide'}
  ];
  ngOnInit() {

    new Chart(document.getElementById("pie-chart"), {
      type: 'pie',
      data: {
        align:'right',
        
        labels: [ "Consultation","Conversion"],
        datasets: [{
         
          label: "Population", style:"color:#ffffff;z-index:999999;",
          backgroundColor: ["#e6cca0","#402909"],
          // label:["75","25"],
          data: [75,25] 
     
        }]
      },
      options: {
        title: {
          position:'bottom',
          display: true,
          // text: 'Weekly Pie Chart 17-24 August 2018'
        }
      }
  });



  new Chart(document.getElementById("pie-chart1"), {
    type: 'pie',
    data: {
      align:'right',
      
      labels: [ "Consultation","Conversion"],
      datasets: [{
       
        label: "Population", style:"color:#ffffff;z-index:999999",
        backgroundColor: ["#e6cca0","#402909"],
        data: [75,25]
      }]
    },
    options: {
      title: {
        position:'bottom',
        display: true,
        // text: 'Weekly Pie Chart 17-24 August 2018'
  
      }
    }
});



new Chart(document.getElementById("pie-chart2"), {
  type: 'pie',
  data: {
    align:'right',
    
    labels: [ "Consultation","Conversion"],
    datasets: [{
     
      label: "Population (millions)",
      backgroundColor: ["#e6cca0","#402909"],
      data: [75,25]
    }]
  },
  options: {
    title: {
      position:'bottom',
      display: true,
      // text: 'Weekly Pie Chart 17-24 August 2018'

    }
  }
});

  }

  openCity(index){
    this.reset();  
    this.tabs[index].active='active';
    this.tabs[index].tabcontent='tabcontent';
    if(index==0){
      let user=JSON.parse(localStorage.getItem("doctorUserId"))
    var  param={
      flag:1,
      startDate:2019/1/28,
      endDate:2019/1/28,
      userId:user
      }
    
      var headers = new Headers({ 'Content-Type': 'application/json' });
        this.doc.chartData(param,headers).subscribe((data:any) => {
          alert(data)
        })
    }
    }
  
    reset(){
      for(let i=0;this.tabs.length>i;i++){
        this.tabs[i].active='';
        this.tabs[i].tabcontent='hide';
      }
    }


}
