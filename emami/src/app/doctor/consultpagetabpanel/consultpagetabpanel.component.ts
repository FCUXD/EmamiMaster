import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-consultpagetabpanel',
  templateUrl: './consultpagetabpanel.component.html',
  styleUrls: ['./consultpagetabpanel.component.css']
})
export class ConsultpagetabpanelComponent implements OnInit {

  xreport = [];
  Symptoms=[];
  dropdown1=[];
  dropdown2=[];
  dropdown3=[];
  dropdown4=[];
  dropdown5=[];
  string="dr.Akash";
  counter:number=0;
  constructor() {
    this.dropdown1=[ 
      {name:'dr.Prasad1'},
      {name:'Vishal1'},
      {name:'XYZ'},
      {name:'LMN'}
    ];

    this.dropdown2=[ 
      {name:'dr.Prasad2'},
      {name:'Vishal2'},
      {name:'XYZ'},
      {name:'LMN'}
    ];
    this.dropdown3=[ 
      {name:'dr.Prasad3'},
      {name:'Vishal3'},
      {name:'XYZ'},
      {name:'LMN'}
    ];
    this.dropdown4=[ 
      {name:'dr.PrasadDDDD'},
      {name:'VishAL4'},
      {name:'XYZzzz'},
      {name:'LlllllMN'}
    ];
    this.dropdown5=[ 
      {name:'dr.KBC'},
      {name:'Vishal'},
      {name:'lllll'},
      {name:'LMNnnn'}
    ];

  this.xreport = [{
    report:"X-Ray Report",date:"21 Aug,2018",pdf:"Filename_upload_abc.pdf",image:"assets/images/rubbish-bin.png",
    image2:"assets/images/download-button.png",image3:"assets/images/printer.png"
  },
  {
    report:"X-Ray Report",date:"21 Aug,2018",pdf:"Filename_upload_abc.pdf",image:"assets/images/rubbish-bin.png",
    image2:"assets/images/download-button.png",image3:"assets/images/printer.png"
  },
  {
    report:"X-Ray Report",date:"21 Aug,2018",pdf:"Filename_upload_abc.pdf",image:"assets/images/rubbish-bin.png",
    image2:"assets/images/download-button.png",image3:"assets/images/printer.png"
  }];
   }

   hidediv:boolean=true;
   showdiv:boolean=false;
   AddProduct(){
if(this.hidediv=true)
{
  this.hidediv=false;
  this.showdiv=true;

}
   }

  tabs=[
    {active:'active',tabcontent:'tabcontent'},
    {active:'',tabcontent:'hide'},
    {active:'',tabcontent:'hide'}
  ];
 
  onActivate(e, scrollContainer) {
    scrollContainer.scrollTop = 0;
    }
  newTab:number=0;
  numa:number=0;
  

  openCity(index){
    window.scroll(0,0);
    this.reset();  
    this.tabs[index].active='active';
    this.tabs[index].tabcontent='tabcontent';
    }
  
    reset(){
      for(let i=0;this.tabs.length>i;i++){
        this.tabs[i].active='';
        this.tabs[i].tabcontent='hide';
      }
    }

    addMore(){
      if(this.counter<=9){
        this.counter++;
        this.Symptoms.push(this.counter);
      }
      
    }
    removeThis(i){
      this.Symptoms.splice(i,1)
      this.counter--;
    }

 
    modal="modal";
    openmodal(){
        this.modal = 'show';
      }
    
      closemodal(){
        this.modal = 'modal'; 
        this.deliveryAddressForm.reset();
      }
      
      savemodal(){
        this.modal = 'modal'; 
        this.deliveryAddressForm.reset();
      }
    
    
      addMoreData:any=[];
    submitCount:number=0;
      
      deliveryAddressForm:FormGroup;
      myDeliveryData={address:'',city:'',state:'',zipcode:'',mobileNumber:''};
    
      ngOnInit() {
    
        this.deliveryAddressForm = new FormGroup({
          'address': new FormControl(this.myDeliveryData.address,Validators.required),
          'city': new FormControl(this. myDeliveryData.city, Validators.required),
          'state': new FormControl(this. myDeliveryData.state, Validators.required),
          'zipcode': new FormControl(this. myDeliveryData.zipcode, [Validators.required,     Validators.minLength(6)]),
          'mobileNumber': new FormControl(this. myDeliveryData.state, Validators.required),
          
        });
      }
      get address() { return this.deliveryAddressForm.get('address'); }
      get city() { return this.deliveryAddressForm.get('city'); }
      get state() { return this.deliveryAddressForm.get('state'); }
      get zipcode() { return this.deliveryAddressForm.get('zipcode'); }
      get mobileNumber() { return this.deliveryAddressForm.get('zipcode'); }
    
    }
    
    