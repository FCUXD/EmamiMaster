import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-search-patients-profile',
  templateUrl: './search-patients-profile.component.html',
  styleUrls: ['./search-patients-profile.component.css']
})
export class SearchPatientsProfileComponent implements OnInit {
  selecteddate:any;
  constructor( private fb:FormBuilder) { }
  tabs=[
    {active:'active',tabcontent:'tabcontent'},
    {active:'',tabcontent:'hide'},
    {active:'',tabcontent:'hide'}
  ];

  profile:any=[];
  hrecord:Array<any>=[];
  Dropi=[];
  Dropi2=[];
  sring="Bloating";
 
   custom="custom";
 drop(){
   if(this.custom=="custom"){
     this.custom='show';
   }
   else if(this.custom=="show"){
     this.custom='custom';
   }
 
 }
 closed(){
   this.custom='custom';
 }
 patientProfileForm: FormGroup;
 orderdetails:Array<any>=[];
 ordersummery:Array<any>=[];
 totalproduct:Array<any>=[];
 total:Array<any>=[];
 subtotal=380;
 dcharges=40;
 totalprice=420;
 selected1="Bloting";
 selected2="0-1yrs";
 selected3="Bloting";
 selected4="0-1yrs";
 selected5="Skin Allergy";
 selected6="0-1yrs";
 selected7="Skin Allergy";
 selected8="0-1yrs";
 selected9="Zandu Pancharisth";
 selected10="0-1yrs";
 selected11="Zandu Pancharisth";
 selected12="0-1yrs";
 selected13="Heart Surgery";
 selected14="Heart Surgery";
 selected15="Smoking";
 selected16="0-1yrs";
 selected17="Smoking";
 selected18="0-1yrs";
 selected19="Daily";
 selected20="Daily";
 selected21="Homemade Food";
 selected22="Homemade Food";
 selected23="8-10Hours";
 selected24="8-10Hours";
 selected25="7-8Hours";
 selected26="7-8Hours";
 selected27="None";
 selected28="None";
 selected29="Asthma";
 selected30="0-1yrs";
 selected31="Asthma";
 selected32="0-1yrs";
 selected33="smoke";
 selected34="0-1yrs";
 selected35="smoke";
 selected36="0-1yrs";
 selected37="Asthma";
 selected38="0-1yrs";
 selected39="Asthma";
 selected40="0-1yrs";
 selected41="Dust";
 selected42="0-1yrs";
 selected43="Dust";
 selected44="0-1yrs";

  ngOnInit() {

    this.patientProfileForm = this.fb.group({
      specialconsideration:['', Validators.required],
      firstName: ['', Validators.required],
      firstName2: ['', Validators.required],
      presentcondition1:['', Validators.required],
      presentcondition2:['', Validators.required],
      Allergies1:['', Validators.required],
      Allergies2:['', Validators.required],
      Allergies3:['', Validators.required],
      Allergies4:['', Validators.required],
      currentMedication1:['', Validators.required],
      currentMedication2:['', Validators.required],
      currentMedication3:['', Validators.required],
      currentMedication4:['', Validators.required],
      illness1:['', Validators.required],
      illness2:['', Validators.required],
      habit1:['', Validators.required],
      habit2:['', Validators.required],
      habit3:['', Validators.required],
      habit4:['', Validators.required],
      exroutine1:['', Validators.required],
      exroutine2:['', Validators.required],
      eatingpref1:['', Validators.required],
      eatingpref2:['', Validators.required],
      workinghours1:['', Validators.required],
      workinghours2:['', Validators.required], 
      nstime1:['', Validators.required], 
      nstime2:['', Validators.required], 
      astime1:['', Validators.required],
      astime2:['', Validators.required], 
      fd1:['', Validators.required], 
      fd2:['', Validators.required],  
      fd3:['', Validators.required],  
      fd4:['', Validators.required], 
      fatherAllergies1:['', Validators.required],  
      fatherAllergies2:['', Validators.required],  
      fatherAllergies3:['', Validators.required],  
      fatherAllergies4:['', Validators.required],  
      mdiseases1:['', Validators.required], 
      mdiseases2:['', Validators.required],  
      mdiseases3:['', Validators.required],  
      mdiseases4:['', Validators.required], 
      mallergies1 :['', Validators.required], 
      mallergies2 :['', Validators.required],
      mallergies3 :['', Validators.required],
      mallergies4 :['', Validators.required],
      motherdeceased:['', Validators.required],
      fatherdeceased:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });

    this.Dropi=[{name:"Bloating"},{name:"Bloating1"}];
    this.Dropi2=[{name:"asd"},{name:"fgh"}];
    this.profile=[{img:'./../assets/images/patient.png',name:'MR . RAHUL KUMAR',id:'Consultation ID - ZNE1234',age:'23',gender:'Male',deases:' Diabetes Care',mobno:'889-898-8768'}]
    this.hrecord=[{prepo:'X-ray',date:'12-10-2018',file:'Filename_upload_report_abc.pdf'},{prepo:'X-ray',date:'12-10-2018',file:'Filename_upload_report_abc.pdf'},
    {prepo:'X-ray',date:'12-10-2018',file:'Filename_upload_report_abc.pdf'},
    ];
    this.orderdetails=[{img:'./../assets/images/zpancharist.png ',quantity:'1',pname:'ZANDU PANCHARIST',ml:'500',price:'190'},
    {img:'./../assets/images/zpancharist.png ',quantity:'1',pname:'ZANDU PANCHARIST',ml:'500',price:'190'},]
    
   
    this.totalproduct=[
      {product1:'Zandu Pancharist',product1qty:'1',product1price:'190'},
      {product1:'Zandu Pancharist',product1qty:'1',product1price:'190'},
                  ]

    }

   

