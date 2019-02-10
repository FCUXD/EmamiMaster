import { Component, OnInit, HostListener,Directive,HostBinding,Input } from '@angular/core';
import { SharingDataService } from 'src/app/sharing-data.service';
import { DataShareService } from 'src/app/service/data-share.service';
import { RestService } from 'src/app/services/rest.service';
import { Constants} from 'src/app/app.constants';
import { DataStorageService } from 'src/app/services/data-storage.service';
import Swal from 'sweetalert2';
import { DoctorService } from 'src/app/doctor.service';


@Component({
  selector: 'app-patient-navigation',
  templateUrl: './patient-navigation.component.html',
  styleUrls: ['./patient-navigation.component.css']
})
export class PatientNavigationComponent implements OnInit { 
  whichNav: any = [];
  navbar: boolean = false;
  flag: boolean = false;
  cartCounter: any;
  navbarOpen = false;
  navlink:string; 
  collapse:string = "closed";
  ayurvedicMenu :boolean=true;
  healthMenu :boolean=false;
  buyAuyurvedic :boolean=false;
  consultDoctorMenu :boolean=false;

  toggleNavbar() {
// this.show = !this.show
this.collapse = this.collapse == "open" ? 'closed' : 'open'; 
this.navbarOpen = !this.navbarOpen;
}
    // toggleNavbar() {
    //   this.navbarOpen = !this.navbarOpen;
    // }
    userDetails;
    userName:any; 
    isHovering = false;

    mouseHovering() {
        this.isHovering = true;
        this.isHovering2 = false;
        this.isHovering3 = false;
    }
    mouseLeft() {
        this.isHovering = false;
        this.isHovering2 = false;
        this.isHovering3 = false;
    }

    isHovering2 = false;
    mouseHovering2() {
        this.isHovering2 = true;
        this.isHovering = false;
        this.isHovering3 = false;

    }
    mouseLeft2() {
        this.isHovering2 = false;
        this.isHovering = false;
        this.isHovering3 = false;

    }

    isHovering3 = false;
    mouseHovering3() {
        this.isHovering3 = true;
        this.isHovering = false;
        this.isHovering2 = false;

    }
    mouseLeft3() {
        this.isHovering3 = false;
        this.isHovering = false;
        this.isHovering2 = false;

    } 
  
    menu(){
      if(this.navlink=="navlink"){
        this.navlink='menubar';
      }
      else if(this.navlink=="menubar"){
        this.navlink='menubar';
      }
    }

    constructor(private patientService : DataShareService,private constants:Constants, private doc:DoctorService,
      private restService:RestService,public dataStorageService:DataStorageService, private ds: SharingDataService) {
        //  dataStorageService.getuserDetails;
        // this.userDetails=JSON.parse(localStorage.getItem("data_p"));
        this.userDetails=localStorage.getItem("name");
        console.log(this.userDetails);
        // this.sring=this.userDetails.userData[0].first_name;
     //   this.navlink=["navlink","navlink","navlink","navlink","menubar","navlink","navlink","navlink"]; 

     }

   Dropi=[];
 string="Dropdown";
 sring="";
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
  // localStorage.clear();
}

//   clickfun(index){
//     console.log(index)
//     if(index==0){
//     //   this.patientService.navlink =  ["menubar","navlink","navlink","navlink","navlink","navlink","navlink","navlink"];
//       this.navlink=["navlink","navlink","navlink","navlink","navlink","navlink","navlink","navlink"];
//       this.patientService.navlink1 =  ["navlink","navlink","navlink","navlink","navlink","navlink","navlink","navlink"];
//     }
//     if(index==1){
  
//       this.navlink=["navlink","navlink","navlink","navlink","navlink","navlink","navlink","navlink"];
//       this.patientService.navlink1 =  ["navlink","navlink","navlink","navlink","navlink","navlink","navlink","navlink"];
//     }
//     if(index==2){
//       this.navlink=["navlink","navlink","navlink","navlink","navlink","navlink","navlink","navlink"]; 
//       this.patientService.navlink1 = ["navlink","navlink","navlink","navlink","navlink","navlink","navlink","navlink"];
//     }
//     if(index==3){
      
//       this.navlink=["navlink","navlink","navlink","navlink","navlink","navlink","navlink","navlink"];
//       this.patientService.navlink1=  ["navlink","navlink","navlink","navlink","navlink","navlink","navlink","navlink"];
//     }
// //    for(let i=0; i<this.navlink.length;i++){

// // if(i==index){

// //   this.navlink[i]="menubar"
// // }
// // else{
// //   this.navlink[i]="navlink"
// // }


// //    }
// //     this.navlink[index]="menubar";
   
 
//   } 

animateCart: any;
insideWhichModule:any=0;
ngOnInit() {
 
  var headers = new Headers({ 'Content-Type': 'application/json' });
  let params:any = {};
  params.aaa="aaa";
  this.doc.getProducts(params, headers).subscribe((data: any) => {
    let getProduct = data.mainCategoryList;
 
    let dataP = JSON.stringify(getProduct)
    localStorage.setItem("allProds", dataP)
  //  console.log(getProduct)
 
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
  //  console.log(getProduct)
 
  })

  this.insideWhichModule = localStorage.getItem("whichNavRecentlyClicked");
  if(this.patientService.getWhichNavClicked() == true){
    this.clickfun(4);
    this.patientService.setWhichNavClicked(false);
  }
  if(this.insideWhichModule == null){
    this.clickfun(4);
  }else{

    this.clickfun(this.insideWhichModule);
  }

    let whichNavClicked = this.ds.getWhichNavClicked();
    if (whichNavClicked == -1) {
        for (let i = 0; i < this.whichNav.length; i++) {
            this.whichNav[i] = false;

        }
    }
    else {
        for (let i = 0; i < this.whichNav.length; i++) {
            this.whichNav[i] = false;

        }
        this.whichNav[whichNavClicked] = true; 
      //  this.whichNav[4] = true; 
    }

    // localStorage.removeItem("cartCounter");
    setInterval(() => {
        this.cartCounter = localStorage.getItem("cartCounter");
        this.animateCart = localStorage.getItem("animateCart");
        //localStorage.setItem("animateCart", "false");
    }, 500);
  
}
@HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
  console.log(event);
  if(event.keyCode==27){
    this.custom='custom';
  }
}


clickfun(index:number) {
  localStorage.setItem("whichNavRecentlyClicked",index.toString());
    this.ds.setWhichNavClicked(index);

    this.ayurvedicMenu = (0==index) 
    this.healthMenu = (1==index)
    this.buyAuyurvedic = (2==index)
    this.consultDoctorMenu = (3==index)

//     for(let i=0; i<this.navlink.length;i++){
//       this.navlink[i]="navlink"
      
//         }
//          this.navlink[index]="menubar"

// }

}
}

