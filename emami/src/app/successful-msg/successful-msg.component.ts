import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successful-msg',
  templateUrl: './successful-msg.component.html',
  styleUrls: ['./successful-msg.component.css']
})
export class SuccessfulMsgComponent implements OnInit {
  isTrue:boolean = true;
  constructor() { }
  
  ngOnInit() {
    this.isTrue = true;
  }

}
