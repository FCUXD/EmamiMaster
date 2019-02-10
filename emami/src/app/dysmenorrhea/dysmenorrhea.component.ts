import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dysmenorrhea',
  templateUrl: './dysmenorrhea.component.html',
  styleUrls: ['./dysmenorrhea.component.css']
})
export class DysmenorrheaComponent implements OnInit {

  lat:number =17.655555;
  lng:number =73.45;
  // url="plant_banner.jpg"
  spinner=0;
  //tabs product cart
  recent_order:any[];
  keep_healthy:any[];
  address:any[];
  recommendation:Array<any>=[];
  constructor() {
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
this.recommendation=[{pimg:'assets/images/zandulilima.png',product:'Zandu Lalima',description:'Lalima is a 100% Ayurvedic Blood &...',price:'175',offer:'10%',},
{pimg:'assets/images/zandulilima.png',product:'Zandu Lalima',description:'Lalima is a 100% Ayurvedic Blood &...',price:'175',offer:'10%',},
{pimg:'assets/images/zandulilima.png',product:'Zandu Lalima',description:'Lalima is a 100% Ayurvedic Blood &...',price:'175',offer:'10%',},

]
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
}

