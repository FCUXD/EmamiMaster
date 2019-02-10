import { Component, OnInit, HostListener,Directive,HostBinding,Input } from '@angular/core';
import { SharingDataService } from '../../sharing-data.service';
import { UserService } from 'src/app/user.service';
import { DoctorSearchComponent } from 'src/app/doctor/doctor-search/doctor-search.component';
import { DoctorService } from 'src/app/doctor.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  item="Above 12 days"
  
  tabId:any;
  SUGGESTED_PRODUCTS:any[]=[];
  pendingOrdersData:any = [];
  deliveredOrdersData:any = [];
  canceledOrdersData:any = [];
  cancelLength:any;
  deliverLength:any;
  whichTabToShowCount:any = undefined;
  spinner=0;
  Contacts = ["abc","pqr","lmn","xyz"];
  tabs = [
    {active:'active',tabcontent:'tabcontent'},
    {active:'',tabcontent:'hide'},
    {active:'',tabcontent:'hide'},
    {active:'',tabcontent:'hide'},
  ];
  default:string="default";
  default2="tab-hbright";
  default3="default3";
  default4="default4";
 tempProduct:any[]=[];
openTabs(index){
  this.item="Above 12 days"
  this.tabId = index;
    this.reset();  
    this.tabs[index].active='active';
    this.tabs[index].tabcontent='tabcontent';
    
    if(index==0){
      debugger
      this.whichTabToShowCount = 1;
      this.default="default";
      this.default2="tab-hbright";
      this.default3="tab-hbright"
      this.default4="default4"
      var tempObj:any = {};
      tempObj.flag = 1;
      tempObj.dateFlag = 4;
      tempObj.patientId = localStorage.getItem("userId");
      var json = tempObj;
      var headers = new Headers({ 'Content-Type': 'application/json' });
      this.user.getMyOrdersData(json, headers).subscribe((data: any) => {
        // if(data.orderList){
          this.pendingOrdersData = data;
          this.pendingLength = (this.pendingOrdersData.orderList[0].productBeanObj.length);
          // this.SUGGESTED_PRODUCTS = data.SUGGESTED_PRODUCTS;
          this.SUGGESTED_PRODUCTS=[];
          this.tempProduct = data.SUGGESTED_PRODUCTS;
          for (var i = 0; i < this.visibleProdCount; i++) {
            // if (this.tempProduct.length - 1 < i ){
              
            this.SUGGESTED_PRODUCTS.push(this.tempProduct[i])
            this.SUGGESTED_PRODUCTS[i].qty = 1;
            // }
             
        //   }
        // }else if(data.SUGGESTED_PRODUCTS){
          // this.SUGGESTED_PRODUCTS=[];
          // this.tempProduct = data.SUGGESTED_PRODUCTS;
          // for (var i = 0; i < this.visibleProdCount; i++) {
          //   // if (this.tempProduct.length - 1 < i ){
              
          //   this.SUGGESTED_PRODUCTS.push(this.tempProduct[i])
          //   this.SUGGESTED_PRODUCTS[i].qty = 0;
          //   // }
             
          // }
        }
     
     });
    }

    
    if(index==1){
    debugger
      
      this.whichTabToShowCount =2;
      var tempObj:any = {};
      tempObj.flag = 2;
      tempObj.dateFlag = 4;
      tempObj.patientId = localStorage.getItem("userId");
      var json = tempObj;
      var headers = new Headers({ 'Content-Type': 'application/json' });
      this.user.getMyOrdersData(json, headers).subscribe((data: any) => {
        debugger
        this.deliveredOrdersData = data.orderListByDays;
        if(this.deliveredOrdersData.length>0){
          this.deliveredOrdersData = data;
          this.deliverLength = (this.deliveredOrdersData.orderListByDays[0].productBeanObj.length);
          // this.SUGGESTED_PRODUCTS = data.SUGGESTED_PRODUCTS;
         // this.SUGGESTED_PRODUCTS.qty = 0;
         this.SUGGESTED_PRODUCTS=[];
        this.tempProduct = data.SUGGESTED_PRODUCTS;
        for (var i = 0; i < this.visibleProdCount; i++) {
          // if (this.tempProduct.length - 1 < i ){
          this.SUGGESTED_PRODUCTS.push(this.tempProduct[i])
          this.SUGGESTED_PRODUCTS[i].qty = 1;
          // }
           
        }
        // }else if(data.SUGGESTED_PRODUCTS){
        
        }
        debugger
        this.SUGGESTED_PRODUCTS=[];
        this.tempProduct = data.SUGGESTED_PRODUCTS;
        for (var i = 0; i < this.visibleProdCount; i++) {
          // if (this.tempProduct.length - 1 < i ){
            
          this.SUGGESTED_PRODUCTS.push(this.tempProduct[i])
          this.SUGGESTED_PRODUCTS[i].qty = 1;
          // }
           
        }
     });
//     this.deliveredOrdersData = {
//       "orderList": [
//           {
//               "orderDate": "22-Oct-2018",
//               "orderId": "20019851279",
//               "amount": "40.0",
//               "deliveryDate": "22-Oct-2018",
//               "productBeanObj": [
//                   {
//                       "imageUrl": "https://emamiproductlibrary.s3.amazonaws.com//SEP/09208144015842804862.png",
//                       "productName": "Zandu Balm (4.5 ml)",
//                       "sellingPrice": "10.0",
//                       "mrpPrice": "10.0",
//                       "doscount": "0.0",
//                       "qty": "1"
//                   }
//               ]
//           }
//       ]
//   }

      this.default="default";
      this.default2="default2";
      this.default3="tab-hbright"
      this.default4="default4"
    }
    if(index==2){
      
      this.whichTabToShowCount =3;
      var tempObj:any = {};
      tempObj.flag = 3;
      tempObj.dateFlag = 4;
      tempObj.patientId = localStorage.getItem("userId");
      var json = tempObj;
      var headers = new Headers({ 'Content-Type': 'application/json' });
      this.user.getMyOrdersData(json, headers).subscribe((data: any) => {
        this.canceledOrdersData = data.orderListByDays;
        if(this.canceledOrdersData.length>0){
         
         
          this.cancelLength = (this.canceledOrdersData.orderListByDays[0].productBeanObj.length);
          // this.SUGGESTED_PRODUCTS = data.SUGGESTED_PRODUCTS;
          this.SUGGESTED_PRODUCTS=[];
        this.tempProduct = data.SUGGESTED_PRODUCTS;
        for (var i = 0; i < this.visibleProdCount; i++) {
          // if (this.tempProduct.length - 1 < i ){
            
          this.SUGGESTED_PRODUCTS.push(this.tempProduct[i])
          this.SUGGESTED_PRODUCTS[i].qty = 1;
          }
           
        }
        // }else if(data.SUGGESTED_PRODUCTS){
          this.SUGGESTED_PRODUCTS=[];
          this.tempProduct = data.SUGGESTED_PRODUCTS;
          for (var i = 0; i < this.visibleProdCount; i++) {
            // if (this.tempProduct.length - 1 < i ){
              
            this.SUGGESTED_PRODUCTS.push(this.tempProduct[i])
            this.SUGGESTED_PRODUCTS[i].qty = 1;
            // }
             
          }
        
       
     });
     

      this.default="tab-hbright";
      this.default2="default2";
      this.default3="default3";
      this.default4="default4"
    }
    if(index==3){
      this.whichTabToShowCount = 4;
      this.default="tab-hbright";
      this.default2="tab-hbright";
      this.default3="default3"
      this.default4="default4"
      var tempObj:any = {};
      tempObj.flag = 4;
      tempObj.dateFlag = 4;
      tempObj.patientId = localStorage.getItem("userId");
      var json = tempObj;
      var headers = new Headers({ 'Content-Type': 'application/json' });
      this.user.getMyOrdersData(json, headers).subscribe((data: any) => {
        // if(data.orderList){
          this.pendingOrdersData = data;
          this.pendingLength = (this.pendingOrdersData.orderListByDays[0].productBeanObj.length);
          // this.SUGGESTED_PRODUCTS = data.SUGGESTED_PRODUCTS;
        // }
        this.SUGGESTED_PRODUCTS=[];
        this.tempProduct = data.SUGGESTED_PRODUCTS;
        for (var i = 0; i < this.visibleProdCount; i++) {
          // if (this.tempProduct.length - 1 < i ){
            
          this.SUGGESTED_PRODUCTS.push(this.tempProduct[i])
          this.SUGGESTED_PRODUCTS[i].qty = 1;
          // }
           
        }
     });
    }
    }
  
    reset(){
      for(let i=0;this.tabs.length>i;i++){
        this.tabs[i].active='';
        this.tabs[i].tabcontent='hide';
      }
    }
  tableoneheader:Array<any>=[];
  tableonedata:Array<any>=[];
  tabletwoheader:Array<any>=[];
  tabletwodata:Array<any>=[];
  recommendation:Array<any>=[];

  constructor(private user:UserService  ,private sharingDataService:SharingDataService,private doctorService:DoctorService) {

    this.Dropi=[{name:"Last 3 days",id:1},{name:"Last 6 days",id:2},{name:"Last 12 days",id:3},{name:"Above 12 days",id:4}];
    this.tableoneheader=[{orderdate:'9th june,18',expecteddelivery:'12th june,18',oid:'00125876',total:'80.00',}]
    this.tableonedata=[{pimg:'assets/images/zendupanch.png',product:'Satavarex (250 gm)',total:'80.00',iprice:'100.00',save:'20',qty:'1'},]
    this.tabletwoheader=[{orderdate:'9th june,18',expecteddelivery:'12th june,18',oid:'00125876',total:'80.00',}]
    this.tabletwodata=[{pimg:'assets/images/zendupanch.png',product:'Satavarex (250 gm)',total:'80.00',iprice:'100.00',save:'20',qty:'1'},
    {pimg:'assets/images/zendupanch.png',product:'Satavarex (250 gm)',total:'80.00',iprice:'100.00',save:'20',qty:'1'},
    {pimg:'assets/images/zendupanch.png',product:'Satavarex (250 gm)',total:'80.00',iprice:'100.00',save:'20',qty:'1'},
    {pimg:'assets/images/zendupanch.png',product:'Satavarex (250 gm)',total:'80.00',iprice:'100.00',save:'20',qty:'1'},
    ]
    this.recommendation=[{pimg:'assets/images/zandulilima.png',product:'Zandu Lalima',description:'Lalima is a 100% Ayurvedic Blood &...',price:'175',offer:'10%',},
    {pimg:'assets/images/zandulilima.png',product:'Zandu Lalima',description:'Lalima is a 100% Ayurvedic Blood &...',price:'175',offer:'10%',},
    {pimg:'assets/images/zandulilima.png',product:'Zandu Lalima',description:'Lalima is a 100% Ayurvedic Blood &...',price:'175',offer:'10%',},
    
  ]

  }