  default:string="default";
  default2="tab-hbright";
  default3="default3";
  openCity(index){
    this.reset();  
    this.tabs[index].active='active';
    this.tabs[index].tabcontent='tabcontent';
    if(index==0){
      this.default="default";
      this.default2="tab-hbright";
      this.default3="default3;"
    }
    if(index==1){
      this.default="default";
      this.default2="default2";
      this.default3="default3;"
    }
    if(index==2){
      this.default="tab-hbright";
      this.default2="default2";
      this.default3="default3;"
    }
    }
  
    reset(){
      for(let i=0;this.tabs.length>i;i++){
        this.tabs[i].active='';
        this.tabs[i].tabcontent='hide';
      }
    }

    onvoted(thispassdate: any) {
      this.selecteddate = thispassdate
      
  }

  formFilds1 = [];
  counter1 = 1;
  addFieldValue1(index){
    if(this.counter1<5){
      this.counter1++;
      this.formFilds1.push(this.counter1)
    }
  }

  deleteFieldValue1(value){
    
    for(let i=0;i<this.formFilds1.length;i++){
      if(this.formFilds1[i] == value){
        this.formFilds1.splice(i,1);
      }
    }
    
  }
  

  formFilds2 = [];
  counter2 = 1;
  addFieldValue2(index){
    if(this.counter2<5){
      this.counter2++;
      this.formFilds2.push(this.counter2)
    }
  }

  deleteFieldValue2(value){
    
    for(let i=0;i<this.formFilds2.length;i++){
      if(this.formFilds2[i] == value){
        this.formFilds2.splice(i,1);
      }
    }
    
  }

  formFilds3 = [];
  counter3 = 1;
  addFieldValue3(index){
    if(this.counter3<5){
      this.counter3++;
      this.formFilds3.push(this.counter3)
    }
  }

  deleteFieldValue3(value){
    
    for(let i=0;i<this.formFilds3.length;i++){
      if(this.formFilds3[i] == value){
        this.formFilds3.splice(i,1);
      }
    }
    
  }
  formFilds4 = [];
  counter4 = 1;
  addFieldValue4(index){
    if(this.counter4<5){
      this.counter4++;
      this.formFilds4.push(this.counter4)
    }
  }

  deleteFieldValue4(value){
    
    for(let i=0;i<this.formFilds4.length;i++){
      if(this.formFilds4[i] == value){
        this.formFilds4.splice(i,1);
      }
    }
    
  }

  formFilds5 = [];
  counter5 = 1;
  addFieldValue5(index){
    if(this.counter5<5){
      this.counter5++;
      this.formFilds5.push(this.counter5)
    }
  }

