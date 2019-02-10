import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
 
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../user.service';
import { Alert } from 'selenium-webdriver';
import { DoctorService } from '../../doctor.service';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {
  resetPasswordForm: FormGroup;
  otp: string;
  new_pass: string;
  confirm_pass: string;
  data: any;

  headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private user: UserService,
    private act: ActivatedRoute,
    private doctor : DoctorService) { }

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      otp: [null, [Validators.required, Validators.email]],
      new_pass: [null, Validators.required],
      confirm_pass: [null, Validators.required]
    });
  }
  resetPassword(user) {

    var username = (localStorage.getItem("userMobile"));
    //alert(username);
    var password = user.new_pass;
    var c_password = user.confirm_pass;
    var dob = '1/1/1030';
    var otp = user.otp;
    var param = {
      "recoverCode": otp,
      "dateOfBirth": dob,
      "userName": username,
      "newPassword": password,
      "confirmPassword": c_password
    }
    console.log(param);
    this.doctor.resetPasswordService_Doc(param, this.headers).subscribe((data: any) => {
      console.log(data);
      this.data = data;
      if (this.data.STATUS== "REDIRECT_TO_LOGIN_SUCCESS") {
        alert('Your password has been changed successfully');
        this.router.navigateByUrl('/patientloginpage');
      } else {
        alert('Invalid User');
    //    this.router.navigateByUrl('/doctorloginpage');
      }
    });
  }
 
}