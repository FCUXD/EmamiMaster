import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DoctorService } from '../../doctor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ElementRef } from '@angular/core';
import { UserService } from '../../user.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-patient-cart',
  templateUrl: './patient-cart.component.html',
  styleUrls: ['./patient-cart.component.css']
})
export class PatientCartComponent implements OnInit {
  public addAddressForm:any;
  public editAddressForm:any;
  
  public editAddStateList:any;
  public editAddCityList:any;
  public editAddLocationList:any;
  public  editLocation:any;
  public editFormName:any;
  public editFirstName:any;
  public editLastName:any;
  public editAddressLine1:any;
  public editAddressLine2:any;
  public editState:any;
  public editCity:any;
  public editZip :any;
  
  spinner = 0;
  data11: any;
  total1 = 0;
  total_shipping_charges = 0;
  minimumAmountPurchase = 0;
  discount = 0;
  userData: any;
  cartflag: any;
  productBeanList: Array<any> = [];
  addressBeanList: Array<any> = [];
  PurchaseBeanList: Array<any> = []; 
  headers = new Headers({ 'Content-Type': 'application/json' });

  
  constructor(private user :UserService, private doctorService: DoctorService, private router: Router,private routeNav:ActivatedRoute,
    fb: FormBuilder) {
    this.initialize();
     
   }

   patientRegister = new FormGroup({
    chkradio: new FormControl('', Validators.required),
    // pHealthIssue: new FormControl('', Validators.required)
   });

   product_proceed = new FormGroup({
    addProduct: new FormControl('', Validators.required),
    // pHealthIssue: new FormControl('', Validators.required)
   });
    
  payBillForm;
  down() {
    if (this.spinner > 0) {

      this.spinner = this.spinner - 1
    }
  }


  btn = ["active", "btn", "btn", "btn"];


  addBankingDetails(index) {
    for (let i = 0; i < this.btn.length; i++) {
      this.btn[i] = "btn";
    }
    this.btn[index] = "active";
  }

  modal = "modal";
  openmodal() {
    this.modal = 'show';
  }

  closemodal() {
    this.modal = 'modal';
    this.deliveryAddressForm.reset();
  }

  savemodal() {
    this.modal = 'modal';
    this.deliveryAddressForm.reset();
  }


  addMoreData: any = [];
  submitCount: number = 0;
  myDeliveryAddress(deliveryAddressForm) {


    if (deliveryAddressForm.name != "") {
      this.submitCount++;
    }
    if (deliveryAddressForm.adddress != "") {
      this.submitCount++;
    }
    if (deliveryAddressForm.state != "") {
      this.submitCount++;
    }
    if (deliveryAddressForm.city != "") {
      this.submitCount++;
    }
    if (deliveryAddressForm.zipcode != null) {
      this.submitCount++;
    }
    if (this.submitCount == 5) {

      this.addMoreData.push({ name: deliveryAddressForm.name, address1: deliveryAddressForm.address, city: deliveryAddressForm.city, state: deliveryAddressForm.state, zipcode: deliveryAddressForm.zipcode });
      this.submitCount = 0;
      this.savemodal();
    }
    else {
      alert("Please You Must Fill All The Form To Save");
      this.submitCount = 0;
    }

  }

  deliveryAddressForm: FormGroup;
  myDeliveryData = { name: '', address: '', city: '', state: '', zipcode: '' };


  accordance = [
    { show: 'show', collapse: 'collapse' },
    { show: '', collapse: 'hide' },
    { show: '', collapse: 'hide' },
    { show: '', collapse: 'hide' }
  ];
  ImgDiv: boolean = false;
  ImgDiv2: boolean = false;
  ImgDiv3: boolean = false;
  ImgDiv4: boolean = false;
  headerBG2 = "headerBG2";
  headerBG3 = "headerBG3";
  headerBG4 = "headerBG4";


