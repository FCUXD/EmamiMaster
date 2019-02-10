
import { RouterModule, Router, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Navigation } from 'selenium-webdriver';
import { SearchbarComponent } from './commom-share/share/searchbar/searchbar.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'angular-image-slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SearchPipe } from './search.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { YourQueryTabsComponent } from './commom-share/share//your-query-tabs/your-query-tabs.component';
import { DatepickerComponent } from './commom-share/share//datepicker/datepicker.component';
import { PopoverModule } from "ngx-smart-popover";
import { PatientComponent } from './patient/patient.component';
import { PatientDashboardComponent } from './patient/patient-dashboard/patient-dashboard.component';
import { PatientNavigationComponent } from './patient/patient-share/patient-navigation/patient-navigation.component';
import { PatientHeaderComponent } from './patient/patient-share/patient-header/patient-header.component';

import { PatientReportComponent } from './patient/patient-report/patient-report.component';
import { DatepickerimgComponent } from './commom-share/datepickerimg/datepickerimg.component';
import { DropdownComponent } from './commom-share/dropdown/dropdown.component';
import { LandingpageTabComponent } from './doctor/landingpage-tab/landingpage-tab.component';
import { DoctorTableComponent } from './doctor/doctor-table/doctor-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorNavigationComponent } from './doctor/doctor-navigation/doctor-navigation.component';
import { DoctorLandingpageComponent } from './doctor/doctor-landingpage/doctor-landingpage.component';
import { DoctorInfocardComponent } from './doctor/doctor-infocard/doctor-infocard.component';
import { DoctorSearchComponent } from './doctor/doctor-search/doctor-search.component';
import { DoctorUrgentcardComponent } from './doctor/doctor-urgentcard/doctor-urgentcard.component';
import { DoctorComponent } from './doctor/doctor/doctor.component';
import { IndextabComponent } from './doctor/indextab/indextab.component';
import { AppointmentscardComponent } from './doctor/appointmentscard/appointmentscard.component';
import { FooterComponent } from './commom-share/footer/footer.component';
import { PatientBookAppointmentComponent } from './patient/patient-book-appointment/patient-book-appointment.component';

import { ConsultpageComponent } from './doctor/consultpage/consultpage.component';

import { ConsultpagetabpanelComponent } from './doctor/consultpagetabpanel/consultpagetabpanel.component';

import { ConsultpagedropdownComponent } from './doctor/consultpagedropdown/consultpagedropdown.component';
import { SpinerComponent } from './doctor/spiner/spiner.component';

import { PrescribemedicineComponent } from './doctor/prescribemedicine/prescribemedicine.component';
import { ReshoulddatepickerComponent } from './reshoulddatepicker/reshoulddatepicker.component';
import { LoginComponent } from './commom-share/login/login.component';
import { PatientloginpageComponent, TrackCapsDirective } from './patientloginpage/patientloginpage.component';
import { Datepicker2Component } from './commom-share/share/datepicker2/datepicker2.component';
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';

import { TopstoriesSliderComponent } from './topstories-slider/topstories-slider.component';

import { AgmCoreModule } from '@agm/core';
import { LocatorComponent } from './locator/locator.component';
import { HealthAreaComponent } from './health-area/health-area.component';
import { AppoinmentConfirmedComponent } from './appoinment-confirmed/appoinment-confirmed.component';
import { PatientForgetpasswordComponent } from './patient/patient-forgetpassword/patient-forgetpassword.component';
import { ResetpasswordComponent } from './patient/resetpassword/resetpassword.component';
import { AppointmentsComponent } from './patient/appointments/appointments.component';
import { MonthsMultisliderComponent } from './months-multislider/months-multislider.component';
import { YearSliderComponent } from './year-slider/year-slider.component';
import { PatientPrescriptionComponent } from './patient/patient-prescription/patient-prescription.component';
import { PatientFeedbackComponent } from './patient/patient-feedback/patient-feedback.component';
import { CanselpopupComponent } from './canselpopup/canselpopup.component';
import { DashboardlinkComponent } from './patient/dashboardlink/dashboardlink.component';
import { RegistrationValidatorComponent } from './registration-validator/registration-validator.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider } from "angular-6-social-login";
import { PatientQueriesComponent } from './patient/patient-queries/patient-queries.component';
import { UserProfileComponent } from './patient/user-profile/user-profile.component'; 
import { DoctorPiechartComponent } from './doctor/doctor-piechart/doctor-piechart.component';
import { DocdashcalComponent } from './doctor/docdashcal/docdashcal.component';
import { OrdersComponent } from './patient/orders/orders.component';
import { SearchPatientPrescriptionComponent } from './doctor/search-patient-prescription/search-patient-prescription.component';
import { SearchPatientsProfileComponent } from './doctor/search-patients-profile/search-patients-profile.component';
import { LandingSliderComponent } from './landing-slider/landing-slider.component';
import { AddReportPopupComponent } from './patient/add-report-popup/add-report-popup.component';
import { FileuploadComponent } from './commom-share/fileupload/fileupload.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { DoctorSearchbarComponent } from './doctor/doctor-searchbar/doctor-searchbar.component';

