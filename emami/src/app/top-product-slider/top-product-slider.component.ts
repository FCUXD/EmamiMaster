import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-top-product-slider',
  templateUrl: './top-product-slider.component.html',
  styleUrls: ['./top-product-slider.component.css']
})
export class TopProductSliderComponent implements OnInit {
  spinner = 0;

  @Input('top-products') topProducts: any = [];

  @Output('addToCart') addToCart: EventEmitter<any> = new EventEmitter<any>();
  constructor(private router:Router){}
  
  visibleProducts = [];
productslist:any;
sortedProds:any;
  visibleProductCount = 3;
  slideCount = 1;

  flowIndex = 0;

  isMobile = false;
  isDesktop = false;

  ngOnInit() {
    
    // if (!this.topProducts.length)
   // localStorage.setItem("products", this.data)
      // this.topProducts = this.carouselarr2;
      this.productslist = JSON.parse(localStorage.getItem("TopProducts"));
    // this.sortedProds=this.productslist["5"].name; getTopProducts
    // this.topProducts=this.productslist["5"].productsCategoryBean;
    this.topProducts=this.productslist;
      this.topProducts.forEach((element,indx) => {
        element.inx=indx;
      });
    if (window.innerWidth > 576) {
      this.isDesktop = true;
    } else if(window.innerWidth < 576){
      this.isMobile = true;
    }

    this.setVisibleProducts1();
  }
mobProds:any[]=[];
mobCount:any=1
  setVisibleProducts1() {
    
    this.visibleProducts = [];
    this.mobProds=[];
    if(this.isDesktop){
      for (let i = 0; i < this.visibleProductCount; i++) {
        if (this.topProducts.length - 1 < i + this.flowIndex)
          break;
        this.visibleProducts.push(this.topProducts[i + this.flowIndex])
        // this.visibleProducts[i].qty = 0;
        this.visibleProducts[i].qty = 1;
      }
    } else
     if(this.isMobile){
      for (let i = 0; i < this.mobCount; i++) {
        if (this.topProducts.length - 1 < i + this.flowIndex)
          break;
        this.mobProds.push(this.topProducts[i + this.flowIndex])
        // this.visibleProducts[i].qty = 0;
        this.mobProds[i].qty = 1;
      }
     }
   
  }

  next() {

    //if (this.flowIndex + this.slideCount < this.topProducts.length)
    if(this.isDesktop){
      if(this.topProducts.length  > this.flowIndex+this.visibleProductCount)
      {
       this.flowIndex += this.slideCount;
 
       this.setVisibleProducts1();
     }
     return;
 
    } else if(this.isMobile){
      if(this.topProducts.length  > this.flowIndex+this.mobCount)
      {
       this.flowIndex += this.slideCount;
 
       this.setVisibleProducts1();
     }
     return;
    }
    
    // if (this.isDesktop) {
    // }

  }

  previous() {
    if (this.flowIndex > 0) {
      this.flowIndex -= this.slideCount;

      this.setVisibleProducts1();
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


  addTocart(item){
this.addToCart.emit(item);
  }


  ProdId:any[]=[];
getProductDetails(item) {
  debugger
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
  cImageIndex = 0;

  carouselarr2: any = [
    {
      imageURL: 'https://emamiproductlibrary.s3.amazonaws.com//NOV/26972451784395937813.jpg',
      cardTitle: 'Zandu balm 8 ml',
      cardText: 'Zandu is a 100% Ayurvedic Blood &...',
      offer: '10% off',
      offerprice: '175',
      qty: 0
    },
    {
      imageURL: 'https://emamiproductlibrary.s3.amazonaws.com//NOV/06997410375405174302.jpg',
      cardTitle: 'Ayursip Digestion 10 Dip Bag Pack',
      cardText: 'Ayursip is a 100% Ayurvedic Blood &...',
      offer: '10% off',
      offerprice: '175',
      qty: 0
    },
    {
      imageURL: 'https://emamiproductlibrary.s3.amazonaws.com//AUG/13269571451303783360.png',
      cardTitle: 'Zandu Control D (10 tbs)',
      cardText: 'Zandu Control D is a 100% Ayurvedic Blood &...',
      offer: '10% off',
      offerprice: '175',
      qty: 0
    },
    {
      imageURL: 'https://emamiproductlibrary.s3.amazonaws.com//NOV/26972451784395937813.jpg',
      cardTitle: 'Zandu balm 8 ml',
      cardText: 'Zandu is a 100% Ayurvedic Blood &...',
      offer: '10% off',
      offerprice: '175',
      qty: 0
    },
    {
      imageURL: 'https://emamiproductlibrary.s3.amazonaws.com//NOV/06997410375405174302.jpg',
      cardTitle: 'Ayursip Digestion 10 Dip Bag Pack',
      cardText: 'Ayursip is a 100% Ayurvedic Blood &...',
      offer: '10% off',
      offerprice: '175',
      qty: 0
    },
    {
      imageURL: 'https://emamiproductlibrary.s3.amazonaws.com//NOV/06997410375405174302.jpg',
      cardTitle: 'Ayursip Digestion 10 Dip Bag Pack',
      cardText: 'Ayursip is a 100% Ayurvedic Blood &...',
      offer: '10% off',
      offerprice: '175',
      qty: 0
    },
    {
      imageURL: 'https://emamiproductlibrary.s3.amazonaws.com//NOV/26972451784395937813.jpg',
      cardTitle: 'Zandu balm 8 ml',
      cardText: 'Zandu is a 100% Ayurvedic Blood &...',
      offer: '10% off',
      offerprice: '175',
      qty: 0
    },

  ];

  nextSlide() {
    if (this.isDesktop) {
      if (this.cImageIndex + 4 < this.carouselarr2.length)
        this.cImageIndex = this.cImageIndex + 1;
      else this.cImageIndex = 0;
    } else {
      if (this.cImageIndex + 1 < this.carouselarr2.length)
        this.cImageIndex = this.cImageIndex + 1;
      else this.cImageIndex = 0;
    }
  }


  previousSlide() {
    if (this.cImageIndex > 0)
      this.cImageIndex = this.cImageIndex - 1;
    else this.cImageIndex = this.carouselarr2.length - 1;
  }


}
