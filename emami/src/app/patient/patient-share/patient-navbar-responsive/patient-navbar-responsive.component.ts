import { Component, OnInit } from '@angular/core';
import { SharingDataService } from '../../../sharing-data.service'; 
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-patient-navbar-responsive',
  templateUrl: './patient-navbar-responsive.component.html',
  styleUrls: ['./patient-navbar-responsive.component.css'],
  animations: [
    trigger('collapse', [
      state('open', style({
        opacity: '1',
        display: 'block',
        transform: 'translate3d(0, 0, 0)'
      })),
      state('closed',   style({
        opacity: '0',
        display: 'none',
        transform: 'translate3d(0, -100%, 0)'
      })),
      transition('closed => open', animate('200ms ease-in')),
      transition('open => closed', animate('100ms ease-out'))
    ])
  ]
})
export class PatientNavbarResponsiveComponent implements OnInit {
  whichNav: any = [false, false, false];
  navbar: boolean = false;
  flag: boolean = false;
  cartCounter: any; 
  collapse:string = "closed";

  custom="custom";
  closed(){
    this.custom='custom';
    // localStorage.clear();
  }

  toggle() {
// this.show = !this.show
this.collapse = this.collapse == "open" ? 'closed' : 'open'; 
this.navbar = !this.navbar;
} 
  // toggle() {
  //     this.navbar = !this.navbar;
  // }
 
  ayurvedicMenu:boolean=true;
  healthMenu:boolean=false;
  buyAyurvedicMenu:boolean=false;
  cosultMenu:boolean=false;

  isHovering = false;

  mouseHovering() {
      this.isHovering = true;
      this.isHovering2 = false;
      this.isHovering3 = false;
   
  }
  mouseLeft() {
      this.isHovering = false;
      this.isHovering2 = false;
      this.isHovering3 = false;
  }

  isHovering2 = false;
  mouseHovering2() {
      this.isHovering2 = true;
      this.isHovering = false;
      this.isHovering3 = false;

  }
  mouseLeft2() {
      this.isHovering2 = false;
      this.isHovering = false;
      this.isHovering3 = false;

  }

  isHovering3 = false;
  mouseHovering3() {
      this.isHovering3 = true;
      this.isHovering = false;
      this.isHovering2 = false;

  }
  mouseLeft3() {
      this.isHovering3 = false;
      this.isHovering = false;
      this.isHovering2 = false;

  }  

  userDetails;

  constructor(private ds: SharingDataService) { 
  
    this.userDetails=localStorage.getItem("name");
    console.log(this.userDetails);

  }

  animateCart: any;
  ngOnInit() { 
     
      let whichNavClicked = this.ds.getWhichNavClicked();
      if (whichNavClicked == -1) {
          for (let i = 0; i < this.whichNav.length; i++) {
              this.whichNav[i] = false;

          }
      }
      else {
          for (let i = 0; i < this.whichNav.length; i++) {
              this.whichNav[i] = false;

          }
          this.whichNav[whichNavClicked] = true;
      }

  // localStorage.removeItem("cartCounter");
   //this.cartCounter = localStorage.getItem("cartCounter");
        //  this.animateCart = localStorage.getItem("animateCart");
      setInterval(() => {
          this.cartCounter = localStorage.getItem("cartCounter");
          this.animateCart = localStorage.getItem("animateCart");
         
      }, 1000);
      
  }


  clickfun(index:number) { 
      this.ds.setWhichNavClicked(index);
      
      this.ayurvedicMenu = (0==index)
      this.healthMenu = (1==index)
      this.buyAyurvedicMenu = (2==index)
      // this.cosultMenu = (3==index)
      
      
      this.isHovering3 = false;
      this.isHovering = false;
      this.isHovering2 = false;
  }

}
