import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  otp: string;
  new_pass: string;
  confirm_pass: string;
  data: any;

  headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private user: UserService,
    private act: ActivatedRoute) { }

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      otp: [null, [Validators.required, Validators.email]],
      new_pass: [null, Validators.required],
      confirm_pass: [null, Validators.required]
    });
  }
  resetPassword(user) {
    var username = this.act.snapshot.paramMap.get("params");
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
    this.user.resetPasswordService(param, this.headers).subscribe((data: any) => {
      console.log(data);
      this.data = data;
      if (this.data.STATUS== "REDIRECT_TO_LOGIN_SUCCESS") {
        alert('Your password have been Successfully changed');
        this.router.navigateByUrl('/patientloginpage');
      } else {
        alert('Invalid User');
        this.router.navigateByUrl('/patientloginpage');
      }
    });
  }
}