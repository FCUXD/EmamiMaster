import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-slider',
  templateUrl: './landing-slider.component.html',
  styleUrls: ['./landing-slider.component.css']
})
export class LandingSliderComponent implements OnInit {

  constructor() { }

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
    imageURL:'health_areas.png',
    // cardTitle:'Health Areas',
    },
    {
      imageURL:'book_appointment.png',
      // cardTitle:'Consult Ayurvedic Doctor',
      },
    {
      imageURL:'Float2.png',
      // cardTitle:'Buy Ayurvedic Products',
      },
      {
        imageURL:'health_areas.png',
        // cardTitle:'Health Areas',
        },
        {
          imageURL:'book_appointment.png',
          // cardTitle:'Consult Ayurvedic Doctor',
          },
        {
          imageURL:'Float2.png',
          // cardTitle:'Buy Ayurvedic Products',
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

 
  default="active";
  default2="default";
  default3="default";
  selectSlide(no){

    this.cImageIndex=no;
    if(no==0){
this.default="active";
this.default2="default2";
this.default3="default3";
    }
      
    if(no==1){
      this.default="default";
      this.default2="active";
      this.default3="default3";
          }

          if(no==2){
            this.default="default";
            this.default2="default2";
            this.default3="active";
                }
  }

}
