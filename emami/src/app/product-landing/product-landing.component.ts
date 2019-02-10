import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Renderer } from '@angular/core';
import { DoctorService } from '../doctor.service';
@Component({
  selector: 'app-product-landing',
  templateUrl: './product-landing.component.html',
  styleUrls: ['./product-landing.component.css']
})
export class ProductLandingComponent implements OnInit {
  @Output("onAddToCart") AddTocart = new EventEmitter<any>();
 
  spinner=1;
  ProdId: any = [];
 
  constructor(private router: Router,private render:Renderer, private doc: DoctorService) {  this.setVisibleProducts()
  }
  reduce(item) {
    if (item.qty)
      item.qty -= 1;
  }

  add(item) {
    
    item.qty = (item.qty || 0) + 1;
  }


  addTocart(item) {
    
    this.AddTocart.emit(item);
  }
  down(index){
    
    if(this.spinner>0 ){
      
    this.spinner=this.spinner-1 
    }
    }
  isMobile=false;
  isDesktop=false;
  ngOnInit() {
  if(window.innerWidth>window.innerHeight){
    this.isDesktop=true;
  }else{
    this.isMobile=true;
  }
  //this.visibleProdsNew.push("");
  this.hname= "Constipation";
  this.hdesp="Constipation, in simple terms can be defined as the inability of the person to pass stools, or passage of hard, pebble-like stools or a difficulty in passing the stools.  ";
  this.pname="Constipation";
  
 //  localStorage.setItem('key', "Digestive Health");
  localStorage.setItem('key', "Constipation");
  this.getHealthAreaProducts("Constipation");
  }
  cImageIndex=0;

  carouselarr2:any=[
    {
     imageURL:'././assets/images/Nav_4.png',
    // cardTitle:'Constipation',
    cardTitle:'Constipation',
    //cardText:'Digestive Health',
    cardText:'Constipation',
    pname:'Constipation',
    Desp:'Constipation, in simple terms can be defined as the inability of the person to pass stools, or passage of hard, pebble-like stools or a difficulty in passing the stools. ',
    // cardButton:'Sexual Disorders, Pain management, Gastric and Piles Fissure Fistula',
    // id:'DiabetesTopTipsArticles'
    // this.router.navigate(['/PatientDashboard']);
    },
    {
       imageURL:'././assets/images/Nav_1.png',
      cardTitle:'Diabetes',
       cardText:'Diabetes',
       pname:'diabetes',
       Desp:'Diabetes is a chronic metabolic disorder in which there is accumulation of excess sugar in blood.',
      // cardButton:'Medicines',
      // id:'GurmarDiabetes'
      },
      
        // {
        //   imageURL:'././assets/images/acne.png',
        //   cardTitle:'Acne/Derma ',
        // //  cardText:'Acne/Derma (Skin diseases)',
        // cardText:'Skin Disorders',
        // pname:'skindiseases',
        
        //  Desp:'The incidence of skin problems has drastically increased in this contemporary era due to faulty eating habits, environmental factors and weak immunity.',
        
        //   },
        {
          imageURL:'././assets/images/erectliedysfunction.png',
          cardTitle:'Erectile Dysfunction',
        //  cardText:'Acne/Derma (Skin diseases)',
        cardText:'Erectile Dysfunction',
        // pname:'skindiseases',
        pname:'erectiledysfunction',
        
         Desp:'Erectile Dysfunction is referred as difficulty to start or maintain erection till the end of ejaculation.',
        
          },
          // {
          //   imageURL:'././assets/images/Asthmaslide.png',
          //     cardTitle:'Respiratory/Asthma',
          //     cardText:'Respiratory Disorders/Astama',
          //     pname:'Asthma',
          //     Desp:'Asthma is a chronic breathing disorder in which the airway becomes hyper-responsive on exposure to a particular allergen.',
          //     //  cardButton:'Kaya Chikitsa (Medicine)',
          //     //  id:'PilesHabitArticles' 
          //     },
          {
            imageURL:'././assets/images/Dysmenorrhea.png',
              cardTitle:'Dysmenorrhoea',
              cardText:'Dysmennorhoea',
              pname:'dysmenorrhea',
              Desp:'Menstrual cramp or Dysmenorrhoea is the pain experienced during the menstrual period. The intensity of the pain may range from mild to severe; in some women, the severe pain may restrict them from performing daily activities, whereas few women don’t feel any pain.',
              //  cardButton:'Kaya Chikitsa (Medicine)',
              //  id:'PilesHabitArticles' 
              },
              {
                imageURL:'././assets/images/liver.png',
                  cardTitle:'Liver Health/Jaundice',
                  //  cardText:'Liver Disorder',
                  cardText:'Liver Disease',
                   pname:'liverDiseases',
                   Desp:'Loss of appetite, nausea, vomiting, pain in the upper abdomen and generalised weakness are some of the common symptoms of liver diseases.',
                  //  cardButton:'Kaya Chikitsa (Medicine)',
                  //  id:'PilesHabitArticles'
                  },
              // {
              //   imageURL:'././assets/images/Nav_3.png',
              //   cardTitle:'Hypertension',
              //   // cardText:'Amorphophallus paeoniifolius...',
              //   // cardButton:'READ MORE',
              //   // id:'PilesSuranArticles'
              //   },
                // {
                //   imageURL:'././assets/images/Nav_2.png',
                //     cardTitle:'Piles',
                //     // cardText:'M.D, BAMS, 8 Years exp',
                //     //  cardButton:'Kaya Chikitsa (Medicine)',
                //     //  id:'PilesHabitArticles'
                //     },
                //     {
                //       imageURL:'././assets/images/Nav_3.png',
                //       cardTitle:'Hypertension',
                //       // cardText:'Amorphophallus paeoniifolius...',
                //       // cardButton:'READ MORE',
                //       // id:'PilesSuranArticles'
                //       },
    
  ];
  slideCount=1
  nextSlide(){
    
if (this.tabIndex + this.visibleProdCount < this.carouselarr2.length) {
  this.tabIndex += this.slideCount;
  this.visibleProds[1].CardBG="newclassThis";
  this.setVisibleProducts();

}
return;
  }
  previousSlide(){
    if (this.tabIndex > 0) {
      this.tabIndex -= this.slideCount;
      this.visibleProds[0].CardBG="newclassThis";
      this.setVisibleProducts();
    }
    return;
  }
   hname:any;
   hdesp:any;  
   pname:any; 
  
