import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class Constants {
private serverURL="https://test.zanducare.com/";
//private serverURL="https://www.zanducare.com/";
// private serverURL="http://192.168.0.40:8080/";
//private serverPort=":8080/";
private applicationName="emami_patient_api";
private applicationVersion="_v2_0/";

private serverlink=this.serverURL+this.applicationName+this.applicationVersion

public getPatientDetail=this.serverlink+"getPatientDetail";
public getPatientAppointment=this.serverURL+'emamiz/user/patient-appointment-calender'//this.serverlink+"getPatientAppointment";
public getPatientOrders=this.serverlink+"getPatientOrders";
public login=this.serverlink+"login";
public socialLogin=this.serverURL+'emamiz/socialLogin';
public bookPatientAppointment=this.serverlink+"bookPatientAppointment";
public deleteAppointment =this.serverURL+'emamiz/user/cancel-appointment-new';
public rescheduleAppointment =this.serverURL+'emamiz/user/reschedule-appointment-patient-new';
public doctor_rescheduleAppointment =this.serverURL+'emamiz/doctor/rescheduleAppointmentByDoctor';
//public getPatientDetail=this.serverURL+this.serverPort+this.applicationName+"";
  
}