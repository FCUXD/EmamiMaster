import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-ahaarsilder',
  templateUrl: './ahaarsilder.component.html',
  styleUrls: ['./ahaarsilder.component.css']
})
export class AhaarsilderComponent implements OnInit {

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
    imageURL:'././assets/images/ahaar-silder.png',
    cardText:'Animal-proteins such as milk and curds can be consumed with sprouted grains or vegetables, as these proteins are easily digestible. ',
    // id:'DiabetesTopTipsArticles'
    // this.router.navigate(['/PatientDashboard']);
    },
    {
      imageURL:'././assets/images/ahaar-silder.png',
    cardTitle:'Shikha talks about Zandu Sugar Free Chyawanprash ',
    cardText:'Animal-proteins such as milk and curds can be consumed with sprouted grains or vegetables, as these proteins are easily digestible.',
      // id:'GurmarDiabetes'
      },
      {
        imageURL:'././assets/images/ahaar-silder.png',
        cardTitle:'Sridhar has loved the Zandu Honey',
        cardText:'Animal-proteins such as milk and curds can be consumed with sprouted grains or vegetables, as these proteins are easily digestible.',
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
