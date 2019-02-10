import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styles: [`
  .form-inline .input-group, .form-inline .custom-select {
    width: 40px; 
   
}  
.input-group-append{
  height: 28px; 
  position: absolute;
} 
:host>>>.dropdown-menu {
  left: -202px !important; 
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2); 
  margin: 0px;
border: none;
}
.calendar{
  background: url("src/assets/images/calendar_small.png") no-repeat; 
  background-color: transparent !important;

  border: none !important;
  
  box-shadow: none !important;
}  
.InputBox {
  border: none !important;

box-shadow: none !important;

background: transparent !important;
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
  visibility: hidden;
}
`]
})
export class DatepickerComponent implements OnInit {
  model;
  constructor() { 

  }
 
  ngOnInit() {
  }


}
