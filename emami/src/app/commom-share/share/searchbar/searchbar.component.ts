import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharingDataService } from '../../../sharing-data.service';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Output("search") search = new EventEmitter<any>();
  searcharray=[];
  searcharrayNew:any;
  querystring="";
  movies2:any;
    constructor(private router: Router, private share:SharingDataService) { 
    //  this.searcharrayNew=  localStorage.getItem("allProds")
    
      // this.searcharray=[
      //   {doctor:"", product:"",healtharea:"hypertension"},
      //   {doctor:"",product:"",healtharea:"Constipation"},
      //   {doctor:"",product:"",healtharea:"diarhea"},
      //   {doctor:"",product:"",healtharea:"Piles"},
      //   {doctor:"",product:"",healtharea:"uti"}, 
      //   {doctor:"",product:"",healtharea:"liverDiseases"},
      //   {doctor:"",product:"",healtharea:"skindiseases"},
      //   {doctor:"",product:"",healtharea:"diabetes"},
      //   {doctor:"",product:"",healtharea:"erectiledysfunction"},
        
      // ];
    
    }
    dataDoc:any[]=[];

    public showHeader:boolean=true;
    
    ngOnInit() {
     
      this.resultDis=false;
      let dataItem = JSON.parse(localStorage.getItem("allProds"));
      this.dataDoc = JSON.parse(localStorage.getItem("allDocs"))
      let dataH = JSON.parse(localStorage.getItem("allHarea"))
      for(let i=0;i<dataH.length;i++){
        for(let j=0;j<dataH[i].length;j++){}
        this.searcharray.push(dataH[i].name)
      }
      for(let index = 0;index< dataItem.length;index++){
        this.searcharray.push(dataItem[index].name);
        for(let inndeIndex=0;inndeIndex < dataItem[index].productsCategoryBean.length;inndeIndex++){
          this.searcharray.push(dataItem[index].productsCategoryBean[inndeIndex].name)
        }
      }
     
      for(let inndeIndex=0;inndeIndex < this.dataDoc.length;inndeIndex++){
        this.searcharray.push(this.dataDoc[inndeIndex].doctorName)
        this.searcharray.push(this.dataDoc[inndeIndex].state)
        this.searcharray.push(this.dataDoc[inndeIndex].city)
        if(this.dataDoc[inndeIndex].healthArea!=null){
          this.searcharray.push(this.dataDoc[inndeIndex].healthArea)
        }
     
        this.searcharray.push(this.dataDoc[inndeIndex].qualification)
      }
      console.log(this.searcharray)
      for(let k=0;k<this.searcharray.length;k++){
        for(let j=0;j<this.searcharray.length;j++){
          if(this.searcharray[k]==this.searcharray[j] && k!=j){
            this.searcharray.splice(j,1)
          
            // this.searchFinal.push(this.searcharray[k])
          }
        }
        
      }
    }
    searchFinal:any[]=[];
    resultDis:boolean=false;
  searcht:boolean=false;
  change(){
    this.resultDis=false;
    this.searcht = true;
  }
  searched(){
 
    this.trial=false
    if(this.querystring){
      this.resultDis=true;
      this.searcharrayNew =  localStorage.getItem("allProds");
      this.movies2 = JSON.parse(this.searcharrayNew);
      console.log(this.movies2);
    
    this.search.emit(this.querystring);
    this.share.setSearchString(this.querystring);
    localStorage.setItem("index",'4');
    this.showHeader = !this.router.url.includes('patient-dashboard');
    if(this.showHeader){
      this.router.navigate(['/mainsearch']);
    }else if(!this.showHeader){
      this.router.navigate(['/patient-dashboard/patient-mainsearch'])
    }
    }
    
  }
  temp:any[]=[];
  trial:boolean=false
  updateFilter2(event) {

    this.trial=false
    let val2 = event.target.value;
    
   
    // filter our data
    if (val2 == '' || val2 == null) return this.temp = [];
this.searcharray = this.searcharray.sort((a, b) => a < b ? -1 : 1);
  // filter our data

  val2 = val2.toLowerCase();
    const p =  this.searcharray.filter(function(yourDataList) {
        return (yourDataList.toLowerCase().indexOf(val2) !== -1);
    })
    this.temp = p;
  this.trial=true
  // this.temp =  this.temp.sort((a, b) => a < b ? -1 : 1);
  
  }
  placeholder:any;
  ngOnDestroy() {

    this.placeholder="Products, Doctors, Health Condition & More";
  }
  }
  