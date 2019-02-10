import { Component, OnInit } from '@angular/core';
import { SliderModule } from 'angular-image-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService, SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider } from "angular-6-social-login";
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-ayurveda',
  templateUrl: './ayurveda.component.html',
  styleUrls: ['./ayurveda.component.css']
})
export class AyurvedaComponent implements OnInit {

  public showHeader:boolean=false;
  lat:number =17.655555;
  lng:number =73.45;
  // url="plant_banner.jpg"
  spinner=0;
  //tabs product cart
  recent_order:any[];
  keep_healthy:any[];
  address:any[];
  constructor(private socialAuthService: AuthService,
    private http: HttpClient,
    private router: Router,
    private user: UserService) {
this.recent_order=[
  {
  "img":"../../assets/images/chyavanprash.png","title":"Zandu Lalima",
  "info":"Lalima is a 100% Ayurvedic Blood &...",
  "offerprice":"175",
},
{
  "img":"../../assets/images/chyavanprash.png","title":"Zandu Lalima",
  "info":"Lalima is a 100% Ayurvedic Blood &...",
  "offerprice":"175",
}];

this.keep_healthy=[{
  "img":"../../assets/images/plant_banner.jpg","title":"Digestive Health",
  "info":"14 best and worst foods for your..."
},
{
  "img":"../../assets/images/plant_banner.jpg","title":"Digestive Health",
  "info":"14 best and worst foods for your..."
},
{
  "img":"../../assets/images/plant_banner.jpg","title":"Digestive Health",
  "info":"14 best and worst foods for your..."
}];

this.address=[{
  "digit":"01","km":"0.6 KM","name":"Dr. Rajeev Shukla","exp":"BAMS 15 Year of Exp",
  "add":" ABC clinic, Behind Ab Reoad,Baner, Pune 411007"
},
{
  "digit":"01","km":"0.6 KM","name":"Dr. Rajeev Shukla","exp":"BAMS 15 Year of Exp",
  "add":" ABC clinic, Behind Ab Reoad,Baner, Pune 411007"
}]
   }

   loginResp101;
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
       this.router.navigate(['/PatientDashboard']);
     });
   }


  down(index){
    
    if(this.spinner>0 ){
      
    this.spinner=this.spinner-1 
    }
    }
  changeable="defalt";
  hideDiv:boolean= false;
  hidebtn:boolean= true;
  toggle(){
    if(this.hideDiv==false)
    {
      this.hideDiv=true;
      this.hidebtn=false;
    }
  }
  modal="modal";
  addNotes(){
    this.modal = 'show';
  }

  closeAddNotes(){
    this.modal = 'modal'; 
  }

  ngOnInit() {
    this.showHeader = !this.router.url.includes('patient-dashboard');

  }
//tabs 
tabs=[
  {active:'active',tabcontent:'tabcontent'},
  {active:'',tabcontent:'hide'},
  {active:'',tabcontent:'hide'},
  {active:'',tabcontent:'hide'},
  {active:'',tabcontent:'hide'},
  {active:'',tabcontent:'hide'},
  {active:'',tabcontent:'hide'}
];

openCity(index){
  this.reset();  
  this.tabs[index].active='active';
  this.tabs[index].tabcontent='tabcontent';
  }

  reset(){
    for(let i=0;this.tabs.length>i;i++){
      this.tabs[i].active='';
      this.tabs[i].tabcontent='hide';
    }
}
defalt_height="defalt_height";
showaddd:boolean=false;
showadd(){
  this.showaddd=true;
  this.defalt_height="full_height";
}

nomodel="nomodel";
model(){
  this.nomodel="model";
}
closed(){
  this.nomodel="nomodel";
}  



}
