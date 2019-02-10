import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {

  constructor() { }
  Gender="Gender*";
  Primary_Health_Issue="Primary Health Issue*";
  State="State*";
  City="City*";
  Locality="Locality*";

  addMoreData:any=[];
  submitCount:number=0;
    myDeliveryAddress(deliveryAddressForm){
      
  
      if(deliveryAddressForm.firstName!="")
      {
     this.submitCount++;
      }
      if(deliveryAddressForm.lastName!="")
      {
     this.submitCount++;
      }
      if(deliveryAddressForm.gender!="")
      {
     this.submitCount++;
      }
      if(deliveryAddressForm.dateOfBirth!="")
      {
     this.submitCount++;
      }
      if(deliveryAddressForm.mobileNumber!="")
      {
     this.submitCount++;
      }
      if(deliveryAddressForm.healthIssue!="")
      {
     this.submitCount++;
      }
      if(deliveryAddressForm.address!="")
      {
     this.submitCount++;
      }
      if(deliveryAddressForm.state!="")
      {
     this.submitCount++;
      }
      if(deliveryAddressForm.city!="")
      {
     this.submitCount++;
      }
      if(deliveryAddressForm.locality!="")
      {
     this.submitCount++;
      }
      
      if(deliveryAddressForm.zipcode!=null)
      {
     this.submitCount++;
      }
      if(this.submitCount==10)
      {
       
        this.addMoreData.push({});
       this.submitCount=0;
      }
      else
      {
        alert("Please, You Must Fill All The Form To Registration");
        this.submitCount=0;
      }
  
    }
  
    deliveryAddressForm:FormGroup;
    myDeliveryData={firstName:'',lastName:'',gender:'',dateOfBirth:'',mobileNumber:'',healthIssue:'',address:'',state:'',city:'',locality:'',zipcode:''};
  
    ngOnInit() {
  
      this.deliveryAddressForm = new FormGroup({
        'firstName': new FormControl(this. myDeliveryData.firstName,Validators.required),
        'lastName': new FormControl(this.myDeliveryData.lastName,Validators.required),
        'gender': new FormControl(this. myDeliveryData.gender, Validators.required),
        'dateOfBirth': new FormControl(this. myDeliveryData.dateOfBirth, Validators.required),
        'mobileNumber': new FormControl(this. myDeliveryData.mobileNumber, Validators.required),
        'healthIssue': new FormControl(this. myDeliveryData.healthIssue, Validators.required),
        'address': new FormControl(this. myDeliveryData.address, Validators.required),
        'state': new FormControl(this. myDeliveryData.state, Validators.required),
        'city': new FormControl(this. myDeliveryData.city, Validators.required),
        'locality': new FormControl(this. myDeliveryData.locality, Validators.required),
        'zipcode': new FormControl(this. myDeliveryData.zipcode, [Validators.required, Validators.minLength(6)]),
      });
    }
    get firstName() { return this.deliveryAddressForm.get('firstName'); }
    get lastName() { return this.deliveryAddressForm.get('lastName'); }
    get gender() { return this.deliveryAddressForm.get('gender'); }
    get dateOfBirth() { return this.deliveryAddressForm.get('dateOfBirth'); }
    get mobileNumber() { return this.deliveryAddressForm.get('mobileNumber'); }
    get healthIssue() { return this.deliveryAddressForm.get('healthIssue'); }
    get address() { return this.deliveryAddressForm.get('address'); }
    get state() { return this.deliveryAddressForm.get('state'); }
    get city() { return this.deliveryAddressForm.get('city'); }
    get locality() { return this.deliveryAddressForm.get('locality'); }
    get zipcode() { return this.deliveryAddressForm.get('zipcode'); }
  }
  
  