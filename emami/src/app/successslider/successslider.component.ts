import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-successslider',
  templateUrl: './successslider.component.html',
  styleUrls: ['./successslider.component.css']
})
export class SuccesssliderComponent implements OnInit {

  constructor(private router: Router) {  this.setVisibleProducts()
  }

  isMobile=false;
  isDesktop=false;
  ngOnInit() {
  if(window.innerWidth>window.innerHeight){
    this.isDesktop=true;
  }else{
    this.isMobile=true;
  }
  }
  cImageIndex=0;

  carouselarr2:any=[
    {
    imageURL:'././assets/images/using-zandu.png',
    cardTitle:'Ajith has been using Zandu Pancharishta',
    cardText:'I have been using this product since last 8-9 years. Its very effective if you have issues with your digestion. But as all Ayurvedic products you have to use it for a longer period of time...It does work & improves your health. ',
    // id:'DiabetesTopTipsArticles'
    // this.router.navigate(['/PatientDashboard']);
    },
    {
      imageURL:'././assets/images/sikha-talks.png',
    cardTitle:'Shikha talks about Zandu Sugar Free Chyawanprash ',
    cardText:'My whole family likes it very much because it doesn t contain sugar yet tastes really good unlike other sugar-free Chyawanprash products... Happy to have it..',
      // id:'GurmarDiabetes'
      },
      {
        imageURL:'././assets/images/zandu-hony.png',
        cardTitle:'Sridhar has loved the Zandu Honey',
        cardText:'Excellent taste. Tastes like honey only no added sugar I have used other brands but  they are just sugar syrup. I should strongly recommend as it is very pure and genuine.',
        //  id:'PilesHabitArticles'
        },
        
                 
  ];
  slideCount=1
  nextSlide(){
    
if (this.tabIndex + this.visibleProdCount < this.carouselarr2.length) {
  this.tabIndex += this.slideCount;

  this.setVisibleProducts();

}
return;
  }
  previousSlide(){
    if (this.tabIndex > 0) {
      this.tabIndex -= this.slideCount;
  
      this.setVisibleProducts();
    }
    return;
  }
  visibleProds:any[]=[];
  visibleProdCount:any=1;
  tabIndex:any=0;
  setVisibleProducts() {
  
      this.visibleProds = [];
      for (var i = 0; i < this.visibleProdCount; i++) {
        if (this.carouselarr2.length - 1 < i + this.tabIndex )
          break;
        this.visibleProds.push(this.carouselarr2[i+this.tabIndex])
      }
      // this.querystring=null
      // this.getlatlng()
    }
    Route(id){
     
let route=id;
this.router.navigate([route])
    }
}
