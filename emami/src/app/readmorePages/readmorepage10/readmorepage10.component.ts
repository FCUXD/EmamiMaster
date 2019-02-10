import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharingDataService } from 'src/app/sharing-data.service';

@Component({
  selector: 'app-readmorepage10',
  templateUrl: './readmorepage10.component.html',
  styleUrls: ['./readmorepage10.component.css']
})
export class Readmorepage10Component implements OnInit {

  constructor(private route: ActivatedRoute, private share:SharingDataService) {
  }

  iD:any;
  ngOnInit() {
    this.iD = this.share.getNav();
    this.share.nav("");
    this.scroll(this.iD)
  }

  scroll(element){
    document.querySelector('#' + element)
    .scrollIntoView();
    // window.scrollTo(element.yPosition)
  } 

}
