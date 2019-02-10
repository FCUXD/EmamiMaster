import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-year-slider',
  templateUrl: './year-slider.component.html',
  styleUrls: ['./year-slider.component.css']
})
export class YearSliderComponent implements OnInit {
  constructor() { }
  @Input('selected-year')
  SelectedYear:string="0";

  @Output('yearChanged')
  onYearChanged:EventEmitter<string>=new EventEmitter<string>();

  ngOnInit() {
    
    if(this.SelectedYear=="0")
    this.SelectedYear=""+new Date().getFullYear();
  }

  active = [];

  carouselarr: any = [
    {
      id: 1,
      year: '2019'
    },
    {
      id: 2,
      year: '2020'
    },
    {
      id: 3,
      year: '2021'
    },
    {
      id: 4,
      year: '2022'
    },
    {
      id: 5,
      year: '2023'
    },
    {
      id: 6,
      year: '2024'
    },
    {
      id: 7,
      year: '2025'
    },
    {
      id: 8,
      year: '2026'
    },
    {
      id: 9,
      year: '2027'
    },
    {
      id: 10,
      year: '2028'
    },
  ];

  carouselImg = 0;
  img: any;
  curr_index = 0;
  ChangeCarouselImg(i) {
    this.carouselImg = i;
    this.curr_index = i;
    this.active = [];
    this.active[i] = 'active';
  }

  ChangePrev(img) {
    if (this.curr_index > 0) {
      this.curr_index--;
      this.carouselImg = this.curr_index;
    } else {
    this.curr_index = this.carouselarr.length - 1;
      this.carouselImg = this.curr_index;
    }
    this.active = [];
    this.active[this.curr_index] = 'active';
   
    this.notifyYearChange();
  }

  ChangeNext(img) {
    if (this.curr_index < this.carouselarr.length - 1) {
      this.curr_index++;
      this.carouselImg = this.curr_index;
    } else {
    this.curr_index = 0;
      this.carouselImg = this.curr_index;
    }
    this.active = [];
    this.active[this.curr_index] = 'active';
    this.notifyYearChange();
  }

  notifyYearChange()
  {
    this.SelectedYear= this.carouselarr[this.carouselImg].year;
    this.onYearChanged.emit(this.SelectedYear);
  }

}
