import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-confirmed',
  templateUrl: './appointment-confirmed.component.html',
  styleUrls: ['./appointment-confirmed.component.css']
})
export class AppointmentConfirmedComponent implements OnInit {

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
