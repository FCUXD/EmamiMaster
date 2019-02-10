import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharingDataService } from 'src/app/sharing-data.service';

@Component({
  selector: 'app-readmorepage4',
  templateUrl: './readmorepage4.component.html',
  styleUrls: ['./readmorepage4.component.css']
})
export class Readmorepage4Component implements OnInit {

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
