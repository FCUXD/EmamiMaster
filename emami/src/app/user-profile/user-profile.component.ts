import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2';
import { UserService } from 'src/app/user.service';
import swal from 'sweetalert2';
import { async } from 'q';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  selecteddate: any;

  userProfileForm = {
    Namefirst: null,
    gender: null,
    dob: new Date(),
    email: null,
    nameLast: null,
    mobile: null,
    alternatemobile: null,
    pHealthIssue: null,
    loginCredentials: null,
    creatUserName: null,
    createPassword: null,
    confirPassword: null,
    address1: null,
    address2: null,
    states: null,
    citY: null,
    locality: null,
    zip: null,
    Enterheight: null,
    Enterweight: null,
    selecteBloodGroup: null,
    selecteProfession: null,
    agree:null,
    pHealthIssueOther:null,
    imageUpload:null
  }

  userProfileProceed() {
    
    if (!this.userProfileForm.Namefirst) { Swal("Please Enter First Name") } else
      if (!this.userProfileForm.nameLast) { Swal("Please Enter Last name") } else
        if (!this.userProfileForm.dob) { Swal("Please Enter Date Of Birth") } else
          if (!this.userProfileForm.gender) { Swal("Please Enter Gender") } else
            if (!this.userProfileForm.email) { Swal("Please Enter Email") } else
              if (!this.userProfileForm.mobile) { Swal("Please Enter Mobile Number") } else
                if (!this.userProfileForm.pHealthIssue) { Swal("Please Enter Health Issue") } else
                  // if (!this.userProfileForm.loginCredentials) { alert("login Credentials") } else
                  //   if (!this.userProfileForm.creatUserName) { alert("creat UserName") } else
                  //     if (!this.userProfileForm.createPassword) { alert("create Password") } else
                  if (!this.userProfileForm.address1) { Swal("Please Enter Address1") } else
                    if (!this.userProfileForm.states) { Swal("Please Enter State") } else
                      if (!this.userProfileForm.citY) { Swal("Please Enter City") } else
                        if (!this.userProfileForm.locality) { Swal("Please Enter Locality") } else
                          if (!this.userProfileForm.zip) { Swal("Please Enter Zip") } else
                          if (!this.userProfileForm.agree) { Swal("Please Accept the Terms & Condition") } else
                           { 
                          
                            let json: any={};

                            json.uId = localStorage.getItem("userId")
                            //json.uId = "3421"; //localStorage.getItem("");
                            json.addrId = this.addrId;
                            json.contactId = this.contactId;
                            json.userLoginProfileId = this.userLoginProfileId;
                            json.maritialStatus = "";
                            json.profileImgUrl = "";
                            json.gpId = this.gpId;
                           
                            
                            json.firstName = this.userProfileForm.Namefirst;
                            json.lastName = this.userProfileForm.nameLast;
                            json.mobileNumber = this.userProfileForm.mobile;
                            json.alternateNumber = this.userProfileForm.alternatemobile;
                            json.emailId = this.userProfileForm.email;
                            json.gender = this.userProfileForm.gender;
                            
                        
                            json.dateOfBirth = this.userProfileForm.dob;
                            json.zipCode = this.userProfileForm.zip;
                            json.addressLine1 = this.userProfileForm.address1;
                            json.addressLine2 = this.userProfileForm.address2;
                            json.city = this.userProfileForm.citY;
                            json.location = this.userProfileForm.locality;
                            json.state = this.userProfileForm.states;
                            json.primaryHealthIssue = this.userProfileForm.pHealthIssue;
                            json.dateOfBirth = this.getFormatedDate(this.userProfileForm.dob);

                            //json.otherHealthIssue = this.getFormatedDate(this.userProfileForm.pHealthIssueOther);
                        

                            json.profession = this.userProfileForm.selecteProfession;
                            json.weight = this.userProfileForm.Enterweight;
                            json.height = this.userProfileForm.Enterheight;
                            


                            // const fd = new FormData();
                            // fd.append('image', this.url);
                            // this.http.post('https://technohertz.co.in/emamiz/user/profile-img-upload-new', fd, {})



                            let headers = new Headers({ 'Content-Type': 'application/json' });
                            this.user.update_profilePatient_new(json, headers).subscribe((data1) => {
                                Swal("Success","Profile Update Successfully Done",'success')
                                this.router.navigate(['/PatientDashboard']);
                            });
                            console.log(this.userProfileForm);
                          

                           }
   
                          }


  // userProfileserviceRequest() {
  //   let request = { "userId": "3465" }

  //   this.restService.postRequest(this.user.update_profilePatient, request).subscribe(
  //     (data: any) => {
  //       if (data.status == "SUCCESS") {
  //         this.userProfileForm.Namefirst=data.data.fname;
  //         this.userProfileForm.nameLast=data.data.lname;
  //         this.userProfileForm.mobile=data.data.mobile;
  //         this.userProfileForm.email=data.data.email

  //       }
  //       console.log(data);
  //     },

  //   );

  // }

  getFormatedDate(date: Date): string {
    date = new Date(date);
    return "" + date.getFullYear() + "/" + date.getMonth() + "/" + date.getDay();
  }


  constructor(private router: Router, private user: UserService,
    private http: HttpClient) {


  }

  userdat;
  healthdropdown;
  genderdropdown;
  stateDropDownOptions;
  bloodGroupDropDownOptions;
  cityDropDownOptions;
  cityDropDownList;
  maritalStatusDropDownOptions;
  localityDropDownOptions;
  masterCityDropDown;
  masterLocalityDropDown;
 

  //ngOnInit
  addrId;
  userLoginProfileId;
  contactId;
  userName;
  unametype;
  dob;
  alternateNumber;
  gpId;
  primaryHealthIssue;
  height;
  weight;
  ngOnInit() {
    //this.userProfileserviceRequest();  
debugger
    var data:any = {};
    data.userId=localStorage.getItem("userId");

    var headers = new Headers({ 'Content-Type': 'application/json' });
    this.user.update_profilePatient(data, headers).subscribe((data1) => {
      this.userdat = data1;
      
      this.userProfileForm.Namefirst = this.userdat.fname;
      this.userProfileForm.nameLast = this.userdat.lname;
      this.userProfileForm.mobile = this.userdat.mobile;
      this.userProfileForm.email = this.userdat.email;
      this.userProfileForm.gender = this.userdat.gender;
      this.userProfileForm.zip = this.userdat.zipCode;
      this.userProfileForm.address1 = this.userdat.addressLine1;
      this.userProfileForm.address2 = this.userdat.addressLine2;
      this.userProfileForm.citY = this.userdat.city;
      this.userProfileForm.locality = this.userdat.locality;
      this.userProfileForm.states = this.userdat.state;
      this.userProfileForm.pHealthIssue = this.userdat.primaryHealthIssue;
      this.userProfileForm.Enterheight = this.userdat.height;
      this.userProfileForm.Enterweight = this.userdat.weight;

      
      this.healthdropdown = this.userdat.primaryHealthDownOptions;
      this.genderdropdown = this.userdat.genderDropDownOptions;
      this.stateDropDownOptions = this.userdat.stateDropDownOptions;
      this.bloodGroupDropDownOptions = this.userdat.bloodGroupDropDownOptions;
      this.cityDropDownOptions = this.userdat.cityDropDownOptions;
      this.cityDropDownList = this.userdat.cityDropDownList;
      this.masterCityDropDown=this.userdat.cityDropDownList;
      this.maritalStatusDropDownOptions = this.userdat.maritalStatusDropDownOptions;
      this.localityDropDownOptions = this.userdat.localityDropDownOptions;
      this.masterLocalityDropDown=this.userdat.localityDropDownOptions;

      this.addrId = this.userdat.addressId;
      this.userLoginProfileId = this.userdat.userLoginProfileId;
      this.contactId = this.userdat.contactId;
      this.userName = this.userdat.userName;
      this.unametype = this.userdat.unametype;
      this.dob = this.userdat.dob;
      this.selecteddate=this.userdat.dob;
      this.alternateNumber = this.userdat.alternateNumber;
      this.gpId = this.userdat.gpId;
      
      console.log(data1);
    });

  }


  onvoted(thispassdate: any) {
    this.userProfileForm.dob=thispassdate;
    this.selecteddate = thispassdate

  }
  isOtherFlag:boolean = false;
  async isOther(otherVal){
  
    let a = otherVal.replace(/[0-9]/g, '');
    if(a == ": Other"){
      alert()
      const {value: healthIssue} = await swal({
        title: 'Specify Your Health Issue',
        input: 'text',
        inputPlaceholder: 'Health Issue'
      })
      if (healthIssue) {
        this.healthdropdown.unshift({storingValue:healthIssue})
        this.userProfileForm.pHealthIssue=healthIssue;
        Swal('Entered Health Issue: ' + healthIssue)
      }
        
    }else{
      this.isOtherFlag = false;
    }
  }
  //user profile form data
  userProfileData = [{
    primaryHealthIssue: [{ id: 1, issueName: 'Diabetes Care' },
    { id: 2, issueName: 'Digestive Care' },
    { id: 3, issueName: 'Heart Care' },
    { id: 4, issueName: 'Pain Relief Care' },
    { id: 5, issueName: 'Stress Care' },
    { id: 6, issueName: 'Women Health Care' },
    { id: 7, issueName: 'other' }]
  }];
  //logic to show hidden username text box
  toShow: boolean = false;
  showHiddenUsernameInput() {
    this.toShow = true;
  }

  //gender
  genderObj = [{
    name: "Gender",
    gId: 1
  },
  {
    name: "Male",
    gId: 2
  },
  {
    name: "Female",
    gId: 3
  },
  {
    name: "Others",
    gId: 4
  }];

  selectedGender: any = 1;// first by default selected

  //primaryHealth


  primaryHealthIssueObj = [{
    name: "Primary Health Issue",
    pHId: 1
  },
  {
    name: "Diabetes Care",
    pHId: 2
  },
  {
    name: "Heart Care",
    pHId: 3
  },
  {
    name: "Pain Relief Care",
    pHId: 4
  },
  {
    name: "Stress Care",
    pHId: 5
  },
  {
    name: "Women Health Care",
    pHId: 6
  }];

  selectedPrimHealthIssue: any = 1;// first by default selected


  //bloodGroup

  bloodGroupObj = [{
    name: "Blood Group",
    bgId: 1
  },
  {
    name: "A+",
    bgId: 2
  },
  {
    name: "B+",
    bgId: 3
  },
  {
    name: "AB+",
    bgId: 4
  },
  {
    name: "A-",
    bgId: 5
  },
  {
    name: "O-",
    bgId: 6
  },
  {
    name: "B-",
    bgId: 7
  },
  {
    name: "AB-",
    bgId: 8
  }];

  selectedBloodGroup: any = 1;// first by default selected

  //profession

  professionObj = [{
    name: "Profession",
    profId: 1
  },
  {
    name: "Doctor",
    profId: 2
  },
  {
    name: "Engineer",
    profId: 3
  },
  {
    name: "Teacher",
    profId: 4
  },
  {
    name: "Businessman",
    profId: 5
  },
  {
    name: "Other",
    profId: 6
  }
  ];

  selectedprofession: any = 1;// first by default selected

  //state

  stateObj = [{
    name: "State",
    stateId: 1
  },
  {
    name: "Delhi",
    stateId: 2
  },
  {
    name: "Kolkata",
    stateId: 3
  }];

  selectedState: any = 1;// first by default selected
  //city

  cityObj = [{
    name: "City",
    cityId: 1
  },
  {
    name: "Pune",
    cityId: 2
  },
  {
    name: "Kolkata",
    cityId: 3
  }];


  selectedCity: any = 1;// first by default selected

  //locality

  localityObj = [{
    name: "Locality",
    locId: 1
  },
  {
    name: "Pune",
    locId: 2
  },
  {
    name: "Kolkata",
    locId: 3
  }];

  selectedLocality: any = 1;// first by default selected


  url = '';
  oldImg = 0;


  onSelectFile(event){
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
    //console.log(event.target.result);
    this.oldImg = 1;
    this.url = reader.result.toString();
      }
    }

    getCity(states){
      this.cityDropDownList=[];
      let headers = new Headers({ 'Content-Type': 'application/json' });
      this.user.update_profilePatient_getCity({"state"  : states }, headers).subscribe((data1:any) => {
        this.cityDropDownList=data1.cityDropDownList;
        this.cityDropDownList.unshift({displayValue:"Select City"});
        this.userProfileForm.citY="Select City";
      });

    }

    getLocality(citY){
      debugger
      this.localityDropDownOptions=[];
      for(let item of this.masterLocalityDropDown){
        if(item.referenceValue==citY)
        this.localityDropDownOptions.push(item);
      }
    }


}
