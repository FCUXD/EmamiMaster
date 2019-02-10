import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating',
  templateUrl: './floating.component.html',
  styleUrls: ['./floating.component.css']
})
export class FloatingComponent implements OnInit {
  isHovering = false;
  
  mouseHovering() {
      this.isHovering = true; 
      this.isHovering2 = false
  }
  mouseLeft() {
      this.isHovering = false;
      this.isHovering2 = false
  } 
  isHovering2 = false;
  
  mouseHovering2() {
      this.isHovering2 = true; 
      this.isHovering = false;
  }
  mouseLeft2() {
      this.isHovering2 = false;
      this.isHovering = false;
  } 
  constructor() { }

  ngOnInit() {
  }

}
