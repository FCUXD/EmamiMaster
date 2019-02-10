import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-immunity-slider',
  templateUrl: './immunity-slider.component.html',
  styleUrls: ['./immunity-slider.component.css']
})
export class ImmunitySliderComponent implements OnInit {

  spinner=0;
  down(index){
    
    if(this.spinner>0 ){
      
    this.spinner=this.spinner-1 
    }
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
    imageURL:'small_product.png',
    cardTitle:'Zandu Lalima1',
    cardText:'Lalima is a 100% Ayurvedic Blood &...',
    offer:'10% off',
    offerprice:'175',
    },
    {
    imageURL:'small_product.png',
    cardTitle:'Zandu Lalima2',
    cardText:'Lalima is a 100% Ayurvedic Blood &...',
    offer:'10% off',
    offerprice:'175',
      },
    {
      imageURL:'small_product.png',
      cardTitle:'Zandu Lalima3',
      cardText:'Lalima is a 100% Ayurvedic Blood &...',
      offer:'10% off',
    offerprice:'175'
      },
    {
      imageURL:'small_product.png',
      cardTitle:'Zandu Lalima4',
      cardText:'Lalima is a 100% Ayurvedic Blood &...',
      offer:'10% off',
      offerprice:'175'
      },
    {
      imageURL:'small_product.png',
      cardTitle:'Zandu Lalima5',
      cardText:'Lalima is a 100% Ayurvedic Blood &...',
      offer:'10% off',
      offerprice:'175'
      },
    {
      imageURL:'small_product.png',
      cardTitle:'Zandu Lalima6',
      cardText:'Lalima is a 100% Ayurvedic Blood &...',
      offer:'10% off',
      offerprice:'175'
      },
    
    {
      imageURL:'small_product.png',
      cardTitle:'Zandu Lalima7',
      cardText:'Lalima is a 100% Ayurvedic Blood &...',
      offer:'10% off',
      offerprice:'175'
      }
    
  ];

  nextSlide(){
    if(this.isDesktop){
      if(this.cImageIndex+4<this.carouselarr2.length)
      this.cImageIndex=this.cImageIndex+1;
      else this.cImageIndex=0;
    }else{
      if(this.cImageIndex+1<this.carouselarr2.length)
      this.cImageIndex=this.cImageIndex+1;
      else this.cImageIndex=0;
    }
  }
  previousSlide(){
    if(this.cImageIndex>0)
    this.cImageIndex=this.cImageIndex-1;
    else this.cImageIndex=this.carouselarr2.length-1;
  }


}
