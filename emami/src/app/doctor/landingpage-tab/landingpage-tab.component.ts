import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage-tab',
  templateUrl: './landingpage-tab.component.html',
  styleUrls: ['./landingpage-tab.component.css']
})
export class LandingpageTabComponent implements OnInit {

  constructor() { }
  tabs=[
    {active:'active',tabcontent:'tabcontent'},
    {active:'',tabcontent:'hide'},
    {active:'',tabcontent:'hide'}
  ];
  ngOnInit() {
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
