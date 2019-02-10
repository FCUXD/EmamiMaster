import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
    selector: 'cancel-appointment',
    templateUrl: 'cancel-appointment.html',
    styleUrls:['./cancel-appointment.css']
})

export class CancelAppointmentPopoverComponent implements OnInit {
    constructor() { }

    @Output() onCancelAppointment:EventEmitter<string> =new EventEmitter<string>()
     
    @Input('appointment-item') item:any;
    
    ap:any={};


    ngOnInit() 
    {
         
        let dtap=new Date(this.item.appointmentDate);
        this.ap.day=dtap.getDate().toString();
        this.ap.month=dtap.toLocaleString("en-us", {
            month: "short"
          });

        this.ap.day_time=dtap.toLocaleString("en-us", {weekday: "long"}) +' , '+this.item.appointmentStartTime;
        
     }

    CancelAppointment(reason)
    {
        this.onCancelAppointment.emit(reason);
    } 

    custom="modal";
popup(){
  this.custom="show";
}
close(){
  this.custom="modal";
} 

}