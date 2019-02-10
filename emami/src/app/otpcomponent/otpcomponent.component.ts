import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-otpcomponent',
  templateUrl: './otpcomponent.component.html',
  styleUrls: ['./otpcomponent.component.css']
})
export class OTPComponentComponent implements OnInit {
  RespCheck;
  userName;
  constructor(private http: HttpClient,
    private router: Router,
    private user: UserService,
    private act: ActivatedRoute) {
      this.userName =(localStorage.getItem("userMobile"));
      alert(" userMobile " +this.userName)

     }

  ngOnInit() {
  }
  sendOPT(otp) {
    console.log(otp)
  }

  proceedToLogin(otp) {
    var json = ({ "emailVerificationCode": null, "mobileVerificationCode": otp, "userName": this.userName });
    var headers = new Headers({ 'Content-Type': 'application/json' });
    this.user.sendOTP_Process(json, headers).subscribe((data: any) => {
      this.RespCheck = data;
      
      if (this.RespCheck.STATUS === "VERIFICATION-SUCCESS") {
        this.router.navigate(['patientloginpage']);
        console.log(this.RespCheck);
      }else{
        alert("Resend OTP");
      }
    });
  }
}
