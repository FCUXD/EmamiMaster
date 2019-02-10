import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultpagedropdown',
  templateUrl: './consultpagedropdown.component.html',
  styleUrls: ['./consultpagedropdown.component.css']
})
export class ConsultpagedropdownComponent implements OnInit {

  dropdown=[]; 
  dropdown2=[];
 string="dr.krishna";
  constructor() {
    this.dropdown=[ 
      {name:'dr.krishna'},
      {name:'payal'},
      {name:'kiran'},
      {name:'priyanka'}
    ];
    this.dropdown2=[ 
      {name:'dr.Akash'},
      {name:'Vishal'},
      {name:'XYZ'},
      {name:'LMN'}
    ];
   } 

  ngOnInit() {
  }

}
