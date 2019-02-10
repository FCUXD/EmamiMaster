import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  public upCommingAppointmentDetails: any[] = [
    { appoId: 1, appoDate: '23rd August, 2018',currDate:'23rd August, 2018',appoTime:'2:00 pm', appoDoctName:'Ayurveda Expert',appoDoctExp:'35 Years Experience',appoDisease:'diabetic care',appoDoctImg:'assets/images/user-profile-pic-blank.png'},
    { appoId: 2, appoDate: '23rd August, 2018',currDate:'23rd August, 2018',appoTime:'2:00 pm', appoDoctName:'Ayurveda Expert',appoDoctExp:'35 Years Experience',appoDisease:'diabetic care',appoDoctImg:'assets/images/user-profile-pic-blank.png'},
    { appoId: 3, appoDate: '23rd August, 2018',currDate:'23rd August, 2018',appoTime:'2:00 pm', appoDoctName:'Ayurveda Expert',appoDoctExp:'35 Years Experience',appoDisease:'diabetic care',appoDoctImg:'assets/images/user-profile-pic-blank.png'},
    { appoId: 4, appoDate: '23rd August, 2018',currDate:'23rd August, 2018',appoTime:'2:00 pm', appoDoctName:'Ayurveda Expert',appoDoctExp:'35 Years Experience',appoDisease:'diabetic care',appoDoctImg:'assets/images/user-profile-pic-blank.png'}
  ];
  public pastAppointmentDetails: any[] = [
    { appoId: 1, appoDate: '23rd August, 2018',currDate:'23rd August, 2018',appoTime:'2:00 pm', appoDoctName:'Ayurveda Expert',appoDoctExp:'35 Years Experience',appoDisease:'diabetic care',appoDoctImg:'./assets/images/doctor-profile-pic-1.png'},
    { appoId: 2, appoDate: '23rd August, 2018',currDate:'23rd August, 2018',appoTime:'2:00 pm', appoDoctName:'Ayurveda Expert',appoDoctExp:'35 Years Experience',appoDisease:'diabetic care',appoDoctImg:'./assets/images/doctor-profile-pic-1.png'},
    { appoId: 3, appoDate: '23rd August, 2018',currDate:'23rd August, 2018',appoTime:'2:00 pm', appoDoctName:'Ayurveda Expert',appoDoctExp:'35 Years Experience',appoDisease:'diabetic care',appoDoctImg:'./assets/images/doctor-profile-pic-1.png'},
    { appoId: 4, appoDate: '23rd August, 2018',currDate:'23rd August, 2018',appoTime:'2:00 pm', appoDoctName:'Ayurveda Expert',appoDoctExp:'35 Years Experience',appoDisease:'diabetic care',appoDoctImg:'./assets/images/doctor-profile-pic-1.png'}
  ];
}
