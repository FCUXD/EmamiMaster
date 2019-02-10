import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topstories-slider',
  templateUrl: './topstories-slider.component.html',
  styleUrls: ['./topstories-slider.component.css']
})
export class TopstoriesSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  active=['active'];

  carouselarr:any=[
    {
    imageURL:'jogging.png',
    imageQuote:'Mrs. Sarita Shukla fight with Osteoarthritis',
    quoteBy:'Zandu gave me an Ayurvedic solution',
    quoteBy2:'for my health problem',
    },
    {
      imageURL:'jogging.png',
      imageQuote:'Mrs. Sarita Shukla fight with Osteoarthritis2',
      quoteBy:'Zandu gave me an Ayurvedic solution',
      quoteBy2:'for my health problem',
      },
      {
        imageURL:'jogging.png',
        imageQuote:'Mrs. Sarita Shukla fight with Osteoarthritis3',
        quoteBy:'Zandu gave me an Ayurvedic solution',
        quoteBy2:'for my health problem',
        }
  ];

  carouselImg=0;
  img:any; 
  curr_index=0;
  ChangeCarouselImg(i){
      this.carouselImg=i;
      this.curr_index=i;
      this.active=[];
      this.active[i]='active';
  }
  
  ChangePrev(img){
    if(this.curr_index>0){
      this.curr_index--;
      this.carouselImg=this.curr_index;
    }else{this.curr_index=this.carouselarr.length-1;
      this.carouselImg=this.curr_index;
    }
    this.active=[];
    this.active[this.curr_index]='active'; 
  }
  
  ChangeNext(img){
    if(this.curr_index<this.carouselarr.length-1){
      this.curr_index++;
      this.carouselImg=this.curr_index;
    }else{this.curr_index=0;
      this.carouselImg=this.curr_index;
    }
    this.active=[];
    this.active[this.curr_index]='active';
  }



}
