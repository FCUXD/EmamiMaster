import { Component, OnInit } from '@angular/core';
import { SliderModule } from 'angular-image-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { google } from '@agm/core/services/google-maps-types';
import { RestService } from '../services/rest.service';
import { DataShareService } from '../service/data-share.service';
import { TopstoriesSliderComponent } from '../topstories-slider/topstories-slider.component';
import { AuthService, SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider } from "angular-6-social-login";
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import swal from 'sweetalert2';
import { DoctorService } from '../doctor.service';
import { SharingDataService } from '../sharing-data.service';
import { DataStorageService } from '../services/data-storage.service';



//declare const google: any;
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})

  

export class LandingpageComponent implements OnInit {
  lat:number =17.655555;
  lng:number =73.45;
  check:boolean;
  doctorSearchCheck:boolean;
  // url="plant_banner.jpg"
  spinner=0;
  //tabs product cart
  recent_order:any[];
  keep_healthy:any[];
  address:any[];
  pharmaSearch:any=[];
  doctorSearch:any=[];
  location=[];
  zoom=5;
  isDoctor=true;
  address_serch=null;
  details:any;
  healthAreaName:any;
  selectedCategory=null;
  visibleProds: any = [];
  visibleProdCount = 2;
 tabIndex = 0;
 cart: any;
  qty: any[] = [];
  cookieCartId1:any;
  cookieCartId:any;
  cookieCartIdNew:any;
  prod: any[] = [];
  //cImageIndex = 0;
  productId: any;
  prodd:any[]=[];
  //getProduct: any;
  catId:any;
  ProdId: any = [];
data:any;
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
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
        "pharmacyPin":address
      }
      this.service.postRequest("https://test.zanducare.com/emamiz/doctor/PharmacySearch",request).subscribe(
        (data: any) => {//https://test.zanducare.com/emamiz/doctor/PharmacySearch
          if(data.status="SUCCESS"){
            console.log(data);
            this.pharmaSearch=data.data
            for(let i=0;i<data.data.length;i++){
              this.getDistance("Pharmacy",i,data.data[i].latitude,data.data[i].longitude,data.data[i].pharmacyName);//+' ('+data.data[i].PharmacyPin+')'
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

  getlatlngDoctor(event,address){
    if (event.key === "Enter") {
      this.location=[];
      let request={
        "drPin":address
      }//http://localhost:8081/EMAMI_API/DoctorSearch
      this.service.postRequest("https://test.zanducare.com/emamiz/doctor/DoctorSearch",request).subscribe(
        (data: any) => {//https://www.zanducare.com/emamiz/doctor/DoctorSearch         
          if(data.status="SUCCESS"){
            console.log(data);
            this.doctorSearch=data.data
            for(let i=0;i<data.data.length;i++){
              this.getDistance("Doctor",i,data.data[i].latitude,data.data[i].longitude,data.data[i].drName);//+' ('+data.data[i].PharmacyPin+')'
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
  }//getlatlngDoctor


  printOnMap(lat,lng){debugger
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

  getDistance(status,index,lat,lng,name) {debugger;
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
  // calculate(lat, lon){
  //   var R = 6371; var dLat = this.deg2rad(lat - this.my_lat); var dLon = this.deg2rad(lon - this.my_lon);
  //   var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(this.my_lat))  * Math.cos(this.deg2rad(lat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  //   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  //   var d = (R * c)/10; 
  //   return d;
  // } deg2rad(deg) {
  //   return deg * (Math.PI / 180)
  // }

  
  getProduct:any;
  getallHealthArea:any;
  constructor(public service:RestService,
    private socialAuthService: AuthService,
    private http: HttpClient,
    private router: Router,
    private user: UserService,
    private doc: DoctorService, private share :SharingDataService,
    private dataStorageService:DataStorageService) {
      var headers = new Headers({ 'Content-Type': 'application/json' });
      let params:any = {};
      params.aaa="aaa";
      this.doc.getProducts(params, headers).subscribe((data: any) => {
        this.getProduct = data.mainCategoryList;
     
        let dataP = JSON.stringify(this.getProduct)
        localStorage.setItem("allProds", dataP)
       console.log(this.getProduct)
     
      });
      this.doc.getHealtharea(params, headers).subscribe((data: any) => {
      let Harea = data.HEALTH_AREA_LIST
     
        let dataH = JSON.stringify(Harea)
        localStorage.setItem("allHarea", dataH)
      //  console.log(this.getProduct)
     
      });
      this.doc.getDoctorSearch(params, headers).subscribe((data: any) => {
       let doc= data.Doctor_CLINIC_DATA
        let dataP = JSON.stringify(doc)
        localStorage.setItem("allDocs", dataP)
       console.log(this.getProduct)
     
      })
      
      //keta
      this.cookieCartId = this.share.getCookieCartId();
      let jsonTosend:any={};
      jsonTosend.cookieCartId = this.cookieCartId;
    
      this.user.getMyCartNew(jsonTosend, headers).subscribe((data: any) => {
         localStorage.setItem("FcartCounter",data.productBeanList.length);
   
      });
      //
  this.findMe();
    
 //   this.getlatlng("pune");
this.recent_order=[
{
  "img":"assets/images/chyavanprash.png","title":"Zandu Lalima",
  "info":"Lalima is a 100% Ayurvedic Blood &...",
  "offerprice":"175",
},
{
  "img":"assets/images/chyavanprash.png","title":"Zandu Lalima",
  "info":"Lalima is a 100% Ayurvedic Blood &...",
  "offerprice":"175",
}];

this.keep_healthy=[{
  "img":"././assets/images/plant_banner.jpg","title":"Digestive Health",
  "info":"14 best and worst foods for your..."
},
{
  "img":"././assets/images/plant_banner.jpg","title":"Digestive Health",
  "info":"14 best and worst foods for your..."
},
{
  "img":"././assets/images/plant_banner.jpg","title":"Digestive Health",
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
  
  
//tabs 
 tabs=[
  {active:'active',tabcontent:'tabcontent'},
  {active:'',tabcontent:'hide'},
  {active:'',tabcontent:'hide'},
  {active:'',tabcontent:'hide'},
  {active:'',tabcontent:'hide'}
];


openCity(index,text){
  this.reset();  
  this.tabs[index].active='active';
  this.tabs[index].tabcontent='tabcontent';
  this.healthAreaName=text;
 // alert(this.healthAreaName);
 this.getHealthAreaProducts(this.healthAreaName);
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

nomodel2="nomodel2";
model2(){
  
  this.nomodel2="model";
}
closed2(){
  this.nomodel2="nomodel2";
} 



isMobile=false;
isDesktop=false;
 

ngOnInit() {

 
  let params:any = {};
  params.aaa="aaa";
  var headers = new Headers({ 'Content-Type': 'application/json' });
  this.doc.getProducts(params, headers).subscribe((data: any) => {
    this.getProduct = data.mainCategoryList;
    let dataP = JSON.stringify(this.getProduct)
    localStorage.setItem("allProds", dataP)
   console.log(this.getProduct)
  });
  this.doc.getDoctorSearch(params, headers).subscribe((data: any) => {
    let doc= data.Doctor_CLINIC_DATA
     let dataP = JSON.stringify(doc)
     localStorage.setItem("allDocs", dataP)
    console.log(this.getProduct)
  
   })

if(window.innerWidth>window.innerHeight){
  this.isDesktop=true;
}else{
  this.isMobile=true;
}
//Diarrhea Diabetes
this.getHealthAreaProducts("Diarrhea");


}
getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.showPosition);
  } else { 
   // x.innerHTML = "Geolocation is not supported by this browser.";
   alert("Geolocation is not supported by this browser.");
  }
}

 showPosition(position) {
  alert("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
 // x.innerHTML = "Latitude: " + position.coords.latitude + 
 // "<br>Longitude: " + position.coords.longitude;
}

//carouselarr3:any;
// cImageIndex=0;
setVisibleProducts() {
  this.visibleProds = [];
  for (var i = 0; i < this.visibleProdCount; i++) {
  //   if (this.category.productsCategoryBean.length - 1 < i + this.tabIndex)
  //     break;
  //   this.visibleProds.push(this.category.productsCategoryBean[i + this.tabIndex])
  //   this.visibleProds[i].qty = 0;
  }
}
// public getHealthAreaProducts(text){
  
//   var params={name:text};

//   var headers = new Headers({ 'Content-Type': 'application/json' }); 
//   this.doc.gethealthAreaProducts(params,headers).subscribe((data:any)=>{
//     
//     this.details=[];
//       let responce = data;
     
//       if(responce.SUGGESTED_PRODUCTS!="NO_DATA")
//       {
     
//         this.details=data.SUGGESTED_PRODUCTS;
//         let dataP = JSON.stringify(this.details);
//        localStorage.setItem("productDetails",dataP)
//        console.log(this.details);

//        for (var i = 0; i < this.visibleProdCount; i++) {
//            if (this.details.length - 1 < i + this.tabIndex)
//             break;
//            this.visibleProds.push(this.details[i + this.tabIndex])
//            this.visibleProds[i].qty = 0;
//         }
     
//       }
//       else{
//         this.details.push("");
        
//         let dataP = JSON.stringify(this.details);
//        localStorage.setItem("productDetails",dataP)
//        console.log(this.details);
//       }
    
//   })
  
  

// }
public getHealthAreaProducts(text){
  //
  var cnt=0;
  // var params={name:this.healthAreaName};
  var params={name:text};

  var headers = new Headers({ 'Content-Type': 'application/json' }); 
  this.doc.gethealthAreaProducts(params,headers).subscribe((data:any)=>{
    // this.category.productsCategoryBean.forEach((item, inx) => {
    //   item.inx = inx;
    // })
    //data.inx = inx;
   //
    this.details=[];
      let responce = data;
  
      if(responce.SUGGESTED_PRODUCTS!="NO_DATA" && responce.SUGGESTED_PRODUCTS!=undefined)
      {
   
        this.details=data.SUGGESTED_PRODUCTS;
        let dataP = JSON.stringify(this.details);
       localStorage.setItem("productDetails",dataP)
       console.log(this.details);

       for (var i = 0; i < this.details.length; i++) {
           if (this.details.length - 1 < i )
            break;
            this.visibleProds.push(this.details[i])
           this.visibleProds[i].qty = 0;
        }
        this.selectCategory(this.visibleProds[cnt]); 
      }
      else{
        this.details.push("");
        //
       // this.details=data.SUGGESTED_PRODUCTS;
        let dataP = JSON.stringify(this.details);
       localStorage.setItem("productDetails",dataP)
       console.log(this.details);
      }
    
      })
  
}
selectCategory(cat){
   
  this.selectedCategory=cat;
} 
reduce(item) {
  if (item.qty)
    item.qty -= 1;
}

add(item) {
  
  //
  item.qty = (item.qty || 0) + 1;
} 
counter:any = 0;
finalcounter:any;
addToCart(item) {
  
    let noOfQty=item.qty;
    let prodId = item.id;
      
        if (this.cookieCartIdNew == null) {
  
     this.cookieCartId = this.share.getCookieCartId();
          }
    else{
  
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
    
    localStorage.setItem('cid',data1.cookieCartId);
    localStorage.setItem('cartId',data1.cookieCartId);
    this.finalcounter=JSON.parse(localStorage.getItem('FcartCounter')); 
   
    if(this.finalcounter>0){
      this.counter = this.finalcounter + 1;
      localStorage.setItem("cartCounter", this.counter);
      
     
    }
    else{
      this.counter = this.counter + 1;
      localStorage.setItem("cartCounter", this.counter);
     this.finalcounter=this.counter;
    
    }
     localStorage.setItem("animateCart", "true");
     localStorage.setItem("finalcartCounter", this.finalcounter);
  }
 
  this.cookieCartIdNew = localStorage.getItem('cid');
  this.cookieCartIdNew=localStorage.getItem('cartId');
  this.share.setCookieCartId(this.cookieCartIdNew)
  });
}
  // addToCart(product) {

  //   let noOfQty=product.qty;
  //   let prodId = product.id;
     
  //   this.cart = JSON.stringify(this.qty);
    
  //   if (this.cookieCartIdNew == null) {
  //     this.cookieCartId = 0;
      
  //   }
  //   else{
 
  //     this.cookieCartId = this.cookieCartIdNew
  //   }
  //   let params :any = {
  //     userId : 0,
  //    productId :  prodId, // this.cart.productId.id,
  //    quantity :  noOfQty,
  //    cookieCartId : this.cookieCartId
  //    };
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
   
  //   this.user.addToCart(params, headers).subscribe((data: any) => {
  // let data1= data;
  // if(data1.cookieCartId >0){
  //   localStorage.setItem('cid',data1.cookieCartId);
  //   this.counter = this.counter + 1;
  //     localStorage.setItem("cartCounter", this.counter);
  //     localStorage.setItem("animateCart", "true");
  // }
  // this.cookieCartIdNew = localStorage.getItem('cid');
  // this.share.setCookieCartId(this.cookieCartIdNew)
  
  // });
  // }

  getProductDetails(item) {
    this.ProdId = [];
    this.ProdId.push(item);
  
  localStorage.setItem("ProdID",this.ProdId);
    this.router.navigate(["productDetails"]);
   
  }
cImageIndex=0;

i=0;

carouselarr2:any=[
  {
    
   imageURL:'chyavanprash.png',
 // imageURL:'https://emamiproductlibrary.s3.amazonaws.com//DEC/70639194649067379773.JPG',
  cardTitle:'Zandu Lalima1',
  cardText:'Lalima is a 100% Ayurvedic Blood &...',
  offer:'10% off',
  offerprice:'175',
  },
  {
  imageURL:'chyavanprash.png',
  cardTitle:'Zandu Lalima2',
  cardText:'Lalima is a 100% Ayurvedic Blood &...',
  offer:'10% off',
  offerprice:'175',
    },
  {
    imageURL:'chyavanprash.png',
    cardTitle:'Zandu Lalima3',
    cardText:'Lalima is a 100% Ayurvedic Blood &...',
    offer:'10% off',
  offerprice:'175'
    },
  {
    imageURL:'chyavanprash.png',
    cardTitle:'Zandu Lalima4',
    cardText:'Lalima is a 100% Ayurvedic Blood &...',
    offer:'10% off',
    offerprice:'175'
    },
  {
    imageURL:'chyavanprash.png',
    cardTitle:'Zandu Lalima5',
    cardText:'Lalima is a 100% Ayurvedic Blood &...',
    offer:'10% off',
    offerprice:'175'
    },
  {
    imageURL:'chyavanprash.png',
    cardTitle:'Zandu Lalima6',
    cardText:'Lalima is a 100% Ayurvedic Blood &...',
    offer:'10% off',
    offerprice:'175'
    },
  
  {
    imageURL:'chyavanprash.png',
    cardTitle:'Zandu Lalima7',
    cardText:'Lalima is a 100% Ayurvedic Blood &...',
    offer:'10% off',
    offerprice:'175'
    }
  
];

nextSlide(){
  if(this.isDesktop){
    if(this.cImageIndex+4<this.carouselarr2.length)
    this.cImageIndex=this.cImageIndex+1;
    else this.cImageIndex=0;
  }else{
    if(this.cImageIndex+1<this.carouselarr2.length)
    this.cImageIndex=this.cImageIndex+1;
    else this.cImageIndex=0;
  }
}
previousSlide(){
  if(this.cImageIndex>0)
  this.cImageIndex=this.cImageIndex-1;
  else this.cImageIndex=this.carouselarr2.length-1;
}

next(){
  if(this.isDesktop){
    if(this.details.length<6)
    this.cImageIndex=this.cImageIndex+1;
    else this.cImageIndex=0;
  }else{
    if(this.details.length+1<4)
    this.cImageIndex=this.cImageIndex+1;
    else this.cImageIndex=0;
  }
}
querystring:any;
topSearch(value){
  debugger
  if(value==1){
    this.querystring="Hypertension"
  }else
  if(value==2){
    this.querystring="Diabetes"
  }else if(value==3){
    this.querystring="Piles"
  }
  // this.resultDis=true;
  // this.searcharrayNew =  localStorage.getItem("allProds");
  // this.movies2 = JSON.parse(this.searcharrayNew);
  // console.log(this.movies2);

// this.search.emit(this.querystring);
this.share.setSearchString(this.querystring);
// localStorage.setItem("index",'4');
  this.router.navigate(['/mainsearch']);
}
}
