import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-consult-patients-profile',
  templateUrl: './consult-patients-profile.component.html',
  styleUrls: ['./consult-patients-profile.component.css']
})
export class ConsultPatientsProfileComponent implements OnInit {

  selecteddate:any;
  constructor( private fb:FormBuilder) { 
  //   this.createprescription = new FormGroup({
  //     Nooftypes: new FormControl()
  //  });
  }
  tabs=[
    {active:'active',tabcontent:'tabcontent'},
    {active:'',tabcontent:'hide'},
    {active:'',tabcontent:'hide'}
  ];

  profile:any=[];
  prescribe:any=[];
  hrecord:Array<any>=[];
  Dropi=[];
  Dropi2=[];
  sring="Bloating";
  nooftimes:any;
  nooftimes1:any;
  qty:any;
  when:any;
  time:any;
  time1:any;
  time2:any;
  time3:any;
  flag:boolean=false;
  flag1:boolean=false;
  flag2:boolean=false;
  flag3:boolean=false;
  flag4:boolean=false;
  flag5:boolean=false;
  flag6:boolean=false;
  flag7:boolean=false;
  flag8:boolean=false;
  flag9:boolean=false;
  flag10:boolean=false;
  flag11:boolean=false;
  flag12:boolean=false;
  flag13:boolean=false;
  times:string="";
   custom="custom";
   type:any;
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
 registerForm: FormGroup;
 createprescription:FormGroup;
 orderdetails:Array<any>=[];
 ordersummery:Array<any>=[];
 totalproduct:Array<any>=[];
 total:Array<any>=[];
 types:Array<any>=[];
 since:Array<any>=[];
 typess:Array<any>=[];
 Allergies:Array<any>=[];
 pastillness:Array<any>=[];
 cmedication:Array<any>=[];
 fdiseases:Array<any>=[];
 fdAllergies:Array<any>=[];
 mdiseases:Array<any>=[];
 mallergies:Array<any>=[];
 diagnosis:Array<any>=[];
 selmedicine:Array<any>=[];
 pmedicine:Array<any>=[];
 subtotal=380;
 dcharges=40;
 totalprice=420;
 selected1="";
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
 selected45="Enter Diagnosis";
 selected46="Zandu Puncharishta (50 ML)";

