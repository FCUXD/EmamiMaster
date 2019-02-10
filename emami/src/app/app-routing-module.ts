import { Route, Routes } from "@angular/router";
import { ComingsoonComponent } from "./comingsoon/comingsoon.component";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { HealthAreaComponent } from "./health-area/health-area.component";
import { AppoinmentConfirmedComponent } from "./appoinment-confirmed/appoinment-confirmed.component";
import { PatientDashboardComponent } from "./patient/patient-dashboard/patient-dashboard.component";
import { ShoppingCartComponent } from "./commom-share/shopping-cart/shopping-cart/shopping-cart.component";
import { PatientReportComponent } from "./patient/patient-report/patient-report.component";
import { DoctorLandingpageComponent } from "./doctor/doctor-landingpage/doctor-landingpage.component";
import { PatientBookAppointmentComponent } from "./patient/patient-book-appointment/patient-book-appointment.component";
import { ConsultpageComponent } from "./doctor/consultpage/consultpage.component";
import { LoginComponent } from "./commom-share/login/login.component";
import { PatientloginpageComponent } from "./patientloginpage/patientloginpage.component";
import { PatientRegistrationComponent } from "./patient/patient-registration/patient-registration.component";
import { LocatorComponent } from "./locator/locator.component";
import { PatientForgetpasswordComponent } from "./patient/patient-forgetpassword/patient-forgetpassword.component";
import { ResetpasswordComponent } from "./patient/resetpassword/resetpassword.component";
import { AppointmentsComponent } from "./patient/appointments/appointments.component";
import { PatientPrescriptionComponent } from "./patient/patient-prescription/patient-prescription.component";
import { PatientFeedbackComponent } from "./patient/patient-feedback/patient-feedback.component";
import { PatientQueriesComponent } from "./patient/patient-queries/patient-queries.component";
import { UserProfileComponent } from "./patient/user-profile/user-profile.component";
import { OrdersComponent } from "./patient/orders/orders.component";
import { MainProductPageComponent } from "./main-product-page/main-product-page.component";
import { MyVitalsComponent } from "./patient/my-vitals/my-vitals.component";
import { ConsultPatientProfileComponent } from "./doctor/consult-patient-profile/consult-patient-profile.component";
import { ForgetpasswordDocComponent } from "./forgetpassword-doc/forgetpassword-doc.component";
import { ResetPassComponent } from "./doctor/reset-pass/reset-pass.component";
import { OtpscreenComponent } from "./patient/otpscreen/otpscreen.component";
import { DisclaimerComponent } from "./disclaimer/disclaimer.component";
import { AyurvedaComponent } from "./ayurveda/ayurveda.component";
import { PatientCartComponent } from "./patient/patient-cart/patient-cart.component";
import { PatientOrderSummaryLinkComponent } from "./patient/patient-order-summary-link/patient-order-summary-link.component";
import { SuccessfulMsgComponent } from "./successful-msg/successful-msg.component";
import { PilesComponent } from "./piles/piles.component";
import { DiabetesComponent } from "./diabetes/diabetes.component";
import { HypertensionComponent } from "./hypertension/hypertension.component";
import { LiverDiseasesComponent } from "./liver-diseases/liver-diseases.component";
import { DiarheaComponent } from "./diarhea/diarhea.component";
import { DysmenorrheaComponent } from "./dysmenorrhea/dysmenorrhea.component";
import { ConstipationComponent } from "./constipation/constipation.component";
import { UtiComponent } from "./uti/uti.component";
import { SkindiseasesComponent } from "./skindiseases/skindiseases.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ErectileDysfunctionComponent } from "./erectile-dysfunction/erectile-dysfunction.component";
import { Readmorepage2Component } from "./readmorePages/readmorepage2/readmorepage2.component";
import { Readmorepage3Component } from "./readmorePages/readmorepage3/readmorepage3.component";
import { Readmorepage4Component } from "./readmorePages/readmorepage4/readmorepage4.component";
import { Readmorepage5Component } from "./readmorePages/readmorepage5/readmorepage5.component";
import { Readmorepage6Component } from "./readmorePages/readmorepage6/readmorepage6.component";
import { Readmorepage7Component } from "./readmorePages/readmorepage7/readmorepage7.component";
import { Readmorepage9Component } from "./readmorePages/readmorepage9/readmorepage9.component";
import { AsthmaComponent } from "./asthma/asthma.component";
import { Readmorepage1Component } from "./readmorePages/readmorepage1/readmorepage1.component";
import { ProductpageinnerComponent } from "./productpageinner/productpageinner.component";
import { Readmorepage10Component } from "./readmorePages/readmorepage10/readmorepage10.component";
import { ChildRouteOutletComponent } from "./child-route-outlet/child-route-outlet.component";
import { MainsearchComponent } from "./mainsearch/mainsearch.component";
import { AhaarComponent } from "./ahaar/ahaar.component";

