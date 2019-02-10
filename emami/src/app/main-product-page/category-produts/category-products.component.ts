import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
//import { Router } from '@angular/router';

@Component({
  selector: 'category-products',
  templateUrl: 'category-products.component.html',
  styleUrls: ['category-products.component.css']
})

export class CategoryProductsComponent implements OnInit {

  @Input("category") category: any;
  @Output("onAddToCart") AddTocart = new EventEmitter<any>();

  tabIndex = 0;
  visibleProdCount = 4;
  slideCount = 1;
  visibleProds: any = [];
  ProdId: any = [];
  constructor(private router: Router) { }

  isMobile=false;
  isDesktop=false;
  ngOnInit() {
    let t:any=576
    if(window.innerWidth>(576)){
      this.isDesktop=true;
    }else if(window.innerWidth<(576)){
      
      this.isMobile=true;
    }
    this.setVisibleProducts();

  }
  mobProds:any[]=[]
  mobcount:any=1
  setVisibleProducts() {
    
    this.visibleProds = [];
    this.mobProds=[];
    if(this.isDesktop){
      for (var i = 0; i < this.visibleProdCount; i++) {
        if (this.category.productsCategoryBean.length - 1 < i + this.tabIndex)
          break;
        this.visibleProds.push(this.category.productsCategoryBean[i + this.tabIndex])
        // this.visibleProds[i].qty = 0;
        this.visibleProds[i].qty = 1;
      }
    }
    else if(this.isMobile){
      
      for (var i = 0; i < this.mobcount; i++) {
        if (this.category.productsCategoryBean.length - 1 < i + this.tabIndex)
          break;
        this.mobProds.push(this.category.productsCategoryBean[i + this.tabIndex])
        // this.visibleProds[i].qty = 0;
        this.mobProds[i].qty = 1;
      }
    }

   
    
  }
//08-01-2019------------Ketaki------------------------//
getProductDetails(item) {
  this.ProdId = [];
  this.ProdId.push(item);
 
 //this.router.navigate(['/productDetails',  {p1: this.ProdId }]);
 let navigationExtras: NavigationExtras = {
  queryParams: {
      "ProdId": this.ProdId 
      
  }
};
  this.router.navigate(["productDetails"], navigationExtras);
 // alert(item);
 //this.router.navigate(['productDetails'], { queryParams:  navigationExtras, skipLocationChange: true}); 
}
  next() {
if(this.isDesktop){
  if (this.tabIndex + this.visibleProdCount < this.category.productsCategoryBean.length) {
    this.tabIndex += this.slideCount;

    this.setVisibleProducts();
  }
  return;
}else if(this.isMobile){
  
  if (this.tabIndex + this.mobcount < this.category.productsCategoryBean.length) {
    this.tabIndex += this.slideCount;

    this.setVisibleProducts();
  }
}
    

    // if (this.isDesktop) {
    // }

  }

  previous() {
    if (this.tabIndex > 0) {
      this.tabIndex -= this.slideCount;

      this.setVisibleProducts();
    }
    return;

  }

  reduce(item) {
    if (item.qty)
      item.qty -= 1;
  }

  add(item) {
    
    item.qty = (item.qty || 0) + 1;
  }


  addTocart(item) {
    
    this.AddTocart.emit(item);
  }

}