import { TopProductSliderComponent } from './top-product-slider/top-product-slider.component';
import { ImmunitySliderComponent } from './immunity-slider/immunity-slider.component';
import { DigestionSliderComponent } from './digestion-slider/digestion-slider.component';
import { DiabetesSliderComponent } from './diabetes-slider/diabetes-slider.component';
import { PainManagementSliderComponent } from './pain-management-slider/pain-management-slider.component';
import { GeneralCareSliderComponent } from './general-care-slider/general-care-slider.component';
import { OtherSliderComponent } from './other-slider/other-slider.component';
import { MyVitalsComponent } from './patient/my-vitals/my-vitals.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { Constants } from './app.constants';
import { ConsultPatientProfileComponent } from './doctor/consult-patient-profile/consult-patient-profile.component';
import { ResetPassComponent } from './doctor/reset-pass/reset-pass.component';
import { ForgetpasswordDocComponent } from './forgetpassword-doc/forgetpassword-doc.component';
import { OtpscreenComponent } from './patient/otpscreen/otpscreen.component';
import { PatientOTPComponent } from './patient-otp/patient-otp.component';
import { OTPComponentComponent } from './otpcomponent/otpcomponent.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { AyurvedaComponent } from './ayurveda/ayurveda.component';
import { OrderCancelledPopupComponent } from './patient/order-cancelled-popup/order-cancelled-popup.component';
import { ForgetpasswordpageComponent } from './forgetpasswordpage/forgetpasswordpage.component';
import { ConsultPatientsProfileComponent } from './consult-patients-profile/consult-patients-profile.component';
import { FirstLoginPatientDashboardComponent } from './first-login-patient-dashboard/first-login-patient-dashboard.component';
import { HealthsearchbarComponent } from './healthsearchbar/healthsearchbar.component';
import { PatientCartComponent } from './patient/patient-cart/patient-cart.component';


import { SuccessfulMsgComponent } from './successful-msg/successful-msg.component';

import {RecaptchaModule } from 'ng-recaptcha';

import { PilesComponent } from './piles/piles.component';
import { DiabetesComponent } from './diabetes/diabetes.component';
import { HypertensionComponent } from './hypertension/hypertension.component';
import { LiverDiseasesComponent } from './liver-diseases/liver-diseases.component';

