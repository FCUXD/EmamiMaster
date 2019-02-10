import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  dropdown=[]; 
  string="Rahul";
   constructor() {
     this.dropdown=[ 
       {name:'Rahul'},
       {name:'Login'},
       {name:'Logout'}     
     ];
    } 
  ngOnInit() {
  }

}
