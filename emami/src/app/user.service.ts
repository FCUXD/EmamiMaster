import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './base-url';
@Injectable({
  providedIn: 'root'
})

export class UserService {

  private isUserLoggedIn;
  private name;

  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false;
  }


  resendOTP(params, headers){
    return this.http.post(BASE_URL + 'mobile-verification-resend-new', params, { headers: headers })  
  }
  register(json, headers) {
    return this.http.post(BASE_URL + 'registration1', json, { headers: headers });
  }
  register_process(json, headers) {
    return this.http.post(BASE_URL + 'registration-step-1-process1', json, { headers: headers });
  }
  sendOTP_Process(params, headers) {
    return this.http.post(BASE_URL + 'registration-step-3-process-new', params, { headers: headers })
  }

  doctorloginservice(param, headers) {

    return this.http.post(BASE_URL + 'homeemami', param, headers);
  }
  AgainLoginSucess(param, headers) {
    return this.http.post(BASE_URL + 'login1', param, headers);

  }
  PatientHome(REGISTRATION_VALIDATION, headers) {
    return this.http.post(BASE_URL + 'user/home55', REGISTRATION_VALIDATION, headers);

  }

  loginViaUserID(userId, headers) {
    return this.http.post(BASE_URL + 'user/home66', userId, headers);

  }
 
  socialLogin(param, headers) {
  return this.http.post(BASE_URL + 'registration-step-1-process-social', param, headers);
  }

  AppointmentReq(params, headers) {
    return this.http.post(BASE_URL + 'user/book-patient-appointment', params, { headers: headers })
  }
  BookAppointmentReq(params, headers) {
    return this.http.post(BASE_URL + 'user/patient-book-appointment-response', params, { headers: headers })
  }

  uploadService(params) {
    return this.http.post(BASE_URL + 'user/upload-multi-file-new', params);
  }
  ReportService() {
    return this.http.get(BASE_URL + 'user/reports-new');
  }



  forgetPasswordNewService(data, header) {
    data = {
      "success": null,
      "error": null
    }
    return this.http.post(BASE_URL + "forgot-password-new", data, header);
 }

  forgetPasswordService(data, header) {
    return this.http.post(BASE_URL + "reset-password-with-username-new", data, header);
   }

  forgetPasswordProcessNewService(nullData, header) {
    return this.http.post(BASE_URL + "forgot-password-process-new", nullData, header);
  }

  forgetPasswordResetProcessNewService(data_status, header) {
    return this.http.post(BASE_URL + "forgot-password-reset-process-new", data_status, header);
  }

  /****************** Patient Reset Password ************************* */

  resetPasswordService(data, header) {
    return this.http.post(BASE_URL + "verify-and-reset-password-new", data, header);
  }


  /****************PatientUser Profile**************************************** */

  update_profilePatient(data, header) {
    return this.http.post(BASE_URL + "user/update_profile_patient", data, header);
  }
    update_profilePatient_new(data, header) {
      return this.http.post(BASE_URL + "user/user-update-step-1-new", data, header);
    }

   update_profilePatient_getCity(data, header) {
    return this.http.post(BASE_URL+ "get-city-new", data, header);
  }

   
  UpCommingHistoryAppointments(params, headers) {
    return this.http.post(BASE_URL + 'user/patient-appointments', params, { headers: headers })
  }
  // getMyOrdersData(params, headers) {
  //   return this.http.post(BASE_URL + 'user/orderList', params, { headers: headers })
  // }
  cancelAppointment(data, headers) {
    return this.http.post(BASE_URL + 'user/cancel-appointment-new', data, { headers: headers })
  }
  addToCart(data, headers) {
    return this.http.post(BASE_URL + 'portal/add-to-cart-new', data, { headers: headers })
  }
  guestRegistration(data ,headers){
    return this.http.post(BASE_URL + 'guest-registration-new', data, { headers: headers })
  }
  
  getMyCartNew(data ,headers){
    return this.http.post(BASE_URL + 'portal/get-my-cart-new', data, {headers:headers})
  }
  updateQuantityOfProduct(data ,headers){
    // return this.http.post(BASE_URL + 'portal/quantity-update-for-product-from-order-summary-new', data, {headers:headers})
    return this.http.post(BASE_URL + 'portal/quantityUpdateForProductsNew', data, {headers:headers})
  
  }
  joinVideoCall(data ,headers){
    return this.http.post(BASE_URL + 'user/join-video-call-ajax-new', data, {headers:headers})
  }
  getProductDetails(data , headers){
    return this.http.post(BASE_URL+ 'portal/product-details-new', data, {headers:headers})
  }
  // patientAddToCart(data, headers){
  //   return this.http.post(BASE_URL+'portal/add-to-cart-from-order-summary-new', data, headers)
  // }
  patientAddToCart(data, headers){
    return this.http.post(BASE_URL+'portal/addToCartNew', data, headers)
  }
  patientPrescription(data, headers){
    return this.http.post(BASE_URL+'user/patient-prescription',data,{headers:headers})
  }
  patientPostQuery(data, headers){
    return this.http.post(BASE_URL+'user/conversation-add-process-new',data,{headers:headers})
  }
  patientPostQueryGetDoctorList(data, headers){
    return this.http.post(BASE_URL+'user/conversation-new',data,{headers:headers})
  }
  patientQueryMain(data, headers){
    return this.http.post(BASE_URL+'user/conversation-main-new',data,{headers:headers})
  }
  feedBack(data, headers){
    return this.http.post(BASE_URL+'user/savefeedback-new',data,{headers:headers})
  }
  
  searchMain(data,headers){
    return this.http.post(BASE_URL+'masterSearchProductsHealthAreaDoctors',data,{headers:headers})
  }

  getMyOrdersData(params, headers) {
    //  return this.http.post(BASE_URL + 'user/orderList', params, { headers: headers })
      return this.http.post(BASE_URL + 'user/orderListByDays', params, { headers: headers })
    }
}