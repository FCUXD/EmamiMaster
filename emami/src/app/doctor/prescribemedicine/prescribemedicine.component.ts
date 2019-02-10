import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prescribemedicine',
  templateUrl: './prescribemedicine.component.html',
  styleUrls: ['./prescribemedicine.component.css']
})
export class PrescribemedicineComponent implements OnInit {

  constructor() { }
  btn=["changed","btn","btn","btn","btn","btn","btn"];
 

  AddBtn(index){
    for(let i=0;i<this.btn.length;i++){
      this.btn[i]="btn";
    }
    this.btn[index]="changed";
  }

  ngOnInit() {
  }

}
