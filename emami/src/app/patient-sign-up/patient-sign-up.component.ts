import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-sign-up',
  templateUrl: './patient-sign-up.component.html',
  styleUrls: ['./patient-sign-up.component.css']
})
export class PatientSignUpComponent implements OnInit {
  addMoreData:any=[];
  submitCount:number=0;
 
  constructor() { }

  myDeliveryAddress(deliveryAddressForm){
      if(deliveryAddressForm.name!="")
      {
     this.submitCount++;
      }
      if(deliveryAddressForm.email!="")
      {
     this.submitCount++;
      }
      if(deliveryAddressForm.password!="")
      {
     this.submitCount++;
      }
     
     
      if(this.submitCount==3)
      {
       this.addMoreData.push({});
       this.submitCount=0;
       alert("Successfully Sign Up");
      }
      else
      {
        alert("Please, You Must Fill All The Form To Sign Up");
        this.submitCount=0;
      }
  
    }
  
    deliveryAddressForm:FormGroup;
    myDeliveryData={name:'', email:'',password:''};
  
    ngOnInit() {
  
      this.deliveryAddressForm = new FormGroup({
        'name': new FormControl(this. myDeliveryData.name,Validators.required),
        'email': new FormControl(this. myDeliveryData.email,Validators.required),
        'password': new FormControl(this.myDeliveryData.password,Validators.required),
       });
    }
    get name() { return this.deliveryAddressForm.get('name'); }
    get email() { return this.deliveryAddressForm.get('email'); }
    get password() { return this.deliveryAddressForm.get('password'); }
   }
  
  