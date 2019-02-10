import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-navigation',
  templateUrl: './doctor-navigation.component.html',
  styleUrls: ['./doctor-navigation.component.css']
})
export class DoctorNavigationComponent implements OnInit {
  dropdown=[]; 
  string ;
  responsedata;
  
  navbar :boolean = false;
  toggle(){
    this.navbar = !this.navbar;
  }
  constructor(private route: Router) { 

 
    this.dropdown=[ 
      {name:'My Profile'},
      {name:'Log Out'}    
    ];
  }

  ngOnInit() {
     this.string = JSON.parse(localStorage.getItem("DrName"));
    
  
  }

  clickDropDownButton(i) {
   
    // if (i == 0) {
    //   this.route.navigate(['userProfile']);
    // }
    if (i == 1) {
      this.route.navigate(['doctorloginpage']);
    }
    
  }
}
