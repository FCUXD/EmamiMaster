import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  constructor() { }
  private pendingOrdersData:any = [];
  whichNavClicked:any;
  cookieCart:any;
  prductCatId:any;
  UID:any;
  flag:boolean=false
  isHovering = false
  isHovering2 = false
  isHovering3 = false 
  string:any;

  
    setData(pendingOrdersData:any){
        this.pendingOrdersData = pendingOrdersData;
    }

    getData():any{
        return this.pendingOrdersData;
    }
    setCookieCartId(cookieCart){
        this.cookieCart = cookieCart;
    }
    getCookieCartId(){
        return this.cookieCart;
    }
    setWhichNavClicked(whichNavClicked){
        
        this.whichNavClicked = whichNavClicked;
    }
    getWhichNavClicked(){
        return this.whichNavClicked;
    }

    setProdCatID(id){
        this.prductCatId = id;
        this.flag =true;
    }
    getProdCatId(){
       
        return this.prductCatId
    }
    setSearchString(string){
this.string = string;
    }
    getSearchString(){
        return this.string
    }


    iD:any;

    nav(id){
    this.iD = id;
    }
    getNav(){
        return this.iD
    }
}


