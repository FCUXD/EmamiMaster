import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-months-multislider',
  templateUrl: './months-multislider.component.html',
  styleUrls: ['./months-multislider.component.css']
})
export class MonthsMultisliderComponent implements OnInit {

  constructor() { }
  isMobile = false;
  isDesktop = false;

  ngOnInit() {
    this.setCurrDateAtFirst();
    if (window.innerWidth > window.innerHeight) {
      this.isDesktop = true;
    } else {
      this.isMobile = true;
    }
  }

  monthsSlideArr: any = [
    {
      id: 1,
      monthName: 'Jan'
    },
    {
      id: 2,
      monthName: 'Feb'
    },
    {
      iid: 3,
      monthName: 'Mar'
    },
    {
      id: 4,
      monthName: 'Apr'
    },
    {
      id: 5,
      monthName: 'May'
    },
    {
      id: 6,
      monthName: 'Jun'
    },

    {
      id: 7,
      monthName: 'Jul'
    },

    {
      id: 8,
      monthName: 'Aug'
    },
    {
      id: 9,
      monthName: 'Sep'
    },
    {
      id: 10,
      monthName: 'Oct'
    }, {
      id: 11,
      monthName: 'Nov'
    },
    {
      id: 12,
      monthName: 'Dec'
    }

  ];
  

  setCurrDateAtFirst() {//logic  to set current month as a first element on slider
    let currMonth = new Date().getMonth();

    for (var i = 0; i < this.monthsSlideArr.length; i++) {//first loop arrray of months
      if (i === currMonth) {// if ith elelemt  == month index in array 
        for (var j = 0; j < i; j++) {// loop i times to  push i number of elemets of array to last so that we get current month array element  at top
          let firstEle = this.monthsSlideArr.shift();//remove first element
          this.monthsSlideArr.push(firstEle);//add it to last
        }
      return;
      }
    }
  }
  nextSlide() {
    let firstEle = this.monthsSlideArr.shift();//remove first element
    this.monthsSlideArr.push(firstEle);//add it to last

  }
  previousSlide() {
    let lastEle = this.monthsSlideArr.pop();//remove last element
    this.monthsSlideArr.unshift(lastEle);//add it to first
  }
  singleMonthSelect(clickedMonthIndex) {
    for (var i = 0; i < clickedMonthIndex; i++) {
      let firstEle = this.monthsSlideArr.shift();//remove first element
      this.monthsSlideArr.push(firstEle);//add it to last
    }
  }

}