  ////////////////////////
  respData: any;
  url: any;
  billbeskPaymentGatewayUrl;
  paymentRequestProcessParameter;
  customerID;
  TxnAmount;
  txtadditional1;
  txtadditional2;
  txtadditional3;
  txtadditional4;
  txtadditional5;
  txtadditional6;
  txtadditional7;
  ru;
  CART_ID:any;
  ORDER_TYPE:any;
  openCity(index) {
    window.scroll(0, 0);
    this.reset();
    this.accordance[index].show = 'show';
    this.accordance[index].collapse = 'collapse';
    if (index == 1) {
      this.ImgDiv = true;
      this.headerBG2 = 'CashBgColor';
    }
    if (index == 2) {
      this.ImgDiv = true;
      this.headerBG3 = 'CashBgColor';
      this.headerBG4 = 'CashBgColor';


      this.data11 = { userId: localStorage.getItem("userId") };
      // this.doctorService.getBillFormVals(this.data11, this.headers).subscribe((data: any) => {
       
      //   this.respData = data;
      //   this.CART_ID = this.respData.CART_ID;
      //   this.billbeskPaymentGatewayUrl = this.respData.billbeskPaymentGatewayUrl;
      //   this.paymentRequestProcessParameter = this.respData.PAYMENT_REQUEST_PARAMETER;
      //   this.customerID = this.respData.customerID;
      //   this.TxnAmount = this.respData.TxnAmount;
      //   this.txtadditional1 = this.respData.txtadditional1;
      //   this.txtadditional2 = this.respData.txtadditional2;
      //   this.txtadditional3 = this.respData.txtadditional3;
      //   this.txtadditional4 = this.respData.txtadditional4;
      //   this.txtadditional5 = this.respData.txtadditional5;
      //   this.txtadditional6 = this.respData.txtadditional6;
      //   this.txtadditional7 = this.respData.txtadditional7;
      //   this.ru = this.respData.ru;
      //   console.log(data);
      //   //this.submitForm();

      // });

    }
    if (index == 3) {
      this.ImgDiv3 = true;
      this.headerBG4 = 'CashBgColor';
    }

  }

  reset() {
    for (let i = 0; this.accordance.length > i; i++) {
      this.accordance[i].show = '';
      this.accordance[i].collapse = 'hide';
    }
  }

  public queryParammeter :any;

  getOrderDetail(userId:any){
    this.payBillForm = new FormGroup({
      msg: new FormControl(),
      txtCustomerID: new FormControl(),
      txtTxnAmount: new FormControl(),
      txtAdditionalInfo1: new FormControl(),
      txtAdditionalInfo2: new FormControl(),
      txtAdditionalInfo3: new FormControl(),
      txtAdditionalInfo4: new FormControl(),
      txtAdditionalInfo5: new FormControl(),
      txtAdditionalInfo6: new FormControl(),
      txtAdditionalInfo7: new FormControl(),
      ru: new FormControl()
    });
    this.data11 = { userId: userId };
    // this.doctorService.patientCart(this.data11, this.headers).subscribe((data: any) => {
    //   this.userData = data;
    //   this.productBeanList = this.userData.productBeanList;
    //   this.addressBeanList = this.userData.addressBeanList;
    //   this.PurchaseBeanList = this.userData.PurchaseBeanList

    //   let to
    //   if (this.productBeanList) {
    //     let to=0; 
    //     let one=0;
    //     let two=0
    //     for (let i = 0; i < this.productBeanList.length; i++) {
    //      //  if(id==this.cart[i].productId.id){
    //        //  to = this.cart[i].productId.selling * qty;
    //        //  one = data + to
    //      //  }
    //      //  else{
    //       two = two+ this.productBeanList[i].sellingPrice * this.productBeanList[i].qty
    //      //  }
       
    //    }
    //    this.total1 = two;
         
    //   }

    //   if (this.PurchaseBeanList) {
        
    //     if (this.minimumAmountPurchase < 300 ) {
    //       this.total_shipping_charges = 30; 
    //    }
    //    else this.total_shipping_charges = 0;
         
    //   }


    // });

    this.doctorService.patientCart(this.data11, this.headers).subscribe((data: any) => {
      this.userData = data;
      this.productBeanList = this.userData.productBeanList;
      this.addressBeanList = this.userData.addressBeanList;

      // if(this.CART_ID == 0){
      //    localStorage.getItem("ORDER_TYPE:1,ORDER_TYPE:2")
      // }
      // else if(this.ORDER_TYPE == 1){
      //   localStorage.getItem("ORDER_TYPE:1")
      // }
      // else if(this.ORDER_TYPE == 2){
      //   localStorage.getItem("ORDER_TYPE:2")
      // }



      let to
      if (this.productBeanList) {
        let to=0; 
        let one=0;
        let two=0
        for (let i = 0; i < this.productBeanList.length; i++) {
         //  if(id==this.cart[i].productId.id){
           //  to = this.cart[i].productId.selling * qty;
           //  one = data + to
         //  }
         //  else{
          two = two+ this.productBeanList[i].sellingPrice * this.productBeanList[i].qty
         //  }
       
       }
       this.total1 = two;
         
      }


    });

   
    this.deliveryAddressForm = new FormGroup({
      'name': new FormControl(this.myDeliveryData.name, Validators.required),
      'address': new FormControl(this.myDeliveryData.address, Validators.required),
      'city': new FormControl(this.myDeliveryData.city, Validators.required),
      'state': new FormControl(this.myDeliveryData.state, Validators.required),
      'zipcode': new FormControl(this.myDeliveryData.zipcode, [Validators.required, Validators.minLength(6)]),

    });
  }

