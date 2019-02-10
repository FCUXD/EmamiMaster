import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { Chart } from 'chart.js';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DoctorService } from 'src/app/doctor.service';
import * as moment from 'moment';



@Component({
  selector: 'app-my-vitals',
  templateUrl: './my-vitals.component.html',
  styleUrls: ['./my-vitals.component.css']
})
export class MyVitalsComponent implements OnInit {

  //multiselectdropdown declaration
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  public inMemorySelectedVital:any[]=[];
  public inMemoryVitalDetailData:any[]=[];

  constructor(public doctorService:DoctorService) { 
   
  }
  LineChart: any;

  openCity(data:any,tabActive:string, indexVal:any) {

    let dataVal = {
        "userId" : localStorage.getItem("userId"),
        "vitalName" : data.vitalName,
        "vitalId" : data.vitalId+"",
        "vitalFilterType" : tabActive[0]
    }
    this.inMemorySelectedVital[indexVal].currentActiveTab = tabActive;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.doctorService.getFilteredVital(dataVal,headers).subscribe((data:any)=>{
      console.log(data);  
      this.inMemorySelectedVital[indexVal].gridList = data.VITAL_DATA_LIST 
        for(let index=0;index < this.inMemorySelectedVital[indexVal].tabShow.length;index++){
          if(this.inMemorySelectedVital[indexVal].tabShow[index].tabName === tabActive){
            this.inMemorySelectedVital[indexVal].tabShow[index].active = 'active';
            this.inMemorySelectedVital[indexVal].tabShow[index].tabcontent = 'tabcontent';
            this.inMemorySelectedVital[indexVal].currentActiveTab = tabActive;
          }else{
            this.inMemorySelectedVital[indexVal].tabShow[index].active = '';
            this.inMemorySelectedVital[indexVal].tabShow[index].tabcontent = 'hide';
          }
        }
    
        if(this.inMemorySelectedVital[indexVal].gridList.length > 0){
          this.inMemorySelectedVital[indexVal].showGridList = 'hiddenDiv';
          this.inMemorySelectedVital[indexVal].showForm = 'hiddenDiv';
          this.inMemorySelectedVital[indexVal].currentActiveTab = tabActive;
          this.inMemorySelectedVital[indexVal].showGraph = 'showDiv'
          
          if(this.inMemorySelectedVital[indexVal].currentActiveTab == "DAY")
          {
            this.getVitalDayData(this.inMemorySelectedVital[indexVal]);
          }else if(this.inMemorySelectedVital[indexVal].currentActiveTab == "WEEK")
          {
            this.getVitalWeekData(this.inMemorySelectedVital[indexVal]);
          }else if(this.inMemorySelectedVital[indexVal].currentActiveTab == "MONTH")
          {
            this.getVitalMonthData(this.inMemorySelectedVital[indexVal]);
     
          }else if(this.inMemorySelectedVital[indexVal].currentActiveTab == "YEAR"){
            this.getVitalYearData(this.inMemorySelectedVital[indexVal]);
          }
        }else{
          this.inMemorySelectedVital[indexVal].showGridList = 'hiddenDiv';
          this.inMemorySelectedVital[indexVal].showForm = 'showDiv';
          this.inMemorySelectedVital[indexVal].currentActiveTab = tabActive;
          this.inMemorySelectedVital[indexVal].showGraph = 'hiddenDiv'
        }
    });
    
  }

  showVitalForm(index:any){
    this.inMemorySelectedVital[index].showGridList = 'hiddenDiv';
    this.inMemorySelectedVital[index].showForm = 'showDiv';
    this.inMemorySelectedVital[index].showGraph = 'hiddenDiv'
  }
  showTable(index:any){
    this.inMemorySelectedVital[index].showGridList = 'showDiv';
    this.inMemorySelectedVital[index].showForm = 'hiddenDiv';
    this.inMemorySelectedVital[index].showGraph = 'hiddenDiv'
  }

