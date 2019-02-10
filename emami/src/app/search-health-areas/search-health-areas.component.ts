import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-health-areas',
  templateUrl: './search-health-areas.component.html',
  styleUrls: ['./search-health-areas.component.css']
})
export class SearchHealthAreasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  active=['active'];

  carouselarr:any=[
    {
    imageURL:'maternity-health.png',
    date:'AUGUEST 10,2018',
    quoteBy2:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters , as opposed to using ‘Content here ,content here’,making it look like readable English.',
    },
    {
      imageURL:'maternity-health.png',
      date:'AUGUEST 10,2018',
      quoteBy2:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters , as opposed to using ‘Content here ,content here’,making it look like readable English.',
      },
      {
        imageURL:'maternity-health.png',
        date:'AUGUEST 10,2018',
        quoteBy2:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters , as opposed to using ‘Content here ,content here’,making it look like readable English.',
        
      }
  ];


  carouselarr1:any=[
    {
    imageURL:'maternity-health.png',
    date:'AUGUEST 10,2018',
    quoteBy2:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters , as opposed to using ‘Content here ,content here’,making it look like readable English.',
    },
    {
      imageURL:'maternity-health.png',
      date:'AUGUEST 10,2018',
      quoteBy2:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters , as opposed to using ‘Content here ,content here’,making it look like readable English.',
      },
      {
        imageURL:'maternity-health.png',
        date:'AUGUEST 10,2018',
        quoteBy2:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters , as opposed to using ‘Content here ,content here’,making it look like readable English.',
        
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