  loginResp101

  ngOnInit() {
   
  }

  initialize(){
    var headers = new Headers({ 'Content-Type': 'application/json' });
    let params:any = {};
    params.aaa="aaa";
    this.doctorService.getProducts(params, headers).subscribe((data: any) => {
      this.getProduct = data.mainCategoryList
         this.productGetArray();
    })


    this.addAddressForm = new FormGroup({
      firstNameAdd: new FormControl(),
      lastNameAdd: new FormControl(),
      addressLine1Add: new FormControl(),
      addressLine2Add: new FormControl(),
      stateAdd: new FormControl(),
      cityAdd: new FormControl(),
      localityAdd: new FormControl(),
      zipAdd: new FormControl(),
    });
    this.editAddressForm = new FormGroup({
      firstNameEdit: new FormControl(),
      lastNameEdit: new FormControl(),
      addressLine1Edit: new FormControl(),
      addressLine2Edit: new FormControl(),
      stateEdit: new FormControl(),
      cityEdit: new FormControl(),
      localityEdit: new FormControl(),
      zipEdit: new FormControl(),
    });


    let queryParam = this.routeNav.queryParams.subscribe(params => {
      this.queryParammeter = params;
      
      let userId = (this.queryParammeter !=null || this.queryParammeter !=undefined )? this.queryParammeter["userId"]: localStorage.getItem("userId");
      
      if(this.queryParammeter != null || this.queryParammeter != undefined){
        var user = { userId: userId }
        this.user.loginViaUserID(user, headers).subscribe((data: any) => {
          // this.loginResp101 = data;
          // var key12="tipoftheday"
          // localStorage.setItem(key12,JSON.stringify(this.loginResp101.WEEKLY_HEALTHTIP_NEW));
          // let key11="responseData"
          // localStorage.setItem(key11,JSON.stringify(this.loginResp101));
          // let key = "userId"
          // let key1 = "name"
          // localStorage.setItem(key, this.loginResp101.userId)
          // localStorage.setItem(key1, this.loginResp101.NAME)
          // let products= "SUGGESTED_PRODUCTS"
          // localStorage.setItem(products, JSON.stringify(this.loginResp101.SUGGESTED_PRODUCTS))
          // localStorage.setItem("isDoctorLogin","false");
          // this.getOrderDetail(userId);
        });


      }else{
       
        this.getOrderDetail(userId);
      }
    });
  
  }

  get name() { return this.deliveryAddressForm.get('name'); }
  get address() { return this.deliveryAddressForm.get('address'); }
  get city() { return this.deliveryAddressForm.get('city'); }
  get state() { return this.deliveryAddressForm.get('state'); }
  get zipcode() { return this.deliveryAddressForm.get('zipcode'); }

