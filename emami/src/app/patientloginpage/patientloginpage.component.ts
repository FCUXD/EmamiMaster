import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { AuthService, SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider } from "angular-6-social-login";
import swal from 'sweetalert2';
import { SharingDataService } from '../sharing-data.service';
import { RenderDebugInfo } from '@angular/core/src/render/api';
import { Directive } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-patientloginpage',
  templateUrl: './patientloginpage.component.html',
  styleUrls: ['./patientloginpage.component.css']
})
export class PatientloginpageComponent implements OnInit {
  emailCtrl: FormControl;
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
  whichNav: any = false;
  navbar: boolean = false;
  flag: boolean = false;
  cartCounter: any; 
  public daibetiesRoute:string = '../diabetes';
  public pilesRoute :string ="../Piles";
  public hypertensionRoute:string='../hypertension';
  public constipationRoute:string='../Constipation'
  textInput1:any=""
  mobNum(num){
    swal('Warning','You have entered more than 10 numbers','warning')
  }

  toggle() {
      this.navbar = !this.navbar;
  }

  isHovering = false;

  mouseHovering() {
      this.isHovering = true;
      this.isHovering2 = false;
      this.isHovering3 = false;
  }
  mouseLeft() {
      this.isHovering = false;
      this.isHovering2 = false;
      this.isHovering3 = false;
  }

  isHovering2 = false;
  mouseHovering2() {
      this.isHovering2 = true;
      this.isHovering = false;
      this.isHovering3 = false;

  }
  mouseLeft2() {
      this.isHovering2 = false;
      this.isHovering = false;
      this.isHovering3 = false;

  }

  isHovering3 = false;
  mouseHovering3() {
      this.isHovering3 = true;
      this.isHovering = false;
      this.isHovering2 = false;

  }
  mouseLeft3() {
      this.isHovering3 = false;
      this.isHovering = false;
      this.isHovering2 = false;

  }

  constructor(private socialAuthService: AuthService,
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private user: UserService,
    private dataStorageService:DataStorageService,
    private act: ActivatedRoute,
    private ds: SharingDataService) { }
    animateCart: any;

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
      this.ds.UID = this.loginResp101.userId
      localStorage.setItem(key, this.loginResp101.userId)
      localStorage.setItem(key1, this.loginResp101.NAME)
    
     
   // console.log(this.loginResp101);
     // console.log(this.singleCheck)
      this.router.navigate(['/PatientDashboard']);
    });
  }

trial(index){
  this.whichNav = (3==index)
}
  ngOnInit() {
   this.trial(3);
    let whichNavClicked = this.ds.getWhichNavClicked();
    if (whichNavClicked == -1) {
        for (let i = 0; i < this.whichNav.length; i++) {
            this.whichNav[i] = false;

        }
    }
    else {
        for (let i = 0; i < this.whichNav.length; i++) {
            this.whichNav[i] = false;

        }
        this.whichNav[whichNavClicked] = true;
    }

    localStorage.removeItem("cartCounter");
    setInterval(() => {
        this.cartCounter = localStorage.getItem("cartCounter");
        this.animateCart = localStorage.getItem("animateCart");
        //localStorage.setItem("animateCart", "false");
    }, 500);
   }

  patientRegister = new FormGroup({
    firstName: new FormControl('', Validators.required),
   // termsandcondition: new FormControl('', Validators.required),
    emailId: new FormControl(),
    password: new FormControl('', Validators.required),
    mobileNumber: new FormControl('', [Validators.required,Validators.maxLength(10)])
   

  });

  Changediv() {
    this.show = false;
    this.show2 = true;
  }

  Changediv2() {
    this.show = true;
    this.show2 = false;
  } 
  custom="modal";
  popup(){
    this.custom="show";
  }
  close(){
    this.custom="modal";
  } 

  
  signupvalidationmessage:any;

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

  
  login(userName, password) {
    
    localStorage.clear();
    let key = "data_p";
    localStorage.setItem(key, JSON.stringify(userName));  

    if(userName.toString().length !=10){ 
      this.custom="show";
     this.signupvalidationmessage=' Please Enter 10 digits mobile Number.' 
     
      return false;
    }
  
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

        var headers = new Headers({ 'Content-Type': 'application/json' });
        this.user.PatientHome(user, headers).subscribe((data: any) => {

          this.loginResp101 = data;
          var key12="tipoftheday"
          localStorage.setItem(key12,JSON.stringify(this.loginResp101.WEEKLY_HEALTHTIP_NEW));
          let key11="responseData"
          localStorage.setItem(key11,JSON.stringify(this.loginResp101));
          let key = "userId"
          let key1 = "name"
          this.ds.UID = this.loginResp101.userId
          localStorage.setItem(key, this.loginResp101.userId)
          localStorage.setItem(key1, this.loginResp101.NAME)
          let products= "SUGGESTED_PRODUCTS"
          localStorage.setItem(products, JSON.stringify(this.loginResp101.SUGGESTED_PRODUCTS))
          localStorage.setItem("isDoctorLogin","false");
          this.dataStorageService.setUserId(this.loginResp101.userId)
       // console.log(this.loginResp101);
         // console.log(this.singleCheck)
          //this.router.navigate(['/PatientDashboard']);
          this.router.navigate(['/patient-dashboard/patient-dashbord-details']);
        });
      }
    });
  }
  
  modal="modal";
  openmodal(){
      this.modal = 'show';
    }
  
    closemodal(){
      this.modal = 'modal'; 
    }
    clickfun(index:number) {
   
      this.ds.setWhichNavClicked(index);

    
     
      this.whichNav = (3==index)
      
      this.isHovering3 = false;
      this.isHovering = false;
      this.isHovering2 = false;
  } 
 
}
@Directive({ selector: '[capsLock]' })
export class TrackCapsDirective {
  @Output('capsLock') capsLock = new EventEmitter<Boolean>();

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    this.capsLock.emit(event.getModifierState && event.getModifierState('CapsLock'));
  }
  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    this.capsLock.emit(event.getModifierState && event.getModifierState('CapsLock'));
  }  

  
 
}
