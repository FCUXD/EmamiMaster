import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service'; 
import { UserService } from '../user.service';
import { SharingDataService } from '../sharing-data.service';
//import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";
import {Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-productpageinner',
  templateUrl: './productpageinner.component.html',
  styleUrls: ['./productpageinner.component.css']
})
export class ProductpageinnerComponent implements OnInit {

  cart: any;
  prod: any[] = [];
  qty: any[] = [];
  productId: any;
  productDetailsId: any;
  prodd:any[]=[];
  cookieCartId:any;
  cookieCartIdNew:any;
  counter:any = 0;
  qtyP:any = 1;

  products:any[] 
  // url="plant_banner.jpg"
  spinner=0;
  //tabs product cart
  recent_order:any[];
  keep_healthy:any[];
  address:any[];
  details:any;
  details1:any;
   ProdId: any;
headers:any;
  constructor(private doc:DoctorService,private user:UserService,private share:SharingDataService,private route:Router,private route1: ActivatedRoute) { 
var params={};
var headers = new Headers({ 'Content-Type': 'application/json' }); 
this.doc.getProducts(params,headers).subscribe((data:any)=>{
this.products=data.mainCategoryList; 
console.log(this.products)

}) 
//Query String

this.route1.queryParams.subscribe(params => {
  this.ProdId = params["ProdId"];
  //params["ProdId"].length
  this.productId=params.ProdId;
  var ID=localStorage.getItem("ProdID");
  let params1: any;
  if(params["ProdId"]==undefined){
    if (ID!=="")
    {  params1 ={productId:ID}}
  }
  else{
    if(params["ProdId"].length==1)
    {
      params1 ={productId:params.ProdId[0]}
    }
    else{
      params1 ={productId:params.ProdId}
    }

  }
  
 


  if( params1!=0){
    let headers1 = new Headers({ 'Content-Type': 'application/json' });
    //let params:any = {}
    // var params1: any = {};
    // params1.productDetailsId =this.ProdId 
    
     
   this.user.getProductDetails(params1, headers1).subscribe((data: any) => {
     // this.doc.getProductsDetails(params1,headers1).subscribe((data:any)=>{
         this.details=[];
    // this.sectionFlag = !this.sectionFlag;
      let responce = data;
      this.details.push(data.PRODUCT_DETAILS);
      debugger
      let dataP = JSON.stringify(this.details);
  localStorage.setItem("productDetails",dataP)
  console.log(this.details);
    
 // this.router.navigate(['/productDetails'])
  
    })
   }
  });




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
  {active:'',tabcontent:'tabcontent'},
  {active:'',tabcontent:'hide'},
  {active:'',tabcontent:'hide'},
  {active:'',tabcontent:'hide'},
  {active:'',tabcontent:'hide'},
  {active:'',tabcontent:'hide'},
  {active:'',tabcontent:'hide'}
];

 tabs2=[
  {active:'active',tabcontent:'tabcontent'},
  {active:'',tabcontent:'hide'},
  {active:'',tabcontent:'hide'}
];
triphalaright=[
  {active:'active',rightdiv:'rightdiv'},
  {active:'',rightdiv:'hide'},
  {active:'',rightdiv:'hide'}, 
  {active:'',rightdiv:'hide'},
  {active:'',rightdiv:'hide'},
  {active:'',rightdiv:'hide'},
  {active:'',rightdiv:'hide'},
  {active:'',rightdiv:'hide'},
  {active:'',rightdiv:'hide'}
];
openCity(index,nameC){
  //debugger
  // this.reset();  
  // this.tabs[index].active='active';
  // this.tabs[index].tabcontent='tabcontent'; 
  // for(let i=0;i<this.products.length;i++){
  //   if(this.products[i].name.replace(/ /g,'').toLowerCase()==nameC.replace(/ /g,'').toLowerCase()){
  //     let h = (this.products[i].id)
  //     this.share.setProdCatID(h);
     
  //    this.route.navigate(['mainproductpage']);
  //     debugger
  //   }

  let navigationExtras: NavigationExtras = {
    queryParams: {
        "name":nameC
        
    }
  };
  this.route.navigate(["mainproductpage"], navigationExtras);
//this.route.navigate(['/mainproductpage'], { queryParams:  navigationExtras, skipLocationChange: true}); 

  }
  
  
  
