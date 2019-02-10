import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { UserService } from '../user.service';
import { SharingDataService } from '../sharing-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productdetailnew',
  templateUrl: './productdetailnew.component.html',
  styleUrls: ['./productdetailnew.component.css']
})
export class ProductdetailnewComponent implements OnInit {

  @Output() cookieCart = new EventEmitter<any>();
  // url="plant_banner.jpg"
  cImageIndex = 0;
  tabIndex = 0;
  spinner1 = 0;
  spinner2 = 0;
  spinner3 = 0;
  spinner4 = 0;
  getProduct: any;
  //tabs product cart
  recent_order: any[];
  keep_healthy: any[];
  address: any[];
  data: any;
  cart: any;
  prod: any[] = [];
  qty: any[] = [];
  productId: any;
  prodd:any[]=[];
  cookieCartId:any;
  cookieCartIdNew:any;
  private mainCategoryList: any[] = [];
  private productCategoryBean: any = [];

  constructor(private doc: DoctorService, private user:UserService, private share :SharingDataService,
    private router:Router) {
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
      this.names = this.getProduct[0].name;
     
    })
    // this.data = this.mainCategoryList 
   
    localStorage.setItem("products", this.data)
    this.recent_order = [
      {
        "img": "../../assets/images/chyavanprash.png", "title": "Zandu Lalima",
        "info": "Lalima is a 100% Ayurvedic Blood &...",
        "offerprice": "175",
      },
      {
        "img": "../../assets/images/chyavanprash.png", "title": "Zandu Lalima",
        "info": "Lalima is a 100% Ayurvedic Blood &...",
        "offerprice": "175",
      }];

    this.keep_healthy = [{
      "img": "../../assets/images/plant_banner.jpg", "title": "Digestive Health",
      "info": "14 best and worst foods for your..."
    },
    {
      "img": "../../assets/images/plant_banner.jpg", "title": "Digestive Health",
      "info": "14 best and worst foods for your..."
    },
    {
      "img": "../../assets/images/plant_banner.jpg", "title": "Digestive Health",
      "info": "14 best and worst foods for your..."
    }];

    this.address = [{
      "digit": "01", "km": "0.6 KM", "name": "Dr. Rajeev Shukla", "exp": "BAMS 15 Year of Exp",
      "add": " ABC clinic, Behind Ab Reoad,Baner, Pune 411007"
    },
    {
      "digit": "01", "km": "0.6 KM", "name": "Dr. Rajeev Shukla", "exp": "BAMS 15 Year of Exp",
      "add": " ABC clinic, Behind Ab Reoad,Baner, Pune 411007"
    }]
  }

  carouselarr2: any = [
    {
      imageURL: 'small_product.png',
      cardTitle: 'Zandu Lalima1',
      cardText: 'Lalima is a 100% Ayurvedic Blood &...',
      offer: '10% off',
      offerprice: '175',
    },
    {
      imageURL: 'small_product.png',
      cardTitle: 'Zandu Lalima2',
      cardText: 'Lalima is a 100% Ayurvedic Blood &...',
      offer: '10% off',
      offerprice: '175',
    },
    {
      imageURL: 'small_product.png',
      cardTitle: 'Zandu Lalima3',
      cardText: 'Lalima is a 100% Ayurvedic Blood &...',
      offer: '10% off',
      offerprice: '175'
    },
    {
      imageURL: 'small_product.png',
      cardTitle: 'Zandu Lalima4',
      cardText: 'Lalima is a 100% Ayurvedic Blood &...',
      offer: '10% off',
      offerprice: '175'
    },
    {
      imageURL: 'small_product.png',
      cardTitle: 'Zandu Lalima5',
      cardText: 'Lalima is a 100% Ayurvedic Blood &...',
      offer: '10% off',
      offerprice: '175'
    },
    {
      imageURL: 'small_product.png',
      cardTitle: 'Zandu Lalima6',
      cardText: 'Lalima is a 100% Ayurvedic Blood &...',
      offer: '10% off',
      offerprice: '175'
    },

    {
      imageURL: 'small_product.png',
      cardTitle: 'Zandu Lalima7',
      cardText: 'Lalima is a 100% Ayurvedic Blood &...',
      offer: '10% off',
      offerprice: '175'
    }

  ];


  
    // PRODUCT_DETAILS:any =[ {
    // "productId": 127,
    // "productName": "Rhumasyl Gel (30 g)",
    // "mrp": "65.0",
    // "selling": "59.0",
    // "dosageAndDirection": null,
    // "benefits": "Topical analgesic anti-inflammatory pain reliver",
    // "listIngredients": null,
    // "precaution": null,
    // "ageGroup": null,
    // "imageUrl": "https://emamiproductlibrary.s3.amazonaws.com//SEP/80306170879983299157.png"
    // }]
    
  down1(id) {

    if (this.spinner1 > 0) {
      this.productId = id;
      this.spinner1 = this.spinner1 - 1;
      this.prod = [{
        productId: this.productId,
        qty: this.spinner1
      }]
      this.qty.push(this.prod)
    }
  }
  add1(id) {

    this.productId = id;
    this.spinner1 = this.spinner1 + 1
    let prod:any = {};
    prod.productId = this.productId;
    prod.qty = this.spinner1;
    if(this.qty.length !=0 ){
      for(let i=0;i<this.qty.length;i++){
        if(this.qty[i].productId == prod.productId){
          this.qty.splice(i,1);
        }
      }
     
    }
    this.qty.push(prod)
  }
  down2(id) {

    if (this.spinner2 > 0) {
      this.productId = id;
      this.spinner2 = this.spinner2 - 1
      let prod:any = {};
    prod.productId = this.productId;
    prod.qty = this.spinner2;
    if(this.qty.length !=0 ){
      for(let i=0;i<this.qty.length;i++){
        if(this.qty[i].productId == prod.productId){
          this.qty.splice(i,1);
        }
      }
     
    }
      this.qty.push(prod)
    }
  }
  add2(id) {

    this.productId = id;
    this.spinner2 = this.spinner2 + 1
    let prod:any = {};
    prod.productId = this.productId;
    prod.qty = this.spinner2;
    if(this.qty.length !=0 ){
      for(let i=0;i<this.qty.length;i++){
        if(this.qty[i].productId == prod.productId){
          this.qty.splice(i,1);
        }
      }
     
    }
    this.qty.push(prod)
  }
  down3(id) {

    if (this.spinner3 > 0) {
      this.productId = id;
      this.spinner3 = this.spinner3 - 1
      let prod:any = {};
    prod.productId = this.productId;
    prod.qty = this.spinner3;
    if(this.qty.length !=0 ){
      for(let i=0;i<this.qty.length;i++){
        if(this.qty[i].productId == prod.productId){
          this.qty.splice(i,1);
        }
      }
     
    }
      this.qty.push(prod)
    }
  }
  add3(id) {

    this.productId = id;
    this.spinner3 = this.spinner3 + 1
    let prod:any = {};
    prod.productId = this.productId;
    prod.qty = this.spinner3;
    if(this.qty.length !=0 ){
      for(let i=0;i<this.qty.length;i++){
        if(this.qty[i].productId == prod.productId){
          this.qty.splice(i,1);
        }
      }
     
    }
    this.qty.push(prod)
  }
  down4(id) {

    if (this.spinner4 > 0) {
      this.productId = id;
      this.spinner4 = this.spinner4 - 1
      let prod:any = {};
    prod.productId = this.productId;
    prod.qty = this.spinner4;
    if(this.qty.length !=0 ){
      for(let i=0;i<this.qty.length;i++){
        if(this.qty[i].productId == prod.productId){
          this.qty.splice(i,1);
        }
      }
     
    }
      this.qty.push(prod)
    }
  }
  add4(id) {

    this.productId = id;
    this.spinner4 = this.spinner4 + 1
    let prod:any = {};
    prod.productId = this.productId;
    prod.qty = this.spinner4;
    if(this.qty.length !=0 ){
      for(let i=0;i<this.qty.length;i++){
        if(this.qty[i].productId == prod.productId){
          this.qty.splice(i,1);
        }
      }
     
    }
    this.qty.push(prod)
  }
  counter:any = 0;
  addToCart(noOfQty,prodId) {
   
    // this.qty = this.qty.filter (function (value, index, array) { 
    //   console.log(array)
    //   return array.indexOf (value) == index;
    //   });
      
    // for (let i = 0; i < this.qty.length; i++) {
    //   for (let j = 0; j < this.qty.length-1; j++) {
    //     let a=this.qty[i].productId;
    //     let b = this.qty[j].productId;
    //     if ( a == b  && i!=j) {
    //       this.qty.splice(j, 1);
    //     }
    //   }
    // }
    this.cart = JSON.stringify(this.qty);
    // for(let i=0;i<this.qty.length;i++){
    //   if(prodId == this.qty[i].productId.id){
    //   let  productId =  this.qty[i].productId.id
    //   // let quantity = this.qty[i].qty;
    //   }
    // }
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
  //localStorage.setItem("cookieCart",this.cookieCartIdNew)
  //  console.log(data1)
  });
  }
  changeable = "defalt";
  hideDiv: boolean = false;
  hidebtn: boolean = true;
  
  toggle() {
    if (this.hideDiv == false) {
      this.hideDiv = true;
      this.hidebtn = false;
    }
  }
  modal = "modal";
  addNotes() {
    this.modal = 'show';
  }

  closeAddNotes() {
    this.modal = 'modal';
  }

  isMobile = false;
  isDesktop = false;
  ngOnInit() {

    if (window.innerWidth > window.innerHeight) {
      this.isDesktop = true;
    } else {
      this.isMobile = true;
    }
  }
  //tabs 
  tabs = [
    { active: 'active', tabcontent: 'tabcontent' },
    { active: '', tabcontent: 'hide' },
    { active: '', tabcontent: 'hide' },
    { active: '', tabcontent: 'hide' },
    { active: '', tabcontent: 'hide' },
    { active: '', tabcontent: 'hide' },
    { active: '', tabcontent: 'hide' }
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
  show = 0;
  sliderIndex = 0;
  reset() {
    for (let i = 0; this.tabs.length > i; i++) {
      this.tabs[i].active = '';
      this.tabs[i].tabcontent = 'hide';
    }
  }
  defalt_height = "defalt_height";
  showaddd: boolean = false;
  showadd() {
    this.showaddd = true;
    this.defalt_height = "full_height";
  }

  nextSlide(index) {
    
    this.cImageIndex = index;
    if (this.isDesktop) {
      if (this.cImageIndex + 5 < this.getProduct.length)
        this.cImageIndex = this.cImageIndex + 4;
      else this.cImageIndex = 0;
    } else {
      if (this.cImageIndex + 1 < this.getProduct.length)
        this.cImageIndex = this.cImageIndex + 1;
      else this.cImageIndex = 0;
    }
  }
  names: any;
  allFlag:boolean=false
  openCity(index, idx) {
    if(index==5){
      this.allFlag=true
      
    }
    
    
    this.tabIndex =0
    // this.tabIndex=index;
    // console.log(this.getProduct[this.cImageIndex].productBeanList[this.tabIndex])
    this.spinner1 = 0;
    this.spinner2 = 0;
    this.spinner3 = 0;
    this.spinner4 = 0;
    this.sliderIndex = idx;
    this.show = idx;

    this.reset();
    this.tabs[index].active = 'active';
    this.tabs[index].tabcontent = 'tabcontent';
    this.names = this.getProduct[idx].name;
    
  }

  previousSlide() {
    if (this.cImageIndex > 0)
      this.cImageIndex = this.cImageIndex - 4;
    else this.cImageIndex = this.getProduct.length - 1;
  }
  nextSlideTab(id) {
    if (this.isDesktop) {
      
      if(this.getProduct[id].productsCategoryBean.length >5){
        if (this.tabIndex + 5 <= this.getProduct[id].productsCategoryBean.length)
        this.tabIndex = this.tabIndex + 1;
      else {
        if(this.tabIndex>this.getProduct[id].productsCategoryBean.length){
          this.tabIndex = this.tabIndex + 1;
        }
        // this.tabIndex = 0;
    // } else {
    //   if (this.tabIndex + 1 < this.getProduct[this.cImageIndex].productsCategoryBean.length)
    //     this.tabIndex = this.tabIndex + 1;
    //   else this.tabIndex = 0;
    // }
      }
    } }
     
  }
  previousSlideTab(id) {
    
    if(this.getProduct[id].productsCategoryBean.length >5){
      if (this.tabIndex + 4 <= this.getProduct[id].productsCategoryBean.length)
      this.tabIndex = this.tabIndex - 1;
    else {
      if(this.tabIndex>this.getProduct[id].productsCategoryBean.length){
        this.tabIndex = this.tabIndex - 1;
      }
    }
  }
    // if(this.getProduct[id].productsCategoryBean.length >5){
    //   if (this.tabIndex > 3)
    //   this.tabIndex = this.tabIndex - 1;
    // else {
    //   if(this.tabIndex>this.getProduct[id].productsCategoryBean.length){
    //     this.tabIndex = this.tabIndex - 1;
    //   }
    // }
    // }
    // else{
     
    //     if(this.tabIndex>this.getProduct[id].productsCategoryBean.length){
    //       this.tabIndex = this.tabIndex - 1;
    //     }
    // }
    
  }
  sectionFlag:boolean=false;
  details:any[]=[]
  forsection(id){
 if(id!=0){
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let params:any = {}
  params.productId = id
  this.user.getProductDetails(params, headers).subscribe((data: any) => {
       this.details=[];
  this.sectionFlag = !this.sectionFlag;
    let responce = data;
    this.details.push(data.PRODUCT_DETAILS);
    
   
  })
 }else{
   this.sectionFlag = false
   this.qtyP=0
 }

console.log(this.details)
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

  qtyP:any=1;
  add(qty,id){
    this.qtyP = qty;
    
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
        //  console.log(data1)
        
        this.router.navigate(['shopping_cart'],this.cookieCartIdNew);
        });
      
  }
}
