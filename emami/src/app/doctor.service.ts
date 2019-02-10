import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from './base-url';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private _http: HttpClient) { }


  doctorLoginService(data, header) {
    return this._http.post(BASE_URL + "doctor/home_dr", data, header);
  }

  doctorLoginProcessService(data, header) {
    return this._http.post(BASE_URL + "doctor_login_process_new", data, header);
  }

  /******************** Doctor Forgot Password***************************** */
  forgetPasswordNewService_Doc(data, header) {
    data = {
      "success": null,
      "error": null
    }
    return this._http.post(BASE_URL + "forgot-password-newd", data, header);

  }

  forgetPasswordService_Doc(data, header) {
    return this._http.post(BASE_URL + "reset-password-with-username-newd", data, header);
  }

  forgetPasswordProcessNewService_Doc(nullData, header) {
    return this._http.post(BASE_URL + "forgot-password-process-newd", nullData, header);
  }

  forgetPasswordResetProcessNewService_Doc(data_status, header) {
    return this._http.post(BASE_URL + "forgot-password-reset-process-newd", data_status, header);
  }

  resetPasswordService_Doc(data, header) {
    return this._http.post(BASE_URL + "verify-and-reset-password-newd", data, header);
 }
  ConsultationReq(data, header) {
    return this._http.post(BASE_URL + "doctor/consultation_new", data, header);
  }

  PatientConsultation(data, header) {
    return this._http.post(BASE_URL + "doctor/patient-consultation", data, header);
  }
  CancelAppointmentDoctor(data, header) {
    return this._http.post(BASE_URL + "doctor/cancel-appointment-doctor", data, header);
  }
  SpecificAppointmentDate(data, header) {
    return this._http.post(BASE_URL + "doctor/home_dr", data, header);
  }
  AddConsultation(data, header) {
    return this._http.post(BASE_URL + "doctor/add-consultation-new", data, header);
  }
  ordersummery(data, header) {
    return this._http.post(BASE_URL + "portal/order-summary-new", data, header);
  }
  confirmOrder(data, header) {
    return this._http.post(BASE_URL + "doctor/patient-consultation-send-msg", data, header);
  } 
  getPdfData(data, header) {
    return this._http.post(BASE_URL + "doctor/patient-consultation-modal", data, header);
  }
  getSelectedStateCityLocalityList(data, header) {
    return this._http.post(BASE_URL + "get-state-city-locality-new", data, header);
  }
  getCityList(data, header) {
    return this._http.post(BASE_URL + "get-city-new", data, header);
  }
  getLocalityList(data, header) {
    return this._http.post(BASE_URL + "get-locality-new", data, header);
  }
  removeAddress(data, header) {
    return this._http.post(BASE_URL + "portal/deleteAddressNew", data, header);
  }
  editAddress(data, header) {
    return this._http.post(BASE_URL + "portal/add-new-address-new", data, header);
  }
  selectAddress(data, header) {
    return this._http.post(BASE_URL + "portal/pincodeAvailabilityForDeliveryNew", data, header);
  }
  proceedSelectAddress(data, header) {
    return this._http.post(BASE_URL + "portal/pincodeAvailabilityForDeliveryNew", data, header);
  }
  addNewAddressMain(data, header) {
    return this._http.post(BASE_URL + "portal/addNewAddressForDeliveryNew", data, header);
  }
  // patientCart(params, headers) {
  //   return this._http.post(BASE_URL + "portal/order-summary-new", params, { headers: headers })
  // }
  patientCart(params, headers) {
    return this._http.post(BASE_URL + "portal/viewCartDetailsNew", params, { headers: headers })
  }
  getBillFormVals(params, headers) {
    return this._http.post(BASE_URL + "portal/onlineOrderPaymentRequestNew", params, { headers: headers })
  }
  startDoctVideoCall(params, headers) {
    return this._http.post(BASE_URL + "doctor/join-video-call-ajax-new", params, { headers: headers })
  }
  savePatientHistory(params,headers){
    return this._http.post(BASE_URL+"doctor/patient-life-history-details-update-process-new",params,{headers:headers})
  }
  saveLifeStyleDetail(params,headers){
    return this._http.post(BASE_URL+"doctor/patient-life-style-details-update-process-new",params,headers);
  }
  getProducts(data,headers) {
     return this._http.post(BASE_URL + "allproducts", data, headers)
    //return this._http.post(BASE_URL + "product-details-new", data, headers)
  }
  getAllTopProducts(data,headers) {
    return this._http.post(BASE_URL + "TopProductsAndDiseses", data, headers)
  
 }
  getHealtharea(data,headers) {
    return this._http.post(BASE_URL + "allHealthArea", data, headers)
   //return this._http.post(BASE_URL + "product-details-new", data, headers)
 }
