import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() alertType:string;
  
  private alertMessage:string;
  
  constructor() { }

  ngOnInit() {
    this.setAlertMsg();
    
  }

  setAlertMsg(){
    if(this.alertType == "success"){

      this.alertMessage = "Saved Successfully";

    }else if(this.alertType == "failed"){

      this.alertMessage = "Failed Successfully";

    }else{
      this.alertMessage = "Warning Successfully";
    }
  }

}
