import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-cancelled-popup',
  templateUrl: './order-cancelled-popup.component.html',
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
 :host >>>.popover{
   border:none;
   left: 470px !important;
 }
 :host >>>.bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^="bottom"] .arrow::before {
 background:url("../assets/images/popoverArrow.png") no-repeat; 
 border: none;
 top: 1px;
 right: -273px;
 }
 :host >>> .popover .arrow {
  position: absolute;
  display: block;
  width: 1rem;
  height: 0.5rem;
  margin: 0 0.3rem;
  left: 450px;
}
:host >>> .popover {
  color: #000;
  width: 650px;
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
 .modal-header {
 
   border-bottom: 1px solid #d6ad66;
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
 .PopupBody p{
 float: none;
 text-align: left;
 margin: 0 auto;
 } 
 .popover-body:before{
   content:"";
   position:absolute;
   width:20px;
   background:red;
   left:0;
 }
 .btn-green-1{
  font-size: 12px;
  letter-spacing: 1.2px;
  border-radius: 3px;
  border: solid 1px #84b367;
  background-color: #bccf60;
  font-family: 'TrajanPro-Bold';
  box-shadow: 0 0 0 2px #bccf60;
  padding: 3px 25px;
  }
 
 `],
})
export class OrderCancelledPopupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  custom="modal";
  popup1(){
    this.custom="show";
  }
  close1(){
    this.custom="modal";
  } 
}
