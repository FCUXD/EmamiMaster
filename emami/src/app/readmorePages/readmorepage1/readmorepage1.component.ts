import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharingDataService } from 'src/app/sharing-data.service';


@Component({
  selector: 'app-readmorepage1',
  templateUrl: './readmorepage1.component.html',
  styleUrls: ['./readmorepage1.component.css']
})
export class Readmorepage1Component implements OnInit {

  constructor(private route: ActivatedRoute, private share:SharingDataService) { }
  iD:any;
  ngOnInit() { 
    this.iD = this.share.getNav();
   this.share.nav("");
   this.scroll(this.iD)
    // this.route.fragment.subscribe((fragment: string) => {
    //   this.scroll("#"+fragment.trim);
    // })
  }
  scroll(element){
    document.querySelector('#' + element)
    .scrollIntoView();
    // window.scrollTo(element.yPosition)
  }   

 
}
