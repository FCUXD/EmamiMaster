import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health-area',
  templateUrl: './health-area.component.html',
  styleUrls: ['./health-area.component.css']
})
export class HealthAreaComponent implements OnInit {

  public showHeader:boolean=true;
  lat:number =17.655555;
  lng:number =73.45;
  // url="plant_banner.jpg"
  spinner=0;
  //tabs product cart
  recent_order:any[];
  keep_healthy:any[];
  address:any[];
  public daibetiesRoute:string = '../diabetes';
  public pilesRoute :string ="../Piles";
  public hypertensionRoute:string='../hypertension';
  public constipationRoute:string='../Constipation'
  constructor(public router:Router) {
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
   getHealthArea(text) {
    console.log(text);
  //  alert(text); 
  localStorage.setItem('key', text);
  if(text=="Hypertension"){
    // localStorage.setItem('key', "Circulatory System Disorders");
    localStorage.setItem('key', "Hypertension");
    this.router.navigate([this.hypertensionRoute]);
  }
  else if(text=="Constipation/IBS"){
  //  localStorage.setItem('key', "Digestive Health");
  localStorage.setItem('key', "Constipation");
    this.router.navigate(["Constipation"]);

  }
  else if(text=="Constipation"){
    // localStorage.setItem('key', "Digestive Health");
    localStorage.setItem('key', "Constipation");
    this.router.navigate(["Constipation"]);

  }
  else if(text=="Diarrhoea"){
    
    localStorage.setItem('key', "Diarrhoea");
    this.router.navigate(["diarhea"]);
  }
  else if(text=="Piles"){
    
    localStorage.setItem('key', "Piles");
    this.router.navigate(["Piles"]);
  }
  else if(text=="UTI/urology"){
    localStorage.setItem('key', "UTI");
    this.router.navigate(["uti"]);
  }
  else if(text=="Liver health/ Jaundice"){
    localStorage.setItem('key', "Liver Disease");
  //  localStorage.setItem('key', "Liver Disorder");
    this.router.navigate(["liverDiseases"]);
  }
  else if(text=="Dysmenorrhoea"){
  
    localStorage.setItem('key', "Dysmennorhoea");
    this.router.navigate(["dysmenorrhea"]);
  }
  // else if(text=="Gynaecological"){
    
  //   localStorage.setItem('key', "Gynaecological Disorders");
  //   this.router.navigate(["liverDiseases"]);
  // }
  else if(text=="Acne/Derma (Skin diseases)"){
    
    // localStorage.setItem('key', "Skin Disorders");
    localStorage.setItem('key', "Acne,Skin Diseases");
    this.router.navigate(["skindiseases"]);
  }
  else if(text=="Respiratory /Bronchitis / Asthma"){
    // localStorage.setItem('key', "Respiratory Disorders/Astama");
    localStorage.setItem('key', "Bronchitis,Asthma");
    this.router.navigate(["Asthma"]);
  }
  else if(text=="Asthma"){
    localStorage.setItem('key', "Respiratory Disorders/Astama");
  this.router.navigate(["Asthma"]);
}
  else if(text=="Diabetes"){
    localStorage.setItem('key', "Diabetes");
    this.router.navigate(["diabetes"]);
  }
  else if(text=="Erectile Dysfunction"){
   
    localStorage.setItem('key', "Erectile Dysfunction");
    this.router.navigate(["erectiledysfunction"]);
  }
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
    this.showHeader = !this.router.url.includes('patient-dashboard');
    if(this.router.url.includes('patient-dashboard')){
      this.daibetiesRoute = "/patient-dashboard/patient-diabetes";
      this.constipationRoute="/patient-dashboard/patient-constipation";
      this.hypertensionRoute="/patient-dashboard/patient-hypertension";
      this.pilesRoute="/patient-dashboard/patient-piles"
    }

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



}