import { Datepicker3Component } from './commom-share/share/datepicker3/datepicker3.component';
import { AyurvedaYouDropdownComponent } from './ayurveda-you-dropdown/ayurveda-you-dropdown.component';
import { HealthareadropdownComponent } from './healthareadropdown/healthareadropdown.component';
import { ProductdropdownComponent } from './productdropdown/productdropdown.component';
import { DiarheaComponent } from './diarhea/diarhea.component';
import { DysmenorrheaComponent } from './dysmenorrhea/dysmenorrhea.component';
import { CancelAppointmentPopoverComponent } from './patient/appointments/cancel-appointment/cancel-appointment.component';
import { Reshoulddatepicker2Component } from './reshoulddatepicker2/reshoulddatepicker2.component';
import { Canselpopup2Component } from './canselpopup2/canselpopup2.component';
import { ShoppingCartComponent } from './commom-share/shopping-cart/shopping-cart/shopping-cart.component';
import { MainProductPageComponent } from './main-product-page/main-product-page.component';
import { UtiComponent } from './uti/uti.component';
import { RescheduleAppointmentPopoverComponent } from './patient/appointments/reschedule-appointment/reschedule-appointment.component';
import { SkindiseasesComponent } from './skindiseases/skindiseases.component';
import { ConstipationComponent } from './constipation/constipation.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FloatingComponent } from './floating/floating.component';
import { ErectileDysfunctionComponent } from './erectile-dysfunction/erectile-dysfunction.component';
import { AlertComponent } from './alert/alert.component';
import { Readmorepage1Component } from './readmorePages/readmorepage1/readmorepage1.component';
import { Readmorepage2Component } from './readmorePages/readmorepage2/readmorepage2.component';
import { Readmorepage3Component } from './readmorePages/readmorepage3/readmorepage3.component';
import { TablereshouldComponent } from './tablereshould/tablereshould.component';
import { TablecanselComponent } from './tablecansel/tablecansel.component';
import { ProductpageinnerComponent } from './productpageinner/productpageinner.component';

import { Readmorepage4Component } from './readmorePages/readmorepage4/readmorepage4.component';
import { Readmorepage5Component } from './readmorePages/readmorepage5/readmorepage5.component';
import { Readmorepage6Component } from './readmorePages/readmorepage6/readmorepage6.component';
import { Readmorepage7Component } from './readmorePages/readmorepage7/readmorepage7.component';
import { Readmorepage8Component } from './readmorePages/readmorepage8/readmorepage8.component';
import { SkinDiseasesReadmoreComponent } from './skin-diseases-readmore/skin-diseases-readmore.component';
import { Readmorepage9Component } from './readmorePages/readmorepage9/readmorepage9.component';
import { Readmorepage10Component } from './readmorePages/readmorepage10/readmorepage10.component';
import { AsthmaComponent } from './asthma/asthma.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


import { CategoryProductsComponent } from './main-product-page/category-produts/category-products.component';
import { UploadFileService } from './upload-file.service';
import { DOBDatepickerComponent } from './dobdatepicker/dobdatepicker.component';
import { DisplaydateComponent } from './displaydate/displaydate.component';
import { InnerfloatingComponent } from './innerfloating/innerfloating.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { PatientOrderSummaryLinkComponent } from './patient/patient-order-summary-link/patient-order-summary-link.component';
import { ChildRouteOutletComponent } from './child-route-outlet/child-route-outlet.component';
import { EMAMI_ROUTINGS } from './app-routing-module';
import { PatientRoutingModule } from './patient-routing-module';
import { ProductdetailnewComponent } from './productdetailnew/productdetailnew.component';
import { MainsearchComponent } from './mainsearch/mainsearch.component';
import { SearchProductSliderComponent } from './search-product-slider/search-product-slider.component';
import { SearchHealthAreasComponent } from './search-health-areas/search-health-areas.component';
//import { KutkiLiverDiseasesComponent } from './kutki-liver-diseases/kutki-liver-diseases.component';
import { KutkiLiverDiseaseComponent } from './ArticlesPages/kutki-liver-disease/kutki-liver-disease.component';

import { HypertensionHabitsComponent } from './ArticlesPages/hypertension-habits/hypertension-habits.component';


import { LiverDiseaseArticlesComponent } from './ArticlesPages/liver-disease-articles/liver-disease-articles.component';
import { KantkariAsthmaComponent } from './ArticlesPages/kantkari-asthma/kantkari-asthma.component';
import { DiarrhoeaArticlesComponent } from './ArticlesPages/diarrhoea-articles/diarrhoea-articles.component';

