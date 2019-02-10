import { Routes, RouterModule } from "@angular/router";
import { ChildRouteOutletComponent } from "./child-route-outlet/child-route-outlet.component";
import { PatientDashboardComponent } from "./patient/patient-dashboard/patient-dashboard.component";
import { AppointmentsComponent } from "./patient/appointments/appointments.component";
import { NgModule } from "@angular/core";
import { PatientReportComponent } from "./patient/patient-report/patient-report.component";
import { OrdersComponent } from "./patient/orders/orders.component";
import { PatientQueriesComponent } from "./patient/patient-queries/patient-queries.component";
import { AyurvedaComponent } from "./ayurveda/ayurveda.component";
import { HealthAreaComponent } from "./health-area/health-area.component";
import { MainProductPageComponent } from "./main-product-page/main-product-page.component";
import { DiabetesComponent } from "./diabetes/diabetes.component";
import { PilesComponent } from "./piles/piles.component";
import { HypertensionComponent } from "./hypertension/hypertension.component";
import { ConstipationComponent } from "./constipation/constipation.component";
import { PatientBookAppointmentComponent } from "./patient/patient-book-appointment/patient-book-appointment.component";
import { AppoinmentConfirmedComponent } from "./appoinment-confirmed/appoinment-confirmed.component";
import { MainsearchComponent } from './mainsearch/mainsearch.component';
import { SearchbarComponent } from "./commom-share/share/searchbar/searchbar.component";
import { DiarheaComponent } from "./diarhea/diarhea.component";
import { DisclaimerComponent } from "./disclaimer/disclaimer.component";
import { DysmenorrheaComponent } from "./dysmenorrhea/dysmenorrhea.component";
import { ErectileDysfunctionComponent } from "./erectile-dysfunction/erectile-dysfunction.component";
import { LiverDiseasesComponent } from "./liver-diseases/liver-diseases.component";
import { LocatorComponent } from "./locator/locator.component";
import { ProductpageinnerComponent } from "./productpageinner/productpageinner.component";
import { SkindiseasesComponent } from "./skindiseases/skindiseases.component";
import { UtiComponent } from "./uti/uti.component";
import { Readmorepage1Component } from "./readmorePages/readmorepage1/readmorepage1.component";
import { Readmorepage2Component } from "./readmorePages/readmorepage2/readmorepage2.component";
import { Readmorepage3Component } from "./readmorePages/readmorepage3/readmorepage3.component";
import { Readmorepage4Component } from "./readmorePages/readmorepage4/readmorepage4.component";
import { Readmorepage5Component } from "./readmorePages/readmorepage5/readmorepage5.component";
import { Readmorepage6Component } from "./readmorePages/readmorepage6/readmorepage6.component";
import { Readmorepage7Component } from "./readmorePages/readmorepage7/readmorepage7.component";
import { Readmorepage9Component } from "./readmorePages/readmorepage9/readmorepage9.component";
import { Readmorepage10Component } from "./readmorePages/readmorepage10/readmorepage10.component";
import { Readmorepage15Component } from "./readmorePages/readmorepage15/readmorepage15.component";
import { Readmorepage11Component } from "./readmorePages/readmorepage11/readmorepage11.component";
import { HairfallComponent } from "./hairfall/hairfall.component";
import { Readmorepage12Component } from "./readmorePages/readmorepage12/readmorepage12.component";
import { AsthmaComponent } from "./asthma/asthma.component";
import { KutkiLiverDiseaseComponent } from "./ArticlesPages/kutki-liver-disease/kutki-liver-disease.component";
import { KantkariAsthmaComponent } from "./ArticlesPages/kantkari-asthma/kantkari-asthma.component";
import { LiverDiseaseArticlesComponent } from "./ArticlesPages/liver-disease-articles/liver-disease-articles.component";
import { ShoppingCartComponent } from "./commom-share/shopping-cart/shopping-cart/shopping-cart.component";
import { GurmarDiabetesComponent } from "./ArticlesPages/gurmar-diabetes/gurmar-diabetes.component";
import { SarpgandhaComponent } from "./ArticlesPages/sarpgandha/sarpgandha.component";
import { SkindiseasesHabitComponent } from "./ArticlesPages/skindiseases-habit/skindiseases-habit.component";
import { OsteoporosisComponent } from "./osteoporosis/osteoporosis.component";
import { IBSHealthAreaComponent } from "./ibshealth-area/ibshealth-area.component";
import { HypertensionHabitsComponent } from "./ArticlesPages/hypertension-habits/hypertension-habits.component";
import { PunarnavaComponent } from "./ArticlesPages/punarnava/punarnava.component";
import { UTIHabitsComponent } from "./ArticlesPages/uti-habits/uti-habits.component";
import { TriggersOfAsthmaComponent } from "./ArticlesPages/triggers-of-asthma/triggers-of-asthma.component";
import { DiabetesTopTipsComponent } from "./ArticlesPages/diabetes-top-tips/diabetes-top-tips.component";
import { PilesSuranComponent } from "./ArticlesPages/piles-suran/piles-suran.component";
import { ReturnpolicyComponent } from "./returnpolicy/returnpolicy.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { ShippingpolicyComponent } from "./shippingpolicy/shippingpolicy.component";

