import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-healthsearchbar',
  templateUrl: './healthsearchbar.component.html',
  styleUrls: ['./healthsearchbar.component.css']
})
export class HealthsearchbarComponent implements OnInit {
  searcharray=[];
  querystring="";
    constructor() { 
      this.searcharray=[
        {doctor:"", product:"",healtharea:"hypertension"},
        {doctor:"",product:"",healtharea:"Constipation"},
        {doctor:"",product:"",healtharea:"diarhea"},
        {doctor:"",product:"",healtharea:"Piles"},
        {doctor:"",product:"",healtharea:"uti"}, 
        {doctor:"",product:"",healtharea:"liverDiseases"},
        {doctor:"",product:"",healtharea:"skindiseases"},
        {doctor:"",product:"",healtharea:"diabetes"},
        {doctor:"",product:"",healtharea:"erectiledysfunction"},
        
      ];
    }
  
    ngOnInit() {
    }
  
  }
  