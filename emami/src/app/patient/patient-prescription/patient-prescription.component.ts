import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-prescription',
  templateUrl: './patient-prescription.component.html',
  styleUrls: ['./patient-prescription.component.css']
})
export class PatientPrescriptionComponent implements OnInit {


  constructor(private user:UserService,private router:Router) { }
  date: Date = new Date();
  selecteddate: any;
  patientPrescription:any[]=[];
 
  ngOnInit() {
    debugger
    let  headers = new Headers({ 'Content-Type': 'application/json' });
    let params:any = {}
    params.appointmentId = localStorage.getItem("appointmentId")
    debugger
      this.user.patientPrescription(params, headers).subscribe((data:any)=>{
        if(data.STATUS=="ERROR"){
          this.router.navigate(['/patientAppointment'])
        }
  this.patientPrescription = data;
console.log(this.patientPrescription)
      })
    var datee = new Date();
    var day = datee.getDate();
    var month = datee.getMonth() + 1;
    var year = datee.getFullYear();
    this.selecteddate = day + "-" + month + "-" + year
  }
  public prescriptionDetails: any[] = [{
      prescriptionData: {
        id: 1, 
        patientName: 'Mr . Rahul Kumar',
        consultationId: 'ZNE1234',
        age: '23', 
        gender: 'male',
        careName: 'Daibetic Care',
        phoneNo: '889-898-8768',
        patientImg: 'assets/images/patient-profile-img-1.png',
        doctId:1,
        doctName:'DR. SWAPNIL KUMAR',
        prescriDate:'14 April 2018',
        healthIssue:'Stress Care',
        symptoms:'Hign Blood Pressure',
        diagnosis:'Typically subside when the stress triggering them subside. When these same symptoms are caused by depression or another mood disorder, however, they may not go away without medication or therapy.',
        investigations:[
                        {
                          id:1,
                          investigation:'Blood Pressure'
                        },
                        {
                          id:2,
                          investigation:'Oral Glucose Tolarance'
                        },
                        {
                          id:3,
                          investigation:'Blood Sugar'
                        }
                      ],
       consultNotes:'If stress is identified as the culprit for your symptoms, you may want to askyour helthcare professional to stress management strategies and consider ways to control the stressors in your life -- before your health is affected.',
       prescribedMedicines:[
                            {
                              id:1,
                            type:'syrup',
                             mediName:'Zandu Puncharishta (200 ML)',
                             countforday:'2',
                             shifts:'Morning-Afternoon-night',
                             intakeQty:'1',
                             afOrbfFood:'After Food',
                             duration:'5 Days'
                            },
                            {
                              id:2,
                              type:'tablets',
                               mediName:'Zandu Puncharishta (200 ML)',
                               countforday:'2',
                               shifts:'Morning-Afternoon-night',
                               intakeQty:'1',
                               afOrbfFood:'After Food',
                               duration:'5 Days'
                              },
                          ]


      }
    }

  ];

  onvoted(thispassdate: any) {
    this.selecteddate = thispassdate

  }
}