Dropi=[];
 sring="Last 3 days";

  custom="custom";
drop(){
  if(this.custom=="custom"){
    this.custom='show';
  }
  else if(this.custom=="show"){
    this.custom='custom';
  }

}
closed(){
  this.custom='custom';
}

down(){
  if(this.spinner>0 ){
    
  this.spinner=this.spinner-1 
  }
  }
  reduce(item) {
    debugger
    if (item.qty)
      item.qty -= 1;
  }
  
  add(item) {
    
    debugger
    item.qty = (item.qty || 0) + 1;
  }
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    console.log(event);
    if(event.keyCode==27){
      this.custom='custom';
    }
  }
  pendingLength:any;
  ngOnInit() {
    this.item="Above 12 days"
    this.tabId = 0;
      this.whichTabToShowCount =1;
      var tempObj:any = {};
      tempObj.flag = 1;
      tempObj.dateFlag = 4;
      tempObj.patientId = localStorage.getItem("userId");
      var json = tempObj;
      var headers = new Headers({ 'Content-Type': 'application/json' });
      this.user.getMyOrdersData(json, headers).subscribe((data: any) => {
        
        if(data.orderListByDays){
        let  visibleProdCount1=5;
          this.pendingOrdersData = data;
          this.pendingLength = (this.pendingOrdersData.orderListByDays[0].productBeanObj.length);
          this.SUGGESTED_PRODUCTS = data.SUGGESTED_PRODUCTS;
         // let SUGGESTED_PRODUCTS1:any[] = data.SUGGESTED_PRODUCTS;
          for (var i = 0; i < visibleProdCount1; i++) {
             if (this.SUGGESTED_PRODUCTS.length-1 < i )
              break;
           // this.SUGGESTED_PRODUCTS.push(SUGGESTED_PRODUCTS1[i])
            this.SUGGESTED_PRODUCTS[i].qty = 1;
             
             
          }
        }
     });
     
     
      this.default="default";
      this.default2="default2";
      this.default3="default3";
      this.default4="default4";
    
  }
  visibleProdCount=4;
  filterChange(idd){

// alert(this.whichTabToShowCount)
for (let index = 0; index < this.Dropi.length; index++) {
  if(idd.target.value==this.Dropi[index].name){
    let id = this.Dropi[index].id;
      var tempObj:any = {};
    tempObj.flag = this.tabId+1;
    tempObj.dateFlag = id;
    tempObj.patientId = localStorage.getItem("userId");
    var json = tempObj;
    var headers = new Headers({ 'Content-Type': 'application/json' });
    this.user.getMyOrdersData(json, headers).subscribe((data: any) => {
      let SUGGESTED_PRODUCTS1:any[] = data.SUGGESTED_PRODUCTS;
      // for (var i = 0; i < this.visibleProdCount; i++) {
      //   if (SUGGESTED_PRODUCTS1.length - 1 < i )
      //     break;
      //   this.SUGGESTED_PRODUCTS.push(this.SUGGESTED_PRODUCTS[i ])
      //   this.SUGGESTED_PRODUCTS[i].qty = 1;
      // }
      for (var i = 0; i < this.visibleProdCount; i++) {
        if (this.SUGGESTED_PRODUCTS.length-1 < i )
         break;
      // this.SUGGESTED_PRODUCTS.push(SUGGESTED_PRODUCTS1[i])
       this.SUGGESTED_PRODUCTS[i].qty = 1;
        
        
     }
      if(tempObj.flag==1){
        if(data.orderListByDays){
          this.pendingOrdersData = data;
          this.pendingLength = (this.pendingOrdersData.orderListByDays[0].productBeanObj.length);
         
        }
      
      }
      if(tempObj.flag==2){
        if(data.orderListByDays){
          this.deliveredOrdersData = data;
          this.deliverLength = (this.deliveredOrdersData.orderListByDays[0].productBeanObj.length);
          let SUGGESTED_PRODUCTS1:any[] = data.SUGGESTED_PRODUCTS;
          for (var i = 0; i < this.visibleProdCount; i++) {
            if (SUGGESTED_PRODUCTS1.length - 1 < i )
              break;
            this.SUGGESTED_PRODUCTS.push(this.SUGGESTED_PRODUCTS[i ])
            this.SUGGESTED_PRODUCTS[i].qty = 1;
          }
        }
      }

      if(tempObj.flag==3){
        if(data.orderListByDays){
         
          this.canceledOrdersData = data;
          this.cancelLength = (this.canceledOrdersData.orderListByDays[0].productBeanObj.length);
          let SUGGESTED_PRODUCTS1:any[] = data.SUGGESTED_PRODUCTS;
          for (var i = 0; i < this.visibleProdCount; i++) {
            if (SUGGESTED_PRODUCTS1.length - 1 < i )
              break;
            this.SUGGESTED_PRODUCTS.push(this.SUGGESTED_PRODUCTS[i])
            this.SUGGESTED_PRODUCTS[i].qty = 1;
          }
        }
      }
    });


  }
  
}
  }


  cookieCartIdNew
  cookieCartId
  counter:any = 0;
  addToCart(product) {
    debugger
    console.log(product);

    let noOfQty=product.qty;
    let prodId = product.id;
     
    // this.cart = JSON.stringify(this.qty);
    
    if (this.cookieCartIdNew == null) {
      this.cookieCartId = 0;
    }
    else{
    // let temp =  localStorage.getItem("cookieCart")
      this.cookieCartId = this.cookieCartIdNew
    }
     let params :any = {
      userId : localStorage.getItem("userId"),
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
  // this.share.setCookieCartId(this.cookieCartIdNew)
  //localStorage.setItem("cookieCart",this.cookieCartIdNew)
  //  console.log(data1)
  });
  }
 
}