  borderbg1 = "borderbg1";
  borderbg2 = "borderbg2";

  @ViewChild('submitBill') form: ElementRef;
  submitBillForm() {
    this.form.nativeElement.submit();
  }

  payment() {

    
    this.doctorService.getBillFormVals(this.data11, this.headers).subscribe((data: any) => {
       
      this.respData = data;
      this.CART_ID = this.respData.CART_ID;
      this.billbeskPaymentGatewayUrl = this.respData.billbeskPaymentGatewayUrl;
      this.paymentRequestProcessParameter = this.respData.PAYMENT_REQUEST_PARAMETER;
      this.customerID = this.respData.customerID;
      this.TxnAmount = this.respData.TxnAmount;
      this.txtadditional1 = this.respData.txtadditional1;
      this.txtadditional2 = this.respData.txtadditional2;
      this.txtadditional3 = this.respData.txtadditional3;
      this.txtadditional4 = this.respData.txtadditional4;
      this.txtadditional5 = this.respData.txtadditional5;
      this.txtadditional6 = this.respData.txtadditional6;
      this.txtadditional7 = this.respData.txtadditional7;
      this.ru = this.respData.ru;
      console.log(data);
      //this.submitForm();
      

    });
    
  }

  onlinePayment(){
    this.submitBillForm();
  }
 
  add(qty,id){
    
    var params = {
      
      quantity : qty,
      userId : localStorage.getItem("userId"),
      productId : id,
     
    }
    
    var headers = new Headers({ 'Content-Type': 'application/json' });
   this.user.updateQuantityOfProduct(params, headers).subscribe((data: any) => {
   
     let responce = data});
    let data=0
    let to=0
    let one=0
    let two=0
    for (let i = 0; i < this.productBeanList.length; i++) {
      if(id==this.productBeanList[i].productId){
        to = this.productBeanList[i].sellingPrice * parseInt(qty);
        one = data + to
      }
      else{
      two =  this.productBeanList[i].sellingPrice * this.productBeanList[i].qty
      }
    this.total1 = one+two;
    
   }
  //return qty;
  }
  custom1 = "modal";
  popup() {
    this.addAddressForm.reset();
    this.custom1 = "show";
    let dataToSend: any = {};
    let respData: any = {};

    this.headers = new Headers({ 'Content-Type': 'application/json' });

    dataToSend.city = "";
    dataToSend.editState = "";
    this.doctorService.getSelectedStateCityLocalityList(dataToSend, this.headers).subscribe((data) => {
      respData = data;
      if (respData.stateDropDownList) {
        this.editAddStateList = "";
        this.editAddStateList = respData.stateDropDownList;
        this.editAddStateList.push({ "storingValue": "Select State" });
      }
    });
  }
  close() {
    this.custom1 = "modal";
  }
  custom3 = "modal";
  public delevryAddressId:any;
  popup3(addressId) {
    this.delevryAddressId = addressId;
    this.custom3 = "show";
  }
  close3() {
    this.custom3 = "modal";
  }
    //edit modal
    custom4 = "modal";


    custom5 = "modal";
  popup5() {
    this.custom5 = "show";
  }
  close5() {
    this.custom5 = "modal";
  }

  custom6 = "modal";
  popup6() {
    this.custom6 = "show";
  }
  close6() {
    this.custom6 = "modal";
  }


