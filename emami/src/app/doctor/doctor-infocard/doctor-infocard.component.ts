import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/doctor.service';

@Component({
  selector: 'app-doctor-infocard',
  templateUrl: './doctor-infocard.component.html',
  styleUrls: ['./doctor-infocard.component.css']
})
export class DoctorInfocardComponent implements OnInit {

  headers = new Headers({ 'Content-Type': 'application/json' });
  isPrescriptionAdded:any;
  today_data:any=[];
  DR_Name;
  NoOfAppointment;
  constructor(private doc:DoctorService) { }

  ngOnInit() {
    debugger
    let dataToSend:any={};
    dataToSend.flag = 0;
    dataToSend.userName = localStorage.getItem("userNameLoginString");
    dataToSend.date = "";
    localStorage.removeItem("isPrescriptionAdded");
    this.isPrescriptionAdded =undefined;
    this.doc.doctorLoginService(dataToSend, this.headers).subscribe((data: any) => {
      
      this.today_data = data.A_LIST;
      this.NoOfAppointment = data.numberOfTodayAppointments

    });
    this.DR_Name = JSON.parse(localStorage.getItem("DrName"));
  
    console.log("numberOfTodayAppointments----"+this.NoOfAppointment);
  }

}
