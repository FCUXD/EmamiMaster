import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-patient-forgetpassword',
  templateUrl: './patient-forgetpassword.component.html',
  styleUrls: ['./patient-forgetpassword.component.css']
})
export class PatientForgetpasswordComponent implements OnInit {
  forgetPasswordForm: FormGroup;
  username;
  dob;
  password;
  data_P;
  data_D;
  serviceData;
  newData;
  latestData;
  signupvalidationmessage:any;
  headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private formBuilder: FormBuilder,
    private user: UserService,
    private router: Router) { }

  ngOnInit() {

    this.forgetPasswordForm = new FormGroup({
      number: new FormControl(null, [Validators.required])
    });

  }
  custom="modal";
  popup(){
    this.custom="show";
  }
  close(){
    this.custom="modal";
  } 
  forgetPass(user) { 

    var num = user.number.toString().length;
    if(num!=10){ 
      this.custom="show";
    //  this.signupvalidationmessage=' Please Enter 10 digits mobile Number.' 
     
      return false;
    }
    this.data_P = {
      "userName": user.number,
      "userRoleFmethod": "P4447821283"
    }

var key = user.number; 

    localStorage.setItem('forReset', key)

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
                      let key ="userMobile"
                     localStorage.setItem(key,this.username)
                 swal('Success',"OTP has been sent to your registered mobile number",'success')    
                // alert(this.username + 'Your otp has been sent to your registered mobile number');
                this.router.navigate(['resetpassword']);
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