    popup4(addressId, name, addressLine1, addressLine2, state, city, location, pincode) {
      //this.editAddressForm.reset();
      this.delevryAddressId = addressId;
      this.editFormName = name;
      this.editFirstName = name;
      this.editLastName;
      this.editAddressLine1 = addressLine1;
      this.editAddressLine2 = addressLine2;
      this.editState = state;
      this.editCity = city;
      this.editLocation = location;
      this.editZip = pincode;
  
      this.custom4 = "show";
      let dataToSend: any = {};
      let respData: any = {};
  
      this.headers = new Headers({ 'Content-Type': 'application/json' });
  
      dataToSend.city = this.editCity;
      dataToSend.editState = this.editState;
      this.doctorService.getSelectedStateCityLocalityList(dataToSend, this.headers).subscribe((data) => {
        respData = data;
        if (respData.stateDropDownList) {
          this.editAddStateList = "";
          this.editAddStateList = respData.stateDropDownList;
          this.editAddStateList.push({ "storingValue": this.editState });
        }
        if (respData.cityDropDownList) {
          this.editAddCityList = "";
          this.editAddCityList = respData.cityDropDownList;
          this.editAddCityList.push({ "storingValue": this.editCity });
        }
        if (respData.localityDropDownList) {
          this.editAddLocationList = "";
          this.editAddLocationList = respData.localityDropDownList;
          this.editAddLocationList.push({ "storingValue": this.editLocation });
        }
      });
    }
    close4() {
      this.custom4 = "modal";
    }
  removeAddress() {
    let dataToSend: any = {};
    dataToSend.addressId = this.delevryAddressId;
    dataToSend.userId = localStorage.getItem("userId");

    
    let respData: any;
    this.doctorService.removeAddress(dataToSend, this.headers).subscribe((data) => {
      respData = data;
      if (respData.STATUS == "SUCCESS") {
        this.close3();
        let dataToSend: any = {};
        dataToSend.userId = localStorage.getItem("userId");//
        this.doctorService.patientCart(dataToSend, this.headers).subscribe((data: any) => {
          this.userData = data;
          this.productBeanList = this.userData.productBeanList;
          
          this.addressBeanList = this.userData.addressBeanList;
          this.productBeanList = this.userData.productBeanList;
          this.PurchaseBeanList = this.userData.PurchaseBeanList;
          console.log(this.addressBeanList);
          let to;
          this.total1 = 0;
          if (this.productBeanList) {

            for (let i = 0; i < this.productBeanList.length; i++) {
              to = this.productBeanList[i].sellingPrice;
              this.total1 = this.total1 + Number(to);
            }
          }
        });
      }
    });
  }
  selectAddress(delAddId) {
    let dataToSend: any = {};
    dataToSend.addressId = delAddId;
    dataToSend.userId = localStorage.getItem("userId");
    
    let respData: any;
    this.doctorService.selectAddress(dataToSend, this.headers).subscribe((data) => {
      respData = data;
      if (respData.isExists == "true") {
        
        swal("Success","Products will be delievered to this address",'success');
      } else if (respData.isExists == "false") {
        swal("Error","Sorry, we don't deliver to this address",'error');
      }
       
    });
  }

  proceedSelectAddress(delAddId) {
    let dataToSend: any = {};
    dataToSend.addressId = delAddId;
    dataToSend.userId = localStorage.getItem("userId");
    
    let respData: any;
    this.doctorService.selectAddress(dataToSend, this.headers).subscribe((data) => {
      respData = data;
      if (respData.isExists == "true") {
        this.accordance[3].show = 'show';
        
      } else if (respData.isExists == "false") {
        swal("Error","Sorry, we don't deliver to this address",'error');
      }
       
    });
  }

