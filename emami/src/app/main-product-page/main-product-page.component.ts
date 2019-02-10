import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { UserService } from '../user.service';
import { SharingDataService } from '../sharing-data.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";
import { AuthService, SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider } from "angular-6-social-login";
import swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-product-page',
  templateUrl: './main-product-page.component.html',
  styleUrls: ['./main-product-page.component.css']
})
export class MainProductPageComponent implements OnInit {
  @Output() cookieCart = new EventEmitter<any>();
  // url="plant_banner.jpg"
  public showHeader:boolean=true;
  cImageIndex = 0;
  tabIndex = 0;
  spinner1 = 0;
  spinner2 = 0;
  spinner3 = 0;
  spinner4 = 0;
  getProduct: any;
  topProduct:any;
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
  catId:any;
  private mainCategoryList: any[] = [];
  private productCategoryBean: any = [];
 categoryname:any;

  constructor(private socialAuthService: AuthService,private http: HttpClient,
    private doc: DoctorService, private user:UserService, private share :SharingDataService,
    private router:Router,private route1: ActivatedRoute) {
      let params:any = {};
      this.doc.getAllTopProducts(params, headers).subscribe((data: any) => {
        this.topProduct = data.TOP_PRODUCTS;
       console.log( this.topProduct)
     
       let dataP = JSON.stringify( this.topProduct)
       localStorage.setItem("TopProducts", dataP)
      })
       


    this.prod = [{
      productId: "",
      qty: ""
    }]
    var headers = new Headers({ 'Content-Type': 'application/json' });
   
    params.aaa="aaa";
    this.doc.getProducts(params, headers).subscribe((data: any) => {
      this.getProduct = data.mainCategoryList;
     this.setVisibleCategory();
      console.log(this.getProduct)
      this.names = this.getProduct[0].name;
      this.catId= this.share.getProdCatId();
     
    //  this.nextSlide(this.catId)
     if(this.share.flag){
       for(let i=0;i<this.getProduct.length;i++){
         if(this.catId==this.getProduct[i].id){
           this.cImageIndex = i
           this.show =i
         }
       }
      this.names = this.getProduct[this.cImageIndex].name;
  
     this.share.flag = false
    }else{

    }
    })
    



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
      this.router.navigate(['/patient-dashboard/patient-dashbord-details']);
    });
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
  finalcounter:any;
  counter:any = 0;
  addToCart(product) {
    debugger
    console.log(product);

    let noOfQty=product.qty;
    let prodId = product.id;
    this.cart = JSON.stringify(this.qty);
    
    if (this.cookieCartIdNew == null) {
      this.cookieCartId = this.share.getCookieCartId();
      //this.cookieCartId = 0;
      
    }
    else{
    // let temp =  localStorage.getItem("cookieCart")
      this.cookieCartId = this.cookieCartIdNew
    }
    let params:any
    if(this.showHeader){
       params  = {
     
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
         // this.counter = this.finalcounter+ 1;
         // localStorage.setItem("cartCounter", this.counter);
         // this.finalcounter=this.counter;
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
     // this.cookieCartIdNew = localStorage.getItem('cid');
     // this.cookieCartIdNew=localStorage.getItem('cartId');
     // this.share.setCookieCartId(this.cookieCartIdNew)
     this.cookieCartIdNew = localStorage.getItem('cid');
     this.cookieCartIdNew=localStorage.getItem('cartId');
     this.share.setCookieCartId(this.cookieCartIdNew)
     });
    }else 
    if(!this.showHeader){
      let headers = new Headers({ 'Content-Type': 'application/json' });
      params  = {
        userId : JSON.parse(localStorage.getItem("userId")),
       productId :  prodId, // this.cart.productId.id,
       quantity :  noOfQty,
      
       };

       this.user.patientAddToCart(params,headers).subscribe((data: any) => {
       });
    }
     
 
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
     
    if (window.innerWidth > 576) {
      this.isDesktop = true;
    } else if(window.innerWidth < 576){
      this.isMobile = true;
    }
    this.showHeader = !this.router.url.includes('patient-dashboard');
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
    debugger
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
  
  sectionFlag:boolean=false;
  details:any;
  forsection(id){
 if(id!=0){
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let params:any = {}
  params.productId = id
  this.user.getProductDetails(params, headers).subscribe((data: any) => {
       this.details=[];
  // this.sectionFlag = !this.sectionFlag;
    let responce = data;
    this.details.push(data.PRODUCT_DETAILS);
    debugger
    let dataP = JSON.stringify(this.details)
localStorage.setItem("productDetails",dataP)
console.log(this.details)
  
this.router.navigate(['/productDetails'])

  })
 }else{
   this.sectionFlag = false
   this.qtyP=0
 }
 


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

 //by vikrant 
  visibleCategory=[];
  visibleCategoryCount=4;
  catIndex=0;
   temp:any;
  selectedCategory=null;
  catname:any;
  setVisibleCategory()
  {
    this.route1.queryParams.subscribe(params => {
      this.temp = params["name"];
      
     
    });
    if(this.temp!="" && this.temp!=undefined){this.categoryname =this.temp;}
    else{this.categoryname =localStorage.getItem('key');}
   
   //console.log(this.categoryname.toLowerCase( ))
     /////////////////////////Ketaki///////////////////////
var cnt=0;
var scroll="catpage";
     this.visibleCategory = [];
    if(this.categoryname!="" && this.categoryname!=undefined){
      var tempcount= this.getProduct.length;
      for (var i = 0; i < tempcount ; i++) {
        
        if(this.getProduct[i].name.toLowerCase()==this.categoryname.toLowerCase()){
        
         this.visibleCategory.push(this.getProduct[i + this.catIndex]) 
         if (this.getProduct.length - 1 < i + this.catIndex)
         cnt=i;
         break;
        // cnt=i;
        // if (this.getProduct.length - 1 < i + this.catIndex)
        // break;
        // this.visibleCategory.push(this.getProduct[i + this.catIndex]) 
        }
      }
      this.selectCategory(this.visibleCategory[cnt]); 
      document.querySelector('#' + scroll).scrollIntoView();
      localStorage.removeItem('key');
    } 
    else{
     
      for (var i = 0; i < this.visibleCategoryCount; i++) {
        if (this.getProduct.length - 1 < i + this.catIndex)
          break;
        this.visibleCategory.push(this.getProduct[i + this.catIndex]) 
      } 
  
      this.selectCategory(this.visibleCategory[0]);
    }
    
  }

  categoryNext()
  {
    if (this.catIndex + this.visibleCategoryCount < this.getProduct.length) {
      this.catIndex += 1;
  
        this.setVisibleCategory();
      }

  }

  categoryPrev()
  {
    if (this.catIndex > 0) {
      this.catIndex -= 1;
  
        this.setVisibleCategory();
      }
  }
 
  selectCategory(cat){
    // this.route1.queryParams.subscribe(params => {
    //  this.catname = params["name"];
     
    // });
    // if(this.catname==""){ this.selectedCategory=cat;}
    // else{ this.selectedCategory=this.catname;}
    this.selectedCategory=cat;
  }

  
  getFilteredCategories(){
    //     this.route1.queryParams.subscribe(params => {
    //  this.catname = params["name"];
     
    // });
    // if(this.catname==""){ this.selectedCategory=cat;}
    // else{ this.selectedCategory=this.catname;}
    if(this.selectedCategory)
     return this.getProduct.filter((cat)=> cat.id==this.selectedCategory.id);
    //return this.getProduct.filter((cat)=> cat.name==this.selectedCategory.name);
    else
    return this.getProduct;
  }


}
