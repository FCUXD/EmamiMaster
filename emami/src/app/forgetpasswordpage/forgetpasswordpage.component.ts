import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-forgetpasswordpage',
  templateUrl: './forgetpasswordpage.component.html',
  styleUrls: ['./forgetpasswordpage.component.css']
})
export class ForgetpasswordpageComponent implements OnInit {
  forgetPasswordForm: FormGroup;
  username;
  dob;
  password;
  data_P;
  data_D;
  serviceData;
  newData;
  latestData;

  headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private formBuilder: FormBuilder,
    private user: UserService,
    private router: Router) { }

  ngOnInit() {
    this.forgetPasswordForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  forgetPass(user) {
    debugger
    this.data_P = {
      "userName": user.email,
      "userRoleFmethod": "P4447821283"
    }

    
    this.user.forgetPasswordService(this.data_P, this.headers).subscribe((data: any) => {

      this.serviceData = data;
      this.username = this.data_P.userName;
      if (this.data_P.STATUS = "FORGOT_PASSWORD_PROCESS") {
        var nullData = { "userName": user.email }
        this.user.forgetPasswordProcessNewService(nullData, this.headers).subscribe((data: any) => {

          this.newData = data;
          console.log("2" + this.newData);
          if (this.newData.STATUS = "FORGOT_PASSWORD_RESET_PROCESS_TRUE") {

            var data_status = {
              "isOtpSent": "isOtpSent",
              "userName": user.email
            };

            this.user.forgetPasswordResetProcessNewService(data_status, this.headers).subscribe((data: any) => {
              this.latestData = data;
              console.log("3" + this.latestData);
              if (this.latestData) {

                alert(this.username + 'Your otp has been sent to your registered mobile number');
                this.router.navigate(['resetpasswordpage', this.username]);
                // else {
                //   alert('Invalid User');
                //   this.router.navigateByUrl('/forgetpasswordpage');
                // }
              }
            });
          }
        });
      }
    });
  }
}