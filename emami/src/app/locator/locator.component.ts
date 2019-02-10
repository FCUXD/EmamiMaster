import { Component, OnInit,Input } from '@angular/core';
import { DataShareService } from '../service/data-share.service';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styleUrls: ['./locator.component.css']
})
export class LocatorComponent implements OnInit {

  @Input() isDoctor:boolean;
  @Input() doctorSearch:any;
  @Input() pharmaSearch:any;
  @Input() location:any;
  @Input() address_serch:any;

  @Input('master') masterName: string;
  lat:number =17.655555;
  lng:number =73.45;



  zoom=5;
  
  getlatlng(event,address){
  if(this.isDoctor) this.getlatlngDoctor(event,address);
  else this.getlatlngPharmacy(event,address);
  }//getlatlng

  
  handleChange(flag){
   this.isDoctor=flag;
  }

  getlatlngPharmacy(event,address){
    if (event.key === "Enter") {
      this.location=[];
      let request={
        "PharmacyPin":address
      }
      this.service.postRequest("https://test.zanducare.com/doctorsearch/PharmacySearch",request).subscribe(
        (data: any) => {
          if(data.status="SUCCESS"){
            console.log(data);
            for(let i=0;i<data.data.length;i++){
              this.getDistance("Pharmacy",i,data.data[i].PharmacyName+''+data.data[i].PharmacyAddress+''+data.data[i].PharmacyTownCityz,data.data[i].PharmacyName);//+' ('+data.data[i].PharmacyPin+')'
            }
            this.pharmaSearch=data.data
            console.log(this.pharmaSearch);
          }
        },
        error => 
        {
        console.log(error);
        }
      );
   }//if enter
  }

  getlatlngDoctor(event,address){
    if (event.key === "Enter") {
      this.location=[];
      let request={
        "DrPin":address
      }//http://localhost:8081/EMAMI_API/DoctorSearch
      this.service.postRequest("https://test.zanducare.com/DoctorPharmacySearch/DoctorSearch",request).subscribe(
        (data: any) => {//https://technohertz.co.in/DoctorPharmacySearch/DoctorSearch
          if(data.status="SUCCESS"){
            console.log(data);
            for(let i=0;i<data.data.length;i++){
              this.getDistance("Doctor",i,data.data[i].DrName+''+data.data[i].DrClinicAddress+''+data.data[i].DrTownCity,data.data[i].DrName);//+' ('+data.data[i].PharmacyPin+')'
            }
            this.doctorSearch=data.data
            console.log(this.doctorSearch);
          }
        },
        error => 
        {
        console.log(error);
        }
      );
   }//if enter
  }//getlatlngDoctor


  printOnMap(address){
    this.service.getGeoCode(address).subscribe(
      (data: any) => {
        console.log(data);
        this.lat=data.results[0].geometry.location.lat;
        this.lng=data.results[0].geometry.location.lng;
        //this.lat=this.my_lat;
        //this.lng=this.my_lon
        this.zoom=8;
      },
      error => 
      {
      console.log(error);
      }
    );
  } 
  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        this.my_lon=position.coords.latitude;
        this.my_lat=position.coords.longitude;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  } my_lon=18.5591328;  my_lat=74.7908332;
  getDistance(status,index,address,name) {
    //return 5;
    this.service.getGeoCode(address).subscribe(
      (data: any) => {
        try{
          this.location.push({
            lat:data.results[0].geometry.location.lat,
            lng:data.results[0].geometry.location.lng,
            name:name
          });
          if(status==="Pharmacy")
            this.pharmaSearch[index].distance=parseInt(this.calculate(data.results[0].geometry.location.lat,data.results[0].geometry.location.lng)+"");
          else
            this.doctorSearch[index].distance=parseInt(this.calculate(data.results[0].geometry.location.lat,data.results[0].geometry.location.lng)+"");
        }catch(e){
          if(status==="Pharmacy")
            this.pharmaSearch[index].distance="...";
          else
            this.doctorSearch[index].distance="...";
          }
      },
      error => 
      {
      console.log(error);
      }
    );
   } calculate(lat, lon){
    var R = 6371; var dLat = this.deg2rad(lat - this.my_lat); var dLon = this.deg2rad(lon - this.my_lon);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(this.my_lat)) * Math.cos(this.deg2rad(lat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = (R * c)/10; 
    return d;
  } deg2rad(deg) {
    return deg * (Math.PI / 180)
  }
  
  address:any[];
  constructor(public service:RestService) {
    this.handleChange(this.isDoctor);
  
     
  }
  ngOnInit() {
    if(this.isDoctor)
    this.printOnMap(this.doctorSearch[0].DrClinicAddress+' '+this.doctorSearch[0].DrTownCity+' ('+this.doctorSearch[0].DrPin+')');
    else
    this.printOnMap(this.pharmaSearch[0].PharmacyAddress+' '+this.pharmaSearch[0].PharmacyTownCity+' ('+this.pharmaSearch[0].PharmacyPin+')');

  }
  

}