export const EMAMI_ROUTINGS :Routes = [
    // {
    //   path: '',
    //   component: ComingsoonComponent
    // },
    {
      path: '',
      component: LandingpageComponent
    },
    {
      path: 'healtharea',
      component: HealthAreaComponent
    },
    {
      path: 'appoinmentconfirmed',
      component: AppoinmentConfirmedComponent
    },
    {
      path: 'PatientDashboard',
      component: PatientDashboardComponent
    },
    {
      path: 'shopping_cart',
      component: ShoppingCartComponent
    },
    {
      path: 'patientReport',
      component: PatientReportComponent
    },
    {
      path: 'doctor_landingpage',
      component: DoctorLandingpageComponent
    },
    {
      path: 'patientbookappointment',
      component: PatientBookAppointmentComponent
    },
    // {
    //   path: 'consultpage',
    //   component: ConsultpageComponent
    // },
    {
      path: 'doctorloginpage',
      component: LoginComponent
    },
    {
      path: 'patientloginpage',
      component: PatientloginpageComponent
    },
    {
      path: 'PatientRegistration',
      component: PatientRegistrationComponent
    },
    {
      path: 'locator',
      component: LocatorComponent
    },
    {
      path: 'forgotpassword',
      component: PatientForgetpasswordComponent
    },
    {
      path: 'resetpassword',
      component: ResetpasswordComponent
    },
    {
      path: 'patientAppointment',
      component: AppointmentsComponent
    },
    {
      path: 'patientPrescription/:id',
      component: PatientPrescriptionComponent
    },
    {
      path: 'patientFeedback',
      component: PatientFeedbackComponent
    },
    {
      path: 'patientQueries',
      component: PatientQueriesComponent
    },
    {
      path: 'User-Profile',
      component: UserProfileComponent
    },
    {
      path: 'Orders',
      component: OrdersComponent
    },
    {
      path: 'mainproductpage',
      component: MainProductPageComponent
    },
    {
      path: 'myVitals',
      component: MyVitalsComponent
    },
    {
      path: 'consultPatientProfile',
      component: ConsultPatientProfileComponent
    },
    {
      path: 'forgotpasswordpage_Doc',
      component: ForgetpasswordDocComponent
    },
    {
      path: 'resetpassworddoc',
      component: ResetPassComponent
    },
    {
      path: 'sendOTP',
      component: OtpscreenComponent
    },
    {
      path: 'disclaimer',
      component: DisclaimerComponent
    },
    {
      path: 'ayurveda',
      component: AyurvedaComponent
    },
    {
      path: 'patientCart',
      component: PatientCartComponent
    },
    {
      path: 'patientOrderSummary',
      component: PatientOrderSummaryLinkComponent
    },
    {
      path: 'patientOrderSummaryLink',
      component:PatientOrderSummaryLinkComponent
    },
    {
    path: 'successPage',
    component: SuccessfulMsgComponent
   },
   {
    path:'Piles',
    component:PilesComponent
  },
   
    {
      path: 'diabetes',
      component: DiabetesComponent
    },
    {
    path: 'hypertension',
    component: HypertensionComponent
   },
   {
    path:'liverDiseases',
    component:LiverDiseasesComponent
  },
  
  {
    path:'diarhea',
    component:DiarheaComponent
  },
  {
    path:'dysmenorrhea',
    component:DysmenorrheaComponent
  },  
  {
    path:'Constipation',
    component:ConstipationComponent
  }, 
  {
    path:'uti',
    component:UtiComponent
  }, 
  {
    path:'skindiseases',
    component:SkindiseasesComponent
  },{
    path: 'errorPage',
    component: ErrorPageComponent
   },
   {
    path:'erectiledysfunction',
    component:ErectileDysfunctionComponent
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
    path:'Asthma',
    component:AsthmaComponent
  },
  
  {
    path:'AsthmaRead',
    component:Readmorepage1Component
  },
  {
    path:'productDetails',
    component:ProductpageinnerComponent
  },
  {
    path:'UtiReadMore',
    component:Readmorepage10Component
  },
  {
    path:'searching',
    component:MainsearchComponent
  },
  {
    path:'Ahaar',
    component:AhaarComponent
  },
  ];
