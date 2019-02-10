import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { zip } from 'rxjs';
import { Form, FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'angular-6-social-login';
import { HttpClient } from 'selenium-webdriver/http';
import { Router } from '@angular/router';
import { UserService } from '../../../user.service';
import { SharingDataService } from '../../../sharing-data.service';
import { DoctorService } from '../../../doctor.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styles: [`
  /* Create a custom checkbox */
 #chk .chkbx-container .checkmark {
      position: absolute;
      top: 5px;
      left: 0;
      height: 20px;
      width: 20px;
      background-color: #ffffff;
      border: solid 2px #d6ad66;
  }
  // input[type="tel"]:focus {
  //   border: 1px solid #000;
  // }
  
  /* On mouse-over, add a grey background color */
  #chk .chkbx-container:hover input ~ .checkmark {
      background-color: #ffffff;
  }
  
  /* When the checkbox is checked, add a blue background */
  #chk .chkbx-container input:checked ~ .checkmark {
      background-color: #ffffff;
  }
  
  /* Create the checkmark/indicator (hidden when not checked) */
  #chk .chkbx-container .checkmark:after {
      content: "";
      position: absolute;
      display: none;
  }
  
  /* Show the checkmark when checked */
  #chk .chkbx-container input:checked ~ .checkmark:after {
      display: block;
  }
  
  /* Style the checkmark/indicator */
  #chk .chkbx-container .checkmark:after {
      left: 6px;
      top: 3px;
      width: 5px;
      height: 10px;
      border: 1px solid #d6ad66;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
  }


  .chkbx-container {
    display: inline-block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.sub-tandc-title {
  font-weight: normal;
  color: #333333;
}

.termsAndConditionsDiv[_ngcontent-c23] {
  font-family: 'PlayfairDisplay-Regular';
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: 0.9px;
  color: #d6ad66;
}

.termsAndConditionsDiv .form-control {
  border-radius: 5px;
  border: solid 1px #d6ad66;
  font-family: 'PlayfairDisplay-Regular';
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 0.7px;
  color: #333333;
  margin-bottom: 20px;
}
.chkbx-container:hover input ~ .checkmark {
  background-color: #ffffff;
}

.chkbx-container .checkmark {
  position: absolute;
  top: 5px;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #ffffff;
  border: solid 2px #d6ad66;
}

.chkbx-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

:host >>> .card-header {
  padding: 0.55rem 1.25rem;
  margin-bottom: 0;
  background-color: #fff9e5;
  border-bottom: none;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
}

:host >>> .card-header  {
  font-size: 22px;
  font-family: 'TrajanPro-Bold';
  color: #402909;
   background-color: transparent;
   text-decoration:none;
   padding: 2% 3%;
}

:host >>> .card-header:first-child {
  border-radius: 8px;
}

:host >>> .accordion .card:not(:first-of-type) .card-header:first-child {
  border-radius: 8px;
}

:host >>> .card {
  background-color: transparent;
  border: none;
  margin-bottom: 10px;
  
}

:host >>> .card-body {
  padding: 2px;
}

:host >>> .custom_modal {
  position: fixed !important ;
  top: 0 !important;
  left: 0 !important;
  bottom: 0 !important;
  right: 0 !important;
  background: rgba(0,0,0,0.5);
  z-index: 1 !important;
}
:host >>> .modal-dialog {
  top: 50px;
  bottom: 0px;
}
.form-control{
  background-color: #fbf8ee !important;
  border: none; 
  font-family: 'PlayfairDisplay-Regular';
height: 47px; 
font-size: 14px;
} 
.ShoppingCardBGRow {
  background: #fbf4da;
border-radius: 5px;
margin: 8px; 
}
.borderright{
  border-right: 2px solid #cccccc;
  padding: 4% 5%;
}  
.ShoppingCardBGRow1{
  border-radius: 5px;
  margin: 8px; 
}
.bgcolorcontentrow{
  background:#fbf4da;
}
.emailicon{
  background: url("assets/images/Mailicon.png") no-repeat 10px center;
  padding-left: 33px;
}
.mailicon{
  background: url("assets/images/Mailicon.png") no-repeat 10px center;
  padding-left: 33px;
} 
.passwordicon{
  background: url("assets/images/PasswordIcon.png")  no-repeat 10px center;
  padding-left: 33px;
} 
.forgetpass{
  font-family: 'PlayfairDisplay-Regular';
float:right;
  font-size: 12px;
}
.Usernameicon{
  background: url("assets/images/UserIcon.png")  no-repeat 10px center;
  padding-left: 33px;
} 
.LineImg[_ngcontent-c1] {
  width: 41%;
} 
.SocialIconContentBox[_ngcontent-c1] {
  width: 60%;
  margin: 0 auto;
      margin-top: 0px;
} 
.DilivrySection1{
  width: 31%;

float: left;
}
:host >>> .SocialIcon {
  width: 46% !important;
  float: left;
  text-align: center;
}
.ConnectWithText {
  font-size: 16px;
  font-family: 'PlayfairDisplay-Regular';
}
.rad-btn {
  margin-top: 1px !important;
    margin-left: -1.75rem!important;
    width: 20px;
    height: 18px;
}
.container {
  width: 94% !important;
  max-width: 2400px !important;
  margin: 0 auto;
}
.gryish {
  background: #ffffff;
  padding:33px!important;
  border-radius:8px;
  width: 100%;
  margin: 20px  auto;
}
.ChooseOption{
  font-family: 'TrajanPro-Bold';
  font-size: 14px;
  color: #333333; 
  font-weight: bold;
} 
.ChooseOption1 {
  font-family: 'PlayfairDisplay-Regular';
  font-size: 14px;
  line-height: 1.71;
  color: #000000;
}
.appon_card {
  box-shadow: 0px 1px 5px 0 rgba(0, 0, 0, 0.13);
  width: 22%;
  text-align: center;
  margin: 1% 2% 1% 0%;
  border-radius: 5px;
  display: inline-block;
  vertical-align: top;
}
.appon_card2.price_card {
  width: 30%;
  display: inline-block;
  vertical-align: top;
  margin: 1% 0% 1% 0%;
}
.appon_card.product_card {
  
  background-color: #ffffff;
  width: 68%;
  margin-left: 0px;
  text-align: left;
  height: 408px;
  overflow-y:scroll;
  position:relative;
  overflow-x:hidden;
}
.appon_card.price_card {
  background-color: #ffffff;
  width: 30%;
  margin-right: 0px;
  text-align: left
}
.RightCardPadding{
  padding: 3% 6%;
}
.product_footer{
 
  bottom:0;
  background-color: #fbf8ee;
  width:100%;
  padding:20px;
  cursor:pointer;
}

.btn-proceed{
  width:100%;
  background-color:#33a15c;
  padding: 3% 0%;
  }
  
.appon_card.address_card {
  background-color: #ffffff;
  width: 100%;
  margin-left: 0px;
  text-align: left;
}

.appon_card.payment_card {
  background-color: #ffffff;
  width: 100%;
  margin-left: 0px;
  text-align: left;
}

.tex-ali{
  text-align:center;
  cursor:pointer;
}
.center{
text-align:center;
}

.label {
  color: white;
  border-radius: 8px;
  padding:16px;
  font-weight: 600;
  font-family: Arial;
}

.bg-green {
  background: linear-gradient(to bottom right, #339966 0%, #001000 100%);
  }
.bg-cyan{
   background: #85929E;
}   
.bg-whitesmoke{
  background-color: #fbf8ee;
}
.bg-linen{
  background-color:linen
}

.label-word{
margin-left:60px;
font-size: 24px;
}

.applyCoupon  {
  height: 60px;
  padding-left: 0px;
  margin-top: 10px;
  border: none;
  border-bottom: 2px solid #333333;
  border-radius: 0px;
  font-size: 18px;
  outline: none;
  box-shadow: none;
  margin-bottom: 20px;
}

.cross-line{
  text-decoration: line-through;
  color:#a9a9a9; 
  font-family: 'PlayfairDisplay-Bold';
  font-size: 14px;
}

.fa{
  border: none;
  color:#85929E;
   cursor: pointer;
    background-color: transparent;
     font-size: 25px; outline-color: none;
}
.Subtotal{
  font-size: 14px;
  font-family: 'PlayfairDisplay-Regular';
  color:#000000;
}
.order-head{
  font-size: 14px;
  margin-bottom: 0px;
color: #333333;

font-family: 'TrajanPro-Bold';
}
.ZanduSonaChandiText{
  font-size: 14px;
  color:#000000;
  font-family: 'PlayfairDisplay-Regular';
  margin-top: 12px;
} 
.rupeesText{
  font-size: 14px;
color: #000000;
font-family: 'PlayfairDisplay-Bold';
}
.HeadingPaddingLeft{
  padding-left: 11% !important;
} 
.AddMoreProductText{
  font-size:12px;
  color:#402909;
  font-family: 'PlayfairDisplay-Regular';
}
.order-head2{
  font-size: 14px;
  margin-bottom: 0px;
color: #333333;

font-family: 'TrajanPro-Bold';
}

.order-margin-top{
  margin-top: 14px;
}

// .order-margin-top2{
//   margin-top: 20px;
// }

  p{
font-size: 18px;
font-weight: 400;  
}

.searchbg2  {
  height: 33px;
  padding-left: 0px;
  margin-top: 10px;
  border: none;
  background: transparent !important;
  border-bottom: 1px solid #cccccc;
  border-radius: 0px;
  font-size: 12px;
  outline: none;
  box-shadow: none;
  margin-bottom: 20px;
  color: #666666;
  font-family: 'PlayfairDisplay-Regular';
}

.btn-apply{
  margin-top: 10px;
}
.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus, .show > .btn-success.dropdown-toggle:focus {
  background: #d6ad66;
  color: #402909;
  box-shadow: none;
}
:host >>> .btn-size {
  padding: 10px 40px;
  font-size: 12px;
  background-color: #bccf60;
  border: none;
  color: #402909;
  font-family: 'TrajanPro-Bold';
  height: 33px;
  width: 112px;
  outline: 1px solid #84b367 !important;
  outline-offset: -5px;
  -moz-outline-radius: 5px;
  border-radius: 5px;
}
.freeDiliveryText{
  font-size: 12px;
color: #666666;
font-family: PlayfairDisplay;
letter-spacing: 0.6px;
}
.amount-payable-heading{
  color: #402909;
font-size: 14px;

margin-top: 12px;
font-family: 'PlayfairDisplay-Bold';
}
.proceedbtn{
  font-size: 16px;
  letter-spacing: 1.2px;
  margin: 0 auto;
  border-radius: 10px;
  font-weight: bold;
  border: solid 1px #84b367 !important;
  background-color: #d6ad66 !important;
  font-family: 'TrajanPro-Bold';
  box-shadow: 0 0 0 7px #d6ad66 !important;
  color: #402909 !important;
  width: 100%;
}
.amount-payable{
  margin-top: 12px;
  color: #222222;
  font-size: 14px;
  font-family: 'PlayfairDisplay-Bold';
}

.input-spinner{
  width:60px;text-align: center
}

.form-size{
width:40%;  
}
.form-size2{
width:9%;  
}
.bg-btn{
  background-color:#33a15c;
}
.rad-size{
  font-size: 14px;
color: #333333;
font-family: 'TrajanPro-Regular';
margin-top: 10px;
}
.diliverychekbox{
  font-size: 14px;
  color: #333333;
  font-family: 'TrajanPro-Bold';
} 
.diliverychekbox span {
  font-size: 12px;
  color: #333333;
  font-family: 'PlayfairDisplay-Regular';
}  
.CashBgColor{
  background: #fbf4da;

} 
.CashPading{
  padding: 4% 5%;
}
.borderbg{
  border:1px solid #d6ad66;
}
.CashRow{

}
.loginORsigninPad{
  padding: 4% 15%;
}
.CashText{
  border-radius: 5px;
  padding: 4% 4%;

margin-right: 20px;
}
.CashText p{
  font-size: 16px;
color: #402909;
font-family: 'TrajanPro-Regular';
}
.DiliveryBtn{
  margin: 0 auto;
} 
.tex-ali p{
  font-size:10px;
  font-family: 'TrajanPro-Bold';
}
.DiliveryBtn .btn{
  // width:auto;
  margin: 0 auto !important;
}
.bgcolorDiliveryScetion{
  background: #f9f7ee;
border-radius: 10px;
padding: 1% 2% 3% 2%;
margin-right: 20px;
} 
.rowDiliveryDiv{
  width: 92%;
margin: 0 auto;

}
.addnewaddDiv{
  border: 1px solid #d6ad66;
border-radius: 5px; 
min-height: 194px;
}
.RightText p{
  font-size: 10px;
color: #333333;
font-family: 'PlayfairDisplay-Regular';
float: right;
text-decoration: underline;
}
.form-check-input {
  position: absolute;
  margin-top: 0.3rem;
  margin-left: -1.25rem;
}

.add-address-txt {
  position: relative;
  
}
.add-clr-web{
  background-color: antiquewhite;
  padding: 7%;
  border-radius: 15px;
}

@media only screen and (max-width: 769px) {
  .gryish{
    padding: 8px!important;
    width: 100%;
  }
  .appon_card.product_card {
      background-color: #ffffff;
      width: 100%;
      margin-left: 0px;
      text-align: left;
      
  }
  .appon_card2.price_card {
      background-color: #ffffff;
      width: 100%;
      margin-right: 0px;
      text-align: left
  }

  .label {
      color: white;
      border-radius: 8px;
      font-weight: 600;
      font-family: Arial;
  }
  
  .label-word{
      margin-left:0px;
      font-size: 20px;
      }
      
      .applyCoupon  {
          padding-left: 0px;
          margin-top: 10px;
          border: none;
          border-bottom: 2px solid #333333;
          border-radius: 0px;
          font-size: 18px;
          outline: none;
          box-shadow: none;
          margin-bottom: 20px;
      }
      
      .order-head2{
          font-weight: 800;
          font-size: 18px;
          margin-top:30px;
          margin-left: 10%;
      }
      
      .order-margin-top{
          margin-top: 0px;
      }
      
      .order-margin-top2{
          margin-top:-10px
      }
      
          p{
        font-size: 16px;
        font-weight: 400;  
      }
      
      .btn-apply{
          margin-top:0px;
          margin-left: 25px;
      }

      .btn-size{
       padding:5px 27px;
       font-size: 18px;
       margin-bottom: 10px;
      }
      
      .btn-proceed{
      float:right;
      width:100%;
      height:45px;
      margin-top: 6px;
      }
      
      .amount-payable-heading{
          color:green;font-size: 18px;font-weight: 600; margin-top: 12px
      }
      
      .amount-payable{
          margin-top: 12px
      }
         
      
        
        .select-style{
        width: 100%;
        padding: 6px;
        border-radius: 4px;
        border: 1px solid #cccccc;
        }
        .Addaddressbtn {
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        outline: none;
        border: 1px solid transparent;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        background-color: #d6ad66!important;
        color: #ffffff!important;
        line-height: 1.5;
        border-radius: 0.25rem;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }
        .popclose {
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 1px solid #d6ad66;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        background-color: #ffffff!important;
        color: #000000!important;
        line-height: 1.5;
        border-radius: 0.25rem;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }
       :host>>> .modal.fade.show {
          display: block;
          }
          :host>>> .modal {
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
          
          .cart-order {
            text-align: center;
        }   
        .AddMoreProductText{
          text-align: center;
      }   
      .order-head {
        text-align: center;
    }    
     .login-subtxt{
       font-size:12px;
       font-family:PlayfairDisplay-Regular;
     }
     .borderright.login-option {
      padding-left: 22%;
  }
    
        .delivery-res {
        background-color: #ffffff;
          width: 100%;
          margin-left: 0px;
          text-align: center;
      }
}




:host >>> .clickable{
  cursor: pointer;
  text-decoration: underline !important;
}
.padlrn{
  padding: 0px;
}
.Addaddressbtn{
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  background-color: #d6ad66!important;
  color: #ffffff!important;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.popclose {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid #d6ad66;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  background-color: #ffffff!important;
  color: #000000!important;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
:host >>> .addAddressModal .modal-dialog{
  margin-top: 30px !important;
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
.card-header {
    padding: 0.55rem 1.25rem;
    margin-bottom: 0;
    background-color: #fff9e5;
    border-bottom: none;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  }
  
  :host >>> .card-header  {
    font-size: 22px;
    font-family: 'TrajanPro-Bold';
    color: #402909;
     background-color: transparent;
     text-decoration:none;
     padding: 2% 3%;
  }
  
  :host >>> .card-header:first-child {
    border-radius: 8px;
  }
  
  :host >>> .accordion .card:not(:first-of-type) .card-header:first-child {
    border-radius: 8px;
  }
  
  :host >>> .card {
    background-color: transparent;
    border: none;
    margin-bottom: 10px;
    
  }
  
  :host >>> .card-body {
    padding: 2px;
  }
  
  :host >>> .custom_modal {
    position: fixed !important ;
    top: 0 !important;
    left: 0 !important;
    bottom: 0 !important;
    right: 0 !important;
    background: rgba(0,0,0,0.5);
    z-index: 1 !important;
  }
  // :host >>> .modal-dialog {
  // top: 20% !important;
  // }
  .form-control{
    background-color: #fbf8ee !important;
    border: none;
  } 
  .ShoppingCardBGRow {
    background: #fbf4da;
  border-radius: 5px;
  margin: 8px; 
  }
  .borderright{
    border-right: 2px solid #cccccc;
    padding: 4% 5%;
  }  
  .ShoppingCardBGRow1{
    border-radius: 5px;
    margin: 8px; 
  }
  .bgcolorcontentrow{
    background:#fbf4da;
  }
  .emailicon{
    background: url("src/assets/images/FooterCall.png") no-repeat 10px center;
    padding-left: 33px;
  } 
  .passwordicon{
    background: url("src/assets/images/PasswordIcon.png")  no-repeat 10px center;
    padding-left: 33px;
  } 
  .forgetpass{
    font-family: 'PlayfairDisplay-Regular';
  float:right;
    font-size: 12px;
  }
  .Usernameicon{
    background: url("src/assets/images/UserIcon.png")  no-repeat 10px center;
    padding-left: 33px;
  } 
  .LineImg[_ngcontent-c1] {
    width: 41%;
  } 
  .SocialIconContentBox {
    width: 60%;
    margin: 0 auto;
        margin-top: 0px;
  } 
  .DilivrySection1{
    width: 31%;
    min-height: 200px;
  float: left;
  }
  .SocialIcon {
    width: 33%;
    float: left;
    text-align: center;
  }
  .ConnectWithText {
    font-size: 16px;
    font-family: 'PlayfairDisplay-Regular';
  }

  .rad-btn {
    margin-top: 1px !important;
      margin-left: -1.75rem!important;
      width: 20px;
      height: 18px;
  }
  .container {
    width: 94% !important;
    max-width: 2400px !important;
    margin: 0 auto;
  }
  .gryish {
    background: #ffffff;
    padding:33px!important;
    border-radius:8px;
    width: 100%;
    margin: 20px  auto;
  }
  .ChooseOption{
    font-family: 'TrajanPro-Bold';
    font-size: 14px;
    color: #333333;
  } 
  .ChooseOption1 {
    font-family: 'PlayfairDisplay-Regular';
    font-size: 14px;
    line-height: 1.71;
    color: #000000;
  }
  .appon_card {
    box-shadow: 0px 1px 5px 0 rgba(0, 0, 0, 0.13);
    width: 22%;
    text-align: center;
    margin: 1% 2% 1% 0%;
    border-radius: 5px;
    display: inline-block;
    vertical-align: top;
  }
  .appon_card2.price_card {
    width: 30%;
    display: inline-block;
    vertical-align: top;
    margin: 1% 0% 1% 0%;
  }
  .appon_card.product_card {
    background-color: #ffffff;
    width: 68%;
    margin-left: 0px;
    text-align: left;
    height: 340px;
    overflow-y:auto;
    position:relative;
    overflow-x:hidden; 
    }
  .appon_card.price_card {
    background-color: #ffffff;
    width: 30%;
    margin-right: 0px;
    text-align: left
  }
  .RightCardPadding{
    padding: 3% 6%;
  }
  .product_footer{
   
    bottom:0;
    background-color: #fbf8ee;
    width:100%;
    padding:20px;
    cursor:pointer;
  }
  
  .btn-proceed{
    width:100%;
    background-color:#33a15c;
    padding: 3% 0%;
    }
    
  .appon_card.address_card {
    background-color: #ffffff;
    width: 100%;
    margin-left: 0px;
    text-align: left;
   
  }
  
  .appon_card.payment_card {
    background-color: #ffffff;
    width: 100%;
    margin-left: 0px;
    text-align: left;
    
  }
  
  .tex-ali{
    text-align:center;
    cursor:pointer;
  }
  .center{
  text-align:center;
  }
  
  .label {
    color: white;
    border-radius: 8px;
    padding:16px;
    font-weight: 600;
    font-family: Arial;
  }
  
  .bg-green {
    background: linear-gradient(to bottom right, #339966 0%, #001000 100%);
    }
  .bg-cyan{
     background: #85929E;
  }   
  .bg-whitesmoke{
    background-color: #fbf8ee;
  }
  .bg-linen{
    background-color:linen
  }
  
  .label-word{
  margin-left:60px;
  font-size: 24px;
  }
  
  .applyCoupon  {
    height: 60px;
    padding-left: 0px;
    margin-top: 10px;
    border: none;
    border-bottom: 2px solid #333333;
    border-radius: 0px;
    font-size: 18px;
    outline: none;
    box-shadow: none;
    margin-bottom: 20px;
  }
  
  .cross-line{
    text-decoration: line-through;
    color:#a9a9a9; 
    font-family: 'PlayfairDisplay-Bold';
    font-size: 14px;
  }
  
  .fa{
    border: none;
    color:#85929E;
     cursor: pointer;
      background-color: transparent;
       font-size: 25px; outline-color: none;
  }
  .Subtotal{
    font-size: 14px;
    font-family: 'PlayfairDisplay-Regular';
    color:#000000;
  }
  .order-head{
    font-size: 14px;
    margin-bottom: 0px;
  color: #333333;
  
  font-family: 'TrajanPro-Bold';
  }
  .ZanduSonaChandiText{
    font-size: 14px;
    color:#000000;
    font-family: 'PlayfairDisplay-Regular';
    margin-top: 12px;
  } 
  .rupeesText{
    font-size: 14px;
  color: #000000;
  font-family: 'PlayfairDisplay-Bold';
  }
  .HeadingPaddingLeft{
    padding-left: 11% !important;
  } 
  .AddMoreProductText{
    font-size:12px;
    color:#402909;
    font-family: 'PlayfairDisplay-Regular';
  }
  .order-head2{
    font-size: 14px;
    margin-bottom: 0px;
  color: #333333;
  
  font-family: 'TrajanPro-Bold';
  }
  
  .order-margin-top{
    margin-top: 14px;
  }
  
  .order-margin-top2{
    margin-top: 20px;
  }
  
    p{
  font-size: 18px;
  font-weight: 400;  
  }
  
  .searchbg2  {
    height: 33px;
    padding-left: 0px;
    margin-top: 10px;
    border: none;
    background: transparent !important;
    border-bottom: 1px solid #cccccc;
    border-radius: 0px;
    font-size: 12px;
    outline: none;
    box-shadow: none;
    margin-bottom: 20px;
    color: #666666;
    font-family: 'PlayfairDisplay-Regular';
  }
  
  .btn-apply{
    margin-top: 10px;
  }
  .btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus, .show > .btn-success.dropdown-toggle:focus {
    background: #d6ad66;
    color: #402909;
    box-shadow: none;
  }
  .btn-size{
    padding: 10px 40px;
    font-size: 12px;
    background-color: #cfa15a;
    border: none;
    color: #402909;
    font-family: 'TrajanPro-Bold';
    height: 33px;
    width: 113px;
    outline: 1px solid #bf924b !important;
    outline-offset: -5px;
    -moz-outline-radius: 5px;
    border-radius: 5px;
  }
  .freeDiliveryText{
    font-size: 12px;
  color: #666666;
  font-family: PlayfairDisplay;
  letter-spacing: 0.6px;
  }
  .amount-payable-heading{
    color: #402909;
  font-size: 14px;
  
  margin-top: 12px;
  font-family: 'PlayfairDisplay-Bold';
  }
  .proceedbtn{
    background: #d6ad66; 
  color: #402909;
  border: none; 
  /* outline: 1px solid #d6ad66 !important;  */
  width: 100%; 
  box-shadow: 0 0 0 7px #d6ad66;
border: 1px solid #402909 !important;
  }
  .amount-payable{
    margin-top: 12px;
    color: #222222;
    font-size: 14px;
    font-family: 'PlayfairDisplay-Bold';
  }
  
  .input-spinner{
    // width: 45px;
    text-align: center
  }
  
  .form-size{
  width:40%;  
  }
  .form-size2{
  width:9%;  
  }
  .bg-btn{
    background-color:#33a15c;
  }
  .rad-size{
    font-size: 14px;
  color: #333333;
  font-family: 'TrajanPro-Regular';
  margin-top: 10px;
  }
  .diliverychekbox{
    font-size: 14px;
    color: #333333;
    font-family: 'TrajanPro-Bold';
  } 
  .diliverychekbox span {
    font-size: 12px;
    color: #333333;
    font-family: 'PlayfairDisplay-Regular';
  }  
  .CashBgColor{
    background: #fbf4da;
  
  } 
  .CashPading{
    padding: 4% 5%;
  }
  .borderbg{
    border:1px solid #d6ad66;
  }
  
  .loginORsigninPad{
    padding: 4% 15%;
  }
  .CashText{
    border-radius: 5px;
    padding: 5% 4%;
    cursor: pointer;
  }
  .CashText p{
    font-size: 16px;
  color: #402909;
  font-family: 'TrajanPro-Regular';
  }
  .DiliveryBtn{
    text-align: center;
  } 
  .tex-ali p{
    font-size:10px;
    font-family: 'TrajanPro-Bold';
  }
  .DiliveryBtn .btn{
    width:auto;
  }
  .bgcolorDiliveryScetion{
    background: #f9f7ee;
  border-radius: 10px;
  padding: 1% 2% 3% 2%;
  margin-right: 20px;
  } 
  .rowDiliveryDiv{
    width: 92%;
  margin: 0 auto;
  
  }
  .addnewaddDiv{
    border: 1px solid #d6ad66;
  border-radius: 5px; 
  height: 179px;
  }
  .RightText p{
    font-size: 10px;
  color: #333333;
  font-family: 'PlayfairDisplay-Regular';
  float: right;
  text-decoration: underline;
  }
  .form-check-input {
    position: absolute;
    margin-top: 0.3rem;
    margin-left: -1.25rem;
  }
  
 

 



 

  .redalert {
    position: relative;
    color:red;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
}  

@media screen and (min-width: 1px) and (max-width: 1200px) { 
  .appon_card.product_card, .appon_card2.price_card {
    width: 100%;
  }
}


@media screen and (min-width: 1px) and (max-width: 992px) { 
.appon_card.product_card {
  width: 837px;
  overflow-x: auto;
  display: inline-block;
} 
.appon_card2.price_card {
  width:100%;

} 
.borderright {
  border-right: none;
 
} 
.proceedbtn{
  padding: 0px 10px;
}
}
@media screen and (min-width: 1px) and (max-width: 480px) { 
  .LineImg {
    width: 37% !important;
}


  }



`]
})
export class ShoppingCartComponent implements OnInit {
 
  public addAddressForm:any;
  public editAddressForm:any;
  
  public editAddStateList:any;
  public editAddCityList:any;
  public editAddLocationList:any;
  public  editLocation:any;
  public editFormName:any;
  public editFirstName:any;
  public editLastName:any;
  public editAddressLine1:any;
  public editAddressLine2:any;
  public editState:any;
  public editCity:any;
  public editZip :any;
  public isChecked:boolean=false;
  
  userId:any;
  headers:any;
  
  data11= {
    userId: localStorage.getItem("user_Id"),
    doctorUserId: localStorage.getItem("doctor_Id"),
    appointmentId: localStorage.getItem("appointmentId_")
  };

  patientRegister = new FormGroup({
    firstName: new FormControl('', Validators.required),
   // termsandcondition: new FormControl('', Validators.required),
    emailId: new FormControl(),
    password: new FormControl('', Validators.required),
    mobileNumber: new FormControl('', [Validators.required,Validators.maxLength(10)])
   
  });

  guestRegister = new FormGroup({
   // termsandcondition: new FormControl('', Validators.required),
   mobileNumber: new FormControl('', [Validators.required,Validators.maxLength(10)]),
   password: new FormControl('', Validators.required),
   chkbox: new FormControl('', Validators.required)

  });

  signupvalidationmessage:any;
  custom="modal";

  Register(uName) {
    var userData = this.patientRegister.value;
    this.usermobile = userData.mobileNumber
    // if(this.usermobile.toString().length !=10){ 
    //   this.custom="show";
    //  this.signupvalidationmessage=' Please Enter 10 digits mobile Number.' 
     
    //   return false;
    // }
    var request={
      'mobileNumber':this.usermobile
    };
    var headers = new Headers({ 'Content-Type': 'application/json' });
    
    this.user.register_process(request, headers).subscribe((data: any) => {
     
      if (data.EXIST) {
        
      swal("","The mobile number already exists. Do you wish to ‘Log In’ / Enter a new mobile Number to sign up?",'warning') 
      }else{
        
    // if(this.usermobile.toString().length !=10){ 
    //   this.custom="show";
    //  this.signupvalidationmessage=' Please Enter 10 digits mobile Number.' 
     
    //   return false;
    // }
    
    // var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if(!re.test(userData.emailId.toLowerCase())){ 
    //   this.custom="show";
    //   this.signupvalidationmessage=' please enter valid email .'
    //   // alert("please enter valid email"); 
    //   // this.custom1="show";
    //   return false;
    // }
    var reusername = /^[a-zA-Z\s]*$/;
    if(!reusername.test(userData.firstName.toLowerCase())){
     //  alert("please enter valid name"); 
      this.custom="show"; 
      this.signupvalidationmessage='please enter valid name'
      return false;
    }
    let key = "userMobile";
    
    localStorage.setItem(key, JSON.stringify(this.usermobile));
    
    localStorage.setItem("userName",uName.mobileNumber);//for login
    var headers = new Headers({ 'Content-Type': 'application/json' });
    this.user.register_process(userData, headers).subscribe((data: any) => {
      this.singleCheck = data;

      if (this.singleCheck.STATUS === "PROCEED_TO_REGISTRATIN_STEP_2") {
      
     this.router.navigate(['/sendOTP']);
      }
    });
      }
    });
  }

  productBeanList:any;
  addressBeanList:any;
  userData:any;
  delevryAddressId:any;

  spinner = 0;
  cart:any;
  total1=0;
  total_shipping_charges = 0;
  discount = 0;
  minimumAmountPurchase = 0;
  data :any;

  singleCheck;
  loginResp;
  loginResp101;
  role: number;
  responseCheck: boolean;
  username: string;
  user_role: string;
  usermobile;
  cartData:any;
  cookieCartId :any;
  CART_ID:any;
  
  flag:boolean=true;
  constructor(
    private router: Router,
    private user: UserService, private share:SharingDataService, private doctorService:DoctorService) { 
    
      this.cookieCartId = this.share.getCookieCartId();
      if(this.cookieCartId==undefined || this.cookieCartId==""){
        this.cookieCartId=localStorage.getItem('cartId');
      }
      //
      let jsonTosend:any={};
      jsonTosend.cookieCartId = this.cookieCartId;
     let headers = new Headers({ 'Content-Type': 'application/json' });
      this.user.getMyCartNew(jsonTosend, headers).subscribe((data: any) => {
  this.cart= data.productBeanList;
  console.log(this.cart)
  
   console.log(this.cart)
 
   let to=0; 
   let one=0;
   let two=0
   for (let i = 0; i < this.cart.length; i++) {
   
     two = two+ this.cart[i].sellingPrice * this.cart[i].qty
    }
  this.total1 = two;
  if(this.total1!=0){this.statusflag=true;}
      });
 
   
  }
  
  custom11 = "modal";
  helloModalpop(addressId){
    //
    
    this.delevryAddressId = addressId;
    this.custom11 = "show";
    // swal({
    //   title: "Are you sure?",
    //   text: "Your will not be able to recover this imaginary file!",
    //   type: "warning",
    //   showCancelButton: true,
    //   confirmButtonClass: "btn-danger",
    //   confirmButtonText: "Yes, delete it!",
    //   // closeOnConfirm: false
    // }).then(
    //   function(isConfirm) {
    //     if(isConfirm) {
    //       
    //       let dataToSend: any = {};
    //   dataToSend.addressId = addressId;
    //   // if (this.delevryAddressId == undefined) {
    //   //   dataToSend.addressId = "";
    //   //   } else {
    //   //   dataToSend.addressId = this.delevryAddressId;
    //   //   }
  
    //   // dataToSend.addressId = this.delevryAddressId;
    //   let respData: any;
    //   this.doctorService.removeAddress(dataToSend, this.headers).subscribe((data) => {
    //     respData = data;
    //     if (respData.STATUS == "SUCCESS") {
    //       swal("Deleted!", "Your imaginary file has been deleted.", "success");
    //       this.close3();
    //       let dataToSend: any = {};
    //       dataToSend.userId = localStorage.getItem("userId");//
    //       this.doctorService.patientCart(dataToSend, this.headers).subscribe((data: any) => {
    //         this.userData = data;
    //         this.productBeanList = this.userData.productBeanList;
            
    //         this.addressBeanList = this.userData.addressBeanList;
    //         this.productBeanList = this.userData.productBeanList;
  
    //         console.log(this.addressBeanList);
    //         let to;
    //         this.total1 = 0;
    //         if (this.productBeanList) {
  
    //           for (let i = 0; i < this.productBeanList.length; i++) {
    //             to = this.productBeanList[i].sellingPrice;
    //             this.total1 = this.total1 + Number(to);
    //           }
    //         }
    //       });
    //     }
    //   });
         
    //     } else {
    //       swal("Cancelled", "Your imaginary file is safe :)", "error");
    //     }
    //   });
    
  } 
   
  custom3 = "modal";
  // private delevryAddressId:any;
  popup3(addressId) {
  this.delevryAddressId = addressId;
  this.custom3 = "show";
  }
  close3() {
  this.custom11 = "modal";
  }
  
  addQauntity(quantity:string){
    return  parseInt(quantity)+1;
  }

  add(qty,id){
    //this.share.getCookieCartId()
   // 
    var params = {
      userId : 0,
      productId : id,
      quantity : qty,
      cookieCartId:localStorage.getItem("cartId")
    // cookieCartId:localStorage.getItem('cid')
    }
    var headers = new Headers({ 'Content-Type': 'application/json' });
  this.user.updateQuantityOfProduct(params, headers).subscribe((data: any) => {
    let responce = data
  console.log(data);
  });
    let data=0
    let to=0
    let one=0
    let two=0
//Akshay
    // let subTotal = 0;
    // for(let index = 0;index < this.cart.length;index++)
    // {
    //   if(this.cart[index].productId == id){
    //     this.cart[index].qty = qty;
    //   }
    //     subTotal= subTotal+(this.cart[index].qty * parseInt(this.cart[index].mrpPrice))
    // }
    // this.total1 = subTotal;
//Ketaki
    let subTotal = 0;
    for(let index = 0;index < this.cart.length;index++)
    {
      if(this.cart[index].productId == id){
        this.cart[index].qty = qty;
        subTotal= subTotal+(this.cart[index].qty * parseInt(this.cart[index].sellingPrice))
      }
      else{  subTotal= subTotal+(this.cart[index].qty * parseInt(this.cart[index].sellingPrice))}
      
    }
    this.total1 = subTotal;
  //   for (let i = 0; i < this.cart.length; i++) {
  //     if(id==this.cart[i].id){
  //       to = this.cart[i].sellingPrice * qty;
  //       one = data + to
  //     }
  //     // else if(id==undefined){
  //     //   to = this.cart[i].sellingPrice * qty;
  //     //   one = data + to
  //     // }
  //     else{
  //     two =  this.cart[i].sellingPrice * this.cart[i].qty
  //     }
  //   this.total1 = one+two;
  //  }
   //
 console.log(this.total1)
  }

  private fieldArray: Array<any> = [];
  deleteFieldValue(qty,id,index) {
    qty=0;
    if(qty==0)
    { 
      this.add(qty,id);
      this.cart.splice(index, 1);
      //cookieCartId:localStorage.getItem("cartId")
     // localStorage.removeItem("cartId");
    this.cookieCartId="";
    //this.share.setCookieCartId(localStorage.getItem("cartId"))
     if(this.total1==0){ 
       this.statusflag=false;
      // this.cookieCartId="";
      this.share.setCookieCartId(this.cookieCartId)
      localStorage.removeItem('FcartCounter');
      localStorage.removeItem("cartCounter");
    }
    else{
      let tempcnt;
      tempcnt=localStorage.getItem("cartCounter");
      tempcnt=tempcnt-1;
      localStorage.setItem("cartCounter",tempcnt);
      localStorage.removeItem('FcartCounter')
    }
     
    }
    else{
     
    }
   
   
}




  down() {
    if (this.spinner > 0) {

      this.spinner = this.spinner - 1
    }
  }


  btn = ["active", "btn", "btn", "btn"];


  addBankingDetails(index) {
    for (let i = 0; i < this.btn.length; i++) {
      this.btn[i] = "btn";
    }
    this.btn[index] = "active";
  }

  onChangeState(stateVal) {
    let dataToSend: any = {};
    let respData: any = {};
    
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    
    dataToSend.state = stateVal;
    this.doctorService.getCityList(dataToSend, this.headers).subscribe((data) => {
    respData = data;
    this.editAddCityList = "";
    this.editAddCityList = respData.cityDropDownList;
    this.editAddCityList.push({ "storingValue": "Select City" });
    });
    }
    onChangeCity(cityVal) {
    let dataToSend: any = {};
    let respData: any = {};
    
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    
    dataToSend.state = cityVal;
    this.doctorService.getLocalityList(dataToSend, this.headers).subscribe((data) => {
    respData = data;
    this.editAddLocationList = "";
    this.editAddLocationList = respData.localityDropDownList;
    this.editAddLocationList.push({ "storingValue": "Select Locality" });
    });
    }

    onlinePayment(){
      this.submitBillForm();
    }

    openmodal() {
      this.modal = 'show';
    }
    openmodal2() {
      this.modal = 'show';
    }
     custom5 = "modal";
    popup5() {
      this.custom5 = "show";
    }
    
    close5() {
      this.custom5 = "modal";
    }
    custom6 = "modal";
  popup6() {
    this.custom6 = "show";
  }
  close6() {
    this.custom6 = "modal";
  }

  modal = "modal";
  addressOpenmodal() {
    this.modal = 'show';
  
this.addAddressForm.reset();
this.custom1 = "show";
let dataToSend: any = {};
let respData: any = {};

this.headers = new Headers({ 'Content-Type': 'application/json' });

dataToSend.city = "";
dataToSend.editState = "";
this.doctorService.getSelectedStateCityLocalityList(dataToSend, this.headers).subscribe((data) => {
respData = data;
if (respData.stateDropDownList) {
this.editAddStateList = "";
this.editAddStateList = respData.stateDropDownList;
this.editAddStateList.push({ "storingValue": "Select State" });
}
});
  }

  closemodal() {
    this.modal = 'modal';
    this.deliveryAddressForm.reset();
  }


  addNewAddress(addNewAddressFormValues) {
//
    let dataToSend: any = {};
    if (this.delevryAddressId == undefined) {
    dataToSend.addressId = "";
    } else {
    dataToSend.addressId = this.delevryAddressId;
    }
    
    dataToSend.userId = this.userId;//localStorage.getItem("userId");
    //
    dataToSend.addressName = addNewAddressFormValues.firstNameAdd;
    dataToSend.addressLastName = addNewAddressFormValues.lastNameAdd;
    dataToSend.addressLine1 = addNewAddressFormValues.addressLine1Add;
    dataToSend.addressLine2 = addNewAddressFormValues.addressLine2Add;
    dataToSend.state = addNewAddressFormValues.stateAdd;
    dataToSend.city = addNewAddressFormValues.cityAdd;
    dataToSend.zipCode = addNewAddressFormValues.zipAdd;
    if (addNewAddressFormValues.localityAdd == null) {
    dataToSend.location = "";
    } else {
    dataToSend.location = addNewAddressFormValues.localityAdd;
    }
    
    let respData;
    
    
    let params = {}
    this.doctorService.guestaddNewAddressMain(dataToSend, this.headers).subscribe((data: any) => {
    this.userData = data;
    this.productBeanList = this.userData.productBeanList;
    // console.log(this.productsList);
    this.addressBeanList = this.userData.addressBeanList;
    this.productBeanList = this.userData.productBeanList;
    this.closemodal();
    console.log(this.addressBeanList);
    let to;
    this.total1 = 0;
    if (this.productBeanList) {
    
    for (let i = 0; i < this.productBeanList.length; i++) {
    to = this.productBeanList[i].sellingPrice;
    this.total1 = this.total1 + Number(to);
    }
    }
    });
    
    }
    custom4 = "modal";
    close4(){
      this.custom4 = 'modal'
    }
    // popup4(addressId, name, addressLine1, addressLine2, state, city, location, pincode) {
    //   //this.editAddressForm.reset();
    //   this.delevryAddressId = addressId;
    //   let editFormName = name;
    //  let editFirstName = name;
    //   let editLastName;
    //   let editAddressLine1 = addressLine1;
    //  let editAddressLine2 = addressLine2;
    //   let editState = state;
    //  let editCity = city;
    //   let editLocation = location;
    //  let editZip = pincode;
  
    //   this.custom4 = "show";
    //   let dataToSend: any = {};
    //   let respData: any = {};
  
    //   this.headers = new Headers({ 'Content-Type': 'application/json' });
  
    //   dataToSend.city = editCity;
    //   dataToSend.editState = editState;
    //   this.doctorService.getSelectedStateCityLocalityList(dataToSend, this.headers).subscribe((data) => {
    //     respData = data;
    //     if (respData.stateDropDownList) {
    //       this.editAddStateList = "";
    //       this.editAddStateList = respData.stateDropDownList;
    //       this.editAddStateList.push({ "storingValue": editState });
    //     }
    //     if (respData.cityDropDownList) {
    //       this.editAddCityList = "";
    //       this.editAddCityList = respData.cityDropDownList;
    //       this.editAddCityList.push({ "storingValue": editCity });
    //     }
    //     if (respData.localityDropDownList) {
    //       this.editAddLocationList = "";
    //       this.editAddLocationList = respData.localityDropDownList;
    //       this.editAddLocationList.push({ "storingValue": editLocation });
    //     }
    //   });
    // }
     popup4(addressId, name, addressLine1, addressLine2, state, city, location, pincode) {
      //this.editAddressForm.reset();
      this.delevryAddressId = addressId;
      this.editFormName = name;
      this.editFirstName = name;
      this.editLastName;
      this.editAddressLine1 = addressLine1;
      this.editAddressLine2 = addressLine2;
      this.editState = state;
      this.editCity = city;
      this.editLocation = location;
      this.editZip = pincode;
  
      this.custom4 = "show";
      let dataToSend: any = {};
      let respData: any = {};
  
      this.headers = new Headers({ 'Content-Type': 'application/json' });
  
      dataToSend.city = this.editCity;
      dataToSend.editState = this.editState;
      this.doctorService.getSelectedStateCityLocalityList(dataToSend, this.headers).subscribe((data) => {
        respData = data;
        if (respData.stateDropDownList) {
          this.editAddStateList = "";
          this.editAddStateList = respData.stateDropDownList;
          this.editAddStateList.push({ "storingValue": this.editState });
        }
        if (respData.cityDropDownList) {
          this.editAddCityList = "";
          this.editAddCityList = respData.cityDropDownList;
          this.editAddCityList.push({ "storingValue": this.editCity });
        }
        if (respData.localityDropDownList) {
          this.editAddLocationList = "";
          this.editAddLocationList = respData.localityDropDownList;
          this.editAddLocationList.push({ "storingValue": this.editLocation });
        }
      });
    }
    removeAddress() {
     // 
      let dataToSend: any = {};
      dataToSend.addressId = this.delevryAddressId;
      if (this.delevryAddressId == undefined) {
        dataToSend.addressId = "";
        } else {
        dataToSend.addressId = this.delevryAddressId;
        }
        dataToSend.userId = this.userId
      
      let respData: any;
      this.doctorService.removeAddress(dataToSend, this.headers).subscribe((data) => {
        respData = data;
        if (respData.STATUS == "SUCCESS") {
          swal("Deleted!", "Your imaginary file has been deleted.", "success");
          this.close3();
        this.addAddressForm.reset();
         
        }
      });
    }


    editAddress(editFormValues,fName1,lName1,aLine1,aLine2,state1,city1,locality1,zipC1) {
      //
      let a = state1
      let b = city1
          let dataToSend: any = {};
          dataToSend.addressId = this.delevryAddressId;
          dataToSend.userId = this.userId;
      
          // dataToSend.addressName = editFormValues.firstNameEdit;
          // dataToSend.addressLastName = editFormValues.lastNameEdit;
          // dataToSend.addressLine1 = editFormValues.addressLine1Edit;
          // dataToSend.addressLine2 = editFormValues.addressLine2Edit;
          // dataToSend.state = editFormValues.stateEdit;
          // dataToSend.city = editFormValues.cityEdit;
          // dataToSend.zipCode = editFormValues.zipEdit;
      
          dataToSend.addressName = fName1;
          dataToSend.addressLastName = lName1;
          dataToSend.addressLine1 =aLine1;
          dataToSend.addressLine2 = aLine2;
          dataToSend.state = state1;
          dataToSend.city = city1;
          dataToSend.zipCode = zipC1;
          //dataToSend.location = editFormValues.localityEdit;
      
          if(locality1 == null){
              dataToSend.location = "";
          }else{
            dataToSend.location = locality1;
          }
          console.log(dataToSend);
          let respData;
          this.doctorService.guestaddNewAddressMain(dataToSend, this.headers).subscribe((data) => {
            respData = data;
            this.userData = data;
            this.productBeanList = this.userData.productBeanList;
            // console.log(this.productsList);
            this.addressBeanList = this.userData.addressBeanList;
            if (respData.STATUS == "SUCCESS") {
              let dataToSend: any = {};
              dataToSend.userId = this.userId//
              dataToSend.cookieCartId = this.cookieCartId;
              this.close4();
              // this.user.getMyCartNew(dataToSend, this.headers).subscribe((data: any) => {
              //   this.userData = data;
              //   this.productBeanList = this.userData.productBeanList;
              //   this.addressBeanList = this.userData.addressBeanList;
              //   this.productBeanList = this.userData.productBeanList;
      
              //   console.log(this.addressBeanList);
              //   let to;
              //   this.total1 = 0;
              //   if (this.productBeanList) {
      
              //     for (let i = 0; i < this.productBeanList.length; i++) {
              //       to = this.productBeanList[i].sellingPrice;
              //       this.total1 = this.total1 + Number(to);
              //     }
              //   }
              // });
            }
          });
        }

  custom1 = "modal";
 
popup() {
this.addAddressForm.reset();
this.custom1 = "show";
let dataToSend: any = {};
let respData: any = {};

this.headers = new Headers({ 'Content-Type': 'application/json' });

dataToSend.city = "";
dataToSend.editState = "";
this.doctorService.getSelectedStateCityLocalityList(dataToSend, this.headers).subscribe((data) => {
respData = data;
if (respData.stateDropDownList) {
this.editAddStateList = "";
this.editAddStateList = respData.stateDropDownList;
this.editAddStateList.push({ "storingValue": "Select State" });
}
});
}
close() {
this.custom1 = "modal";
}



selectAddress(delAddId) {
  let dataToSend: any = {};
  dataToSend.addressId = delAddId;
  dataToSend.userId = this.userId;
  
  let respData: any;
  this.doctorService.selectAddress(dataToSend, this.headers).subscribe((data) => {
    respData = data;
    if (respData.isExists == "true") {
      localStorage.setItem("userId",this.userId);
      swal("Success","Products will be delivered to this address",'success');
    } else if (respData.isExists == "false") {
      swal("Error","Sorry, we don't deliver to this address",'error');
    }
     
  });
}

  savemodal() {
    this.modal = 'modal';
    this.deliveryAddressForm.reset();
  }


  addMoreData: any = [];
  submitCount: number = 0;
  myDeliveryAddress(deliveryAddressForm) {


    if (deliveryAddressForm.name != "") {
      this.submitCount++;
    }
    if (deliveryAddressForm.adddress != "") {
      this.submitCount++;
    }
    if (deliveryAddressForm.state != "") {
      this.submitCount++;
    }
    if (deliveryAddressForm.city != "") {
      this.submitCount++;
    }
    if (deliveryAddressForm.zipcode != null) {
      this.submitCount++;
    }
    if (this.submitCount == 5) {

      this.addMoreData.push({ name: deliveryAddressForm.name, address1: deliveryAddressForm.address, city: deliveryAddressForm.city, state: deliveryAddressForm.state, zipcode: deliveryAddressForm.zipcode });
      this.submitCount = 0;
      this.savemodal();
    }
    else {
      alert("Please You Must Fill All The Form To Save");
      this.submitCount = 0;
    }

  }

  deliveryAddressForm: FormGroup;
  myDeliveryData = { name: '', address: '', city: '', state: '', zipcode: '' };


  accordance=[
    {show:'show',collapse:'collapse'},
    {show:'',collapse:'hide'},
    {show:'',collapse:'hide'},
    {show:'',collapse:'hide'}
  ];
  ImgDiv:boolean=false;
  ImgDiv2:boolean=false;
  ImgDiv3:boolean=false;
 ImgDiv4:boolean=false;
 headerBG2="headerBG2";
 headerBG3="headerBG3";
 headerBG4="headerBG4";


 /////
 respData: any;
 url: any;
 billbeskPaymentGatewayUrl;
 paymentRequestProcessParameter;
 customerID;
 TxnAmount;
 txtadditional1;
 txtadditional2;
 txtadditional3;
 txtadditional4;
 txtadditional5;
 txtadditional6;
 txtadditional7;
 ru;
  openCity(index){
    window.scroll(0,0);
    this.reset();  
    this.accordance[index].show='show';
    this.accordance[index].collapse='collapse';
    if(index==1){
      this.ImgDiv=true;
this.headerBG2='CashBgColor';
    } 
    if(index==2){
     
    }
    if(index==3){
      this.ImgDiv3=true;
      this.headerBG4='CashBgColor';
      let params ={userId:this.userId}
      // this.doctorService.getBillFormVals(params, this.headers).subscribe((data: any) => {

      //   this.respData = data;
      //   this.billbeskPaymentGatewayUrl = this.respData.billbeskPaymentGatewayUrl;
      //   this.paymentRequestProcessParameter = this.respData.PAYMENT_REQUEST_PARAMETER;
      //   this.customerID = this.respData.customerID;
      //   this.TxnAmount = this.respData.TxnAmount;
      //   this.txtadditional1 = this.respData.txtadditional1;
      //   this.txtadditional2 = this.respData.txtadditional2;
      //   this.txtadditional3 = this.respData.txtadditional3;
      //   this.txtadditional4 = this.respData.txtadditional4;
      //   this.txtadditional5 = this.respData.txtadditional5;
      //   this.txtadditional6 = this.respData.txtadditional6;
      //   this.txtadditional7 = this.respData.txtadditional7;
      //   this.ru = this.respData.ru;
      //   console.log(data);
      //   //this.submitForm();

      // });

    }
   
    }
    guest(email,phone){
      // console.log(email+'----'+phone)
      console.log(this.isChecked);
      var param :any= {
        mobileNumber: phone,
        emailId: email,
        cookieCartId : this.cookieCartId }
      var headers = new Headers({ 'Content-Type': 'application/json' });
     this.user.guestRegistration(param, headers).subscribe((data: any) => {
       let responce = data;
       this.userId = data.userId
       console.log(responce)
       if(data.userId){
         this.openCity(2);
         this.ImgDiv2=true;
         this.headerBG3='CashBgColor';
       }
     });

    }
    reset(){
      for(let i=0;this.accordance.length>i;i++){
        this.accordance[i].show='';
        this.accordance[i].collapse='hide';
      }
    }
  ngOnInit() {
    var headers = new Headers({ 'Content-Type': 'application/json' });
   
    let params:any = {};
    params.aaa="aaa";
    this.doctorService.getProducts(params, headers).subscribe((data: any) => {
      this.getProduct = data.mainCategoryList
     
    })
    this.productGetArray();

    this.addAddressForm = new FormGroup({
      firstNameAdd: new FormControl(),
      lastNameAdd: new FormControl(),
      addressLine1Add: new FormControl(),
      addressLine2Add: new FormControl(),
      stateAdd: new FormControl(),
      cityAdd: new FormControl(),
      localityAdd: new FormControl(),
      zipAdd: new FormControl(),
      });
      
      this.editAddressForm = new FormGroup({
      firstNameEdit: new FormControl(),
      lastNameEdit: new FormControl(),
      addressLine1Edit: new FormControl(),
      addressLine2Edit: new FormControl(),
      stateEdit: new FormControl(),
      cityEdit: new FormControl(),
      localityEdit: new FormControl(),
      zipEdit: new FormControl(),
      });
   
    this.deliveryAddressForm = new FormGroup({
      'name': new FormControl(this.myDeliveryData.name, Validators.required),
      'address': new FormControl(this.myDeliveryData.address, Validators.required),
      'city': new FormControl(this.myDeliveryData.city, Validators.required),
      'state': new FormControl(this.myDeliveryData.state, Validators.required),
      'zipcode': new FormControl(this.myDeliveryData.zipcode, [Validators.required, Validators.minLength(6)]),

    });
  }
  get name() { return this.deliveryAddressForm.get('name'); }
  get address() { return this.deliveryAddressForm.get('address'); }
  get city() { return this.deliveryAddressForm.get('city'); }
  get state() { return this.deliveryAddressForm.get('state'); }
  get zipcode() { return this.deliveryAddressForm.get('zipcode'); }

  borderbg1="borderbg1";
  borderbg2="borderbg2";
  paymentactive(){
    this.borderbg1="CashBgColor";
    this.borderbg2="borderbg2";
  } 
  paymentactive2(){
    this.borderbg1="borderbg1";
    this.borderbg2="CashBgColor";
  }
  login(userName, password) {
    let key = "data_p";
    localStorage.setItem(key, JSON.stringify(userName));
    var param = { userName, password }
   

    var headers = new Headers({ 'Content-Type': 'application/json' });

    this.user.doctorloginservice(param, headers).subscribe((data: any) => {

      this.singleCheck = data;
      console.log("............"+JSON.stringify(this.singleCheck))


      if (this.singleCheck.STATUS === 'AUTH_ERROR') {
       // console.log("AUTH_ERROR ??");

        var param = { "authError": "authError" }
      //  console.log("authError = " + param);

        var headers = new Headers({ 'Content-Type': 'application/json' });

        this.user.AgainLoginSucess(param, headers).subscribe((data: any) => {

          this.loginResp = data;
          if (this.loginResp.STATUS === "INVALID_USERNAME_OR_PASSWORD") {
            this.responseCheck = true;
            this.router.navigate(['/patientloginpage']);

          }
        });
      } else if (this.singleCheck.STATUS === "ERROR") {
        var pp = { "error": "error" };
        this.user.AgainLoginSucess(pp, headers).subscribe((data: any) => {

          this.loginResp = data;

          if (this.loginResp.STATUS === "ERROR") {
            this.responseCheck = true;
            this.router.navigate(['/patientloginpage']);

          }
        });
      } else if (this.singleCheck.STATUS === "BLOCKED") {

        var bb = { "blocked": "blocked" }

        this.user.AgainLoginSucess(bb, headers).subscribe((data: any) => {
          this.loginResp = data;

          if (this.loginResp.STATUS === "ACCOUNT_LOCKED") {

            this.responseCheck = true;
            this.router.navigate(['/patientloginpage']);
          }
        });

      } else if (this.singleCheck.STATUS === "DEACTIVATE") {

        var param2 = { "deactivate": "deactivate" }
        var headers = new Headers({ 'Content-Type': 'application/json' });

        this.user.AgainLoginSucess(param2, headers).subscribe((data: any) => {

          this.loginResp = data;
          if (this.loginResp.STATUS === "PROFILE_DEACTIVATED") {
            this.responseCheck = true;
          }
        });
      } else if (this.singleCheck.STATUS === "USER_HOME") {
        var user = { userName: userName }
        //var regid = { user: "REGISTRATION_VALIDATION" }

        var headers = new Headers({ 'Content-Type': 'application/json' });
        this.user.PatientHome(user, headers).subscribe((data: any) => {

          this.loginResp101 = data;
         var key12="tipoftheday"
          localStorage.setItem(key12,JSON.stringify(this.loginResp101.WEEKLY_HEALTHTIP_NEW));
          let key11="responseData"
          localStorage.setItem(key11,JSON.stringify(this.loginResp101));
          let key = "userId"
          let key1 = "name"
          localStorage.setItem(key, this.loginResp101.userId)
          localStorage.setItem(key1, this.loginResp101.NAME)

         
       // console.log(this.loginResp101);
         // console.log(this.singleCheck)
          this.router.navigate(['/patientCart']);
        });
      }
    });
  }
  
  patienthistoryForm(){
    }

    @ViewChild('submitBill') form: ElementRef;
  submitBillForm() {
    this.form.nativeElement.submit();
  }
  
  payment() {
     let data1 = { userId: localStorage.getItem("userId") };
    this.doctorService.getBillFormVals(data1, this.headers).subscribe((data: any) => {
       
      this.respData = data;
      this.CART_ID = this.respData.CART_ID;
      this.billbeskPaymentGatewayUrl = this.respData.billbeskPaymentGatewayUrl;
      this.paymentRequestProcessParameter = this.respData.PAYMENT_REQUEST_PARAMETER;
      this.customerID = this.respData.customerID;
      this.TxnAmount = this.respData.TxnAmount;
      this.txtadditional1 = this.respData.txtadditional1;
      this.txtadditional2 = this.respData.txtadditional2;
      this.txtadditional3 = this.respData.txtadditional3;
      this.txtadditional4 = this.respData.txtadditional4;
      this.txtadditional5 = this.respData.txtadditional5;
      this.txtadditional6 = this.respData.txtadditional6;
      this.txtadditional7 = this.respData.txtadditional7;
      this.ru = this.respData.ru;
      console.log(data);
      //this.submitForm();
      

    });
    
  }
  // payment() {
  //   this.submitBillForm();
  //   // this.doc.zzz(aaa, this.headers).subscribe((data: any) => {

  //   // });
  // }
  qty:any=0;
  dropFlag:boolean=false
  getProduct:any[]=[];
  openDrop(){
    this.dropFlag=true
    this.products =[];
     this.qty=0
    //this.qty=1
  }
  products:any=[];
  productFlag:boolean=false;
dataC:any
  product(data){
    
    this.productFlag=true
   this.products =[];
   this.dataC = data
   for(let i=0;i<this.getProduct.length;i++){
    if(this.dataC.replace(/ /g,'').toLowerCase()==this.getProduct[i].name.replace(/ /g,'').toLowerCase()){
      this.products = this.getProduct[i].productsCategoryBean
    
    }
  }
   this.qty=0
    //this.qty=1
  }

check(){
 
  
}

pId:any;
productFlag1:boolean=false

  productSelect(product){
    this.productFlag1 =true
   
    // this.qty=0
    this.qty=1
    
  //  delete this.pId ;
    for(let i=0;i<this.products.length;i++){
      if(product.replace(/ /g,'').toLowerCase() == this.products[i].name.replace(/ /g,'').toLowerCase()){
        this.pId = this.products[i].id
        //  
      }
    }

  }
  
  cookieCartIdNew:any;
  
  counter:any;
  statusflag:boolean=false;
  addProduct(){
   // 
    let params={
      userId : this.userId,
      productId : this.pId,
      quantity : this.qty,
      cookieCartId : this.cookieCartId
  

    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    if(this.pId!=undefined && this.qty!=0){
      this.user.addToCart(params,headers).subscribe((data: any) => {
        let respData = data
        // delete this.pId;

        
    if(respData){
      // alert('hello')
      this.cookieCartId = respData.cookieCartId
      localStorage.setItem("cartId",respData.cookieCartId);
     // localStorage.setItem("cartCounter",tempcnt);
      //
      let jsonTosend:any={};
      jsonTosend.cookieCartId = this.cookieCartId;
      let headers = new Headers({ 'Content-Type': 'application/json' });
      this.user.getMyCartNew(jsonTosend, headers).subscribe((data: any) => {
      this.cart= data.productBeanList;
      console.log(this.cart)
      localStorage.setItem("cartCounter",data.productBeanList.length);
      localStorage.setItem("FcartCounter",data.productBeanList.length);
   console.log(this.cart)
  //  let data=0
   let to=0; 
   let one=0;
   let two=0
   for (let i = 0; i < this.cart.length; i++) {
    //  if(id==this.cart[i].productId.id){
      //  to = this.cart[i].productId.selling * qty;
      //  one = data + to
    //  }
    //  else{
     two = two+ this.cart[i].sellingPrice * this.cart[i].qty
    //  }
  
  }
  this.total1 = two;
      });
      // window.location.reload();
      let dta =   localStorage.getItem("userId");
      
      this.productGetArray()
      this.statusflag=true;
    
    }
    else{
      // alert('bye')
    }
      })
    }
 
  

  }

  productGetArray(){
    let jsonTosend:any={};
    jsonTosend.cookieCartId = this.cookieCartId;
    this.user.getMyCartNew(this.data11, this.headers).subscribe((data: any) => {
      this.cart= data.productBeanList;
    
      console.log(this.cart)
      
         console.log(this.cart)
        //  let data=0
         let to=0; 
         let one=0;
         let two=0
         for (let i = 0; i < this.cart.length; i++) {
          //  if(id==this.cart[i].productId.id){
            //  to = this.cart[i].productId.selling * qty;
            //  one = data + to
          //  }
          //  else{
           two = two+ this.cart[i].sellingPrice * this.cart[i].qty
          //  }
        
        }
        this.total1 = two;
            });
        //  this.cart = JSON.parse(localStorage.getItem("guestCart"));
         
      
  
  }


  cod(){
    let respData;
    let flaged:Boolean=false;
    let data11 = { patientUserId: localStorage.getItem("userId") };
    this.doctorService.patientCod(data11, this.headers).subscribe((data: any) => {
      respData = data;
      if (respData.STATUS == "SUCCESS") {
        swal("Success","Order has Successfully placed",'success');
        this.router.navigate(['/'])
  flaged = true
      }
  
  });
  if(flaged){
    this.router.navigate([''])
  }
  }

  checkbox = new FormGroup({		
       chkradio: new FormControl('', Validators.required),		
       // pHealthIssue: new FormControl('', Validators.required)		
     });


 
}

