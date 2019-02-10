import { Component, OnInit,Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dobdatepicker',
  templateUrl: './dobdatepicker.component.html',
  styles: [`
  .form-inline .input-group, .form-inline .custom-select {
    width: 163px;
}  
.input-group-append{
  height: 28px; 
  position: absolute;
} 
:host>>>.dropdown-menu {
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2); 
  margin: 0px;
border: none;
}
.calendar{
  background: url("src/assets/images/calendar_small.png") no-repeat; 
  background-color: transparent !important;
  margin: 8px 0px 0px 6px;
  border: none !important;
  
  box-shadow: none !important;
}  
.InputBox {
  border: 1px solid #d6ad66;
  border-radius: 5px !important;
box-shadow: none !important;
padding-left: 33px;
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
 
}
`]
})
export class DOBDatepickerComponent implements OnInit {
  model;
  Date_Of_Birth:any='Date of Birth';
  @Output() selectedDate = new EventEmitter<Date>();
  constructor() {
  
   }

   sendDate(date){
     debugger
  
  let dateC =new Date(date);
  let d =dateC.getDate();
  let m = dateC.getMonth()+1;
  let y = dateC.getFullYear();
  this.Date_Of_Birth = d+'/'+m+'/'+y;
  localStorage.setItem('DOB',this.Date_Of_Birth)
    this.selectedDate.emit(new Date(this.model));
   if(this.model){
    this.date();
   }

   }
   date(){
    debugger
    
   }
  ngOnInit() {
    debugger
  this.Date_Of_Birth =  localStorage.getItem('dob');
  }

 
 
}
