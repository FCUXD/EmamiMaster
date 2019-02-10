import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 


@Component({
  selector: 'app-ayurvedicspecialists-slider',
  templateUrl: './ayurvedicspecialists-slider.component.html',
  styleUrls: ['./ayurvedicspecialists-slider.component.css']
})
export class AyurvedicspecialistsSliderComponent implements OnInit {

  constructor(private router: Router) {  
  }

  isMobile=false;
  isDesktop=false;
  ngOnInit() {
    let t:any=576
  if(window.innerWidth>(576)){
    this.isDesktop=true;
  }else if(window.innerWidth<(576)){
    
    this.isMobile=true;
  }
  this.setVisibleProducts()
  }
  cImageIndex=0;

  carouselarr2:any=[
    {
     imageURL:'././assets/images/LandingSliderBG3.png',
    cardTitle:'Bhavesh Verma',
    cardText:'BAMS, 14 Years exp',
    cardButton:'Sexual Disorders, Pain management, Gastric and Piles Fissure Fistula',
    // id:'DiabetesTopTipsArticles'
    // this.router.navigate(['/PatientDashboard']);
    },
    {
       imageURL:'././assets/images/LandingSliderBG2.png',
      cardTitle:'Punit Tiwari',
      cardText:'BAMS, 5 Years exp',
      cardButton:'Medicines',
      // id:'GurmarDiabetes'
      },
      {
      imageURL:'././assets/images/LandingSliderBG.png',
        cardTitle:'Ruma Dey',
        cardText:'M.D, BAMS, 8 Years exp',
         cardButton:'Kaya Chikitsa (Medicine)',
        //  id:'PilesHabitArticles'
        },
       
          {
            imageURL:'././assets/images/shibangi.png',
           cardTitle:'Shibangi Das Basu',
           cardText:'M.D, BAMS, 10 Years exp',
           cardButton:'Kriya Sharir (Physiology)',
           // id:'DiabetesTopTipsArticles'
           // this.router.navigate(['/PatientDashboard']);
           },  
           {
            imageURL:'././assets/images/LandingSliderBG4.png',
            cardTitle:'Updesh Rajoria',
            cardText:'BAMS, 9 Years exp',
            cardButton:'Pulsediagnosis ayurveda physician',
         //   id:'PilesSuranArticles'
            },
           {
              imageURL:'././assets/images/gayatree.png',
             cardTitle:'Gayatree Nayak',
             cardText:'BAMS, 16 Years exp',
             cardButton:'Medicines',
             // id:'GurmarDiabetes'
             }, 
             
           
    
  ];
  slideCount=1
  nextSlide(){
    
    if(this.isDesktop){
      if (this.tabIndex + this.visibleProdCount < this.carouselarr2.length) {
        this.tabIndex += this.slideCount;
      
        this.setVisibleProducts();
      
      return;
        }
    }

  if(this.isMobile){
    
    if (this.tabIndex + this.MobCouunt < this.carouselarr2.length) {
      this.tabIndex += this.slideCount;
    
      this.setVisibleProducts();
      return;
  }
  }
}
  previousSlide(){
    if (this.tabIndex > 0) {
      this.tabIndex -= this.slideCount;
  
      this.setVisibleProducts();
    }
    return;
  }
  visibleProds:any[]=[];
  MobProds:any[]=[];
  MobCouunt:any=1;
  visibleProdCount:any=4;
  tabIndex:any=0;
  setVisibleProducts() {
  
      this.visibleProds = [];
     this.MobProds=[];
    if(this.isDesktop){
      for (var i = 0; i < this.visibleProdCount; i++) {
        if (this.carouselarr2.length - 1 < i + this.tabIndex )
          break;
        this.visibleProds.push(this.carouselarr2[i+this.tabIndex])
      
       
      }
    }
    else if(this.isMobile){
      for (var i = 0; i < this.MobCouunt; i++) {
        if (this.carouselarr2.length - 1 < i + this.tabIndex )
          break;
        this.MobProds.push(this.carouselarr2[i+this.tabIndex])
      
       
      }
    }
      
     
      // this.querystring=null
      // this.getlatlng()
    }
//     Route(id){
     
// let route=id;
// this.router.navigate([route])
//     }
}
