import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { DoctorService } from '../doctor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword-doc',
  templateUrl: './forgetpassword-doc.component.html',
  styleUrls: ['./forgetpassword-doc.component.css']
})
export class ForgetpasswordDocComponent implements OnInit {
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
    private user: DoctorService,
    private router: Router) { }

  ngOnInit() {
    this.forgetPasswordForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  forgetPass(user) {
    
    localStorage.setItem("userMobile",user.email)
    debugger
if(user.email==null){
  alert( 'Please enter registered Email Id');
              
}
    this.data_D = {
      "userName": user.email,
      "userRoleFmethod": "D4447821283"
    }
    this.user.forgetPasswordService_Doc(this.data_D, this.headers).subscribe((data: any) => {

      this.serviceData = data;
      this.username = this.data_D.userName;
     
      if (this.data_D.STATUS = "FORGOT_PASSWORD_PROCESS") {
        var nullData = { "userName": user.email }
        this.user.forgetPasswordProcessNewService_Doc(nullData, this.headers).subscribe((data: any) => {

          this.newData = data;
          console.log("2" + this.newData);

          

          if (this.newData.STATUS == "FORGOT_PASSWORD_RESET_PROCESS_TRUE") {

            var data_status = {
              "isOtpSent": "isOtpSent",
              "userName": user.email
            };
            
            this.user.forgetPasswordResetProcessNewService_Doc(data_status, this.headers).subscribe((data: any) => {
              this.latestData = data;
              console.log("3" + this.latestData);
              if (this.latestData) {

                alert(this.username +' Your otp has been sent to your registered mobile number');
               localStorage.setItem("userMobile",this.username);
               var username = (localStorage.getItem("userMobile"));
    
              // alert(username);
                this.router.navigate(['/resetpassworddoc']);
               // this.router.navigate(['/resetpassword', {data:'abhijeetm'} ]);
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
