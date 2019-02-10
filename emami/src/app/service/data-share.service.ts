import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  navlink:any;
  navlink1:any;
  isFirstTime:boolean = true;
  isHovering = false;
  constructor() { 
    this.navlink=["menubar","navlink","navlink","navlink","navlink","navlink","navlink","navlink","navlink","navlink"]; 
    // localStorage.setItem("navlink",this.navlink)
    this.navlink1=["menubar","navlink","navlink","navlink","navlink","navlink","navlink","navlink","navlink","navlink"]; 
  }
  
  setWhichNavClicked(isFirstTime){
    this.isHovering = false
    this.isFirstTime = isFirstTime;
}
getWhichNavClicked(){

    return this.isFirstTime;
}
}