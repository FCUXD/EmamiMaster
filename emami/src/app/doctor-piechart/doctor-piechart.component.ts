import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-doctor-piechart',
  templateUrl: './doctor-piechart.component.html',
  styleUrls: ['./doctor-piechart.component.css']
})
export class DoctorPiechartComponent implements OnInit {


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
        
        labels: [ "Asia","Africa"],
        datasets: [{
         
          label: "Population (millions)",
          backgroundColor: ["#e6cca0","#402909"],
          data: [5267,2478]
        }]
      },
      options: {
        title: {
          position:'bottom',
          display: true,
          text: 'Weekly Pie Chart 17-24 August 2018'
        }
      }
  });



  new Chart(document.getElementById("pie-chart1"), {
    type: 'pie',
    data: {
      align:'right',
      
      labels: [ "Asia","Africa"],
      datasets: [{
       
        label: "Population (millions)",
        backgroundColor: ["#e6cca0","#402909"],
        data: [5267,2478]
      }]
    },
    options: {
      title: {
        position:'bottom',
        display: true,
        text: 'Weekly Pie Chart 17-24 August 2018'
  
      }
    }
});



new Chart(document.getElementById("pie-chart2"), {
  type: 'pie',
  data: {
    align:'right',
    
    labels: [ "Asia","Africa"],
    datasets: [{
     
      label: "Population (millions)",
      backgroundColor: ["#e6cca0","#402909"],
      data: [5267,2478]
    }]
  },
  options: {
    title: {
      position:'bottom',
      display: true,
      text: 'Weekly Pie Chart 17-24 August 2018'

    }
  }
});

  }

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