  addNewAddress(addNewAddressFormValues) {

    let dataToSend: any = {};
    if (this.delevryAddressId == undefined) {
      dataToSend.addressId = "";
    } else {
      dataToSend.addressId = this.delevryAddressId;
    }

    dataToSend.userId = localStorage.getItem("userId");

    dataToSend.addressName = addNewAddressFormValues.firstNameAdd;
    dataToSend.addressLastName = addNewAddressFormValues.lastNameAdd;
    dataToSend.addressLine1 = addNewAddressFormValues.addressLine1Add;
    dataToSend.addressLine2 = addNewAddressFormValues.addressLine2Add;
    dataToSend.state = addNewAddressFormValues.stateAdd;
    dataToSend.city = addNewAddressFormValues.cityAdd;
    dataToSend.zipCode = addNewAddressFormValues.zipAdd;
    if (addNewAddressFormValues.localityAdd == null) {
      dataToSend.location = "";
    } else {
      dataToSend.location = addNewAddressFormValues.localityAdd;
    }

    let respData;
    this.doctorService.addNewAddressMain(dataToSend, this.headers).subscribe((data) => {
      respData = data;
      if (respData.STATUS == "SUCCESS") {
        let dataToSend: any = {};
        dataToSend.userId = localStorage.getItem("userId");//
        this.close();
        this.doctorService.patientCart(dataToSend, this.headers).subscribe((data: any) => {
          this.userData = data;
          this.productBeanList = this.userData.productBeanList;
          this.addressBeanList = this.userData.addressBeanList;
          this.productBeanList = this.userData.productBeanList;

          console.log(this.addressBeanList);
          let to;
          this.total1 = 0;
          if (this.productBeanList) {

            for (let i = 0; i < this.productBeanList.length; i++) {
              to = this.productBeanList[i].sellingPrice;
              this.total1 = this.total1 + Number(to);
            }
          }
        });
      }
    });
  }
  onChangeState(stateVal) {
    let dataToSend: any = {};
    let respData: any = {};

    this.headers = new Headers({ 'Content-Type': 'application/json' });

    dataToSend.state = stateVal;
    this.doctorService.getCityList(dataToSend, this.headers).subscribe((data) => {
      respData = data;
      this.editAddCityList = "";
      this.editAddCityList = respData.cityDropDownList;
      this.editAddCityList.push({ "storingValue": "Select City" });
    });
  }
  onChangeCity(cityVal) {
    let dataToSend: any = {};
    let respData: any = {};

    this.headers = new Headers({ 'Content-Type': 'application/json' });

    dataToSend.state = cityVal;
    this.doctorService.getLocalityList(dataToSend, this.headers).subscribe((data) => {
      respData = data;
      this.editAddLocationList = "";
      this.editAddLocationList = respData.localityDropDownList;
      this.editAddLocationList.push({ "storingValue": "Select Locality" });
    });
  }
  editAddress(editFormValues,fName1,lName1,aLine1,aLine2,state1,city1,locality1,zipC1) {

let a = state1
let b = city1
    let dataToSend: any = {};
    dataToSend.addressId = this.delevryAddressId;
    dataToSend.userId = localStorage.getItem("userId");

    // dataToSend.addressName = editFormValues.firstNameEdit;
    // dataToSend.addressLastName = editFormValues.lastNameEdit;
    // dataToSend.addressLine1 = editFormValues.addressLine1Edit;
    // dataToSend.addressLine2 = editFormValues.addressLine2Edit;
    // dataToSend.state = editFormValues.stateEdit;
    // dataToSend.city = editFormValues.cityEdit;
    // dataToSend.zipCode = editFormValues.zipEdit;

    dataToSend.addressName = fName1;
    dataToSend.addressLastName = lName1;
    dataToSend.addressLine1 =aLine1;
    dataToSend.addressLine2 = aLine2;
    dataToSend.state = state1;
    dataToSend.city = city1;
    dataToSend.zipCode = zipC1;
    //dataToSend.location = editFormValues.localityEdit;

    if(locality1 == null){
        dataToSend.location = "";
    }else{
      dataToSend.location = locality1;
    }
    console.log(dataToSend);
    let respData;
    this.doctorService.editAddress(dataToSend, this.headers).subscribe((data) => {
      respData = data;
      if (respData.STATUS == "SUCCESS") {
        let dataToSend: any = {};
        dataToSend.userId = localStorage.getItem("userId");//
        this.close4();
        this.doctorService.patientCart(dataToSend, this.headers).subscribe((data: any) => {
          this.userData = data;
          this.productBeanList = this.userData.productBeanList;
          this.addressBeanList = this.userData.addressBeanList;
          this.productBeanList = this.userData.productBeanList;

          console.log(this.addressBeanList);
          let to;
          this.total1 = 0;
          if (this.productBeanList) {

            for (let i = 0; i < this.productBeanList.length; i++) {
              to = this.productBeanList[i].sellingPrice;
              this.total1 = this.total1 + Number(to);
            }
          }
        });
      }
    });
  }
  qty:any=0;
  dropFlag:boolean=false
  getProduct:any[]=[];
  openDrop(){
    this.dropFlag=true
    this.products =[];
    this.qty=0
  }
  products:any=[];
  productFlag:boolean=false;
dataC:any
  product(data){
    
    this.productFlag=true
   this.products =[];
   this.dataC = data
   for(let i=0;i<this.getProduct.length;i++){
    if(this.dataC.replace(/ /g,'').toLowerCase()==this.getProduct[i].name.replace(/ /g,'').toLowerCase()){
      this.products = this.getProduct[i].productsCategoryBean
    
    }
  }
    this.qty=0
  }

check(){
 
  
}

pId:any;
productFlag1:boolean=false
  productSelect(product){
    this.productFlag1 =true
    this.qty=0
    
  //  delete this.pId ;
    for(let i=0;i<this.products.length;i++){
      if(product.replace(/ /g,'').toLowerCase() == this.products[i].name.replace(/ /g,'').toLowerCase()){
        this.pId = this.products[i].id
          
      }
    }

  }