  deleteFieldValue5(value){
    
    for(let i=0;i<this.formFilds5.length;i++){
      if(this.formFilds5[i] == value){
        this.formFilds5.splice(i,1);
      }
    }
    
  }
  formFilds6 = [];
  counter6 = 1;
  addFieldValue6(index){
    if(this.counter6<5){
      this.counter6++;
      this.formFilds6.push(this.counter6)
    }
  }

  deleteFieldValue6(value){
    
    for(let i=0;i<this.formFilds6.length;i++){
      if(this.formFilds6[i] == value){
        this.formFilds6.splice(i,1);
      }
    }
    
  }
  formFilds7 = [];
  counter7 = 1;
  addFieldValue7(index){
    if(this.counter7<5){
      this.counter7++;
      this.formFilds7.push(this.counter6)
    }
  }

  deleteFieldValue7(value){
    
    for(let i=0;i<this.formFilds7.length;i++){
      if(this.formFilds7[i] == value){
        this.formFilds7.splice(i,1);
      }
    }
    
  }

  formFilds8 = [];
  counter8 = 1;
  addFieldValue8(index){
    if(this.counter8<5){
      this.counter8++;
      this.formFilds8.push(this.counter8)
    }
  }

  deleteFieldValue8(value){
    
    for(let i=0;i<this.formFilds8.length;i++){
      if(this.formFilds8[i] == value){
        this.formFilds8.splice(i,1);
      }
    }
    
  }
  formFilds9 = [];
  counter9 = 1;
  addFieldValue9(index){
    if(this.counter9<5){
      this.counter9++;
      this.formFilds9.push(this.counter9)
    }
  }

  deleteFieldValue9(value){
    
    for(let i=0;i<this.formFilds9.length;i++){
      if(this.formFilds9[i] == value){
        this.formFilds9.splice(i,1);
      }
    }
    
  }
  formFilds10 = [];
  counter10 = 1;
  addFieldValue10(index){
    if(this.counter10<5){
      this.counter10++;
      this.formFilds10.push(this.counter10)
    }
  }

  deleteFieldValue10(value){
    
    for(let i=0;i<this.formFilds10.length;i++){
      if(this.formFilds10[i] == value){
        this.formFilds10.splice(i,1);
      }
    }
    
  }
  formFilds11 = [];
  counter11 = 1;
  addFieldValue11(index){
    if(this.counter11<5){
      this.counter11++;
      this.formFilds11.push(this.counter11)
    }
  }

  deleteFieldValue11(value){
    
    for(let i=0;i<this.formFilds11.length;i++){
      if(this.formFilds11[i] == value){
        this.formFilds11.splice(i,1);
      }
    }
    
  }
  formFilds12 = [];
  counter12 = 1;
  addFieldValue12(index){
    if(this.counter12<5){
      this.counter12++;
      this.formFilds12.push(this.counter11)
    }
  }

  deleteFieldValue12(value){
    
    for(let i=0;i<this.formFilds12.length;i++){
      if(this.formFilds12[i] == value){
        this.formFilds12.splice(i,1);
      }
    }
    
  }
  formFilds13 = [];
  counter13 = 1;
  addFieldValue13(index){
    if(this.counter13<5){
      this.counter13++;
      this.formFilds13.push(this.counter13)
    }
  }

  deleteFieldValue13(value){
    
    for(let i=0;i<this.formFilds13.length;i++){
      if(this.formFilds13[i] == value){
        this.formFilds13.splice(i,1);
      }
    }
    
  }
  formFilds14 = [];
  counter14 = 1;
  addFieldValue14(index){
    if(this.counter14<5){
      this.counter14++;
      this.formFilds14.push(this.counter14)
    }
  }

  deleteFieldValue14(value){
    
    for(let i=0;i<this.formFilds14.length;i++){
      if(this.formFilds14[i] == value){
        this.formFilds14.splice(i,1);
      }
    }
    
  }

  custom1="modal";
popup(){
  this.custom1="show";
}
close(){
  this.custom1="modal";
} 

patientProfileSubmit(patientProfile){
console.log(patientProfile)
}

}