getProductsDetails(data,headers){
  //return this._http.post(BASE_URL + "portal/product-details-new", params1, { headers: headers })
  return this._http.post(BASE_URL+ 'portal/product-details-new', data, { headers: headers })
}
gethealthAreaProducts(data,headers) {
  return this._http.post(BASE_URL + "healthAreaProducts", data, headers)
 
}

  guestaddNewAddressMain(data, header) {
    //return this._http.post("http://localhost:8080/emami/verify-and-reset-password-new",data,header);
    return this._http.post(BASE_URL + "portal/add-new-address-new-new", data, header);
  }
  updateQuantityOfProductD(data ,headers){
    return this._http.post(BASE_URL + 'portal/quantity-update-for-product-from-order-summary-new', data, {headers:headers})
  }

  getVitalsList(data:any,headers:any){
    return this._http.post(BASE_URL+"user/my-vitals-new",data,{headers:headers});
  }

  getVitalsById(data:any,headers:any,isDoctor:any){
    let absoluteUrl = isDoctor=="true"?"doctor":"user"
    return this._http.post(BASE_URL+absoluteUrl+"/get-vital-details-new",data,{headers:headers});
  }
  getFilteredVital(data:any,headers:any){
    return this._http.post(BASE_URL+"user/get-filtered-vital-details-new",data,{headers:headers})
  }

  saveVitals(data:any,headers:any,isDoctor:any){
    let relativeUrl = isDoctor == "true"? "doctor":"user";
    
    return this._http.post(BASE_URL+""+relativeUrl+"/save-patient-vitals-new",data,{headers:headers});
  }
  submitPatientProfileAllDataFinal(data:any,headers:any){
    return this._http.post(BASE_URL+"doctor/patient-life-history-details-update-process-all-new",data,{headers:headers});
  }

  getResportList(data:any,headers:any){
    return this._http.post(BASE_URL+"user/patient_reports",data,{headers:headers});
  }

  doctorQueryMain(data:any,headers:any){
    return this._http.post(BASE_URL+"doctor/conversation-new",data,{headers:headers});
  }
  doctorPostQuery(data, headers){
    return this._http.post(BASE_URL+'doctor/conversation-add-process-new',data,{headers:headers})
  }


  deleteReports(data:any,headers:any){
    return this._http.post(BASE_URL+'user/delete-investigation-new',data,{headers:headers})
  }
  verifyResetPassword(data:any,headers:any){
    return this._http.post(BASE_URL+'doctor/verify-and-reset-password-new',data,{headers:headers})
  }
  patientCod(data:any,headers:any){
    return this._http.post(BASE_URL+'portal/patientCODOrderPlacedNew',data,{headers:headers})
  }

  doctor_rescheduleAppointment(data:any,headers:any){
    return this._http.post(BASE_URL+'doctor/rescheduleAppointmentByDoctor',data,{headers:headers})
  }

 getDoctorSearch(data:any,headers:any){
    return this._http.post(BASE_URL+'allDoctorclinicLocator',data,{headers:headers})
  }
  uploadProfile(data:any,headers:any){
    return this._http.post(BASE_URL+'user/uploadProfileImage',data,{headers:headers})
  }
  chartData(data:any,headers:any){
    return this._http.post(BASE_URL+'portal/consultationVsConversionComparisonGraphNew',data,headers)
  }
  gethealthAreaProductsNew(data,headers) {
    return this._http.post(BASE_URL + "healtharea_products_mapping", data, headers)
   
  }

  endConsultation(data:any,headers:any){
    return this._http.post(BASE_URL+'doctor/saveOrEndConsultation',data,headers)
  }
  endConsModal(data:any,headers:any){
    return this._http.post(BASE_URL+'doctor/endCounsultationmodal',data,headers)
  }
  endConsSendMsg(data:any,headers:any){
    return this._http.post(BASE_URL+'doctor/end-patient-consultation-send-msg',data,headers)
  }

  
}
