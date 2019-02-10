import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing-article-slider',
  templateUrl: './landing-article-slider.component.html',
  styleUrls: ['./landing-article-slider.component.css']
})
export class LandingArticleSliderComponent implements OnInit {

 

  
  constructor(private router: Router) {  
  }

  isMobile=false;
  isDesktop=false;
  ngOnInit() {
  
    let t:any=576
  if(window.innerWidth>(576)){
    this.isDesktop=true;
  }else if(window.innerWidth<(576)){
    
    this.isMobile=true;
  }
  this.setVisibleProducts()
  }
  cImageIndex=0;

    carouselarr2:any=[
      {
       imageURL:'././assets/images/Dibeties1.png',
      cardTitle:'DIABETES',
      cardText:'Top 9 Measures To...',
      cardButton:'READ MORE',
      id:'DiabetesTopTipsArticles'
      // this.router.navigate(['/PatientDashboard']);
      },
      {
         imageURL:'././assets/images/Dibeties2.png',
        cardTitle:'Gurmar',
        cardText:'Gurmaar, also known as...',
        cardButton:'READ MORE',
        id:'GurmarDiabetes'
        },
        {
        imageURL:'././assets/images/piles1.png',
          cardTitle:'Piles',
          cardText:'9 Habits to Inculcate If...',
           cardButton:'READ MORE',
           id:'PilesHabitArticles'
          },
          {
            imageURL:'././assets/images/piles2.png',
            cardTitle:'suran',
            cardText:'Amorphophallus paeoniifolius...',
            cardButton:'READ MORE',
            id:'PilesSuranArticles'
            },
            {
             imageURL:'././assets/images/hypertension1.png',
              cardTitle:'HYPERTENSION',
              cardText:'Top 7 Everyday...',
              cardButton:'READ MORE',
              id:'HypertensionHabits'
              },
              {
                imageURL:'././assets/images/hypertension2.png',
                cardTitle:'sarpgandha',
                cardText:'Rauwolfia serpent...',
               cardButton:'READ MORE',
               id:'SarpgandhaArticles'
                },
                {
                imageURL:'././assets/images/Asthama1.png',
                  cardTitle:'Asthma',
                  cardText:'Surprising Triggers...',
                 cardButton:'READ MORE',
                 id:'AsthmaArticles'
                  },
                  {
                 imageURL:'././assets/images/Asthama2.png',
                    cardTitle:'Kantkari',
                    cardText:'1Kantakari or...',
                  cardButton:'READ MORE',
                  id:'KantkariAsthma'
                    },  
                    {
                    imageURL:'././assets/images/diarrhoea1.png',
                    cardTitle:'Diarrhoea',
                    cardText:'Top 8 Foods to...',
                  cardButton:'READ MORE',
                  id:'DiarrhoeaArticles'
                    }, 
                    {
                      imageURL:'././assets/images/diarrhoea2.png',
                      cardTitle:'Kutaja',
                      cardText:'Kutaja is a...',
                    cardButton:'READ MORE',
                    id:'DiarrhoeaKutajaArticles'
                      }, 
                      {
                        imageURL:'././assets/images/Uti1.png',
                        cardTitle:'UTI',
                        cardText:'Top 7 Habits...',
                      cardButton:'READ MORE',
                      id:'UTIHabitsArticles'
                        },
                        {
                          imageURL:'././assets/images/Uti2.png',
                          cardTitle:'Punarnava',
                          cardText:'Boerhaavia diffusa...',
                        cardButton:'READ MORE',
                        id:'PunarnavaArticles'
                          }, 
                          {
                            imageURL:'././assets/images/liver-disease1.png',
                            cardTitle:'liver disease',
                            cardText:'6 Foods That Can...',
                          cardButton:'READ MORE',
                          id:'LiverDiseaseArticles'
                            },
                            {
                              imageURL:'././assets/images/liver-disease2.png',
                              cardTitle:'kutki',
                              cardText:'Picrorhiza kurroa...',
                            cardButton:'READ MORE',
                            id:'kutkiliverdisease'
                              }, 
                              {
                                imageURL:'././assets/images/skinAricles1.png',
                                cardTitle:'Skin diseases',
                                cardText:'Top 8 Personal...',
                              cardButton:'READ MORE',
                              id:'SkindiseasesArticles'
                                },
                                {
                                  imageURL:'././assets/images/skinAricles2.png',
                                  cardTitle:'Sariva',
                                  cardText:'Hemidesmus indicus...',
                                cardButton:'READ MORE',
                                id:'SkinSarivaArticles'
                                  },
      
    ];
   
    nextSlide(){
      
      if(this.isDesktop){
        if (this.tabIndex + this.visibleProdCount < this.carouselarr2.length) {
          this.tabIndex += this.slideCount;
    
      this.setVisibleProducts();
      }
    }else if(this.isMobile){
        if (this.tabIndex + this.slideCountM < this.carouselarr2.length) {
          this.tabIndex += this.slideCount;
    
      this.setVisibleProducts();
        }
      }
  return;
    }
    previousSlide(){
      if (this.tabIndex > 0) {
        this.tabIndex -= this.slideCount;
    
        this.setVisibleProducts();
      }
      return;
    }
    visibleProds:any[]=[];
    visibleProdCount:any=3;
    tabIndex:any=0;
    slideCount=1
    slideCountM=1
    mobProd:any[]=[];
    setVisibleProducts() {
      this.mobProd=[];
      this.visibleProds = [];
    if(this.isDesktop){
    
      for (var i = 0; i < this.visibleProdCount; i++) {
        if (this.carouselarr2.length - 1 < i + this.tabIndex )
          break;
        this.visibleProds.push(this.carouselarr2[i+this.tabIndex])
      }
    }
      else if(this.isMobile){
        for (var i = 0; i < this.slideCountM; i++) {
          if (this.carouselarr2.length - 1 < i + this.tabIndex )
            break;
          this.mobProd.push(this.carouselarr2[i+this.tabIndex])
        }
      } 
        // this.querystring=null
        // this.getlatlng()
      }
      Route(id){
       
let route=id;
this.router.navigate([route])
      }
  }
  