  ngOnInit() {
    this.type="Bloting"
  
    this.createprescription = this.fb.group({
    esymptom:['', Validators.required],
    esymptom2:['', Validators.required],
    cpdiagnosis:['Enter Diagnosis'],
    Investigation1:['', Validators.required],
    Investigation2:['', Validators.required],
    consultationnotes:['', Validators.required],
    Investigation3:['', Validators.required],
    Investigation4:['', Validators.required],
    Investigation5:['', Validators.required],
    Investigation6:['', Validators.required],
    selectmedicine:['Zandu Puncharishta (50 ML)'],
    premedicine:['Zandu Puncharishta (50 ML)'],
    Nooftypes:['', Validators.required],
    medicineTiming:['', Validators.required],
    medicineQuantity:['', Validators.required],
    medicineDays:['', Validators.required],
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
    this.prescribe=[{noOftimes:'2 Times',morning:'Morning',afternoon:'Afternoon',night:'Night',quantity:'1',when:'',noOfdays:'For 5 Days'}]

    this.types = [ 'Bloating', 'Drug Allergy', 'Dust Allergy', 'Other' ];
    this.typess = [ 'Bloating', 'Drug Allergy', 'Dust Allergy', 'Other' ];
    this.Allergies=['Skin Allergies','Water Allergies','drug Allergies','Other']
    this.since=['0-1yrs','1-2yrs','2-5','1-10yrs'];
    this.pastillness=['Heart Surgery','Skin Surgery','Eye Surgery','Other']
    this.cmedication=['Zandu Pancharisth(50ML)','Zandu Pancharisth(100ML)','Zandu Pancharisth(200ML)'];
    this.fdiseases=['Asthma','Blood Sugar','Cancer','Other'];
    this.fdAllergies=['Dust and Smoke','Dust','Smoke','Other'];
    this.mdiseases=['Asthma','Blood Sugar','Cancer','Other'];
    this.mallergies=['Smoke','Dust',' Dust and Smoke','Other'];
    this.diagnosis=['Enter Diagnosis','Enter Diagnosis1'];
    this.selmedicine=['Zandu Puncharishta (50 ML)','Zandu Puncharishta (100 ML)','Zandu Puncharishta (200 ML)'];
    this.pmedicine=['Zandu Puncharishta (50 ML)','Zandu Puncharishta (100 ML)','Zandu Puncharishta (200 ML)'];
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
  formFilds15 = [];
  counter15 = 1;
  addFieldValue15(index){
    if(this.counter15<5){
      this.counter15++;
      this.formFilds15.push(this.counter15)
    }
  }

  deleteFieldValue15(value){
    
    for(let i=0;i<this.formFilds15.length;i++){
      if(this.formFilds15[i] == value){
        this.formFilds15.splice(i,1);
      }
    }
    
  }
  formFilds16= [];
  counter16 = 1;
  addFieldValue16(index){
    if(this.counter16<5){
      this.counter16++;
      this.formFilds16.push(this.counter16)
    }
  }

  deleteFieldValue16(value){
    
    for(let i=0;i<this.formFilds16.length;i++){
      if(this.formFilds16[i] == value){
        this.formFilds16.splice(i,1);
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


custom2="modal";
popup2(){
  this.custom2="show";
}
close2(){
  this.custom2="modal";
} 




spinner=0;
down(){
  if(this.spinner>0 ){
    
  this.spinner=this.spinner-1 
  }
  }
  onvoted1(thispassdate: any) {
      this.selecteddate = thispassdate
      
  }

  noOftime1(value){
    this.nooftimes=value;
    this.flag=false;
  }
  noOftime2(value){
    this.nooftimes=value;
    this.flag=false;
  }
  noOftime3(value){
    this.nooftimes=value;
    this.flag=false;
  }
  noOftime4(value){
    this.nooftimes=value;
    this.flag=false;
  }
  noOftime5(value){
    this.nooftimes=value;
    this.flag=false;
  }
  noOftime6(value){
    this.nooftimes=value;
    this.flag=false;
  }
  noOftime7(value){
    this.nooftimes=value;
    this.flag=false;
  }
  noOftimeCustom(){
    this.flag=true;
    
  }



  Timing1(value){
    this.time1=value;
    this.flag1=false;
  }
  Timing2(value){
    this.time2=value;
    this.flag1=false;
  }
  Timing3(value){
    this.time3=value;
    this.flag1=false;
  }
  Timing4(){
    this.flag1=true;
  }
  


  quantity1(value){
    this.qty=value;
    this.flag2=false;
  }
  quantity2(value){
    this.qty=value;
    this.flag2=false;
  }
  quantity3(value){
    this.flag2=true;
  }
  quantity4(value){
    this.qty=value;
    this.flag2=false;
  }

  when1(value){
    this.when=value;
  }
  when2(value){
    this.when=value;
  }
  when3(value){
    this.when=value;
  }
  when4(value){
    this.when=value;
  }

  other1(value){
    
    this.flag3=true;
  }
  other2(value){
    
    this.flag4=true;
  }
  other3(value){
    
    this.flag5=true;
  }
  other4(value){
    
    this.flag6=true;
  }
  other5(value){
    
    this.flag7=true;
  }
  other6(value){
    
    this.flag8=true;
  }
  other7(value){
    
    this.flag9=true;
  }


  med:any;
  Nooftypes1;
  prescribeMedicineSave(medicine){
    // console.log(medicine)
    // console.log( this.Nooftypes1.value);
   
  }
  prescribeMedicineProceed(medicine1){

  }

  patientProfileSubmit(createprescription){
    // console.log(createprescription);
    }

    submitProfile(profile){
      // console.log(profile);
    }
    onSubmit(){
      console.log(this.createprescription.value)
    }

    flag_Change:boolean=false;
    flag_Change2:boolean=false;
    flag_Change3:boolean=false;
    flag_Change4:boolean=false;
    flag_Change5:boolean=false;
    flag_Change6:boolean=false;
    flag_Change7:boolean=false;


 callType(data){
  var data_string=data.replace(/\d+/g, '');
   data_string= data_string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'');
  data_string=data_string.replace(/\s/g,'');
  if(data_string === "Other")
  {
    this.flag_Change=true;
 
  }
}

callType2(data){
  var data_string=data.replace(/\d+/g, '');
   data_string= data_string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'');
  data_string=data_string.replace(/\s/g,'');
  if(data_string === "Other")
  {
    
    this.flag_Change2=true;
  }
}

callType3(data){
  var data_string=data.replace(/\d+/g, '');
   data_string= data_string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'');
  data_string=data_string.replace(/\s/g,'');
  if(data_string === "Other")
  {
    
    this.flag_Change3=true;
  }
}

callType4(data){
  var data_string=data.replace(/\d+/g, '');
   data_string= data_string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'');
  data_string=data_string.replace(/\s/g,'');
  if(data_string === "Other")
  {
    
    this.flag_Change4=true;
  }
}

callType5(data){
  var data_string=data.replace(/\d+/g, '');
   data_string= data_string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'');
  data_string=data_string.replace(/\s/g,'');
  if(data_string === "Other")
  {
    
    this.flag_Change5=true;
  }
}

callType6(data){
  var data_string=data.replace(/\d+/g, '');
   data_string= data_string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'');
  data_string=data_string.replace(/\s/g,'');
  if(data_string === "Other")
  {
    
    this.flag_Change6=true;
  }
}

callType7(data){
  var data_string=data.replace(/\d+/g, '');
   data_string= data_string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'');
  data_string=data_string.replace(/\s/g,'');
  if(data_string === "Other")
  {
    
    this.flag_Change7=true;
  }
}


}
