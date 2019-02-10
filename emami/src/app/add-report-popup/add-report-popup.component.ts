import { Component, OnInit } from '@angular/core';

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
:host >>> .popover .arrow {
  display: none;
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
font-size: 12px;
border-radius: 5px;  
box-shadow: 0 0 0 7px #bccf60;
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

`],
})
export class AddReportPopupComponent implements OnInit {

  selecteddate:any;
  constructor() { }

  ngOnInit() {
  }
  onvoted(thispassdate: any) {
    this.selecteddate = thispassdate
    
    }
  
}
