import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-search',
  templateUrl: './doctor-search.component.html',
  styleUrls: ['./doctor-search.component.css']
})
export class DoctorSearchComponent implements OnInit {
  searchbox = []; 
  string=""; 
    constructor() {  
      this.searchbox = [
        {product:'payal'},
        {product:'prtiksha'},
        {product:'kiran'},
        {product:'bhagvt'},
        {product:'priyanka'},
      ]
    }
  
    ngOnInit() {
    }
  
  }
  
