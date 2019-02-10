import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService, SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider } from "angular-6-social-login";


@Component({
  selector: 'app-otpscreen',
  templateUrl: './otpscreen.component.html',
  styleUrls: ['./otpscreen.component.css']
})
export class OtpscreenComponent implements OnInit {
  RespCheck;
  userName;

  show = true;
  show2 = false;
  loginForm: FormGroup;
  signUpForm: FormGroup;
  data;
  email: string;
  password: string;
  singleCheck;
  loginResp;
  loginResp101;
  role: number;
  responseCheck: boolean;
  username: string;
  user_role: string;
  usermobile;

  

  constructor(private http: HttpClient,
    private router: Router,
    private user: UserService,
    private act: ActivatedRoute,
    private socialAuthService: AuthService,
    private fb: FormBuilder) {
      this.userName =JSON.parse(localStorage.getItem("userMobile"));
      //alert(" userMobile " +this.userName)

     }



  //Social LogIn
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "linkedin") {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData:any) => {

        let request={
          "emailId":userData.email,
          "firstName":userData.name.split(" ")[0],
          "lastName":userData.name.split(" ")[1],
          "profileImgUrl":userData.image
        }
        console.log(request)

        var headers = new Headers({ 'Content-Type': 'application/json' });
        this.user.socialLogin(request, headers).subscribe((data: any) => {
          if(data.STATUS)this.signin(userData.email)
          else swal("Error","Something unexpected Happen",'error');
        });
      }
    );
  }
  signin(userName){
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
     // this.router.navigate(['/PatientDashboard']);
     this.router.navigate(['/patient-dashboard/patient-dashbord-details']);
       
    });
  }
   

  brandFont: any; 
defaultFont: any;

  ngOnInit() {
    this.defaultFont = this.fontChoices[0];
    this.brandFont = Object.assign(this.defaultFont.label);
  }



  patientRegister = new FormGroup({
    otp: new FormControl('',Validators.required),
    termsandcondition: new FormControl('', Validators.required),
    // pHealthIssue: new FormControl('', Validators.required)
   });

  Changediv() {
    this.show = false;
    this.show2 = true;
  }

  Changediv2() {
    this.show = true;
    this.show2 = false;
  }

  sendOPT(otp) {
    //console.log(otp)
    var requestData2 = { userName: this.userName};
    var headers = new Headers({ 'Content-Type': 'application/json' });
    this.user.resendOTP(requestData2, headers).subscribe((data: any) => {
      this.RespCheck = data;

      if (this.RespCheck.STATUS === "SUCCESS") {
        swal("Success","An OTP has been sent to you",'success')
        //console.log(this.RespCheck);
      }
      
    })
  }
  
  proceedToLogin(otp,hIssue) {
    var requestData = { mobileVerificationCode: otp, userName: this.userName, primaryHealthIssue: hIssue };
    var headers = new Headers({ 'Content-Type': 'application/json' });
    this.user.sendOTP_Process(requestData, headers).subscribe((data: any) => {
      this.RespCheck = data;
      
      if (this.RespCheck.STATUS === "VERIFICATION-SUCCESS") {
        let uName=localStorage.getItem("userName");
        var user = { userName: uName }
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

          this.router.navigate(['/PatientDashboard']);
        });
        //this.router.navigate(['patientloginpage']);
        //console.log(this.RespCheck);
      }else{
        swal("Error","Please enter correct OTP",'error')
      }
    });
  }
 

  login(userName, password) {
    localStorage.clear();
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

         
      
          this.router.navigate(['/patient-dashboard/patient-dashbord-details']);
        });
      }
    });
  }


  nrSelect = 47;

  fontChoices = [
    {
      label: 'Trebuchet',
      value: "'Trebuchet MS', 'Helvetica Neue', Arial, sans-serif"
    },
    {
      label: 'Georgia',
      value: 'Georgia, times, serif'
    },
    {
      label: 'Arial',
      value: 'Arial, Black, serif'
    }
  ];

  



  
    modal="modal";
    openmodal(){
        this.modal = 'show';
      }
    
      closemodal(){
        this.modal = 'modal'; 
      }

    }