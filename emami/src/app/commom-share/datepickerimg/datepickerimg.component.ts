import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepickerimg',
  templateUrl: './datepickerimg.component.html',
  styles: [`
  :host >>> .popover {
    color: #000;
    max-width: 100%;
    cursor: pointer;
  }
  .right-side img {
    cursor: pointer;
}

`]
})
export class DatepickerimgComponent implements OnInit {
selectdate:any;

  constructor() { }
  getdate(date:any){
    this.selectdate = date;

  }
  ngOnInit() {
    var datee= new Date();
    var day=datee.getDate();
    var month=datee.getMonth()+1;
    var year=datee.getFullYear();
    this.selectdate = day+"-"+month+"-"+year
  }

}
