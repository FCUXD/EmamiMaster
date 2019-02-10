import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-patient-order-summary-link',
  templateUrl: './patient-order-summary-link.component.html'
})
export class PatientOrderSummaryLinkComponent implements OnInit {

  loginResp101;
  singleCheck;
  loginResp;
  responseCheck: boolean;
  
 
  constructor(private http: HttpClient, private router: Router, private user: UserService,
     private act: ActivatedRoute,private routeNav:ActivatedRoute) {

      }

 login(userId) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var user = { userId: userId }

      this.user.loginViaUserID(user, headers).subscribe((data: any) => {

          this.loginResp101 = data;
          var key12="tipoftheday"
          localStorage.setItem(key12,JSON.stringify(this.loginResp101.WEEKLY_HEALTHTIP_NEW));
          let key11="responseData"
          localStorage.setItem(key11,JSON.stringify(this.loginResp101));
          let key = "userId"
          let key1 = "name"
          localStorage.setItem(key, this.loginResp101.userId)
          localStorage.setItem(key1, this.loginResp101.NAME)
          let products= "SUGGESTED_PRODUCTS"
          localStorage.setItem(products, JSON.stringify(this.loginResp101.SUGGESTED_PRODUCTS))
          localStorage.setItem("isDoctorLogin","false");
         
       // console.log(this.loginResp101);
         // console.log(this.singleCheck)
          this.router.navigate(['/patientCart']);
        });
      
  }
 

  ngOnInit() {
    let queryParam = this.routeNav.queryParams.subscribe(params => {
      let userId =params["userId"];
      this.login(userId);
      
    });
    
  }

}
