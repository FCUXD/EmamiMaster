import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { SharingDataService } from '../sharing-data.service';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-piles',
  templateUrl: './piles.component.html',
  styleUrls: ['./piles.component.css']
})
export class PilesComponent implements OnInit {
  lat:number =17.655555;
  lng:number =73.45;
  // url="plant_banner.jpg"
  spinner=0;
  //tabs product cart
  recent_order:any[];
  keep_healthy:any[];
  address:any[]; 
  recommendation:Array<any>=[];

  healthAreaName:any;
  details:any;

  @Output("onAddToCart") AddTocart = new EventEmitter<any>();
  // visibleProds: any = [];
  visibleCategory=[];
  selectedCategory=null;
  cart: any;
  qty: any[] = [];
  cookieCartId:any;
  cookieCartIdNew:any;
  prod: any[] = [];
  cImageIndex = 0;
  DImageIndex = 0;
  pvkDImageIndex = 0;
  productId: any;
  prodd:any[]=[];
  getProduct: any;
  catId:any;
  ProdId: any = [];

  public showHeader:boolean=true;
  constructor(public router:Router,private doc: DoctorService,private user:UserService, private share :SharingDataService) {
    this.prod = [{
      productId: "",
      qty: ""
    }]
    var headers = new Headers({ 'Content-Type': 'application/json' });
    let params:any = {};
    params.aaa="aaa";
    this.doc.getProducts(params, headers).subscribe((data: any) => {
      this.getProduct = data.mainCategoryList;
   console.log(this.getProduct)
   this.catId= this.share.getProdCatId();
     if(this.share.flag){
       for(let i=0;i<this.getProduct.length;i++){
         if(this.catId==this.getProduct[i].id){
           this.cImageIndex = i
           //this.show =i
         }
       }
   
     this.share.flag = false
    }else{

    }
    })
    this.recommendation=[{pimg:'assets/images/zandulilima.png',product:'Zandu Lalima',description:'Lalima is a 100% Ayurvedic Blood &...',price:'175',},
{pimg:'assets/images/zandulilima.png',product:'Zandu Lalima',description:'Lalima is a 100% Ayurvedic Blood &...',price:'175',},
{pimg:'assets/images/zandulilima.png',product:'Zandu Lalima',description:'Lalima is a 100% Ayurvedic Blood &...',price:'175',},

]
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

  ngOnInit() {

    if(window.innerWidth>window.innerHeight){
      this.isDesktop=true;
    }else{
      this.isMobile=true;
    }

    this.showHeader = !this.router.url.includes('patient-dashboard');
    this.healthAreaName=localStorage.getItem('key');
    
   
    if(this.healthAreaName!=""){ this.getHealthAreaProducts(this.healthAreaName);}
  }
  public getHealthAreaProducts(text){
    
    var cnt=0;
    // var params={name:this.healthAreaName};
    var params={name:text};
  
    var headers = new Headers({ 'Content-Type': 'application/json' }); 
    this.doc.gethealthAreaProducts(params,headers).subscribe((data:any)=>{
      // this.category.productsCategoryBean.forEach((item, inx) => {
      //   item.inx = inx;
      // })
      //data.inx = inx;
      
      this.details=[];
        let responce = data;
    
        if(responce.SUGGESTED_PRODUCTS!="NO_DATA")
        {
     
          this.details=data.SUGGESTED_PRODUCTS;
          let dataP = JSON.stringify(this.details);
         localStorage.setItem("productDetails",dataP)
         console.log(this.details);
  
         for (var i = 0; i < 3; i++) {
             if (this.details.length - 1 < i )
              break;
              this.visibleCategory.push(this.details[i])
             this.visibleCategory[i].qty = 0;
          }
          this.selectCategory(this.visibleCategory[cnt]); 
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
  
  
  item.qty = (item.qty || 0) + 1;
} 
counter:any = 0;
  addToCart(product) {

    

    let noOfQty=product.qty;
    let prodId = product.id;
     
    this.cart = JSON.stringify(this.qty);
    
    if (this.cookieCartIdNew == null) {
      this.cookieCartId = 0;
      
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
    localStorage.setItem('cid',data1.cookieCartId);
    this.counter = this.counter + 1;
      localStorage.setItem("cartCounter", this.counter);
      localStorage.setItem("animateCart", "true");
  }
  this.cookieCartIdNew = localStorage.getItem('cid');
  this.share.setCookieCartId(this.cookieCartIdNew)

  });
  }
  
  getProductDetails(item) {
    this.ProdId = [];
    this.ProdId.push(item);
  
  localStorage.setItem("ProdID",this.ProdId);
    this.router.navigate(["productDetails"]);
   
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

scrollTo(section) {
  document.querySelector('#' + section)
  .scrollIntoView();
}
setNav(id){
  
this.share.nav(id)
}








  isMobile=false;
  isDesktop=false;
  
 

  carouselarr2:any=[
    {
    imageURL:'ActuallyCauses_1.png',
    cardText:'Spicy & fried food',
    },
    {
      imageURL:'ActuallyCauses_2.png',
      cardText:'Sitting or standing  for long durations.',
      },
    {
      imageURL:'ActuallyCauses_3.png',
      cardText:'Sitting constantly  on hard surface',
      },
    {
      imageURL:'ActuallyCauses_4.png',
      cardText:'Suppressing the  urge to defecate',
      },
    
  ];

  nextSlide(){
    if(this.isDesktop){
      if(this.DImageIndex+4<this.carouselarr2.length)
      this.DImageIndex=this.DImageIndex+1;
      else this.DImageIndex=0;
    }else{
      if(this.DImageIndex+1<this.carouselarr2.length)
      this.DImageIndex=this.DImageIndex+1;
      else this.DImageIndex=0;
    }
  }
  previousSlide(){
    if(this.DImageIndex>0)
    this.DImageIndex=this.DImageIndex-1;
    else this.DImageIndex=this.carouselarr2.length-1;
  }





  carouselarr3:any=[
    {
      imageURL:'Kapha.png',
      cardTitle:'Kapha',
      cardText:'On the basis of the character of bleed- ing, piles is classified as Non-bleeding  Piles :Occur due to impairment of Vata <br /> and Kapha Dosha',
      
    },
    {
      imageURL:'Pita.png',
      cardTitle:'Pita',
      cardText:'On the basis of the character of  bleeding, piles is classified as Bleeding  Piles : Occur due to impairment of  Rakta(blood) and Pita Dosha',
      },
    {
      imageURL:'Vata.png',
      cardTitle:'Vata',
      cardText:'On the basis of the character of bleeding, piles is classified as Non-bleeding Piles :Occur due to impairment of Vata and Kapha<br /> Dosha',
      },
    
  ];

  nextSlide3(){
    if(this.isDesktop){
      if(this.pvkDImageIndex+4<this.carouselarr3.length)
      this.pvkDImageIndex=this.pvkDImageIndex+1;
      else this.pvkDImageIndex=0;
    }else{
      if(this.pvkDImageIndex+1<this.carouselarr3.length)
      this.pvkDImageIndex=this.pvkDImageIndex+1;
      else this.pvkDImageIndex=0;
    }
  }
  previousSlide3(){
    if(this.pvkDImageIndex>0)
    this.pvkDImageIndex=this.pvkDImageIndex-1;
    else this.pvkDImageIndex=this.carouselarr3.length-1;
  }





}