  openTab2(index){
    
  this.reset2();  
  this.tabs2[index].active='active';
  this.tabs2[index].tabcontent='tabcontent'; 
  if(index == 0){
    this.triphala(0);
  }
  if(index == 1){
    this.triphala(3);
  }
  if(index == 2){
    this.triphala(6);
  }
  
  }
  triphala(index){
   this.resetinnertabs();   
   this.triphalaright[index].active='active';
   this.triphalaright[index].rightdiv='rightdiv';
   }

  reset(){
    for(let i=0;this.tabs.length>i;i++){
      this.tabs[i].active='';
      this.tabs[i].tabcontent='show'; 
    } 
   
}
reset2(){
  for(let i=0;this.tabs2.length>i;i++){
    this.tabs2[i].active='';
    this.tabs2[i].tabcontent='hide'; 
  } 
  
}
resetinnertabs(){
  for(let i=0;this.triphalaright.length>i;i++){
    this.triphalaright[i].active='';
    this.triphalaright[i].rightdiv='hide';
} 
}
defalt_height="defalt_height";
showaddd:boolean=false;
showadd(){
  this.showaddd=true;
  this.defalt_height="full_height";
}

isMobile=false;
isDesktop=false;
ngOnInit() {
  
if(window.innerWidth>window.innerHeight){
  this.isDesktop=true;
}else{
  this.isMobile=true;
}
}
cImageIndex=0;

carouselarr2:any=[
  {
  
  cardTitle:'All',
 
  },
  {
    cardTitle:'Immunity',
    },
  {
    cardTitle:'Digestion',
    },
  {
    cardTitle:'Diabetes',
    },
  {
    cardTitle:'Pain Management',
    },
  {
    cardTitle:'General Care',
    },
  
  {
    cardTitle:'Others',
    } ,
    {
      cardTitle:'asdf',
      },
      {
        cardTitle:'asd',
        }, 
        {
          cardTitle:'asdf',
          },
          {
            cardTitle:'Zasdf',
            },
        {
          cardTitle:'asdfdf',
          }

  
];

nextSlide(){
  if(this.isDesktop){
    if(this.cImageIndex+5<this.carouselarr2.length)
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

addToCart(noOfQty,prodId) {
   debugger
 
  this.cart = JSON.stringify(this.qty);
 
  if (this.cookieCartIdNew == null) {
    this.cookieCartId = 0;
    
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
  this.counter = this.counter + 1;
    localStorage.setItem("cartCounter", this.counter);
    localStorage.setItem("animateCart", "true");
}
this.cookieCartIdNew = localStorage.getItem('cid');
this.share.setCookieCartId(this.cookieCartIdNew)
//localStorage.setItem("cookieCart",this.cookieCartIdNew)
//  console.log(data1)
});
}

buyNow(qty,id){
    
  if(this.cookieCartIdNew==null){
    this.cookieCartId = 0;
        }
        else{
        // let temp =  localStorage.getItem("cookieCart")
          this.cookieCartId = this.cookieCartIdNew
          
        
        }
       
    
        let params :any = {
          userId : 0,
         productId :  id, // this.cart.productId.id,
         quantity :  qty,
         cookieCartId : this.cookieCartId
         };
        let headers = new Headers({ 'Content-Type': 'application/json' });
       
        this.user.addToCart(params, headers).subscribe((data: any) => {
      let data1= data;
      if(data1.cookieCartId >0){
        localStorage.setItem('cid',data1.cookieCartId);
      }
      this.cookieCartIdNew = localStorage.getItem('cid');
      this.share.setCookieCartId(this.cookieCartIdNew)
      //localStorage.setItem("cookieCart",this.cookieCartIdNew)
      //  console.log
      this.route.navigate(['shopping_cart'],this.cookieCartIdNew);
      });
    
}

}