import { UTIHabitsComponent } from './ArticlesPages/uti-habits/uti-habits.component';
import { SkindiseasesHabitComponent } from './ArticlesPages/skindiseases-habit/skindiseases-habit.component';
import { TriggersOfAsthmaComponent } from './ArticlesPages/triggers-of-asthma/triggers-of-asthma.component';
import { DiabetesTopTipsComponent } from './ArticlesPages/diabetes-top-tips/diabetes-top-tips.component';
import { PunarnavaComponent } from './ArticlesPages/punarnava/punarnava.component';
import { GurmarDiabetesComponent } from './ArticlesPages/gurmar-diabetes/gurmar-diabetes.component';
import { SarpgandhaComponent } from './ArticlesPages/sarpgandha/sarpgandha.component';
import { PilesHabitComponent } from './ArticlesPages/piles-habit/piles-habit.component';
import { PilesSuranComponent } from './ArticlesPages/piles-suran/piles-suran.component';
import { DiarrhoeaKutajaComponent } from './ArticlesPages/diarrhoea-kutaja/diarrhoea-kutaja.component';
import { SkinSarivaComponent } from './ArticlesPages/skin-sariva/skin-sariva.component';
import { PilesninehabitComponent } from './ArticlesPages/pilesninehabit/pilesninehabit.component';
import { SuranPilesComponent } from './ArticlesPages/suran-piles/suran-piles.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { OsteoporosisComponent } from './osteoporosis/osteoporosis.component';
import { HairfallComponent } from './hairfall/hairfall.component';
import { InsomniaComponent } from './insomnia/insomnia.component';
import { IBSHealthAreaComponent } from './ibshealth-area/ibshealth-area.component';
import { LandingArticleSliderComponent } from './landing-article-slider/landing-article-slider.component';
import { Readmorepage15Component } from './readmorePages/readmorepage15/readmorepage15.component';
import { Readmorepage11Component } from './readmorePages/readmorepage11/readmorepage11.component';
import { Readmorepage12Component } from './readmorePages/readmorepage12/readmorepage12.component';
import { AyurvedicspecialistsSliderComponent } from './ayurvedicspecialists-slider/ayurvedicspecialists-slider.component';
import { ReturnpolicyComponent } from './returnpolicy/returnpolicy.component';
import { ShippingpolicyComponent } from './shippingpolicy/shippingpolicy.component';
import { ProductLandingComponent } from './product-landing/product-landing.component';
import { SuccesssliderComponent } from './successslider/successslider.component';
import { MobileFooterComponent } from './mobile-footer/mobile-footer.component';
import { AhaarComponent } from './ahaar/ahaar.component';
import { PatientNavbarResponsiveComponent } from './patient/patient-share/patient-navbar-responsive/patient-navbar-responsive.component';
import { AhaarsilderComponent } from './ahaarsilder/ahaarsilder.component';


 
// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("2087004318279342")
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("42956409123-ciof82uvakpgm0buqhpbbhqr118n7a3h.apps.googleusercontent.com")
      },
      {
        id: LinkedinLoginProvider.PROVIDER_ID,
        provider: new LinkedinLoginProvider("815h4fau81hgci")
      },
    ]
  );
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    TrackCapsDirective,
    ResetPassComponent,
    NavigationComponent,
    ConsultPatientProfileComponent,
    SearchbarComponent,
    LandingpageComponent,
    SearchPipe,
    YourQueryTabsComponent,
    DatepickerComponent,
    PatientDashboardComponent,
    PatientComponent,
    PatientNavigationComponent,
    PatientHeaderComponent,
    ShoppingCartComponent,
    PatientReportComponent,
    DatepickerimgComponent,
    DropdownComponent,
    LandingpageTabComponent,
    DoctorTableComponent,
    DoctorNavigationComponent,
    DisclaimerComponent,
    DoctorLandingpageComponent,
    DoctorInfocardComponent,
    DoctorSearchComponent,
    DoctorUrgentcardComponent,
    OTPComponentComponent,
    DoctorComponent,
    IndextabComponent,
    AppointmentscardComponent,
    FooterComponent,
    PatientBookAppointmentComponent,
    ForgetpasswordpageComponent,
    ConsultPatientsProfileComponent,
    OrdersComponent,
    ConsultpageComponent,
    ConsultpagetabpanelComponent,
    ConsultpagedropdownComponent,
    SpinerComponent,
    PrescribemedicineComponent,
    ReshoulddatepickerComponent,
    LoginComponent,
    PatientloginpageComponent,
    Datepicker2Component,
    PatientRegistrationComponent,
    TopstoriesSliderComponent,
    LocatorComponent,
    HealthAreaComponent,
    AppoinmentConfirmedComponent,
    PatientForgetpasswordComponent,
    ResetpasswordComponent,
    AppointmentsComponent,
    MonthsMultisliderComponent,
    YearSliderComponent,
    OrderCancelledPopupComponent,
    PatientPrescriptionComponent,
    PatientFeedbackComponent,
    AyurvedaComponent,
    CanselpopupComponent,
    DashboardlinkComponent,
    RegistrationValidatorComponent,
    PatientQueriesComponent,
    FirstLoginPatientDashboardComponent,
    UserProfileComponent,
    DoctorPiechartComponent,
    DocdashcalComponent,
    OrdersComponent,
    SearchPatientPrescriptionComponent,
    SearchPatientsProfileComponent,
    LandingSliderComponent,
    PatientCartComponent,
    AddReportPopupComponent,
    FileuploadComponent,
    MainFooterComponent,
    DoctorSearchbarComponent,
    MainProductPageComponent,
    TopProductSliderComponent,
    ImmunitySliderComponent,
    DigestionSliderComponent,
    DiabetesSliderComponent,
    PainManagementSliderComponent,
    GeneralCareSliderComponent,
    OtherSliderComponent,
    MyVitalsComponent,
    ForgetpasswordDocComponent,
    OtpscreenComponent,
    PatientOTPComponent,
    HealthsearchbarComponent,
    SuccessfulMsgComponent,
    PilesComponent,
    DiabetesComponent,
    HypertensionComponent,
    LiverDiseasesComponent,
    Datepicker3Component,
    AyurvedaYouDropdownComponent,
    HealthareadropdownComponent,
    ProductdropdownComponent,
    DiarheaComponent,
    DysmenorrheaComponent,
    CancelAppointmentPopoverComponent,
    Reshoulddatepicker2Component,
    Canselpopup2Component,
   UtiComponent,
    RescheduleAppointmentPopoverComponent,
    SkindiseasesComponent,
    ConstipationComponent,
    ErrorPageComponent,
    FloatingComponent,
    ErectileDysfunctionComponent,
    AlertComponent,
    Readmorepage1Component,
    Readmorepage2Component,
    Readmorepage3Component,
    TablereshouldComponent,
    TablecanselComponent,
    ProductpageinnerComponent,
    Readmorepage4Component,
    Readmorepage5Component,
    Readmorepage6Component,
    Readmorepage7Component,
    Readmorepage8Component,
    SkinDiseasesReadmoreComponent,
    Readmorepage9Component,
    Readmorepage10Component,
    AsthmaComponent,
    CategoryProductsComponent,
    DOBDatepickerComponent,
    DisplaydateComponent,
    InnerfloatingComponent,
    ComingsoonComponent,
    PatientOrderSummaryLinkComponent,
    ChildRouteOutletComponent,
    ProductdetailnewComponent,
    MainsearchComponent,
    SearchProductSliderComponent,
    SearchHealthAreasComponent,
   // KutkiLiverDiseasesComponent,
    KutkiLiverDiseaseComponent,
   HypertensionHabitsComponent,
    
   LiverDiseaseArticlesComponent,
   KantkariAsthmaComponent,
   DiarrhoeaArticlesComponent,
   
   UTIHabitsComponent,
   SkindiseasesHabitComponent,
   TriggersOfAsthmaComponent,
   DiabetesTopTipsComponent,
   PunarnavaComponent,
   GurmarDiabetesComponent,
   SarpgandhaComponent,
   PilesHabitComponent,
   PilesSuranComponent,
   DiarrhoeaKutajaComponent,
   SkinSarivaComponent,
   PilesninehabitComponent,
   SuranPilesComponent,
   PrivacyPolicyComponent,
   OsteoporosisComponent,
   HairfallComponent,
   InsomniaComponent,
  
   IBSHealthAreaComponent,
  
   LandingArticleSliderComponent,
   Readmorepage15Component,
  
   Readmorepage11Component,
  
   Readmorepage12Component,
  
   AyurvedicspecialistsSliderComponent,
  
   ReturnpolicyComponent,
  
   ShippingpolicyComponent,
   ProductLandingComponent,
   SuccesssliderComponent,
   MobileFooterComponent,
   AhaarComponent,
   PatientNavbarResponsiveComponent,
   AhaarsilderComponent


  ],
  imports: [
    ReactiveFormsModule,
    AngularDateTimePickerModule,
    BrowserModule,
    SliderModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    PopoverModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    RecaptchaModule ,
    NgMultiSelectDropDownModule.forRoot(),
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    BrowserModule,
    BrowserAnimationsModule,
    PatientRoutingModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDWqWkIoi64fC6BDBXUZDmLiwVo_vkEYXc'
    }),

    RouterModule.forRoot([
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
      // {
      //   path: 'patientbookappointment',
      //   component: PatientBookAppointmentComponent
      // },
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
      component:PilesComponent},
     
      {
        path: 'diabetes',
        component: DiabetesComponent
      },
      {
      path: 'hypertension',
      component: HypertensionComponent
     },
     {
      path: 'Hypertension',
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
      path:'UTI/Urology',
      component:UtiComponent
    },
    {
      path:'skindiseases',
      component:SkindiseasesComponent
    },
    {
      path:'"Acne/Derma(Skindiseases)"',
      component:Readmorepage9Component
    },
    {
      path:'Acne/Derma(Skin diseases)',
      component:SkindiseasesComponent
    },
    {
      path: 'errorPage',
      component: ErrorPageComponent
     },
     {
      path:'erectiledysfunction',
      component:ErectileDysfunctionComponent
    }, 
    {
      path:'ErectileDysfunction/ED',
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
      path:'Diabetes',
      component:Readmorepage3Component
    }, 
    {
      path:'LiverRead',
      component:Readmorepage4Component
    },
    {
      path:'LiverDisorder',
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
      path:'Diarrhea',
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
      path:'SkinDisorders',
      component:Readmorepage9Component
    },
    {
      path:'Asthma',
      component:AsthmaComponent
    },
    
    {
      path:'RespiratoryDisorders/Astama',
      component:Readmorepage1Component
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
      path:'productPageNew',
      component:ProductdetailnewComponent
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
  // {
  //   path:'searching',
  //   component:MainsearchComponent
  // },
  {
    path:'DiarrhoeaArticles',
    component:DiarrhoeaArticlesComponent
  }, 
  {
    path:'AsthmaArticles',
    component:TriggersOfAsthmaComponent
  }, 
  {
    path:'GurmarDiabetes',
    component:GurmarDiabetesComponent
  }, 
  {
    path:'HypertensionHabits',
    component:HypertensionHabitsComponent
  },
  {
    path:'SarpgandhaArticles',
    component:SarpgandhaComponent
  },  
  {
    path:'UTIHabitsArticles',
    component:UTIHabitsComponent
  },
  {
    path:'PunarnavaArticles',
    component:PunarnavaComponent
  },
  {
    path:'SkindiseasesArticles',
    component:SkindiseasesHabitComponent
  },
  {
    path:'DiabetesTopTipsArticles',
    component:DiabetesTopTipsComponent
  },

  {
    path:'mainsearch',
    component:MainsearchComponent
  },
  {
    path:'PilesSuranArticles',
    component:PilesSuranComponent
  }, 
  {
    path:'PilesHabitArticles',
    component:PilesHabitComponent
  },
  {
    path:'SkinSarivaArticles',
    component:SkinSarivaComponent
  }, 
  {
    path:'DiarrhoeaKutajaArticles',
    component:DiarrhoeaKutajaComponent
  },  
  {
    path:'PrivacyPolicy',
    component:PrivacyPolicyComponent
  },  
  {
    path:'Insomnia',
    component:InsomniaComponent
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
    path:'Hairfall',
    component:HairfallComponent
  }, 
  {
    path:'docReschedulePopup',
    component:TablereshouldComponent
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
    path:'hairfallreadmore',
   component:Readmorepage12Component
  },
  {
    path:'ReturnPolicy',
    component:ReturnpolicyComponent
  },
  {
    path:'ShippingPolicy',
    component:ShippingpolicyComponent
  },
  {
    path:'Ahaar',
    component:AhaarComponent
  },

    ],{useHash:true})
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    MatDatepickerModule, WeatherService,UploadFileService,
  SearchPipe],

  bootstrap: [AppComponent]

})
export class AppModule { }

