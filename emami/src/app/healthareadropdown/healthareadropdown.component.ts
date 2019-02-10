import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
import { jsonpCallbackContext } from '@angular/common/http/src/module';
@Component({
  selector: 'app-healthareadropdown',
  templateUrl: './healthareadropdown.component.html',
  styleUrls: ['./healthareadropdown.component.css']
})
export class HealthareadropdownComponent implements OnInit {
 
   constructor(private router: Router) { }
 

  ngOnInit() {
  }
  
  getHealthArea(text) {
    
    console.log(text);
  //  alert(text); 
  localStorage.setItem('key', text);
  if(text=="Hypertension"){
    localStorage.setItem('key', "Hypertension");
    this.router.navigate(["hypertension"]);
  }
  else if(text=="Constipation"){
    // localStorage.setItem('key', "Digestive Health,Laxative / Constipation,Musculoskeletal Disorders");
    localStorage.setItem('key', "Constipation");
   this.router.navigate(["Constipation"]);

  }
  else if(text=="Diarrhoea"){
    localStorage.setItem('key', "Digestive Health,Respiratory Disorders,Liver Disorder,Haematological Disorders,Mouth Ulcer");
    this.router.navigate(["diarhea"]);
  }
  else if(text=="Piles"){
  
    localStorage.setItem('key', "Haemorrhoids");
    this.router.navigate(["Piles"]);
  }
  else if(text=="UTI / Urology"){
    localStorage.setItem('key', "Women Healthcare,Renal/Genital Disorders,Musculoskeletal Disorders,Haematological Disorders");
    this.router.navigate(["uti"]);
  }
  else if(text=="Liver health / Jaundice"){
    
    // localStorage.setItem('key', "Liver Disorder");
    // localStorage.setItem('key', "Digestive,Liver Disorder");
    localStorage.setItem('key', "Liver Disease");
    this.router.navigate(["liverDiseases"]);
  }
  else if(text=="Dysmenorrhoea"){
    
    // localStorage.setItem('key', "Liver Disorder");
    localStorage.setItem('key', "Dysmennorhoea");
    this.router.navigate(["dysmenorrhea"]);
  }
  else if(text=="Gynaecological"){
    
    localStorage.setItem('key', "Gynaecological Disorders");
    this.router.navigate(["liverDiseases"]);
  }
  else if(text=="Acne / Derma (Skin diseases)"){
    
    localStorage.setItem('key', "Skin Disorders,Blood and skin Purifier");
    this.router.navigate(["skindiseases"]);
  }
  else if(text=="Respiratory / Bronchitis / Asthma"){
    // localStorage.setItem('key', "Respiratory Disorders/Astama");
    localStorage.setItem('key', "Respiratory Disorders/Astama,Vitality,Digestive Health");
    this.router.navigate(["Asthma"]);
  }
  else if(text=="Asthma"){
  //  localStorage.setItem('key', "Respiratory Disorders/Astama");
  localStorage.setItem('key', "Respiratory Disorders/Astama,Vitality,Digestive Health");
  this.router.navigate(["Asthma"]);
}
  else if(text=="Diabetes"){
    // localStorage.setItem('key', "Diabetes,Renal / Genital Disorders");
    localStorage.setItem('key', "Diabetes");
    this.router.navigate(["diabetes"]);
  }
  else if(text=="Erectile Dysfunction"){
    // localStorage.setItem('key', "Vitality");
    localStorage.setItem('key', "Erectile Dysfunction");
    this.router.navigate(["erectiledysfunction"]);
  }
 
  }
}
class MyComponent {
// constructor(private router: Router) { }
//  doSomething(text) {Erectile Dysfunction / ED
//     console.log(text);
//     //this.router.navigate(["productDetails"], text);
//     alert(text);
//   }
}
