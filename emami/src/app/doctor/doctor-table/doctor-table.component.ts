import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../doctor.service';

@Component({
  selector: 'app-doctor-table',
  templateUrl: './doctor-table.component.html',
  styles: [`
  :host >>> .popover {
    color: #000;
    max-width: 600%;
    left:0 !important;
    width:650px;
    } 
    .BtnWidthConsult{
      width: 95px;
    }
    :host >>> .popover  .sendbtn123{
      margin-top: 20px;
      background-color: #33a15c  !important;
      border: none;
      color: white;
      border-radius: 5px;
      height: 62px;
        width: 192px;
        font-size: 18px;
      text-transform: uppercase;
      cursor:pointer;
    }
    :host >>> .popover .textarea12{
      border-radius: 5px;
      width: 100% !important;
      padding: 18px 30px 22px 5px!important;
      margin-top: 10%;
    }
    
    :host >>> .popover .col-md-1{
      font-size: 30px;
      margin-top: 7%;
      width:150%;
    }
    :host >>> .popover .divtime{
      font-size: 30px;
      margin-top: 7%;
      width:114%;
    }
    :host >>> .popover .divhr{
      font-size: 30px;
      margin-top: 7%;
      width: 150%;
    }
    :host >>> app-datepicker {
      cursor: pointer;
  }
    :host >>> .popover .divmin{
      font-size: 30px;
      margin-top: 7%;
      width: 150%;
    }
    :host >>> .popover .img{
      margin-left: 31%;
    }
    :host >>> .popover .col-md-3 {
      text-align: center;
    }
    :host >>> .popover .col-md-2.rowcol {
      position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 0px;
        padding-left: 15px;
    
    }
    .PatientTable{
      padding: 0px 0px;
    }
    .PatientTable thead tr th{
    font-size: 15px;
    font-weight: normal;
    border: none;
    } 
    .table th, .table td {
      padding: 1rem 0.5rem;
  }
    .PatientTable tbody tr td{
        font-size: 12px;
        font-weight: normal;
        } 
        .CONSULTBtn{
            background-color: #33a15c;
            color: #ffffff;
            font-size: 12px;
            
                      } 
        .RESCHEDULEBtn{
            background-color: transparent;
            border: 1px solid #33a15c; 
             color: #33a15c;
        } 
        .CANCELBtn{
            color: #ff8590; 
            background-color: transparent;
            border: 1px solid #ff8590;
        }  
        .CANCELBtn img{
          width: 8px;
        }
        
  .PatientTable thead tr th {
    font-weight: normal;
    border: none;
    background-color: #f6eddb!important;
    font-family: PlayfairDisplay-Bold;
    font-size: 14px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.29;
    letter-spacing: 0.7px;
    text-align:center;
    color: #333333;
  }
  .PatientTable tbody tr:first-of-type{
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.13);
  background-color: #fff9e5;
  }
  .PatientTable tbody tr td{
    font-family: TrajanPro;
    font-size: 13.5px;
    font-weight: normal;
    color: #402909;
    vertical-align:middle;
    text-align:center;
    padding: 1rem 0rem;
  }
  .h4style{
    font-size: 13.5px;
    font-weight: normal;
    color: #402909;
    border-right: solid 0.5px #402909;
    border-left: solid 0.5px #402909;
  }
  .btn-trasnp-1{
    font-size: 12px;
    letter-spacing: 1.2px;
    background: transparent;
    border-radius: 5px;
    border: solid 1px #cfa15a;
    font-family: 'TrajanPro-Bold';
    padding: 5px 10px;
    }
    .btn-green-1{
    font-size: 12px;
    letter-spacing: 1.2px;
    border-radius: 3px;
    color: #402909;
    border: solid 1px #84b367;
    background-color: #bccf60;
    font-family: 'TrajanPro-Bold';
    box-shadow: 0 0 0 2px #bccf60;
    padding: 3px 25px;
    }
    .CanselBtnCard[_ngcontent-c16] {
      background-color: #ffffff;
      border: 1px solid #cfa15a;
      outline-offset: 0px;
      font-family: 'TrajanPro-Bold';
      box-shadow: none;
      box-shadow: none !important;
      padding: 5px 42px !important;
  }
    .timespan{
      font-family: TrajanPro;
    font-size: 19.5px;
    font-weight: bold;
    color: #402909;
    }
  `]
})
export class DoctorTableComponent implements OnInit {
  doctor_data:any =[];
  data :any= [];
  dr_name;
 
  headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private doc:DoctorService) {
    
    // [
    //   {time:"10:00 AM",name:"Mr.Krishna Reddy",age:"35",health_area:"Diabetic Care",mob:"7745812203"},
    //   {time:"10:00 AM",name:"Mr.Krishna Reddy",age:"35",health_area:"Diabetic Care",mob:"7745812203"}, 
    //   {time:"10:00 AM",name:"Mr.Krishna Reddy",age:"35",health_area:"Diabetic Care",mob:"7745812203"},
    //   {time:"10:00 AM",name:"Mr.Krishna Reddy",age:"35",health_area:"Diabetic Care",mob:"7745812203"},
    //   {time:"10:00 AM",name:"Mr.Krishna Reddy",age:"35",health_area:"Diabetic Care",mob:"7745812203"},
    //   {time:"10:00 AM",name:"Mr.Krishna Reddy",age:"35",health_area:"Diabetic Care",mob:"7745812203"}
    // ];


    this.data = JSON.parse(localStorage.getItem("doc_Data1"));
     console.log("respose redirect for today"+JSON.stringify(this.data));
     this.doctor_data = this.data.A_LIST;
     console.log("------"+this.doctor_data)
    //console.log("DATA"+JSON.stringify(this.doctor_data[0]));
// this.dr_name=this.data[0].drName;
// console.log("dr name"+this.dr_name);


    // var params= {"userName" : 1 , "password" : "kiranjd"}
    // this.doc.doctorLoginProcessService(params, this.headers).subscribe((data: any) => {
    //   var resp = data;
    // //   if (resp) {
    // //     //this.router.navigate(['doctor_landingpage']);
    // // }
    // console.log(resp);
    // });
   }

  ngOnInit() {
  }

}