  details:any;
  healthAreaName:any;
  selectedCategory=null;
  visibleProdsNew:any[]=[];
  prodCount:any=2;
  visibleProds:any[]=[];
  visibleProdCount:any=4;
  lineCount:any=3;
  tabIndex:any=0;
  setVisibleProducts() {

      this.visibleProds = [];
     
    
      for (var i = 0; i < this.visibleProdCount; i++) {
        if (this.carouselarr2.length - 1 < i + this.tabIndex )
          break;
        this.visibleProds.push(this.carouselarr2[i+this.tabIndex])
      if(i<(this.visibleProdCount-1)){
        this.visibleProds[i].line = '././assets/images/ProductLine.png';//line image
        this.visibleProds[i].CardBG = "CardBG"
        this.visibleProds[0].CardBG="newclassThis";
      }
       
      }
      for (var i = 0; i < this.lineCount; i++) {
        
      }
    
      // this.querystring=null
      // this.getlatlng()
    }
    Route(id){
 
let route=id;
this.router.navigate([route])
    }
    CardBG="CardBG"
    listClick(event: any,newValue,index) {
    
      event.preventDefault();
      this.render.setElementClass(event.target, "active", true);
      this.selectedItem = newValue;
      for(let i=0;i<this.visibleProds.length;i++){
        if(i==index){
       
          this.visibleProds[i].CardBG="newclassThis";
        }else{
          this.visibleProds[i].CardBG="CardBG"
        }
      
      }
      this.healthAreaName= this.selectedItem.cardText ;
      //alert(this.healthAreaName);
     this.hname= this.selectedItem.cardTitle;
     this.hdesp=this.selectedItem.Desp;
     this.pname=this.selectedItem.pname;
      this.visibleProdsNew=[];
      localStorage.setItem('key',  this.healthAreaName);
     this.getHealthAreaProducts(this.healthAreaName);
     
  }
  selectedItem

  public getHealthAreaProducts(text){
    //debugger
    var cnt=0;
   
    // var params={name:this.healthAreaName};
    var params={name:text};
  
    var headers = new Headers({ 'Content-Type': 'application/json' }); 
    this.doc.gethealthAreaProductsNew(params,headers).subscribe((data:any)=>{
     
      this.details=[];
        let responce = data;
    
        if(responce.SUGGESTED_PRODUCTS!="NO_DATA" && responce.SUGGESTED_PRODUCTS!=undefined)
        {
     
          this.details=data.SUGGESTED_PRODUCTS;
          let dataP = JSON.stringify(this.details);
         localStorage.setItem("productDetails",dataP)
         console.log(this.details);
  
         for (var i = 0; i < this.prodCount; i++) {
           
             if (this.details.length - 1 < i )
               break;
              this.visibleProdsNew.push(this.details[i])
             this.visibleProdsNew[i].qty = 1;
          }
          this.selectCategory(this.visibleProdsNew[cnt]); 
        }
        else{
          this.details.push("");
         
          let dataP = JSON.stringify(this.details);
        // localStorage.setItem("productDetails",dataP)
         console.log(this.details);
        }
       
      
        })
    
  }
  selectCategory(cat){
   
    this.selectedCategory=cat;
  }
  getProductDetails(item) {
    debugger
    this.ProdId = [];
    this.ProdId.push(item);
   this.AddTocart.emit(item);
   localStorage.setItem("ProdID",this.ProdId);
    this.router.navigate(["productDetails"]);
   
  }
 
}
