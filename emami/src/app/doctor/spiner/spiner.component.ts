import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spiner',
  templateUrl: './spiner.component.html',
  styleUrls: ['./spiner.component.css']
})
export class SpinerComponent implements OnInit {
  spinner=0; 
  down(){
    if(this.spinner>0 ){
      
    this.spinner=this.spinner-1
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
