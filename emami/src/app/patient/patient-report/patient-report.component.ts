import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/doctor.service';
import { debug } from 'util';

@Component({
  selector: 'app-patient-report',
  templateUrl: './patient-report.component.html',
  styleUrls: ['./patient-report.component.css']
})
export class PatientReportComponent implements OnInit {
  _ref:any;   
  selecteddate:any;
  xreport = [];
  public reportData :any[]=[];
  public totalReportCount :number=0;

  constructor(public doctorService:DoctorService ) {

  this.xreport = [{
    report:"X - Ray Report",date:"Aug 21, 2018",pdf:"Filename_upload_report_abc.pdf",image:"././assets/images/delete-1.png",
    image2:"././assets/images/noun-download.png",image3:"././assets/images/noun-print.png"
  },
  {
    report:"Blood test Report",date:"Aug 21, 2018",pdf:"Filename_upload_report_abc.pdf",image:"././assets/images/delete-1.png",
    image2:"././assets/images/noun-download.png",image3:"././assets/images/noun-print.png"
  },
  {
    report:"ECG Report",date:"Aug 21, 2018",pdf:"Filename_upload_report_abc.pdf",image:"././assets/images/delete-1.png",
    image2:"././assets/images/noun-download.png",image3:"././assets/images/noun-print.png"
  },
  {
    report:"MRI Report",date:"Aug 21, 2018",pdf:"Filename_upload_report_abc.pdf",image:"././assets/images/delete-1.png",
    image2:"././assets/images/noun-download.png",image3:"././assets/images/noun-print.png"
  },
  {
    report:"X - Ray Report",date:"Aug 21, 2018",pdf:"Filename_upload_report_abc.pdf",image:"././assets/images/delete-1.png",
    image2:"././assets/images/noun-download.png",image3:"././assets/images/noun-print.png"
  },
  {
    report:"Blood test Report",date:"Aug 21, 2018",pdf:"Filename_upload_report_abc.pdf",image:"././assets/images/delete-1.png",
    image2:"././assets/images/noun-download.png",image3:"././assets/images/noun-print.png"
  },
  {
    report:"ECG Report",date:"Aug 21, 2018",pdf:"Filename_upload_report_abc.pdf",image:"././assets/images/delete-1.png",
    image2:"././assets/images/noun-download.png",image3:"././assets/images/noun-print.png"
  }
];
   }

  ngOnInit() {
      this.getReportList();
  }

  getReportList(){
    let userId = localStorage.getItem("userId");
    let requestData = {userId : userId};
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.doctorService.getResportList(requestData,headers).subscribe((data:any)=>{
      this.reportData = data.INVESTIGATION_MAP[0];
      this.totalReportCount = this.reportData.length;
      console.log(this.reportData);
    })
  }

  deleteReport(id:number){
    console.log(id);
    let userId = localStorage.getItem("userId");
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.doctorService.deleteReports({"userId" : userId,  "invsId" : id},headers).subscribe((data:any)=>{
      this.reportData = data.INVESTIGATION_MAP[0];
      this.totalReportCount = this.reportData.length
    });

  }

}
