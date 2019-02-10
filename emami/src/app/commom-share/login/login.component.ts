import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { DoctorService } from '../../doctor.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
      submitted = false;
  doctoLoginForm: FormGroup;
  data;
  headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private formBuilder: FormBuilder,
    private doc: DoctorService,
    private router: Router) { }

  ngOnInit() {
    this.doctoLoginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    }); 
  //   this.registerForm = this.formBuilder.group({
  //     email: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]]
  // });
  } 
  
  responseCheck: boolean;
  loginResp;
  loginDoctor(doctor) {
    debugger
    var params = { "userName": doctor.email, "password": doctor.password } 
    this.doc.doctorLoginProcessService(params, this.headers).subscribe((data: any) => {
      var resp = data;
      console.log("===>" + JSON.stringify(resp));
      if(resp.STATUS === "AUTH_ERROR"){
                 
        this.responseCheck = true;
        swal("Error","Please enter correct credentials",'error')
        this.router.navigate(['/doctorloginpage']);  
}
if(resp.STATUS === "LOGIN_PAGE"){
                 
  this.responseCheck = true;
  swal("Error","Please enter correct password",'error')
  this.router.navigate(['/doctorloginpage']);  
}

      if (resp.STATUS === "DOCTOR_HOME") {

        let key = "userName_Doc";
        localStorage.setItem(key, JSON.stringify(doctor.email));

        var today = { "flag": 0, "userName": doctor.email, "date": "" }
        
        this.doc.doctorLoginService(today, this.headers).subscribe((data: any) => {
          var resp1 = data;
          
          if (resp1) {
            if(resp1.STATUS == "SYS_PWD"){
              this.popup();
            }
            else if (resp1.A_LIST) {
              let key2 = "doctorUserId"
              localStorage.setItem(key2, JSON.stringify(resp1.A_LIST[0].drid));
              let key3 = "patientUserId"
              localStorage.setItem(key3, JSON.stringify(resp1.A_LIST[0].patientId));
              let key = "numberOfTodayAppointments"
              localStorage.setItem(key, JSON.stringify(resp1.numberOfTodayAppointments))
              let key1 = "DrName"
              localStorage.setItem(key1, JSON.stringify(resp1.drName))
              localStorage.setItem("isDoctorLogin", "true");
              this.router.navigate(['doctor_landingpage']);
            } else if(resp1.STATUS == "NO_RECORD"){
              let key2 = "doctorUserId"
              let key3 = "patientUserId"
              let key = "numberOfTodayAppointments"
              localStorage.setItem(key, JSON.stringify(resp1.numberOfTodayAppointments))
              let key1 = "DrName"
              localStorage.setItem(key1, JSON.stringify(resp1.drName))
              localStorage.setItem("isDoctorLogin", "true");
              this.router.navigate(['doctor_landingpage']);
            }
            else{
              let key2 = "doctorUserId"
              localStorage.setItem(key2, JSON.stringify(resp1.drid));
              let key3 = "patientUserId"
              localStorage.setItem(key3, JSON.stringify(resp1.patientId));
              let key = "numberOfTodayAppointments"
              localStorage.setItem(key, JSON.stringify(resp1.numberOfTodayAppointments))
              let key1 = "DrName"
              localStorage.setItem(key1, JSON.stringify(resp1.drName))
              localStorage.setItem("isDoctorLogin", "true");
              this.router.navigate(['doctor_landingpage']);
            }
            
            
           
          }

          this.data = JSON.parse(localStorage.getItem("doc_Data"));
          let key = "today";
          localStorage.setItem(key, JSON.stringify(resp1));
        });

      }
    });
  }

  forgetPassword() {
    this.router.navigate(['forgotpasswordpage_Doc']);
  }

  modal = "modal";
  openmodal() {
    this.modal = 'show';
  }

  closemodal() {
    this.modal = 'modal';
  }


  custom = "modal";
  popup() {
    this.custom = "show";

  }
  close() {
    this.custom = "modal";

  }


  custom2 = "modal";
  popup2() {
    this.custom2 = "show";
    this.custom = "false";
  }
  close2() {
    this.custom2 = "modal";
    this.custom = "false";
  }



  custom3 = "modal";
  popup3() {
    this.custom3 = "show";
    this.custom2 = "false";
    this.custom = "false";
  }
  close3() {
    this.custom3 = "modal";
    this.custom2 = "false";
    this.custom = "false";
  }
  sendResetPassSysData(newPassword,confirmPassword){
    let dts:any = {};

    dts.newPassword = newPassword;
    dts.confirmPassword = confirmPassword;
    dts.userName = JSON.parse(localStorage.getItem("userName_Doc"));
    
    this.doc.verifyResetPassword(dts, this.headers).subscribe((data: any) => {
      let resp = data;
      if(resp.STATUS == "SUCCESS"){
        swal("Success", "Password Successfuly Changed", 'success');
        this.close();
      }
      if(resp.STATUS == "ERROR"){
        swal("Error", "Oooops !! Something went wrong!", 'error');
        this.close();
      }
    });
  } 



}