  cookieCartIdNew:any;
  cookieCartId:any;
  counter:any;

  addProduct(){
   
    let params={
      userId : localStorage.getItem("userId"),
      productId : this.pId,
      quantity : this.qty
    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    if(this.pId!=undefined){
      this.user.patientAddToCart(params,headers).subscribe((data: any) => {
        let respData = data
        delete this.pId;

        
    if(respData.STATUS=='SUCCESS'){
      // alert('hello')
      this.router.navigate(['/patientCart'])
      // window.location.reload();
      let dta =   localStorage.getItem("userId");
      
      this.productGetArray()
    //   this.doctorService.patientCart(dta, headers).subscribe((data: any) => {
    //     this.userData = data;
    //     alert('inside second service')
    //     this.productBeanList = this.userData.productBeanList;
    //     this.addressBeanList = this.userData.addressBeanList;
    //     // let data1=0
    //     
    //   let to
    //   let one
    //   let two=0
      
    //   for (let i = 0; i < this.productBeanList.length; i++) {
    //    //  if(id==this.cart[i].productId.id){
    //      //  to = this.cart[i].productId.selling * qty;
    //      //  one = data + to
    //    //  }
    //    //  else{
    //     two = two+ this.productBeanList[i].sellingPrice * this.productBeanList[i].qty
    //    //  }
     
    //  }
    //  this.total1 = two;
     
    //   });
    }
    else{
      // alert('bye')
    }
      })
    }
 
  

  }
  productGetArray(){
   
    let data11 = { userId: localStorage.getItem("userId") };
    this.doctorService.patientCart(data11, this.headers).subscribe((data: any) => {
      this.userData = data;
      this.productBeanList = this.userData.productBeanList;
      this.addressBeanList = this.userData.addressBeanList;
      this.cartflag = data.cartflag;
      // let data1=0
      
    let to
    let one
    let two=0
    
    for (let i = 0; i < this.productBeanList.length; i++) {
   
      two = two+ this.productBeanList[i].sellingPrice * this.productBeanList[i].qty
    
   
   }
   this.total1 = two;
   
    });
  }
cod(){
  let respData;
  let flaged:Boolean=false;
  let data11 = { patientUserId: localStorage.getItem("userId") };
  this.doctorService.patientCod(data11, this.headers).subscribe((data: any) => {
    respData = data;
    if (respData.STATUS == "SUCCESS") {
      swal("Success","Order has Successfully placed",'success');
      this.router.navigate(['/patient-dashboard/patient-dashbord-details'])
flaged = true
    }

});
if(flaged){
  this.router.navigate(['/patient-dashboard/patient-dashbord-details'])
}
}

cart:any;
private fieldArray: Array<any> = [];
 
deleteFieldValue(qty,id,index) {
  qty=0;
  if(qty==0)
  { 
    this.add(qty,id);
    this.productBeanList.splice(index, 1);
  }
  else{
   // swal("Warning","Please select Quantity 0",'warning');
  }
  // if(qty==0)
  // { 
  //   this.cart.splice(index, 1);
  // }
  // else{
  //   swal("Warning","Please select Quantity 0",'warning');
  // }
 
}

}

