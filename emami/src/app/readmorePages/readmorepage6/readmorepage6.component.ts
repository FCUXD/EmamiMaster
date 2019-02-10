import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharingDataService } from 'src/app/sharing-data.service';  


@Component({
  selector: 'app-readmorepage6',
  templateUrl: './readmorepage6.component.html',
  styleUrls: ['./readmorepage6.component.css']
})
export class Readmorepage6Component implements OnInit {
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