const EMAMI_PATIENT_CHILD_ROUTE:Routes=[
    {
      path:'patient-dashboard',
      component:ChildRouteOutletComponent,
      children:[
          {
              path:'patient-dashbord-details',
              component:PatientDashboardComponent
          },
          {
            path: 'patient-appointment',
            component: AppointmentsComponent
          },
          {
            path: 'patient-reports',
            component: PatientReportComponent
          },
          {
            path:'patient-order',
            component:OrdersComponent
          },
          {
            path: 'patient-queries',
            component: PatientQueriesComponent
          },
          {
            path: 'ayurveda',
            component: AyurvedaComponent
          },
          {
            path: 'patient-healtharea',
            component: HealthAreaComponent
          },
          {
            path: 'patient-mainproductpage',
            component: MainProductPageComponent
          },
          {
            path: 'diabetes',
            component: DiabetesComponent
          },
          {
            path:'Piles',
            component:PilesComponent
          },
          {
            path:'Constipation',
            component:ConstipationComponent
          },
          {
            path: 'patient-book-appointment',
            component: PatientBookAppointmentComponent
          },
          {
            path: 'appoinment-confirmed',
            component: AppoinmentConfirmedComponent
          },
          {
            path:'patient-ayurveda',
            component: AyurvedaComponent
          },
          
          {
            path:'mainsearch',
            component:MainsearchComponent
          },
          {
            path:'search',
            component:SearchbarComponent
          },



          
          {
            path:'diarhea',
            component:DiarheaComponent
          },
          {
            path: 'disclaimer',
            component: DisclaimerComponent
          },
          {
            path:'dysmenorrhea',
            component:DysmenorrheaComponent
          },  
          {
            path:'erectiledysfunction',
            component:ErectileDysfunctionComponent
          },  
          {
            path: 'healtharea',
            component: HealthAreaComponent
          },
          {
            path:'liverDiseases',
            component:LiverDiseasesComponent
          },
          {
            path: 'locator',
            component: LocatorComponent
          },
          {
            path: 'mainproductpage',
            component: MainProductPageComponent
          },
          {
            path:'productDetails',
            component:ProductpageinnerComponent
          },
          {
            path:'skindiseases',
            component:SkindiseasesComponent
          },
          {
            path:'uti',
            component:UtiComponent
          },
          {
            path:'AsthmaRead',
            component:Readmorepage1Component
          },
          {
            path:'HypertensionRead',
            component:Readmorepage2Component
          }, 
          {
            path:'DibetiesRead',
            component:Readmorepage3Component
          }, 
          {
            path:'LiverRead',
            component:Readmorepage4Component
          },
          {
            path:'PillsRead',
            component:Readmorepage5Component
          },
          {
            path:'DiherraRead',
            component:Readmorepage6Component
          },
          {
            path:'OpacityRead',
            component:Readmorepage7Component
          },
          {
            path:'SkinRead',
            component:Readmorepage9Component
          },
          {
            path:'UtiReadMore',
            component:Readmorepage10Component
          },
          {
            path:'constipationRead',
            component:Readmorepage15Component
          }, 
          {
            path:'EDRead',
           component:Readmorepage11Component
          }, 
          {
            path:'Hairfall',
            component:HairfallComponent
          }, 
          {
            path:'hairfallreadmore',
           component:Readmorepage12Component
          },
          {
            path:'Asthma',
            component:AsthmaComponent
          },
          {
            path:'kutkiliverdisease',
            component:KutkiLiverDiseaseComponent
          }, 
          {
            path:'KantkariAsthma',
            component:KantkariAsthmaComponent
          },
          {
            path:'LiverDiseaseArticles',
            component:LiverDiseaseArticlesComponent
          },
          {
            path:'shopping_cart',
            component:ShoppingCartComponent
          },
          {
            path:'GurmarDiabetes',
            component:GurmarDiabetesComponent
          },
          {
            path:'SarpgandhaArticles',
            component:SarpgandhaComponent
          },
          {
            path:'SkindiseasesArticles',
            component:SkindiseasesHabitComponent
          },
          {
            path:'Osteoporosis',
            component:OsteoporosisComponent
          }, 
          {
            path:'Stress',
            component:IBSHealthAreaComponent
          }, 
          {
            path:'HypertensionHabits',
            component:HypertensionHabitsComponent
          },
          {
            path:'PunarnavaArticles',
            component:PunarnavaComponent
          },
          {
            path:'UTIHabitsArticles',
            component:UTIHabitsComponent
          },
          {
            path:'AsthmaArticles',
            component:TriggersOfAsthmaComponent
          }, 
          {
            path:'DiabetesTopTipsArticles',
            component:DiabetesTopTipsComponent
          },
          {
            path:'PilesSuranArticles',
            component:PilesSuranComponent
          },
          {
            path:'ReturnPolicy',
            component:ReturnpolicyComponent
          },
          {
            path:'PrivacyPolicy',
            component:PrivacyPolicyComponent
          },
          {
            path:'ShippingPolicy',
            component:ShippingpolicyComponent
          },
        
      ]
    }]

    @NgModule({
        imports: [ RouterModule.forChild(EMAMI_PATIENT_CHILD_ROUTE) ],
        exports: [ RouterModule ]
      })
export class PatientRoutingModule{ } 
