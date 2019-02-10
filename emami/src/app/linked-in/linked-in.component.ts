import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linked-in',
  templateUrl: './linked-in.component.html',
  styleUrls: ['./linked-in.component.css']
})
export class LinkedInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  client_id: String = '81mrjdvahsfoml';
	redirect_uri:String = encodeURI("http://localhost:4000/");
	url: String = `https://www.linkedin.com/oauth/v2/authorization?response_type=zPZR84XHFNRn5JMc&client_id=${this.client_id}&redirect_uri=${this.redirect_uri}`;


}