  plotGraph(graphId:string,plotData:any[]=[],plotGrapType:string){
    this.LineChart  = new Chart(graphId, {
      animation: false,
      type: 'scatter',
      data: {
         datasets: plotData
      },
      options: {
        tooltips: {
          mode: 'x',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        legend: {
          display: false
        },
        events: [],
        title: {
          text: "line chart",
          display: false
        },
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: plotGrapType,
              tooltipFormat: 'll'
          }
        }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            zeroLineColor: {
              color: 'rgba(255, 0, 0, 1)' // makes grid lines from y axis red
            },
            tickMarkLength: {
              Number: 200
            }
          }]
        }
      }
    });
  }

  getVitals(){
    let userId = localStorage.getItem("userId");
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.doctorService.getVitalsList({userId:userId},headers).subscribe((data:any)=>{
      console.log(data.VITAL_NAME_LIST);
      this.dropdownList = data.VITAL_NAME_LIST
      console.log(this.dropdownList);
    });

  }
  getVitalAnalysiedData(data:any){
    
  }

  getVitalDataById(data:any){
    let isDoctor = localStorage.getItem("isDoctorLogin");

    let requestObj ={
      userId : localStorage.getItem("userId"),
      vitalName : data.vitalName,
      vitalId : data.vitalId
    }

    if(isDoctor == "true"){
      requestObj["doctorId"] = JSON.parse(localStorage.getItem("doctorUserId"))
    }
    
   
    let headers = new Headers({ 'Content-Type': 'application/json' });

    this.doctorService.getVitalsById(requestObj,headers,isDoctor).subscribe((data:any)=>{
        this.getVitalAnalysiedData(data.VITAL_DATA_LIST);
        this.addInMemoryData(data);
    });
    
  }
  
  addInMemoryData(data:any){
    let obj ={
      vitalId : data.VITAL_ID,
      vitalName:data.VITAL_NAME,
      tabShow:[
        //{ active: 'active', tabcontent: 'tabcontent' },
        { tabName:'DAY',active: 'active', tabcontent: 'tabcontent' },
        { tabName:'WEEK',active: '', tabcontent: 'hide' },
        { tabName:'MONTH',active: '', tabcontent: 'hide' },
        { tabName:'YEAR',active: '', tabcontent: 'hide' }
      ],
      gridList:data.VITAL_DATA_LIST,
      showGridList:'hiddenDiv',
      showForm:data.VITAL_DATA_LIST.length > 0?'showDiv':'showDiv',
      showGraph:data.VITAL_DATA_LIST.length > 0?'hiddenDiv':'hiddenDiv',
      currentActiveTab:'DAY',
      xAxis:data.X_AXIS_DATE,
      isBloodPressure:data.VITAL_NAME == "Blood Pressure" ? true:false
    }
    this.inMemorySelectedVital.push(obj);
    console.log(this.inMemorySelectedVital);
  }


  addVitals(data:any,numberOfVital:any,date:any,indexVal:any){
    let dateList = date.value.split(",");
    let dateVal = dateList[0].split("/");
    let newDate = dateVal[2]+"/"+dateVal[0]+"/"+dateVal[1];
    let isDoctor = localStorage.getItem("isDoctorLogin");
    
    console.log(date)

    let requestObj = {
      userId : localStorage.getItem("userId"),
      vitalName : data.vitalName,
      vitalId : data.vitalId,
      noOfVital : 1,
      vitalDateTime : newDate+" "+dateList[1],
      vitalValue1 : data.isBloodPressure == true ? numberOfVital.value.split("/")[0]:numberOfVital.value,
      vitalValue2 : data.isBloodPressure == true ? numberOfVital.value.split("/")[1]:null,
    }
    if(isDoctor == "true")
    {
      requestObj["doctorId"]=  JSON.parse(localStorage.getItem("doctorUserId"));
    }
    console.log(requestObj);
    let headers = new Headers({ 'Content-Type': 'application/json' });

    this.doctorService.saveVitals(requestObj,headers,isDoctor).subscribe((data:any)=>{
      this.inMemorySelectedVital[indexVal].gridList = data.VITAL_DATA_LIST;
      this.inMemorySelectedVital[indexVal].showGridList = "hiddenDiv";
          this.inMemorySelectedVital[indexVal].showForm = "hiddenDiv";
          this.inMemorySelectedVital[indexVal].currentActiveTab = "YEAR";
          this.inMemorySelectedVital[indexVal].showGraph = "showDiv"
          this.openCity(this.inMemorySelectedVital[indexVal],"YEAR", indexVal)
          //this.getVitalYearData(this.inMemorySelectedVital[indexVal]);
          numberOfVital.value = null;
          date.value = null;

    });

  }

  getVitalDayData(data:any){
    this.plotGraphWraper(data,'day');
  }
  getVitalWeekData(data:any){

    this.plotGraphWraper(data,'day');
   
  }
  getVitalMonthData(data:any){
    this.plotGraphWraper(data,'day');
  }
  getVitalYearData(data:any){
    
    this.plotGraphWraper(data,'day');
  }


  plotGraphWraper(data:any,plotGrapType:string){

    
    if(data.vitalName != "Blood Pressure"){

    }

    let rootPatient =  {
      label: "Test",
      borderColor: "#276b20",
      borderWidth: 2,
      fill: false,
      tension: 0,
      showLine: true,
      type:"line",
      data:[],
      pointBackgroundColor:[],
      pointBorderColor: [],
    }  
    let rootDoctor={
      label: "Test",
      borderColor: "#276b20",
      borderWidth: 2,
      fill: false,
      tension: 0,
      showLine: true,
      type:"line",
      data:[],
      pointBackgroundColor:[],
      pointBorderColor: [],
    }  
    
    let plotData:any[] =[] 
    let doctorData:any[] =[];
    let patientData:any[]=[];
    let plotPointColor :any[]=[];
    let pointBorderColor :any[] = [];
  
      for(let index=0;index < data.gridList.length;index++ ){
        if(data.gridList[index].vitalAddedBy == "P" ){
          if(data.vitalName == "Blood Pressure"){
            doctorData.push({
              //x:moment((new Date(data.gridList[index].vitalDate).getMonth()+1)+"-"+(new Date(data.gridList[index].vitalDate).getDay())+"-"+(new Date(data.gridList[index].vitalDate).getFullYear()),"MM-DD-YYYY"),
              x:new Date(data.gridList[index].vitalDate),
              y:data.gridList[index].vitalValue2
            });
          }
          patientData.push({
            //x:moment((new Date(data.gridList[index].vitalDate).getMonth()+1)+"-"+(new Date(data.gridList[index].vitalDate).getDay())+"-"+(new Date(data.gridList[index].vitalDate).getFullYear()),"MM-DD-YYYY"),
            x:new Date(data.gridList[index].vitalDate),
            y:data.gridList[index].vitalValue1
          });
          plotPointColor.push('#63EC6A');
          pointBorderColor.push('#63EC6A');
        }else{
          if(data.vitalName == "Blood Pressure"){
            doctorData.push({
              //x:moment((new Date(data.gridList[index].vitalDate).getMonth()+1)+"-"+(new Date(data.gridList[index].vitalDate).getDay())+"-"+(new Date(data.gridList[index].vitalDate).getFullYear()),"MM-DD-YYYY"),
              x:new Date(data.gridList[index].vitalDate),
              y:data.gridList[index].vitalValue2
            });
          }
          patientData.push({
            //x:moment((new Date(data.gridList[index].vitalDate).getMonth()+1)+"-"+(new Date(data.gridList[index].vitalDate).getDay())+"-"+(new Date(data.gridList[index].vitalDate).getFullYear()),"MM-DD-YYYY"),
            x:new Date(data.gridList[index].vitalDate),
            y:data.gridList[index].vitalValue1
          });
          plotPointColor.push('#276b20');
          pointBorderColor.push('#276b20');
        }
      }
      
      if(patientData.length > 0){
        rootPatient.data = patientData;
        rootPatient.pointBackgroundColor = plotPointColor;
        plotData.push(rootPatient);
      }

      if(data.vitalName == "Blood Pressure"){
        rootDoctor.data = doctorData;
        rootDoctor.pointBackgroundColor = plotPointColor;
        plotData.push(rootDoctor);
      }

      this.plotGraph('lineChart_'+data.vitalId,plotData,plotGrapType);
  }

 


  ngOnInit() {
    this.getVitals();
    this.selectedItems = [
    ];
    this.dropdownSettings = {
      placeholder: 'SEDED',
      singleSelection: false,
      idField: 'vitalId',
      textField: 'vitalName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 0,
      enableCheckAll: false,
      allowSearchFilter: false

    };
  }
  
  onItemSelect(item: any) {
   this.inMemorySelectedVital.push(item)
  }
  onItemDeSelect(item: any) {
    console.log(item)
    console.log(this.inMemorySelectedVital);
    //this.inMemorySelectedVital.splice(i,1);
    this.removeVitalsFrom(item.vitalId);
  }

  removeVitalsFrom(vitalId:any){

    for(let index=0;index<this.inMemorySelectedVital.length;index++){
      if(this.inMemorySelectedVital[index].vitalId == vitalId){
        this.inMemorySelectedVital.splice(index,1);
      }
    }

  }

  onSelectAll(items: any) {
    console.log(items);
  }
  //data
  selecteddate: any;
 
  onvoted(thispassdate: any, whichVital, whichTab) {
    this.selecteddate = thispassdate
  }

}
