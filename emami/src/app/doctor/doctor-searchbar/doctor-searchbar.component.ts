import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-searchbar',
  templateUrl: './doctor-searchbar.component.html',
  styleUrls: ['./doctor-searchbar.component.css']
})
export class DoctorSearchbarComponent implements OnInit {
  searcharray=[];
  querystring="";
    constructor() { 
      this.searcharray=[
        {doctor:"swapnil",product:"zandubalm",healtharea:"abc"},
        {doctor:"pratiksha",product:"chavanprash",healtharea:"dmn"},
        {doctor:"aniket",product:"pancharish",healtharea:"mnl"},
        {doctor:"payal",product:"payali",healtharea:"anf"},
        {doctor:"vishal",product:"vishali",healtharea:"bmn"}
      ];
    }
  
    ngOnInit() {
    }
  
  }
  