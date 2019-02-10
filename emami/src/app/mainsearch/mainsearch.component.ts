import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserService } from '../user.service';
import { Headers } from '@angular/http';
import { SharingDataService } from '../sharing-data.service';
import { google } from '@agm/core/services/google-maps-types';
import { RestService } from '../services/rest.service';
import {Router, NavigationExtras, ActivatedRoute} from "@angular/router";
import { flatten } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-mainsearch',
  templateUrl: './mainsearch.component.html',
  styleUrls: ['./mainsearch.component.css']
})
export class MainsearchComponent implements OnInit {
  @Output("onAddToCart") AddTocart = new EventEmitter<any>();
  @Input()
  // url="plant_banner.jpg"
  spinner=0;
  //tabs product cart
  recent_order:any[];
  keep_healthy:any[];
  address:any[];
  profile:any[];
  isDoctor=true;
  SearchString:any;
  pharmaSearch:any=[];
  doctorSearch:any=[];
  location=[];
  zoom=5;
  lat:number =17.655555;
  lng:number =73.45;
  check:boolean;
  slideCount = 1;
  tabIndex = 0;
  doctorSearchCheck:boolean;
  dataItem:any[]=[];
  dataDoc:any[]=[];
  dataH:any[]=[];
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
 
  constructor(private user:UserService,private share :SharingDataService,public service:RestService, private router:Router,private activeRoute:ActivatedRoute) {
  

     this.dataItem = JSON.parse(localStorage.getItem("allProds"))
     this.dataDoc = JSON.parse(localStorage.getItem("allDocs"))
     this.dataH = JSON.parse(localStorage.getItem("allHarea"))
      for(let i=0;i<this.dataH.length;i++){
        this.searcharray.push(this.dataH[i].name)
      }
    for(let index = 0;index<  this.dataItem.length;index++){
      this.searcharray.push( this.dataItem[index].name);
      for(let inndeIndex=0;inndeIndex <  this.dataItem[index].productsCategoryBean.length;inndeIndex++){
        this.searcharray.push( this.dataItem[index].productsCategoryBean[inndeIndex].name)
      }
    }
    for(let inndeIndex=0;inndeIndex < this.dataDoc.length;inndeIndex++){
      this.searcharray.push(this.dataDoc[inndeIndex].doctorName)
      this.searcharray.push(this.dataDoc[inndeIndex].state)
      this.searcharray.push(this.dataDoc[inndeIndex].city)
      if(this.dataDoc[inndeIndex].healthArea!=null){
        
        this.searcharray.push(this.dataDoc[inndeIndex].healthArea)
      }
      this.searcharray.push(this.dataDoc[inndeIndex].qualification)
    }

    
    this.profile=[{img:'../../assets/images/sdr.png',degree:'bams,md',drname:'Kayachikitsalaya'},
    {img:'../../assets/images/sdr.png',degree:'bams,md',drname:'Kayachikitsalaya'},
    {img:'../../assets/images/sdr.png',degree:'bams,md',drname:'Kayachikitsalaya'},
    {img:'../../assets/images/sdr.png',degree:'bams,md',drname:'Kayachikitsalaya'},]
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

   getlatlngDoctor(address){
    
      this.location=[];
      let request={
        "DrPin":address
      }//http://localhost:8081/EMAMI_API/DoctorSearch
      this.service.postRequest("https://test.zanducare.com/DoctorPharmacySearch/DoctorSearch",request).subscribe(
        (data: any) => {//https://test.zanducare.com/DoctorPharmacySearch/DoctorSearch 
          if(data.ERROR){

          } else
          if(data.status="SUCCESS"){
            console.log(data);
            this.doctorSearch=data.data
            for(let i=0;i<data.data.length;i++){
              this.getDistance("Doctor",i,data.data[i].Latitude,data.data[i].Longitude,data.data[i].doctorName);//+' ('+data.data[i].PharmacyPin+')'
            }
            console.log(this.doctorSearch);
            this.check=true;
          }

        },
        error => 
        {
        console.log(error);
        }
      );
   //if enter
  }//getlatlngDoctor

  
  // getlatlngPharmacy(address){
    
  //     this.location=[];
  //     let request={
  //       "PharmacyPin":address
  //     }
  //     this.service.postRequest("https://www.zanducare.com/DoctorPharmacySearch/DoctorSearch",request).subscribe(
  //       (data: any) => {//https://test.zanducare.com/doctorsearch/PharmacySearch
  //         if(data.status="SUCCESS"){
  //           console.log(data);
  //           for(let i=0;i<data.data.length;i++){
  //             this.getDistance("Pharmacy",i,data.data[i].Latitude,data.data[i].Longitude);//+' ('+data.data[i].PharmacyPin+')'
  //           }
  //           this.pharmaSearch=data.data
  //           console.log(this.pharmaSearch);
  //           this.check=true;
  //         }
  //       },
  //       error => 
  //       {
  //       console.log(error);
  //       }
  //     );
  //  //if enter
  // }

  getlatlng(){
    
   
      for(let i=0;i<this.doctors.length;i++){
        this.getDistance("Doctor",i,this.doctors[i].latitude,this.doctors[i].longitude,this.doctors[i].doctorName)
      }
      // for(let i=0;i<this.doctors.length;i++){
      //   this.getDistance("Doctor",i,this.doctors[i].doctorLatitude,this.doctors[i].doctorLongitude);//+' ('+data.data[i].PharmacyPin+')'
      // }
    
   
  // else this.getlatlngPharmacy(address);
  }

  getDistance(status,index,lat,lng,name) {
    
    
    //return 5;
       try{
          this.location.push({
            lat:lat,
            lng:lng,
            name:name
          });
        //   if(status==="Pharmacy")
        //     this.pharmaSearch[index].distance=parseInt(this.calculate(lat,lng)+"");
        //   else

        //     this.doctorSearch[index].distance=parseInt(this.calculate(lat,lng)+"");
        }catch(e){
        //   if(status==="Pharmacy")
        //     this.pharmaSearch[index].distance="...";
        //   else
        //     this.doctorSearch[index].distance="...";
          }
 
   }
   calculate(lat, lon){
    var R = 6371; var dLat = this.deg2rad(lat - this.my_lat); var dLon = this.deg2rad(lon - this.my_lon);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(this.my_lat)) * Math.cos(this.deg2rad(lat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = (R * c)/10; 
    return d;
  } 
  deg2rad(deg) {
    return deg * (Math.PI / 180)
  }
  
  printOnMap(lat,lng){
    this.lat=lat;
    this.lng=lng;
    //this.lat=this.my_lat;
    //this.lng=this.my_lon
    this.zoom=12;
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
isDesktop=false;
isMobile=false;


public showHeader:boolean=true;

  ngOnInit() {

    this.showHeader = !this.router.url.includes('patient-dashboard');
  
    if(window.innerWidth>576){
      this.isDesktop=true
    }else if(window.innerWidth<576){
      this.isMobile=true
    }
  this.doctorSearch=[];
  this.doctors=[];
    ;
    // for(let k=0;k<this.searcharray.length;k++){
    //   for(let j=0;j<this.searcharray.length;j++){
    //     if(this.searcharray[k]==this.searcharray[j]){
    //       this.searcharray.splice(j,1)
    //     }
    //   }
      
    // }
    for(let k=0;k<this.searcharray.length;k++){
      for(let j=0;j<this.searcharray.length;j++){
        if(this.searcharray[k]==this.searcharray[j] && k!=j){
          this.searcharray.splice(k,1)
          
          // this.searchFinal.push(this.searcharray[k])
        }
      }
      
    }
    this.SearchString = this.share.getSearchString()
    this.selected(this.SearchString)
    // this.updateFilter2("") 
  //   this.activeRoute.queryParams.subscribe(params => {
  //     //this.querystring = params['searchString'];
  //     this.SearchString = params['searchString'];
  //     this.search();
  // });
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

result:any[]=[];
userdata:any;
product:any[]=[];
querystring:any="";
visibleProds:any[]=[];
visibleProdCount = 4;
searched:boolean=false
healthArea:any[]=[];
healthAreaDoc
doctors:any[]=[];
resultDis:boolean=false;
change(){
  this.resultDis=false;
  this.searched = true;
}
search(){
  this.resultDis=true
  // this.querystring="";
  this.share.setSearchString('')
  this.searched = false;
  this.product=[];
  this.result=[];
  this.healthArea=[];
  this.doctors =[];
  this.userdata=[];
  
  if(!this.querystring){
    this.querystring = this.SearchString
  }
//   let params={
//     searchString:this.querystring // json to send service
//   };
//   var headers = new Headers({ 'Content-Type': 'application/json' });
//  this.user.searchMain(params,headers).subscribe((data)=>{
//   
//   this.userdata = data
//   this.result = this.userdata;

//    if(   typeof this.result!=undefined){
   
  
//     if(this.userdata.PRODUCTS_LIST!="NO_PRODUCTS_LIST" && this.userdata.PRODUCTS_LIST!=undefined){
//       this.product = this.userdata.PRODUCTS_LIST;
//     }
     
//     if(this.userdata.HEALTH_AREA_LIST!="NO_HEALTH_AREA_LIST" && this.userdata.HEALTH_AREA_LIST!=undefined){
//   this.healthArea = this.userdata.HEALTH_AREA_LIST;
//     }
   
//   if(this.userdata.DOCTOR_LIST!="NO_DOCTOR_LIST" && this.userdata.DOCTOR_LIST!=undefined){
//     this.doctors = this.userdata.DOCTOR_LIST;
//   }
//  }
// //  this.searched = true;
//  if(this.product.length!=0){
//   this.setVisibleProducts()
//  }
//   //  console.log(userdata)
  
 
//  })

}
string:any;
route(route){
  
  let text =route.replace(/ +/g, "");
  this.string = text
  this.router.navigate([this.string])
// this.string = this.string.trim()
}
mobProds:any[]=[];
mobCount=1;
QtyM:any=1
setVisibleProducts() {

  
this.mobProds=[];
  this.visibleProds = [];
if(this.isDesktop){
  for (var i = 0; i < this.visibleProdCount; i++) {
    if (this.product.length - 1 < i + this.tabIndex )
      break;
    this.visibleProds.push(this.product[i+this.tabIndex])
    this.visibleProds[i].qty = 1;
   
  }
} else if(this.isMobile){
  // this.QtyM=1
  for (var i = 0; i < this.mobCount; i++) {
    if (this.product.length - 1 < i + this.tabIndex )
      break;
    this.mobProds.push(this.product[i+this.tabIndex])
    this.mobProds[i].qty = 1;
   
  }
}
  
  // this.querystring=null
  // this.getlatlng()
}
// counter:any = 0;
// cookieCartId:any;
// cookieCartIdNew:any;
// catId:any;



finalcounter:any;
counter:any = 0;
cookieCartId:any;
cookieCartIdNew:any;
catId:any;

addTocart(item) {
   
  let noOfQty=item.qty;
  let prodId = item.id;
       // this.cart = JSON.stringify(this.qty);
      if (this.cookieCartIdNew == null) {
   // this.cookieCartId = 0;
   this.cookieCartId = this.share.getCookieCartId();
        }
  else{
  // let temp =  localStorage.getItem("cookieCart")
    this.cookieCartId = this.cookieCartIdNew
      }
 

  let params :any = {
    userId : 0,
   productId :  prodId, // this.cart.productId.id,
   quantity :  noOfQty,
   cookieCartId : this.cookieCartId
   };
  let headers = new Headers({ 'Content-Type': 'application/json' });
 
  this.user.addToCart(params, headers).subscribe((data: any) => {
let data1= data;
if(data1.cookieCartId >0){
  // localStorage.setItem('cid',data1.cookieCartId);
  // this.counter = this.counter + 1;
  //   localStorage.setItem("cartCounter", this.counter);
  //   localStorage.setItem("animateCart", "true");
  localStorage.setItem('cid',data1.cookieCartId);
  localStorage.setItem('cartId',data1.cookieCartId);
  this.finalcounter=JSON.parse(localStorage.getItem('FcartCounter')); 
 // if(this.finalcounter=null){this.finalcounter=0;}
  if(this.finalcounter>0){
    this.counter = this.finalcounter + 1;
    localStorage.setItem("cartCounter", this.counter);
    //this.finalcounter=this.counter;
   
  }
  else{this.counter = this.counter + 1;
    localStorage.setItem("cartCounter", this.counter);
   this.finalcounter=this.counter;
   // this.finalcounter= localStorage.getItem('FcartCounter');

  }
   localStorage.setItem("animateCart", "true");
   localStorage.setItem("finalcartCounter", this.finalcounter);
}
// this.cookieCartIdNew = localStorage.getItem('cid');
// this.share.setCookieCartId(this.cookieCartIdNew)
this.cookieCartIdNew = localStorage.getItem('cid');
this.cookieCartIdNew=localStorage.getItem('cartId');
this.share.setCookieCartId(this.cookieCartIdNew)
});
}
Qty:any=4
reduce(item) {
  if (item.qty)
    item.qty -= 1;
}

add(item) {
  item.qty = (item.qty || 0) + 1;
}
ngOnDestroy() {
  
 this.querystring = ""
}
get(){
  // this.querystring = ""
}
nextP(){
  
}
next() {
  // alert()

if(this.isDesktop){
  if (this.tabIndex + this.visibleProdCount < this.product.length) {
    this.tabIndex += this.slideCount;
this.Qty=this.Qty+1
    this.setVisibleProducts();

  }
  return;
} else if(this.isMobile){
  if (this.tabIndex + this.mobCount < this.product.length) {
  this.tabIndex += this.slideCount;
  this.QtyM=this.QtyM+1
      this.setVisibleProducts();
  }
}
 

  // if (this.isDesktop) {
  // }

}

previous() {
  
  
  if (this.tabIndex > 0) {
    this.tabIndex -= this.slideCount;
if(this.Qty>4){
  this.Qty=this.Qty-1
}
if(this.QtyM>1){
  this.QtyM=this.QtyM-1
}
    this.setVisibleProducts();
  }
  return;

}

// map infowindow 

openedWindow : number = 0; // alternative: array of numbers

openWindow(id) {
  
    this.openedWindow = id; // alternative: push to array of numbers
    this.isInfoWindowOpen(id)
}

isInfoWindowOpen(id) {
    return this.openedWindow == id; // alternative: check if id is in array
}
temp:any[]=[];
 searcharray=[];
updateFilter2(event) {

  this.doctors=[];
  this.product=[];
  this.healthArea=[];
  this.health = false
  this.productFlag=false;
  this.searched=false
  debugger
  if(this.SearchString==""){
    this.resultDis=false
  }


  if(this.SearchString==""){
    this.resultDis=false
  }
  this.location=[];
  let val2
  if(event==""){
     val2 = this.SearchString
   
  }else{
     val2 = event.target.value;
  }
  this.share.setSearchString('')
  
  if (val2 == '' || val2 == null) return this.temp = [];
  // filter our data
  this.searcharray = this.searcharray.sort((a, b) => a < b ? -1 : 1);
  val2 = val2.toLowerCase();
    const p =  this.searcharray.filter(function(yourDataList) {
        return (yourDataList.toLowerCase().indexOf(val2) !== -1);
    })
    this.temp = p;
this.resultDis=true
}

selected(event){

  this.doctors=[];
  this.product=[];
  this.healthArea=[];
 
 

  if(this.SearchString){
    this.searched = true
  this.doctors=[];
  // this.SearchString=event.target.value
 let val2 = this.SearchString;
 this.resultDis = false
  
  for(let i=0;i<this.dataDoc.length;i++){
    if(val2==this.dataDoc[i].healthArea){
      this.doctors.push(this.dataDoc[i]);
   
    }
    if(val2.toUpperCase()==this.dataDoc[i].doctorName.toUpperCase()){
      this.doctors.push(this.dataDoc[i]);
   
    }
    else if(val2.toUpperCase()==this.dataDoc[i].state.toUpperCase()){
      this.doctors.push(this.dataDoc[i]);
     
    } else  if(val2.toUpperCase()==this.dataDoc[i].city.toUpperCase()){
      this.doctors.push(this.dataDoc[i]);
     
    }else  if(val2.toUpperCase()==this.dataDoc[i].qualification.toUpperCase()){
      this.doctors.push(this.dataDoc[i]);
     
    }
  
}
  for(let i=0;i< this.dataItem.length;i++){
    if((val2).toUpperCase()==(this.dataItem[i].name).toUpperCase() ){
      let name=val2
// this.healthArea.push(val2)
for(let k=0;k<this.dataItem[i].productsCategoryBean.length;k++){
  this.product.push(this.dataItem[i].productsCategoryBean[k])
  
}

  }else {
    for(let k=0;k<this.dataItem[i].productsCategoryBean.length;k++){
      if(val2.toUpperCase()==this.dataItem[i].productsCategoryBean[k].name.toUpperCase()){
     
      this.product.push(this.dataItem[i].productsCategoryBean[k])
      this.searched = true
      }
    }
    
  }
}
for(let m=0;m<this.dataH.length;m++){
  if(val2.toUpperCase()==this.dataH[m].name.toUpperCase()){
    this.healthArea.push(this.dataH[m])
  }
}
this.getlatlng();
// this.location=[];
  this.setVisibleProducts();
  // alert(this.product)
  
  // alert(this.healthArea)
  // alert(this.searched)
  this.doctor=true;
  this.health=true;
  this.productFlag=true
  }
  
}
productFlag:boolean=false;
health:boolean=false;
doctor:boolean=false;
filter(value){
if(value==0){
  this.doctor=true;
  this.health=true;
  this.productFlag=true
}
else if(value==1){
this.doctor=false;
this.health=false;
this.productFlag=true;
}
else if(value==2){
  this.health=true;
  this.doctor=false;
  this.productFlag=false;
  }
  else if(value==3){
    this.health=false;
    this.doctor=true;
    this.productFlag=false;
    }
}

address_serch2:any;
getlatlngOther(event,address){
  if(this.isDoctor) this.getlatlngDoctorOther(event,address);
  else this.getlatlngPharmacyOther(event,address);
  }
  getlatlngDoctorOther(event,address){
    if (event.key === "Enter") {
      this.location=[];
      let request={
        "DrPin":address
      }//http://localhost:8081/EMAMI_API/DoctorSearch
      this.service.postRequest("https://test.zanducare.com/DoctorPharmacySearch/DoctorSearch",request).subscribe(
        (data: any) => {//https://test.zanducare.com/DoctorPharmacySearch/DoctorSearch         
          if(data.status="SUCCESS"){
            console.log(data);
            this.doctorSearch=data.data
            for(let i=0;i<data.data.length;i++){
              this.getDistanceOther("Doctor",i,data.data[i].Latitude,data.data[i].Longitude,data.data[i].DrName);//+' ('+data.data[i].PharmacyPin+')'
            }
            console.log(this.doctorSearch);
            this.check=true;
          }
        },
        error => 
        {
        console.log(error);
        }
      );
   }//if enter
  }
  getlatlngPharmacyOther(event,address){
    if (event.key === "Enter") {
      this.location=[];
      let request={
        "PharmacyPin":address
      }
      this.service.postRequest("https://test.zanducare.com/emamiz/doctor/PharmacySearch",request).subscribe(
        (data: any) => {//https://test.zanducare.com/doctorsearch/PharmacySearch
          if(data.status="SUCCESS"){
            console.log(data);
            this.pharmaSearch=data.data
            for(let i=0;i<data.data.length;i++){
              this.getDistanceOther("Pharmacy",i,data.data[i].Latitude,data.data[i].Longitude,data.data[i].PharmacyName);//+' ('+data.data[i].PharmacyPin+')'
            }
           // this.pharmaSearch=data.data
            console.log(this.pharmaSearch);
            this.check=true;
          }
        },
        error => 
        {
        console.log(error);
        }
      );
   }//if enter
  }
  getDistanceOther(status,index,lat,lng,name) {;
    //return 5;
       try{
          this.location.push({
            lat:lat,
            lng:lng,
            name:name
          });
          if(status==="Pharmacy")
            this.pharmaSearch[index].distance=parseInt(this.calculate(lat,lng)+"");
          else

            this.doctorSearch[index].distance=parseInt(this.calculate(lat,lng)+"");
        }catch(e){
          if(status==="Pharmacy")
            this.pharmaSearch[index].distance="...";
          else
            this.doctorSearch[index].distance="...";
          }
    
   }
   nomodel2="nomodel2";
model2(){
  
  this.nomodel2="model";
}
closed2(){
  this.nomodel2="nomodel2";
} 
}
