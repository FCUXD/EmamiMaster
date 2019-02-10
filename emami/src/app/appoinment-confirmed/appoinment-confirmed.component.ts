import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appoinment-confirmed',
  templateUrl: './appoinment-confirmed.component.html',
  styleUrls: ['./appoinment-confirmed.component.css']
})
export class AppoinmentConfirmedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  starting_div:boolean= true;
  updated_div:boolean= false;
gotodashboard(){
  this.starting_div= false;
  this.updated_div= true;
}
}
