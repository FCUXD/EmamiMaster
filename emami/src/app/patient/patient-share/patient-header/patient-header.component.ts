import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/service/data-share.service';
import { SharingDataService} from '../../../sharing-data.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-patient-header',
  templateUrl: './patient-header.component.html',
  styleUrls: ['./patient-header.component.css']
})
export class PatientHeaderComponent implements OnInit {
  pendingOrdersData:any=[];
  ordersData:any = [];
  navbarOpen = false;
  navlink =[];
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(private orders:UserService,private patientService : DataShareService,  private sharingDataService:SharingDataService) {
 
   }
  ngOnInit() {
    
    this.navlink=this.patientService.navlink; 
  } 



  clickfun(index){
    var tempObj:any = {};
    tempObj.flag = 1;
    tempObj.patientId =localStorage.getItem("userId");
    var json = tempObj;
    var headers = new Headers({ 'Content-Type': 'application/json' });
    this.orders.getMyOrdersData(json, headers).subscribe((data: any) => {
        this.pendingOrdersData = data;
        this.sharingDataService.setData(this.pendingOrdersData);
    //   if(data.orderList){
    //     this.pendingOrdersData = data.orderList;
    //   }
   });
   //this.pendingOrdersData = 
//    this.pendingOrdersData = {
//     "orderList": [
//         {
//             "orderDate": "23-Oct-2018",
//             "orderId": "20019861282",
//             "amount": "216.0",
//             "deliveryDate": "23-Oct-2018",
//             "productBeanObj": [
//                 {
//                     "imageUrl": "https://emamiproductlibrary.s3.amazonaws.com//SEP/09208144015842804862.png",
//                     "productName": "Zandu Balm (4.5 ml)",
//                     "sellingPrice": "10.0",
//                     "mrpPrice": "10.0",
//                     "doscount": "0.0",
//                     "qty": "1"
//                 },
//                 {
//                     "imageUrl": "https://emamiproductlibrary.s3.amazonaws.com//SEP/67101808902835804880.png",
//                     "productName": "Rhumasyl Liniment (100 ml)",
//                     "sellingPrice": "126.0",
//                     "mrpPrice": "140.0",
//                     "doscount": "0.0",
//                     "qty": "1"
//                 },
//                 {
//                     "imageUrl": "https://emamiproductlibrary.s3.amazonaws.com//AUG/57275923318176185957.png",
//                     "productName": "Zandu Pancharishta (200 ml)",
//                     "sellingPrice": "50.0",
//                     "mrpPrice": "55.0",
//                     "doscount": "0.0",
//                     "qty": "1"
//                 }
//             ]
//         },
//         {
//             "orderDate": "23-Oct-2018",
//             "orderId": "20019861280",
//             "amount": "216.0",
//             "deliveryDate": "23-Oct-2018",
//             "productBeanObj": [
//                 {
//                     "imageUrl": "https://emamiproductlibrary.s3.amazonaws.com//SEP/09208144015842804862.png",
//                     "productName": "Zandu Balm (4.5 ml)",
//                     "sellingPrice": "10.0",
//                     "mrpPrice": "10.0",
//                     "doscount": "0.0",
//                     "qty": "1"
//                 },
//                 {
//                     "imageUrl": "https://emamiproductlibrary.s3.amazonaws.com//SEP/67101808902835804880.png",
//                     "productName": "Rhumasyl Liniment (100 ml)",
//                     "sellingPrice": "126.0",
//                     "mrpPrice": "140.0",
//                     "doscount": "0.0",
//                     "qty": "1"
//                 },
//                 {
//                     "imageUrl": "https://emamiproductlibrary.s3.amazonaws.com//AUG/57275923318176185957.png",
//                     "productName": "Zandu Pancharishta (200 ml)",
//                     "sellingPrice": "50.0",
//                     "mrpPrice": "55.0",
//                     "doscount": "0.0",
//                     "qty": "1"
//                 }
//             ]
//         }
//     ]
// }
    
    
    console.log(index)
    if(index==0){
      
      this.navlink=["menubar","navlink","navlink","navlink","navlink","navlink","navlink","navlink"];
      this.patientService.navlink =  ["menubar","navlink","navlink","navlink","navlink","navlink","navlink","navlink"];
    }
    if(index==1){
  
      this.navlink=["navlink","menubar","navlink","navlink","navlink","navlink","navlink","navlink"];
      this.patientService.navlink =  ["navlink","menubar","navlink","navlink","navlink","navlink","navlink","navlink"];
    }
    if(index==2){
      this.navlink=["navlink","navlink","menubar","navlink","navlink","navlink","navlink","navlink"]; 
      this.patientService.navlink = ["navlink","navlink","menubar","navlink","navlink","navlink","navlink","navlink"];
    }
    if(index==3){
      
      this.navlink=["navlink","navlink","navlink","menubar","navlink","navlink","navlink","navlink"];
      this.patientService.navlink =  ["navlink","navlink","navlink","menubar","navlink","navlink","navlink","navlink"];
    }
    if(index==4){
      
      this.navlink=["navlink","navlink","navlink","menubar","navlink","navlink","navlink","navlink"];
      this.patientService.navlink =  ["navlink","navlink","navlink","navlink","menubar","navlink","navlink","navlink"];
    }
//    for(let i=0; i<this.navlink.length;i++){

// if(i==index){
//   debugger
//   this.navlink[i]="menubar"
// }
// else{
//   this.navlink[i]="navlink"
// }


//    }
//     this.navlink[index]="menubar";
   
 
  }
 
}
