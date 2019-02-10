import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-patient-prescription',
  templateUrl: './search-patient-prescription.component.html',
  styleUrls: ['./search-patient-prescription.component.css']
})
export class SearchPatientPrescriptionComponent implements OnInit {

  constructor() { }
  date: Date = new Date();
  selecteddate: any;
  ngOnInit() {
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
        healthIssue:'Minor Headache',
        symptoms:'Stress Care',
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
       consultNotes:'No Application',
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
