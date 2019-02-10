import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaydate',
  templateUrl: './displaydate.component.html',
  styles: [`
  .form-inline .input-group, .form-inline .custom-select {
    width: 163px;
}  
.input-group-append{

} 
:host>>>.dropdown-menu {
  left: -81px !important;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2); 
  margin: 0px;
border: none;
}
.calendar{
  background: url("../../assets/images/calendar_small.png") no-repeat; 
  background-color: transparent !important;
  margin: 8px 3px 0px 0px;
  border: none !important;
  
  box-shadow: none !important;
}  
.InputBox {
  border: none;
  border-radius: 5px !important;
box-shadow: none !important;
padding-left: 33px;
background: transparent !important;
font-family: TrajanPro-Regular;
  font-size: 14px;
  font-weight: normal;
  color: #000000;
}
.calendar:active, .calendar:focus {
  background-color: transparent !important;

border: none !important;

box-shadow: none !important;
} 
:host>>>.btn-link {
  color: #333333 !important; 
  
} 
:host>>>.bg-light {

  background-color: #cfa15a !important;

} 
:host>>>.ngb-dp-weekday{

  color: #333333 !important;
  font-family: 'PlayfairDisplay-Regular';
} 
:host>>>.bg-primary {

  background-color: #cfa15a !important;

} 
:host>>>.ngb-dp-day {
  font-family: 'PlayfairDisplay-Regular';
} 
.visibility {
 
}
`]
})
export class DisplaydateComponent implements OnInit {
  model;
  constructor() { }

  ngOnInit() {
  }

}
