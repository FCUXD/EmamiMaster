import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  fileName:any;
  fileName2:any;
    constructor() { }
  uploadFile(event) {
    
    let files = event.target.files;
    let file = event.target.files[0].name;
    this.fileName = event.target.files[0].name;
    this.fileName2 = event.target.files[0].name;
    console.log(file)
    if (files.length > 0) {
      console.log(file); // You will see the file
      // this.service.uploadFile(file);
    }
  }
  
  
    
      ngOnInit() {
    this.fileName="Select your file"
      } 
   
}
