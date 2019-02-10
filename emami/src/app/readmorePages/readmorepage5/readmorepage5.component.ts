import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharingDataService } from 'src/app/sharing-data.service'; 


@Component({
  selector: 'app-readmorepage5',
  templateUrl: './readmorepage5.component.html',
  styleUrls: ['./readmorepage5.component.css']
})
export class Readmorepage5Component implements OnInit {

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
