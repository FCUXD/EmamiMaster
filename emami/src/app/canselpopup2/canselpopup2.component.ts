import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-canselpopup2',
  templateUrl: './canselpopup2.component.html',
  styleUrls: ['./canselpopup2.component.css']
})
export class Canselpopup2Component implements OnInit {
  constructor(private userService: UserService) { }

  @Output() onCancelAppointment:EventEmitter<string> =new EventEmitter<string>()
   
  @Input('appointment-item') item:any;
  
  ap:any={};
  respCancel;
  data11;
  newData: any = [];

  ngOnInit() 
  {
       
      let dtap=new Date(this.item.appointmentDate);
      this.ap.day=dtap.getDate().toString();
      this.ap.month=dtap.toLocaleString("en-us", {
          month: "short"
        });

      this.ap.day_time=dtap.toLocaleString("en-us", {weekday: "long"}) +' , '+this.item.appointmentStartTime;
      
   }

 
  CancelAppointment(id, uid) {
    console.log("id  ......" + id + "   " + uid)
    
    this.data11 = { "appointmentId": id, "userId": uid }
    //this.data11 =JSON.stringify(this.data11)
    console.log(this.data11)
    var headers = new Headers({ 'Content-Type': 'application/json' });
    this.userService.cancelAppointment(this.data11, headers).subscribe((data: any) => {
      this.respCancel = data;
      console.log("cancel resp  " + this.respCancel.STATUS)
      location.reload();
    });
    Swal("Success", "Cancel Appointment ", 'success')
    this.ngOnInit();
  }
}