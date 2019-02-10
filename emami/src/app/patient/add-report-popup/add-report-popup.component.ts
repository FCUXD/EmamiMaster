import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { UploadFileService } from 'src/app/upload-file.service';
import { HttpEventType, HttpResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from '../../base-url';


@Component({
  selector: 'app-add-report-popup',
  templateUrl: './add-report-popup.component.html',
  styles: [`
 :host >>> .popover-body {
  padding: 0.5rem 0.75rem;
  color: #212529;
  width: 561px;
  background: #ffffff;
  z-index: 8;
  border-radius: 10px;
  box-shadow: 0px 3px 9px 0 rgba(0, 0, 0, 0.1);
} 
.AddReportName {
  width: 48%;
  float: left;
}  
.cancelBTN{
  background: transparent;
height:33px;
color: #402909;
width: 160px;
border: 1px solid #d6ad66;
font-family: 'PlayfairDisplay-Regular';
font-size: 12px;
} 
.uploadbtn{
  background: #bccf60;
  color: #000000;
  font-size: 12px;
  width: 148px;
  box-shadow: 0 0 0 7px #bccf60 !important;
  border: solid 1px #84b367 !important;
  height: 22px;
  padding: 0px; 
  font-family: 'PlayfairDisplay-Regular';
} 
.InputGroup{
  width: 100%;
  margin: 0 auto;
} 
.InputGroup label {
  font-size: 14px;
font-family: 'PlayfairDisplay-Regular';
}
.AddReportInput{
  border: solid 1px #cfa15a;
border-radius: 5px; 
height: 28px;
width: 170px;
} 
.DragnDropText{ 
  font-family: 'TrajanPro-Bold';

font-size: 16px;
} 
.DragnDropText span { 
  font-family: 'PlayfairDisplay-Regular';

font-size: 18px;
} 
.popover .arrow {
  visibility: hidden;
}
.dragHeight{
  margin-top: 25px;
  margin-left: 20px;
  text-align: center;
}
.hidden{
  visibility: hidden;
}

:host >>>.popover{
  border:none;
  left: 0px !important;
}
:host >>>.bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^="bottom"] .arrow::before {
background:url("../assets/images/popoverArrow.png") no-repeat; 
border: none;
top: 1px;
left: 123px;
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  outline: 0;
}
.GetStartedBtn{
  padding: 8px 28px;
  outline-offset: -6px;
-moz-outline-radius: 5px;
font-size: 12px;
border-radius: 5px; 
box-shadow: 0px 3px 9px 0 rgba(0, 0, 0, 0.13);
} 
.CanselBtnCard{
  background-color: #ffffff;
border: 1px solid #cfa15a;
outline-offset: 0px;
font-family: 'TrajanPro-Bold';
box-shadow: none;
box-shadow: none !important;

padding: 8px 42px !important;
} 
.datepdiv{
  background-color: #d6ad66;
border-radius: 5px;
}
.modal.fade.show {
  display: block;
}
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  outline: 0;
}
.Modlheading{
  font-family: 'TrajanPro-Bold';
  font-size: 18px;
  margin: 0 auto;
} 
.modal-body p, .modal-body h4, .modal-body h5, label, .textinput {
  font-family: 'TrajanPro-Bold';
  font-size: 14px;
}  
.textinput{
    background-color: #f9f4e4;
    border: none;
}
.modal-footer {
 
  border-top: 1px solid #d6ad66;
}
.footerbtn{
  text-align: center;
width: 100%;
float: left;
}
.yesbtn{
  width: 122px;
  height: 33px;
}
.MarginCenter{
  margin: 0 auto;
}

.datepdiv {
  font-family: 'PlayfairDisplay-Bold' !important;
  font-size: 20px !important;
  padding: 0px;
  width: 74px !important;
height: 54px;
} 
.datepdiv span{
  font-family: 'PlayfairDisplay-Regular';
  font-size: 14px;
  width: 100%;
  margin-top: -6px;
float: left;
}
.modal-body {
 
  padding: 8% 8% 2% 8%;
} 
.modal-dialog {
  max-width: 561px;

} 

.PopupBody h6{
font-size: 18px; 
font-family: 'TrajanPro-Bold';
} 
.fileuploadcomponunth6{
  width: 34%;
  float: left;
}
.fileuploadcomponunt{
  width: 60%;
float: left;
}  
.closeReport{
  width:20px;
  height:20px;
}
.repDiv{
  float:right
}
@media screen and (min-width: 1px) and (max-width: 1200px) { 
  :host >>> .popover-body {
    width: 450px;
  }
} 
@media screen and (min-width: 1px) and (max-width: 768px) { 
  :host >>> .popover-body {
    width: 466px;
  }
} 
@media screen and (min-width: 1px) and (max-width: 576px) { 
  :host >>> .popover-body {
    width: 400px;
  }
}
@media screen and (min-width: 1px) and (max-width: 480px) { 
  :host >>> .popover-body {
    width: 380px;
  } 
} 
@media screen and (min-width: 1px) and (max-width: 480px) { 
  :host >>> .popover-body {
    width: 290px;
  } 
}
`],
})

export class AddReportPopupComponent implements OnInit {
  selecteddate:any;
  public selectedFiles: FileList
  public currentFileUpload: File
  public fileExtension:boolean=true;
  public progress: { percentage: number } = { percentage: 0 }
  public investigationName:string;
  public reportButton:string="Add Report";
  public isAddReport:boolean=false;
  public fileName :boolean=false;
  @Output()
  reloadReportList:EventEmitter<string>= new EventEmitter<string>();

  constructor(public uploadFileService:UploadFileService,public httpRequest:HttpClient) { }

  ngOnInit() {
    this.fileExtension = false;
  }
  onvoted(thispassdate: any) {
    this.selecteddate = thispassdate
    
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  
  upload() {
    debugger;
    this.progress.percentage = 0;
    this.fileName = this.investigationName == null || this.investigationName == '' || this.investigationName == undefined;
    if(this.fileName) return;
    if(this.selectedFiles != undefined){
    this.currentFileUpload = this.selectedFiles.item(0)
    let extension = this.currentFileUpload.name.split('.')[1].toLocaleLowerCase();

     this.fileExtension =  !(extension == 'docx' || extension == 'pdf' || extension == 'png' || extension == 'jpeg' || extension == 'jpg');
    if(this.fileExtension) return;
    console.log(this.currentFileUpload);
    let userId = localStorage.getItem("userId");
    let dateString = this.getTodaysDateString(); 
    
    this.uploadFileService.pushFileToStorage(this.currentFileUpload,userId,0,dateString,this.investigationName).subscribe(event => {
      if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        this.selectedFiles = null;
        this.reloadReportList.emit();
      }
    })
  } 
  }

  getTodaysDateString(){
    let date = new Date();
    return date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
  }

  toggleBtnTextReport(){

    if(this.isAddReport){
      this.reportButton = "Cancel Report"
      this.isAddReport = false;
    }else{
      this.reportButton = "Add Report"
      this.isAddReport = true;
    }

  }
  
}
