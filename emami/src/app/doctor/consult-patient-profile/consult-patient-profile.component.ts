import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Router, ParamMap, ActivatedRoute } from '@angular/router';
import { DoctorService } from '../../doctor.service';
import { Conditional } from '@angular/compiler';
import { parse } from 'url';
import swal from 'sweetalert2';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-consult-patients-profile',
  templateUrl: './consult-patient-profile.component.html',
  styleUrls: ['./consult-patient-profile.component.css']
})
export class ConsultPatientProfileComponent implements OnInit {
  previouslyAddedPrescriptionList:any=[];
  queriesForm = {
    writeQuery: null,
    doctorDropDown: null
  }
  recievedChatData: any = [];
  singleMessageSelected: any = [];


  isDisabledInp1: boolean = true;
  isDisabledInp2: boolean = true;
  isDisabledInp3: boolean = true;

  familyHistoryMemberCount = 0;
  familyHistoryMemberCountArray = [];
  familyAlreadyFilledDataList: any = [];
  familyRelationshipList: any = [];
  currentMedicationInpVal: any;
  public isEditConsultation = 0;
  public diagnosysAlreadyAdded: any = "";
  public ConsultationNotesAlreadyAdded: any = "";
  public investigationAlreadyAdded: any = [];
  public prescriptionAlreadyAdded: any = [];//comes in response after clicked on history consultation row
  public symptomsAlreadyAdded: any = [];
  public selectedPrescribedTimingArray: any = [];
  public selectedPrescribedWhenArray: any = [];
  userData12;
  total1: any = 0;
  data11;
  productBeanList;
  productsList;
  public investigationsOptions: any[] = [];
  public selectedInvestigationList: any[] = [];
  public inMemoryFinalInvestigationList: any[] = [];
  public diagnosys;
  public symptomsList1: any[] = [];
  public inMemorySymtomlist: any[] = [];
  public symptom: string;
  public daignosys: string;
  public inverstigation: string;
  public zanduMedicinelist: any[] = [];

  public presentConsitionNamelist: any[] = [];
  public presentConditionYears: any[] = [];
  public selectedPresentCondition: any;
  public selectedPresentConditionOther: any;
  public selectedConditionYears: any;
  public inMemoryPresentCondition: any[] = [];


  public allergiesNameList: any[] = [];
  public allergiesYears: any[] = [];
  public selectedAllergiesName: any;
  public selectAllergiesYears: any;
  public selectAllergiesOther:any;
  public inMemoryAllergies: any[] = [];

  public currentMedicationList: any[] = [];
  public currentMedication: string;
  public selectedNoOfYears: any;
  public inMemoryCurrentMedication: any[] = [];


  public prescribedMedicine: any[] = []
  public prescrideMedineNoOfTimes: any[] = [];
  public prescribedDosage: any[] = [];
  public prescribedWhenToTake: any[] = [];
  public inMemoryPrescribedMedicine: any[] = [];
  public idCount = 0;
  public isEditedMode = 0;

  public selectedPrescribedMedicineId: any = 0;
  public selectedPrescrideMedineNoOfTimes = 0;
  public selectedDosage: any = 0;
  public selectedPrescribedWhenToTake: any = 0;
  public prescribedNoOfDays: any = "No Of Days";


  public patientConsultationList: any = []
  public errorMsg: any = null;
  public showError: any = false;
  public isOrderSummaryBtnDisabled: any = false;
  public coupanCode: any = null;

  public patientProfileSinceList: any[] = [];
  public presentCondition: any[] = [];
  public otherConditionName: any = null;
  public showOtherFiled: boolean;

  public allergies: any[] = [];
  public specialConsidaration: any = null;

  public specialConsiderations: string;


  public pastllnessOrSurgeies: any[] = [];
  public inMemoryPastllnessOrSurgeies: any[] = [];
  public selectedPastIllness: any;
  public selectedPastYears: any;
  public selectedPastillOther:any;

  public otherPresentConsition: string;

  public habitList: any[] = [];
  public selectedHabit: any;
  public selectedHabitYear: any;
  public inMemoryHabitList: any[] = [];

  public exersiseRoutineList: any[] = [];
  public selectedExerciseRoutine: any;
  public inMemoryExersiseRoutineList: any[] = [];

  public eatingPreferencesList: any[] = [];
  public selectedEatingPreferences: any;
  public inMemoryEatingPreferenceList: any[] = [];

  public workinigHours: any[] = [];
  public selectedWorkingHours: any;
  public inmMemoryWorkingHours: any[] = [];

  public appetiteList:any[]=[];
  public selectedAppetite: any;
  public inMemoryAppetite: any[] = [];

  public physiqueList:any[]=[];
  public selectedPhysique: any;
  public inMemoryPhysique: any[] = [];


  public skinList:any[]=[];
  public selectedSkin: any;
  public inMemorySkin: any[] = [];

  public bbhList:any[]=[];
  public selectedBbh: any;
  public inMemoryBbh: any[] = [];

  public vsList:any[]=[];
  public selectedVs: any;
  public inMemoryVs: any[] = [];

  public sleepList:any[]=[];
  public selectedSleep: any;
  public inMemorySleep: any[] = [];

  public opList:any[]=[];
  public selectedOp: any;
  public inMemoryOp: any[] = [];

  public thList:any[]=[];
  public selectedTh: any;
  public inMemoryTh: any[] = [];

  public pcList:any[]=[];
  public selectedPc: any;
  public inMemoryPc: any[] = [];

  public hairList:any[]=[];
  public selectedHair: any;
  public inMemoryHair: any[] = [];

  public diseaseList: any[] = [];
  public isDeceased: boolean = false;
  public selectedFamilyDisease: any;
  public inMemoryFamiltDiseaseList: any[] = [];
  public selectedFamilyDiseaseSince: any;

  public selectedFamilyAllergy: any;
  public selectedFamilyAllergySince: any
  public inMemoryFamilyAllergyList: any[] = [];

  public familyRelationId: any = 0;

  public inMemoryMembers: any[] = [];

  public isVisibleMemberForm: boolean = false;

  public patientProfileData: any;


  public delevryAddressId: any;
  public editAddStateList: any;
  public editAddLocationList: any;

  public currentMedicationyears: any;
  public addAddressForm: any;
  public editAddressForm: any;
  public editFormName: any;
  public editFirstName: any;
  public editLastName: any;
  public editAddressLine1: any;
  public editAddressLine2: any;
  public editState: any;
  public editCity: any;
  public editLocation: any;
  public editZip: any;
  public editAddCityList: any;
  public pdfDataList: any = [];

  public patientName: any;
  public patientGender: any;
  public patientMobileNo: any;
  public patientHealth: any;
  public patientImage: any;
  public patienteAge: any;

  public patientheight: any;
  public patientweight: any;


  public paymentModeSelected: any = null;

  public headers = new Headers({ 'Content-Type': 'application/json' });

  gender;
  Dignosys;
  age;
  mobile;
  name;
  health;
  responsedata: any = [];
  userData: any;
  AppointmentId;
  presentAllergyConditionSince;
  presentAllergyCondition;
  presentMedicationConditionSince;

  addressBeanList;
  Habits;
  patientHabitCondition;
  patientHabitConditionSince;

  Exercise_Routine;
  exersiseRoutineCondition;
  patientExersiseRoutineCount;

  Eating_Preference;
  eatingPreferencesCount;
  eatingPreferencesCondition;

  Working_Hours;
  wokingHoursCount;
  wokingHoursCondition;

  Since;
  presentvalue;
  presentAllergies;
  PresentMedicalCondition;
  presentObj: any[];
  selecteddate: any;
  since11 = "since"
  consultationNotes;

  selectedValue: any;
  selectedValue1: any;
  selectedValue2: any;
  selectedValue3: any;
  selectedValue4: any;
  selectedValue5: any;
  selectedValue6: any;
  selectedValue7: any;
  selectedValue8: any;
  doctorUserId;
  appointmentId;
  patientUserId;
  constructor(private fb: FormBuilder, private doctorService: DoctorService, private router: Router, private activeRoute: ActivatedRoute) {
    this.doctorUserId = JSON.parse(localStorage.getItem("doctorUserId"));
    this.appointmentId = JSON.parse(localStorage.getItem("patientUserId"));
    this.patientUserId = JSON.parse(localStorage.getItem("appointmentId"));
    this.resetD()
    // Health Report
    this.xreport = [{
      report:"X - Ray Report",date:"Aug 21, 2018",pdf:"Filename_upload_report_abc.pdf",image:"././assets/images/delete-1.png",
      image2:"././assets/images/noun-download.png",image3:"././assets/images/noun-print.png"
    },
    {
      report:"Blood test Report",date:"Aug 21, 2018",pdf:"Filename_upload_report_abc.pdf",image:"././assets/images/delete-1.png",
      image2:"././assets/images/noun-download.png",image3:"././assets/images/noun-print.png"
    },
    {
      report:"ECG Report",date:"Aug 21, 2018",pdf:"Filename_upload_report_abc.pdf",image:"././assets/images/delete-1.png",
      image2:"././assets/images/noun-download.png",image3:"././assets/images/noun-print.png"
    },
    {
      report:"MRI Report",date:"Aug 21, 2018",pdf:"Filename_upload_report_abc.pdf",image:"././assets/images/delete-1.png",
      image2:"././assets/images/noun-download.png",image3:"././assets/images/noun-print.png"
    },
    {
      report:"X - Ray Report",date:"Aug 21, 2018",pdf:"Filename_upload_report_abc.pdf",image:"././assets/images/delete-1.png",
      image2:"././assets/images/noun-download.png",image3:"././assets/images/noun-print.png"
    },
    {
      report:"Blood test Report",date:"Aug 21, 2018",pdf:"Filename_upload_report_abc.pdf",image:"././assets/images/delete-1.png",
      image2:"././assets/images/noun-download.png",image3:"././assets/images/noun-print.png"
    },
    {
      report:"ECG Report",date:"Aug 21, 2018",pdf:"Filename_upload_report_abc.pdf",image:"././assets/images/delete-1.png",
      image2:"././assets/images/noun-download.png",image3:"././assets/images/noun-print.png"
    }
  ];
  
}


  tabs = [
    { active: 'active', tabcontent: 'tabcontent' },
    { active: '', tabcontent: 'hide' },
    { active: '', tabcontent: 'hide' }
  ];

  profile: any = [];
  prescribe: any = [];
  hrecord: Array<any> = [];
  Dropi = [];
  Dropi2 = [];
  sring = "Bloating";
  nooftimes: any;
  nooftimes1: any;
  days: any;
  qty: any;
  when: any;
  time: any;
  time1: any;
  time2: any;
  time3: any;
  time4: any;
  flag: boolean = false;
  flag1: boolean = false;
  flag2: boolean = false;
  flag3: boolean = false;
  flag4: boolean = false;
  flag5: boolean = false;
  flag6: boolean = false;
  flag7: boolean = false;
  flag8: boolean = false;
  flag9: boolean = false;
  flag10: boolean = false;
  flag11: boolean = false;
  flag12: boolean = false;
  flag13: boolean = false;
  times: string = "";
  custom = "custom";
  type: any;
  drop() {
    if (this.custom == "custom") {
      this.custom = 'show';
    }
    else if (this.custom == "show") {
      this.custom = 'custom';
    }

  }
  closed() {
    this.custom = 'custom';
  }
  createprescription: FormGroup;
  lifestyledetails: FormGroup;
  familyhistory: FormGroup;
  orderdetails: Array<any> = [];
  ordersummery: Array<any> = [];
  totalproduct: Array<any> = [];
  total: Array<any> = [];
  types: Array<any> = [];
  since: Array<any> = [];
  typess: Array<any> = [];
  Allergies: Array<any> = [];
  pastillness: Array<any> = [];
  cmedication: Array<any> = [];
  fdiseases: Array<any> = [];
  fdAllergies: Array<any> = [];
  mdiseases: Array<any> = [];
  mallergies: Array<any> = [];
  diagnosis: Array<any> = [];
  selmedicine: Array<any> = [];
  pmedicine: Array<any> = [];
  selectMedicine: Array<any> = [];
  noOfTimesDaily: Array<any> = [];
  Timing: Array<any> = [];
  Whendrug: Array<any> = [];
  prescriptioninfo: Array<any> = [];

  AllMedicine: any;
  chkvalue;
  subtotal = 380;
  dcharges = 40;
  totalprice = 420;

  getDataforPatientHistory() {
    
    let patientHistory = JSON.parse(localStorage.getItem("patientHistory"));
    this.pastllnessOrSurgeies = patientHistory.presentConditionDropDownOptions;
    console.log(this.presentConsitionNamelist);
  }



  setPatientProfileData() {
    debugger
    /**
     * Needs to remove data variable once it come from server
     * 
    */
    //let data = this.getPatientProfileData();

    this.patientProfileSinceList = this.patientProfileData.sincleList;
    this.presentCondition = this.patientProfileData.conditionList;
    let tempOtherObj:any = {};
    tempOtherObj.id =  -1;
    tempOtherObj.name =  "Other";
    this.presentCondition.push(tempOtherObj);
    this.allergies = this.patientProfileData.allergiesList;
    this.currentMedication = null;
    this.pastillness = this.patientProfileData.conditionList;;
    this.currentMedication = "";

  }

  setLifeStyleData() {
debugger
    this.habitList = this.patientProfileData.habitsList;
    this.exersiseRoutineList = this.patientProfileData.exerciseRoutineList
    this.eatingPreferencesList = this.patientProfileData.eatingPrferencesList;
    this.workinigHours = this.patientProfileData.addWorkingHoursList;
    this.appetiteList = this.patientProfileData.appetiteList;
    this.physiqueList = this.patientProfileData.phyList
    this.skinList = this.patientProfileData.skinList
    this.hairList = this.patientProfileData.hairList
    this.bbhList = this.patientProfileData.bbhList
    this.vsList = this.patientProfileData.vsList
    this.sleepList = this.patientProfileData.sleepList
    this.pcList = this.patientProfileData.pcList
    this.opList = this.patientProfileData.opList
    this.thList = this.patientProfileData.rhList

  }

  setFamilyMemberData() {

    this.diseaseList = this.patientProfileData.diseasesList;
    this.familyRelationshipList = this.patientProfileData.relationBeanList;
    this.familyAlreadyFilledDataList = this.patientProfileData.familyHistory;
    if (this.familyAlreadyFilledDataList.length == 0) {
      let tempObj: any = {};

      tempObj.relationId = 0;
      tempObj.relation = "Select";
      tempObj.isdeceased = false;
      tempObj.reasonForDeceased = false;
      tempObj.disease = [];
      tempObj.allergies = [];
      this.familyAlreadyFilledDataList.push(tempObj);

    }
    // if(this.familyAlreadyFilledDataList.length > 0){
    //   this.familyHistoryMemberCount = this.familyAlreadyFilledDataList.length;
    //   for(let i=0;i<this.familyAlreadyFilledDataList.length-1;i++){
    //     this.showAddMemberForm();
    //   }

    // }
  }

  familyMemberDataReset() {
    this.selectedFamilyDiseaseSince = 0;
    this.isDeceased = false;
    this.selectedFamilyDisease = 0;
    this.selectedFamilyAllergy = 0;
    this.selectedFamilyAllergySince = 0;

  }

  lifeStyleDataReset() {
    this.selectedHabit = 0;
    this.selectedHabitYear = 0;
    this.selectedExerciseRoutine = 0;
    this.selectedWorkingHours = 0;
    this.selectedEatingPreferences = 0;
    this.selectedAppetite = 0;
    this.selectedPhysique = 0;
    this.selectedSkin = 0;
    this.selectedHair = 0;
    this.selectedBbh=0;
    this.selectedVs=0;
    this.selectedSleep=0;
    this.selectedPc=0;
    this.selectedOp=0;
    this.selectedTh=0;
  }

  setPatientProfileHeaderData() {
debugger
    //   private patientName:any;
    // private patientGender:any;
    // private patientMobileNo:any;
    // private patientHealth:any;
    // private privateImage:any;
    // private privateAge:any;

    ;

    let profileData = JSON.parse(localStorage.getItem("patientHistory"));

    this.patientName = profileData.name;
    this.patientGender = profileData.gender;
    this.patientMobileNo = profileData.mobile;
    this.patientHealth = profileData.health;
    this.patienteAge = profileData.age;

    this.patientheight = profileData.height;
    this.patientweight = profileData.weight;

  }

  patienthistoryForm() {
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

    this.getDataforPatientHistory()

    this.familyhistory = this.fb.group({
      fd1: ['Asthma'],
      fd2: ['0-1yrs'],
      fd3: ['Asthma'],
      fd4: ['0-1yrs'],
      fatherAllergies1: ['Dust and Smoke'],
      fatherAllergies2: ['0-1yrs'],
      fatherAllergies3: ['Dust and Smoke'],
      fatherAllergies4: ['0-1yrs'],
      mdiseases1: ['Cancer'],
      mdiseases2: ['0-1yrs'],
      mdiseases3: ['Cancer'],
      mdiseases4: ['0-1yrs'],
      mallergies1: ['Smoke'],
      mallergies2: ['0-1yrs'],
      mallergies3: ['Smoke'],
      mallergies4: ['0-1yrs'],
      motherdeceased: ['', Validators.required],
      fatherdeceased: ['', Validators.required],
      enterCondition: ['', Validators.required],
      enterAllergies: ['', Validators.required],
      mAllergies: ['', Validators.required],
      mdiseases: ['', Validators.required],
      fAllergies: ['', Validators.required],

    });

    this.createprescription = this.fb.group({
      sym: ['', Validators.required],
      diagnosis: ['', Validators.required],
      esymptom2: ['', Validators.required],
      cpdiagnosis: ['Enter Diagnosis'],
      Investigation1: ['', Validators.required],
      Investigation2: ['', Validators.required],
      consultationnotes: ['', Validators.required],
      Investigation3: ['', Validators.required],
      Investigation4: ['', Validators.required],
      Investigation5: ['', Validators.required],
      Investigation6: [, Validators.required],
      Investigation7: ['Uric Acid', Validators.required],
      Investigation8: ['', Validators.required],
      Investigation9: ['', Validators.required],
      selectmedicine: ['Zandu Puncharishta (50 ML)'],
      premedicine: ['Zandu Puncharishta (50 ML)'],
      Medicine: ['Select Medicine'],
      Notime: ['', Validators.required],
      custnooftimes: ['', Validators.required],
      Timingperd: ['', Validators.required],
      Nooftypes: ['', Validators.required],
      medicineTiming: ['', Validators.required],
      Timingperdcustom: ['', Validators.required],
      whentake: ['', Validators.required],
      Noddrug: ['', Validators.required],
      Medicine1: ['', Validators.required],
      Notime1: ['', Validators.required],
      custnooftimes1: ['', Validators.required],
      Timingperd1: ['', Validators.required],
      Nooftypes1: ['', Validators.required],
      medicineTiming1: ['', Validators.required],
      Timingperdcustom1: ['', Validators.required],
      whentake1: ['', Validators.required],
      Noddrug1: ['', Validators.required],
      medicineQuantity: ['', Validators.required],
      medicineDays: ['', Validators.required],
      noftnd1: ['', Validators.required],
    });

  }

  initateForm() {
    this.patienthistoryForm();
  }

  patientHistoryDataReset() {
    this.specialConsiderations = "";
    this.selectedPresentCondition = 0;
    this.selectedPresentConditionOther = ""
    this.selectedConditionYears = 0;
    this.selectedAllergiesName = 0;
    this.selectAllergiesYears = 0;
    this.selectAllergiesOther = ""
    this.selectedNoOfYears = 0;
    this.selectedPastIllness = 0;
    this.selectedPastYears = 0;
    this.selectedPastillOther = ""

  }
  modeOfConsultation:any;
  public msgValue = "success";
 
  dontShowActionsBtnsForHistoryAppointments:boolean;
 
  ngOnInit() {
    debugger
    let patientHistory = JSON.parse(localStorage.getItem("patientHistory"));
  // if( localStorage.getItem("inMemoryPresentCondition")!=undefined){
  //  this.inMemoryPresentCondition= JSON.parse(localStorage.getItem("inMemoryPresentCondition"))
  // }
  // else{
  //   this.inMemoryPresentCondition=[];
  // }

  // if(localStorage.getItem("inMemoryAllergies")!=undefined){
  //   this.inMemoryAllergies = JSON.parse(localStorage.getItem("inMemoryAllergies"))
  // }
  // else{
  //   this.inMemoryAllergies = []
  // }
  
  // if(localStorage.getItem("specialConsiderations")!=undefined){
  //   this.specialConsiderations = localStorage.getItem("specialConsiderations")
  // }

  // if(localStorage.getItem("inMemoryCurrentMedication")!=undefined){
  //   this.inMemoryCurrentMedication = JSON.parse(localStorage.getItem("inMemoryCurrentMedication"))
  // }
  // else{
  //   this.inMemoryCurrentMedication = [];
  // }

  // if(localStorage.getItem("inMemoryPastllnessOrSurgeies")!=undefined){
  //   // this.inMemoryPastllnessOrSurgeies = JSON.parse(localStorage.getItem("inMemoryPastllnessOrSurgeies"))
  // }
  // else{
  //    this.inMemoryPastllnessOrSurgeies = [];
  //    }
  // if(localStorage.getItem("inMemoryHabitList")!=undefined){
  //   this.inMemoryHabitList = JSON.parse(localStorage.getItem("inMemoryHabitList"))
  // }
  // if(localStorage.getItem("inMemoryExersiseRoutineList")!=undefined){
  //   this.inMemoryExersiseRoutineList = JSON.parse(localStorage.getItem("inMemoryExersiseRoutineList"))
  // }
  // if(localStorage.getItem("inMemoryEatingPreferenceList")!=undefined){
  //   this.inMemoryEatingPreferenceList = JSON.parse(localStorage.getItem("inMemoryEatingPreferenceList"))
  // }
  // if(localStorage.getItem("inmMemoryWorkingHours")!=undefined){
  //   this.inmMemoryWorkingHours = JSON.parse(localStorage.getItem("inmMemoryWorkingHours"))
  // }
  // if(localStorage.getItem("inMemoryAppetite")!=undefined){
  //   this.inMemoryAppetite = JSON.parse(localStorage.getItem("inMemoryAppetite"))
  // }
  //   if(localStorage.getItem("inMemoryPhysique")!=undefined){
  //   this.inMemoryPhysique = JSON.parse(localStorage.getItem("inMemoryPhysique"))
  // }
  // if(localStorage.getItem("familyAlreadyFilledDataList")!=undefined){
  //   this.familyAlreadyFilledDataList = localStorage.getItem("familyAlreadyFilledDataList")
  // }
    let tempBoolFlag = localStorage.getItem("isclickedFromHistory");
    if(tempBoolFlag == "true"){
      this.dontShowActionsBtnsForHistoryAppointments = true;
    }else if(tempBoolFlag == "false"){
      this.dontShowActionsBtnsForHistoryAppointments = false;
    }
    this.modeOfConsultation = localStorage.getItem("modeOfConsultation");
    this.getQueriesData();
    //this.showAddMemberForm();// to show by default family form
  

    this.setPatientProfileHeaderData();

    this.patientProfileData = patientHistory.patientProfileObject;
    
    console.log(this.patientProfileData);
    this.getDataforPatientHistory();
    this.setPatientProfileData();
    this.setLifeStyleData();
    this.setFamilyMemberData();
    this.initateForm();
    this.patientHistoryDataReset();
    this.lifeStyleDataReset();
    this.familyMemberDataReset();
    this.loadPatientHistoryData();
    this.loadLifeStyleHabitsData();
    // Health Report
    this.getReportList();

    
  }

  loadPatientHistoryData() {
debugger
    let selectedPresentationConsition = this.patientProfileData.patientHistory.presentCondition;
    let selectedAllergies = this.patientProfileData.patientHistory.allergies;
    let selectedCurrentMedication = this.patientProfileData.patientHistory.currentMedication;
    this.specialConsiderations = this.patientProfileData.patientHistory.specialConsidaration;
    let pastIllnessOrSurgery = this.patientProfileData.patientHistory.pastCondition;

    for (let index = 0; index < selectedPresentationConsition.length; index++) {
      let presentCondition = this.getPresentationConsitionObject(selectedPresentationConsition[index].conditionId);
      let sinceObj = this.getSinceObj(selectedPresentationConsition[index].sinceId);
      if (presentCondition != null && sinceObj != null) {
        let obj = {
          presentConditionName: presentCondition,
          presentConditionYears: sinceObj
        }
        this.inMemoryPresentCondition.push(obj);
      }
    }

    for (let index = 0; index < selectedAllergies.length; index++) {
      let allergy = this.getAllergyObj(selectedAllergies[index].allergyId);
      let sinceObj = this.getSinceObj(selectedAllergies[index].sinceId);
      if (allergy != null && sinceObj != null) {
        let obj = {
          allergyName: allergy,
          allergyYears: sinceObj
        }
        this.inMemoryAllergies.push(obj);
      }
    }

    for (let index = 0; index < selectedCurrentMedication.length; index++) {
      let currentMedicationValue = selectedCurrentMedication[index].name;
      let sinceObj = this.getSinceObj(selectedCurrentMedication[index].sinceId);
      if (currentMedicationValue != null && sinceObj != null) {
        let obj = {
          currentMedicationValue: currentMedicationValue,
          noOfYears: sinceObj
        }
        this.inMemoryCurrentMedication.push(obj);
      }
    }

    /**
     * Data is Not Comming Neet to Confirm
     *  */
    for (let index = 0; index < pastIllnessOrSurgery.length; index++) {
      let pastCondition = this.getPastOrSurgeryObject(pastIllnessOrSurgery[index].pastConditionId);
      let sinceObj = this.getSinceObj(pastIllnessOrSurgery[index].sinceId);
      if (pastCondition != null && sinceObj != null) {
        let obj = {
          pastConditionName: pastCondition,
          pastConditionYears: sinceObj
        }
        this.inMemoryPastllnessOrSurgeies.push(obj);
      }
    }

  }

  loadLifeStyleHabitsData() {
debugger
    let selectedHabits = this.patientProfileData.lifeStyleDetails.habits;
    let selectedexerciseRoutine = this.patientProfileData.lifeStyleDetails.exerciseRoutine;
    let selectedEatingPreferences = this.patientProfileData.lifeStyleDetails.eatingPreferences;
    let selectedWorkingHours = this.patientProfileData.lifeStyleDetails.workingHours;
    let selectedAppetite = this.patientProfileData.lifeStyleDetails.appetiteStyle;
    let selectedPhysique = this.patientProfileData.lifeStyleDetails.physiqueStyle
    let selectedSkin = this.patientProfileData.lifeStyleDetails.skinStyle
    let selectedHair = this.patientProfileData.lifeStyleDetails.hairStyle
    let selectedBbh = this.patientProfileData.lifeStyleDetails.bbhStyle
    let selectedVs = this.patientProfileData.lifeStyleDetails.vcStyle
    let selectedSleep = this.patientProfileData.lifeStyleDetails.sleepStyle
    let selectedPc = this.patientProfileData.lifeStyleDetails.pcStyle
    let selectedOp = this.patientProfileData.lifeStyleDetails.opStyle
    let selectedTh = this.patientProfileData.lifeStyleDetails.rhStyle
    for (let index = 0; index < selectedHabits.length; index++) {
      let habitObj = this.getHabitObj(selectedHabits[index].habitId);
      let sinceObj = this.getSinceObj(selectedHabits[index].sinceId);
      if (habitObj != null && sinceObj != null) {
        let obj = {
          habit: habitObj,
          habitYrs: sinceObj
        };
        this.inMemoryHabitList.push(obj);
      }
    }


    for (let index = 0; index < selectedexerciseRoutine.length; index++) {
      let exerciseObj = this.getExerciseRoutineObj(selectedexerciseRoutine[index].exerciseRoutineId);
      if (exerciseObj != null) {
        let obj =
        {
          exercise: exerciseObj

        };
        this.inMemoryExersiseRoutineList.push(obj);
      }
    }

    for (let index = 0; index < selectedEatingPreferences.length; index++) {
      let eatingPrefernceObj = this.getEatingPreferencesObj(selectedEatingPreferences[index].eatingPreferencesId);
      if (eatingPrefernceObj != null) {
        let obj = {
          eatingHabits: eatingPrefernceObj
        };
        this.inMemoryEatingPreferenceList.push(obj);
      }
    }

    for (let index = 0; index < selectedWorkingHours.length; index++) {

      let workingHrsObj = this.getWorkingHoursObj(selectedWorkingHours[index].workingHourId);

      if (workingHrsObj != null) {
        let obj = {
          workingHrs: workingHrsObj

        };
        this.inmMemoryWorkingHours.push(obj);
      }
    }

    for (let index = 0; index < selectedAppetite.length; index++) {

      let appetiteObj = this.getAppetiteObj(selectedAppetite[index].name);

      if (appetiteObj != null) {
        let obj = {
          appetite: appetiteObj

        };
        
        this.inMemoryAppetite.push(obj);
      }
    }

debugger
    for (let index = 0; index < selectedPhysique.length; index++) {

      let physiqueObj = this.getPhysiquObj(selectedPhysique[index].name);

      if (physiqueObj != null) {
        let obj = {
          physique: physiqueObj
          
        };
        debugger
        this.inMemoryPhysique.push(obj);
      }
    }

    for (let index = 0; index < selectedSkin.length; index++) {
      let skinObj = this.getSkinObj(selectedSkin[index].name);
      if (skinObj != null) {
        let obj = {
          skin: skinObj

        };
        this.inMemorySkin.push(obj);
      }
    }

    for (let index = 0; index < selectedHair.length; index++) {

      let hairObj = this.getHairObj(selectedHair[index].name);

      if (hairObj != null) {
        let obj = {
          hair: hairObj

        };
        this.inMemoryHair.push(obj);
      }
    }

    for (let index = 0; index < selectedBbh.length; index++) {

      let bbhObj = this.getBbhObj(selectedBbh[index].name);

      if (bbhObj != null) {
        let obj = {
          bbh: bbhObj

        };
        this.inMemoryBbh.push(obj);
      }
    }

    for (let index = 0; index < selectedVs.length; index++) {

      let vsObj = this.getVsObj(selectedVs[index].name);

      if (vsObj != null) {
        let obj = {
          vs: vsObj

        };
        this.inMemoryVs.push(obj);
      }
    }

    for (let index = 0; index < selectedSleep.length; index++) {

      let sleepObj = this.getSleepObj(selectedSleep[index].name);

      if (sleepObj != null) {
        let obj = {
          sleep: sleepObj

        };
        this.inMemorySleep.push(obj);
      }
    }

    for (let index = 0; index < selectedPc.length; index++) {

      let pcObj = this.getPcObj(selectedPc[index].name);

      if (pcObj != null) {
        let obj = {
          pc: pcObj

        };
        this.inMemoryPc.push(obj);
      }
    }

    for (let index = 0; index < selectedOp.length; index++) {

      let opObj = this.getOpObj(selectedOp[index].name);

      if (opObj != null) {
        let obj = {
          op: opObj

        };
        this.inMemoryOp.push(obj);
      }
    }

    for (let index = 0; index < selectedTh.length; index++) {

      let thObj = this.getThObj(selectedTh[index].name);

      if (thObj != null) {
        let obj = {
          th: thObj

        };
        this.inMemoryTh.push(obj);
      }
    }
  }

  getThObj(thId: any): any {

    let th = null;
    for (let index = 0; index < this.thList.length; index++) {
      if (this.thList[index].name == (thId)) {
        th = this.thList[index];
        break;
      }
    }
    return th;
  }

  getOpObj(opId: any): any {

    let op = null;
    for (let index = 0; index < this.opList.length; index++) {
      if (this.opList[index].name == (opId)) {
        op = this.opList[index];
        break;
      }
    }
    return op;
  }
  getPcObj(pcId: any): any {

    let pc = null;
    for (let index = 0; index < this.pcList.length; index++) {
      if (this.pcList[index].name == (pcId)) {
        pc = this.pcList[index];
        break;
      }
    }
    return pc;
  }

  getSleepObj(sleepId: any): any {

    let sleep = null;
    for (let index = 0; index < this.sleepList.length; index++) {
      if (this.sleepList[index].name == (sleepId)) {
        sleep = this.sleepList[index];
        break;
      }
    }
    return sleep;
  }

  getVsObj(VsId: any): any {

    let vs = null;
    for (let index = 0; index < this.vsList.length; index++) {
      if (this.vsList[index].name == (VsId)) {
        vs = this.vsList[index];
        break;
      }
    }
    return vs;
  }

  getBbhObj(BbhId: any): any {

    let bbh = null;
    for (let index = 0; index < this.bbhList.length; index++) {
      if (this.bbhList[index].name == (BbhId)) {
        bbh = this.bbhList[index];
        break;
      }
    }
    return bbh;
  }

  getHairObj(HairId: any): any {

    let hair = null;
    for (let index = 0; index < this.hairList.length; index++) {
      if (this.hairList[index].name == (HairId)) {
        hair = this.hairList[index];
        break;
      }
    }
    return hair;
  }

  getSkinObj(skinId: any): any {

    let skin = null;
    for (let index = 0; index < this.skinList.length; index++) {
      if (this.skinList[index].name == (skinId)) {
        skin = this.skinList[index];
        break;
      }
    }
    return skin;
  }

  getPhysiquObj(physiqueId: any): any {
debugger
    let physiqueObj = null;
    for (let index = 0; index < this.physiqueList.length; index++) {
      if (this.physiqueList[index].name == (physiqueId)) {
        physiqueObj = this.physiqueList[index];
        break;
      }
    }
    return physiqueObj;
  }

  getAppetiteObj(appetiteId: any): any {
debugger
    let appetiteObj = null;
    for (let index = 0; index < this.appetiteList.length; index++) {
      if (this.appetiteList[index].name == (appetiteId)) {
        appetiteObj = this.appetiteList[index];
        break;
      }
    }
    return appetiteObj;
  }
  getHabitObj(habitId: any): any {

    let habitObj = null;
    for (let index = 0; index < this.habitList.length; index++) {
      if (this.habitList[index].id == parseInt(habitId)) {
        habitObj = this.habitList[index];
        break;
      }
    }
    return habitObj;
  }

  getExerciseRoutineObj(id: any): any {

    let exerciseRoutineObj = null;

    for (let index = 0; index < this.exersiseRoutineList.length; index++) {
      if (this.exersiseRoutineList[index].id == parseInt(id)) {
        exerciseRoutineObj = this.exersiseRoutineList[index];
        break;
      }
    }
    return exerciseRoutineObj
  }

  getEatingPreferencesObj(id): any {
    let eatingHabitObj = null;

    for (let index = 0; index < this.eatingPreferencesList.length; index++) {
      if (this.eatingPreferencesList[index].id == parseInt(id)) {
        eatingHabitObj = this.eatingPreferencesList[index];
        break;
      }
    }
    return eatingHabitObj;
  }

  getWorkingHoursObj(id: any): any {
    let workingHrObj = null;
    for (let index = 0; index < this.workinigHours.length; index++) {
      if (this.workinigHours[index].id == parseInt(id)) {
        workingHrObj = this.workinigHours[index];
        break;
      }
    }
    return workingHrObj;
  }

  getPresentationConsitionObject(presentConsitionId: any): any {

    let presentConditionObj = null;
    for (let index = 0; index < this.presentCondition.length; index++) {
      if (this.presentCondition[index].id == parseInt(presentConsitionId)) {
        presentConditionObj = this.presentCondition[index];
        break;
      }
    }
    return presentConditionObj;
  }
  getPastOrSurgeryObject(presentConsitionId: any): any {

    let presentConditionObj = null;
    for (let index = 0; index < this.presentCondition.length; index++) {
      if (this.presentCondition[index].id == parseInt(presentConsitionId)) {
        presentConditionObj = this.presentCondition[index];
        break;
      }
    }
    return presentConditionObj;
  }

  getSinceObj(sinceId: any): any {
    let sinceObj = null
    for (let index = 0; index < this.patientProfileSinceList.length; index++) {
      if (this.patientProfileSinceList[index].id == parseInt(sinceId)) {
        sinceObj = this.patientProfileSinceList[index];
        break;
      }
    }
    return sinceObj;
  }

  getAllergyObj(allergyId: any): any {

    let allergyNameObj = null;

    for (let index = 0; index < this.allergies.length; index++) {
      if (this.allergies[index].id == parseInt(allergyId)) {
        allergyNameObj = this.allergies[index];
        break;
      }
    }
    return allergyNameObj;
  }

  loadLifeStyleData() {
    let selectedHabits = [];
    let exerciseRoutine = [];
    let eatingPreferences = [];
    let workingHours = [];
  }

  getPriductList() {
    this.doctorService.PatientConsultation({ appointmentId: this.AppointmentId }, this.headers).subscribe((data) => {
      this.userData = data;
    });
  }
  selected
  resetD(){
    this.selected = null
   }


  default: string = "default";
  default2 = "tab-hbright";
  default3 = "default3";
  cartId :any;
  openCity(index) {
debugger
    let formFildsAddmedicine = this.AllMedicine;
    this.reset();
    this.tabs[index].active = 'active';
    this.tabs[index].tabcontent = 'tabcontent';
    if (index == 0) {
      this.default = "default";
      this.default2 = "tab-hbright";
      this.default3 = "default3;"
      this.isPreviouslyAddedPrescriptionChanged = false
      this.previouslyAddedPrescId =null
      this.value=null
      this.resetD()
    }
    if (index == 1) {
      //debugger
      // this.inMemoryPrescribedMedicine = 
      // this.selectedInvestigationList = JSON.parse(localStorage.getItem("selectedInvestigationList"))
      this.prescriptionAlreadyAdded=[];
      
      localStorage.getItem("inMemoryPrescribedMedicine")
      if(localStorage.getItem("symptomsList")!=undefined){
        this.symptomsList1 = JSON.parse(localStorage.getItem("symptomsList"))
      }else{
        this.symptomsList1=[];
      }
     
      this.diagnosys = localStorage.getItem("diagnosys")
     
      this.default = "default";
      this.default2 = "default2";
      this.default3 = "default3;"
    let data1:any={};
    if(this.isPreviouslyAddedPrescriptionChanged == true){
       data1 = { appointmentId: this.previouslyAddedPrescId }
       this.isPreviouslyAddedPrescriptionChanged = false
      //  this.previouslyAddedPrescId =null
      //  this.value=null
      //  this.resetD()
    }else{
       data1 = { appointmentId: localStorage.getItem("appointment_Id") }
    }
      

      this.doctorService.PatientConsultation(data1, this.headers).subscribe((data) => {
        this.patientConsultationList = data;
        
        this.previouslyAddedPrescriptionList = this.patientConsultationList.CON_LIST;
        this.isEditConsultation = this.patientConsultationList.isEditConsultation;
        this.isPreviouslyAddedPrescriptionChanged == false;
        if (this.isEditConsultation == 1) {
         //debugger
          this.prescriptionAlreadyAdded = this.patientConsultationList.prescriptionBeanList;
          this.symptomsAlreadyAdded = this.patientConsultationList.symptomsList1;
          this.diagnosysAlreadyAdded = this.patientConsultationList.diagnosys;

          if (this.diagnosysAlreadyAdded == "") {
            this.diagnosysAlreadyAdded = null;
          }
          this.ConsultationNotesAlreadyAdded = this.patientConsultationList.consultationNotes;
          if (this.ConsultationNotesAlreadyAdded == "") {
            this.ConsultationNotesAlreadyAdded = null;
          }
          this.investigationAlreadyAdded = this.patientConsultationList.investigationListId;

          for (let i = 0; i < this.patientConsultationList.investigationsOptions.length; i++) {
            for (let j = 0; j < this.investigationAlreadyAdded.length; j++) {
              if (this.patientConsultationList.investigationsOptions[i].id == this.investigationAlreadyAdded[j]) {
                this.patientConsultationList.investigationsOptions[i].checked = true;
              }
            }

          }
        }
        if (this.prescriptionAlreadyAdded.length > 0) {
          this.inMemoryPrescribedMedicine = [];
        }
        console.log(this.patientConsultationList);

        this.patientConsultationList = data;
        if(localStorage.getItem("inMemoryPrescribedMedicine")!=undefined){
          this.inMemoryPrescribedMedicine = JSON.parse(localStorage.getItem("inMemoryPrescribedMedicine"))
        }
          if (this.patientConsultationList.symptomsList1 ) {
          // this.patientConsultationList.symptomsList1 = [];
          this.patientConsultationList.symptomsList1 = this.patientConsultationList.symptomsList1
     
        }else if((localStorage.getItem("symptomsList"))!=undefined){
          this.patientConsultationList.symptomsList1 = JSON.parse(localStorage.getItem("symptomsList"))
        }
        if(this.patientConsultationList.diagnosys){
          this.diagnosys = this.patientConsultationList.diagnosys
        }else if(localStorage.getItem("diagnosys")!=undefined){
          this.daignosys = localStorage.getItem("diagnosys");
        }
        if (this.patientConsultationList.symptomsList1 == undefined) {
          this.patientConsultationList.symptomsList1 = [];
        }
        this.symptomsList1 = this.patientConsultationList.symptomsList1;
        this.diagnosys = this.patientConsultationList.diagnosys
        let newArray = [];
        for (let index = 0; index < this.patientConsultationList.investigationsOptions.length; index++) {
          newArray.push(this.patientConsultationList.investigationsOptions[index]);
          this.patientConsultationList.investigationsOptions[index]["isManualEntry"] = false;
          this.inMemoryFinalInvestigationList.push(this.patientConsultationList.investigationsOptions[index]);
        }
        console.log("Ivestigation");
        console.log(this.inMemoryFinalInvestigationList);
        this.investigationsOptions = newArray;

        this.consultationNotes = this.patientConsultationList.consultationNotes;
        this.productsList = this.patientConsultationList.productsList;
        this.prescribedMedicine = this.patientConsultationList.productsList;
        this.prescrideMedineNoOfTimes = this.patientConsultationList.noOfTimeOptions;
        this.prescribedDosage = this.patientConsultationList.dosageOptions;
        this.prescribedWhenToTake = this.patientConsultationList.whenOptions;
        this.isEditedMode = this.patientConsultationList.isEditConsultation;
        console.log(this.prescribedDosage);
      });
    }
    if (index == 2) {
      
      //alert();
      this.default = "tab-hbright";
      this.default2 = "default2";
      this.default3 = "default3;"
      this.data11 = {
        userId: localStorage.getItem("user_Id"),
        doctorUserId: localStorage.getItem("doctor_Id"),
        appointmentId: localStorage.getItem("appointmentId")
      }
      //alert(this.data11);
      this.doctorService.ordersummery(this.data11, this.headers).subscribe((data: any) => {
        this.userData = data;
        this.cartId = this.userData.CART_ID
        this.productBeanList = this.userData.productBeanList;
        console.log(this.productsList);
        this.addressBeanList = this.userData.addressBeanList;
        this.productBeanList = this.userData.productBeanList;

        console.log(this.addressBeanList);
        console.log(this.productBeanList);
        let to;
        this.total1 = 0;
        if (this.productBeanList) {

          for (let i = 0; i < this.productBeanList.length; i++) {
            to = this.productBeanList[i].sellingPrice  * this.productBeanList[i].qty;
            this.total1 = this.total1 + Number(to);
            this.total1 = this.total1
          }
        }
      });
    }

  }

  reset() {
    for (let i = 0; this.tabs.length > i; i++) {
      this.tabs[i].active = '';
      this.tabs[i].tabcontent = 'hide';
    }
  }

  onvoted(thispassdate: any) {
    this.selecteddate = thispassdate

  }

orderId:any;
  proceed() {
    if (this.inMemoryPrescribedMedicine.length == 0 && this.isEditConsultation == 0) {
      swal("Error", "Please Add medicines in Prescrption!", 'error');
      return false;
    }
    this.user.doctorUserId = JSON.parse(localStorage.getItem("doctor_Id"));
    this.user.patientUserId = JSON.parse(localStorage.getItem("user_Id"));
    this.user.appointmentId = JSON.parse(localStorage.getItem("appointmentId"));


    var proceedDataObj = {
      userName: JSON.parse(localStorage.getItem("userName_Doc")),
      // isEditConsultation: this.isEditedMode,
      isEditConsultation:0,
      doctorUserId: JSON.parse(localStorage.getItem("doctor_Id")),
      patientUserId: JSON.parse(localStorage.getItem("user_Id")),
      appointmentId: JSON.parse(localStorage.getItem("appointmentId")),
      diagnosis: this.diagnosys,
      consultationNotes: this.consultationNotes,
      symptomsList: this.symptomsList1,
      investigationList: this.selectedInvestigationList,
      productList: this.inMemoryPrescribedMedicine,

    }
    let responseDataValue = null;
    console.log(proceedDataObj);
    this.doctorService.AddConsultation(proceedDataObj, this.headers)
      .subscribe((data => {
        responseDataValue = data;
        if (responseDataValue.STATUS == "SUCCESS") {
          this.orderId = responseDataValue.orderId
          this.openCity(2);
        }


      }));
    console.log(JSON.stringify(proceedDataObj));
  }

  addInMemoryOtherInvestigation() {
    let obj = {
      createTime: null,
      createrId: null,
      displayValue: this.inverstigation,
      enabled: true,
      id: ++this.investigationsOptions.length,
      lastModificationDate: null,
      name: "INVESTIGATIONS",
      referenceValue: null,
      storingValue: this.inverstigation,
      updatedBy: null,
      validEntry: true,
      isManualEntry: true
    }
    this.investigationsOptions.push(obj);
    this.inMemoryFinalInvestigationList.push(obj);
    this.inverstigation = null;
    console.log(this.inMemoryFinalInvestigationList);
  }

  addInMemoryInvestigation(event: any, value: any, index: any) {
    
    console.log(this.inMemoryFinalInvestigationList);
    if (event.target.checked && value != null) {
      let obj = {
        createTime: null,
        createrId: null,
        displayValue: value,
        enabled: true,
        id: ++this.investigationsOptions.length,
        lastModificationDate: null,
        name: "INVESTIGATIONS",
        referenceValue: null,
        storingValue: value,
        updatedBy: null,
        validEntry: true,
        isManualEntry: false
      }
      this.inMemoryFinalInvestigationList.push(obj);
      this.selectedInvestigationList.push(this.inMemoryFinalInvestigationList[index])

    } else {
      for (let index = 0; index < this.inMemoryFinalInvestigationList.length; index++) {
        if (this.inMemoryFinalInvestigationList[index].storingValue == value) {
          this.inMemoryFinalInvestigationList.splice(index, 1);
        }
      }
      for (let index = 0; index < this.investigationsOptions.length; index++) {
        console.log(this.investigationsOptions[index])
        if (this.investigationsOptions[index] != undefined && this.investigationsOptions[index].isManualEntry) {
          if (this.investigationsOptions[index].storingValue == value) {
            this.investigationsOptions.splice(index, 1);
          }

        }
      }

    }
    console.log("=================================");
    console.log(this.selectedInvestigationList);
  }
  removeSymptomFieldsAA(name: string) {
    for (let index = 0; index < this.symptomsAlreadyAdded.length; index++) {
      if (this.symptomsAlreadyAdded[index].name == name) {
        this.symptomsAlreadyAdded.splice(index, 1);
      }
    }
  }
  removeSymptomFields(name: string) {
    for (let index = 0; index < this.symptomsList1.length; index++) {
      if (this.symptomsList1[index].name == name) {
        this.symptomsList1.splice(index, 1);
      }
    }
  }
  addSymptomFields() {
    if (this.symptom != null) {
      let obj = {
        "consultation": null,
        "consultationId": 0,
        "createTime": null,
        "createrId": null,
        "id": 7,
        "lastModificationDate": null,
        "name": this.symptom,
        "updatedBy": null
      }
        ;
      this.symptomsList1.push(obj);
      console.log(this.symptomsList1);
      let symptomlist = (this.symptomsList1);
      localStorage.setItem("symptomsList",JSON.stringify(symptomlist))
     
      this.symptom = null
    }
  }
flagShow1:boolean = false;
flagShow2:boolean = false;
flagShow3:boolean = false;
onAllergyChange(){
  if(this.selectedAllergiesName === "-1"){
    this.flagShow2 = true
    }
    else{this.flagShow2=false}
}
onChangeillness(){
  if(this.selectedPastIllness === "-1"){
    this.flagShow3 = true
    }
    else{this.flagShow3=false}
}
  enableOtherFiled(event: any) {
    
    if(this.selectedPresentCondition === "-1"){
    this.flagShow1 = true
    }
    else{this.flagShow1=false}
    this.selectedPresentCondition = event.target.value;
    let flag = false;
    for (let index = 0; index < this.presentCondition.length; index++) {
      if (this.presentCondition[index].id == -1 && this.presentCondition[index].name == "Other") {
        flag = true;
        break;
      } else {
        flag = false;
      }
    }
    if (flag) {
      this.showOtherFiled = true;
    } else {
      this.showOtherFiled = false;
    }
  }

  addInMemoryPresentCondition() {
    this.flagShow1 = false;
   
    
    // if (this.showOtherFiled) {
    //   if (!this.otherConditionName) {
    //     swal("Please enter value for other", 'Error');
    //     return false;
    //   }
    // }
    
    let presentConditionObj = null;
    let presentConditionyear = null;
    if (this.selectedPresentCondition == 0 || this.selectedConditionYears == 0) {
      swal("Please select Present condition or Since", 'Error');
      return false;
    }
    for (let index = 0; index < this.presentCondition.length; index++) {

      if (this.presentCondition[index].id == parseInt(this.selectedPresentCondition)) {
       
          presentConditionObj = this.presentCondition[index];
        
       
      }
    }
    for (let index = 0; index < this.patientProfileSinceList.length; index++) {
      if (this.patientProfileSinceList[index].id == parseInt(this.selectedConditionYears)) {
        presentConditionyear = this.patientProfileSinceList[index];
      }
    }
    if (presentConditionObj != null && presentConditionyear != null) {
      let obj = {
        presentConditionName: presentConditionObj,
        presentConditionYears: presentConditionyear
      }
      /**
       * Need to revisit this part for other in all section
       */
      // if(obj.presentConditionName.name == "Other"){
      //   obj.presentConditionName.other = this.otherConditionName;
      // }
      this.inMemoryPresentCondition.push(obj);
    
      console.log(this.inMemoryPresentCondition);
      //reset 
      this.selectedPresentCondition = 0;
      this.selectedConditionYears = 0;
    }
  }

  deletePresentCondition(item) {
    this.inMemoryPresentCondition.splice(item, 1);
  }

  replaceAndAddInMemoryObjPresentConsitionObj(index: any, item: any, presentConditionId: any, presentConditionYearsId: any, other: any) {
    let presentConditionObj = null;
    let presentConditionyear = null;
    console.log(index);
    console.log(other);

    for (let index = 0; index < this.presentCondition.length; index++) {
      if (this.presentCondition[index].id == parseInt(presentConditionId)) {
        presentConditionObj = this.presentCondition[index];
        if (this.presentCondition[index].name == "Other") {
          presentConditionObj.other = other;
        }
      }
    }
    for (let index = 0; index < this.patientProfileSinceList.length; index++) {
      if (this.patientProfileSinceList[index].id == parseInt(presentConditionYearsId)) {
        presentConditionyear = this.patientProfileSinceList[index];
      }
    }

    if (presentConditionObj != null && presentConditionyear != null) {
      this.inMemoryPresentCondition[index].presentConditionName = presentConditionObj;
      this.inMemoryPresentCondition[index].presentConditionYears = presentConditionyear;
    }
    console.log(this.inMemoryPresentCondition);

  }

  addInMemoryCurrentMedication() {
    let pNoOfYear = null;
    if (this.currentMedicationInpVal == "" || this.selectedNoOfYears == 0) {
      swal("Please select Current  Medication or Since", 'Error');
      return false;
    }
    for (let index = 0; index < this.patientProfileSinceList.length; index++) {
      if (this.patientProfileSinceList[index].id == parseInt(this.selectedNoOfYears)) {
        pNoOfYear = this.patientProfileSinceList[index]
      }
    }
    if ((this.currentMedicationInpVal != "" || this.currentMedicationInpVal != null) && pNoOfYear != null) {
      let obj = {
        currentMedicationValue: this.currentMedicationInpVal,
        noOfYears: pNoOfYear
      }
      this.inMemoryCurrentMedication.push(obj);
      console.log(this.inMemoryCurrentMedication);
    }
    this.selectedNoOfYears = 0;
    this.currentMedicationInpVal = "";
  }
  removeInMemoryMedication(index: any) {
    this.inMemoryCurrentMedication.splice(index, 1);
  }

  addInMemoryAllergies() {
    

    let allergyNameObj = null;
    let allergyYear = null;
    // if (this.selectedAllergiesName == 0 || this.selectAllergiesYears == 0) {
    //   swal("Please select Allergy or Years", 'Error');
    //   return false;
    // }else{
    //   this.flagShow2 = false
    // }
    for (let index = 0; index < this.allergies.length; index++) {
      if (this.allergies[index].id == parseInt(this.selectedAllergiesName)) {
       
        allergyNameObj = this.allergies[index];
        
      }
    }
    for (let index = 0; index < this.patientProfileSinceList.length; index++) {
      if (this.patientProfileSinceList[index].id == parseInt(this.selectAllergiesYears)) {
       
        allergyYear = this.patientProfileSinceList[index];
      }
    }
    if (allergyNameObj != null && allergyNameObj != null) {
      let obj = {
        allergyName: allergyNameObj,
        allergyYears: allergyYear
      }
      this.inMemoryAllergies.push(obj);
      console.log(this.inMemoryAllergies);
      this.resetPatientHistoryForm();
    }
  }

  resetPatientHistoryForm() {
    this.selectedAllergiesName = 0;
    this.selectAllergiesYears = 0;
    this.selectedPresentCondition = 0;
    this.selectedConditionYears = 0;
    this.selectedPastIllness = 0;
    this.selectedPastYears = 0;
    this.selectedPastillOther = ""
  }

  deleteAllegries(item) {

    this.inMemoryAllergies.splice(item, 1);
  }

  replaceAndAddInMemoryObjAllergiesObj(index: any, item: any, allergyNameId: any, allergyYearId: any) {
    let allergyNameObj = null;
    let allergyYear = null;

    for (let index = 0; index < this.allergies.length; index++) {
      if (this.allergies[index].id == parseInt(allergyNameId)) {
        allergyNameObj = this.allergies[index];
      }
    }
    for (let index = 0; index < this.patientProfileSinceList.length; index++) {
      if (this.patientProfileSinceList[index].id == parseInt(allergyYearId)) {
        allergyYear = this.patientProfileSinceList[index];
      }
    }
    if (allergyNameObj != null && allergyYear != null) {
      let obj = {
        allergyName: allergyNameObj,
        allergyYears: allergyYear
      }
      this.inMemoryAllergies[index].allergyName = allergyNameObj;
      this.inMemoryAllergies[index].allergyYears = allergyYear;
    }
    console.log(this.inMemoryAllergies);
  }


  replacePrescribedMedicine(id: any, pm: any, pmnot: any, pd: any, pwtt: any, nod: any) {

    let productObj = null;
    let noOfTimeObj = null;
    let dosageObj = null;
    let whenToTakeObj = null;
    let noOfDaysObj = nod;

    if (this.idCount <= 0) this.idCount = 0;

    this.idCount--;
    for (let index = 0; index < this.prescribedMedicine.length; index++) {
      if (this.prescribedMedicine[index].productId == pm) {
        productObj = this.prescribedMedicine[index];
      }
    }
    for (let index = 0; index < this.prescrideMedineNoOfTimes.length; index++) {
      if (this.prescrideMedineNoOfTimes[index].id == pmnot) {
        noOfTimeObj = this.prescrideMedineNoOfTimes[index];
      }
    }
    for (let index = 0; index < this.prescribedDosage.length; index++) {
      if (this.prescribedDosage[index].id == pd) {
        dosageObj = this.prescribedDosage[index];
      }
    }
    for (let index = 0; index < this.prescribedWhenToTake.length; index++) {
      if (this.prescribedWhenToTake[index].id == pwtt) {
        whenToTakeObj = this.prescribedWhenToTake[index];
      }
    }


    if (productObj != null && noOfTimeObj != null &&
      dosageObj != null && whenToTakeObj != null &&
      (nod != undefined || nod != null)) {
      let obj = {
        selectedProductId: pm,
        selectedNoOfDays: pmnot,
        selectedDosageId: pd,
        selectedWhen: pwtt,
        product: productObj,
        noOfDays: noOfTimeObj,
        dosage: dosageObj,
        whenToTake: whenToTakeObj,
        noOfDay: noOfDaysObj,
        id: id
      }
      console.log(obj);
      for (let index = 0; index < this.inMemoryPrescribedMedicine.length; index++) {
        if (this.inMemoryPrescribedMedicine[index].id == id) {
          this.inMemoryPrescribedMedicine[index] = obj;
        }
      }
    }
    console.log(this.inMemoryPrescribedMedicine);
  }


  addPrescribedMedicine() {

    let productObj = null;
    let noOfTimeObj = null;
    let dosageObj = null;
    let whenToTakeObj = null;
    let noOfDaysObj = this.prescribedNoOfDays;
    for (let index = 0; index < this.prescribedMedicine.length; index++) {
      if (this.prescribedMedicine[index].productId == this.selectedPrescribedMedicineId) {
        productObj = this.prescribedMedicine[index];
      }
    }
    for (let index = 0; index < this.prescrideMedineNoOfTimes.length; index++) {
      if (this.prescrideMedineNoOfTimes[index].id == this.selectedPrescrideMedineNoOfTimes) {
        noOfTimeObj = this.prescrideMedineNoOfTimes[index];
      }
    }
    for (let index = 0; index < this.prescribedDosage.length; index++) {
      if (this.prescribedDosage[index].id == this.selectedDosage) {
        dosageObj = this.prescribedDosage[index];
      }
    }
    for (let index = 0; index < this.prescribedWhenToTake.length; index++) {
      if (this.prescribedWhenToTake[index].id == this.selectedPrescribedWhenToTake) {
        whenToTakeObj = this.prescribedWhenToTake[index];
      }
    }

    if (productObj != null && noOfTimeObj != null &&
      dosageObj != null && whenToTakeObj != null &&
      (noOfDaysObj != undefined || noOfDaysObj != null)) {
      let obj = {

        selectedProductId: productObj.productId,
        selectedNoOfDays: noOfTimeObj.id,
        selectedDosageId: dosageObj.id,
        selectedWhen: whenToTakeObj.id,
        product: productObj,
        noOfDays: noOfTimeObj,
        dosage: dosageObj,
        whenToTake: whenToTakeObj,
        noOfDay: noOfDaysObj,
        id: ++this.idCount
      }
      if (this.inMemoryCurrentMedication != null || this.inMemoryPrescribedMedicine != undefined) {
        this.inMemoryPrescribedMedicine.push(obj);
      }
      console.log(this.inMemoryPrescribedMedicine);
    }
    //At last reset default add fields values after 
    this.selectedPrescribedMedicineId = 0;
    this.selectedPrescrideMedineNoOfTimes = 0;
    this.selectedDosage = 0;
    this.selectedPrescribedWhenToTake = 0;
    this.prescribedNoOfDays = "No Of Days";
  }

  addInMemoryPassIllness() {
    this.flagShow3 = false;
    let pastPresentConditionObj = null;
    let pastPresentConditionyear = null;
    if (this.selectedPastIllness == 0 || this.selectedPastYears == 0) {
      swal("Please select Past illness or Years", 'Error');
      return false;
    }
    for (let index = 0; index < this.presentCondition.length; index++) {
      if (this.presentCondition[index].id == parseInt(this.selectedPastIllness)) {
       
        pastPresentConditionObj = this.presentCondition[index];
        
      }
    }
    for (let index = 0; index < this.patientProfileSinceList.length; index++) {
      if (this.patientProfileSinceList[index].id == parseInt(this.selectedPastYears)) {
        pastPresentConditionyear = this.patientProfileSinceList[index];
      }
    }
    if (pastPresentConditionObj != null && pastPresentConditionyear != null) {
      let obj = {
        pastIllness: pastPresentConditionObj,
        pasIllnessYears: pastPresentConditionyear
      }

      this.inMemoryPastllnessOrSurgeies.push(obj);
      console.log(this.inMemoryPastllnessOrSurgeies);
      this.selectedPastYears = 0;
      this.selectedPastIllness = 0;
    }
  }

  deletePassIllness(item) {
    this.inMemoryPastllnessOrSurgeies.splice(item, 1);
  }

  replaceAndAddInMemoryObjPassIllness(index: any, item: any, presentConditionId: any, presentConditionYearsId: any, other: any) {
    let pastIllnessConditionObj = null;
    let pastIllnessConditionyear = null;
    console.log(index);
    console.log(other);

    for (let index = 0; index < this.presentCondition.length; index++) {
      if (this.presentCondition[index].id == parseInt(presentConditionId)) {
        pastIllnessConditionObj = this.presentCondition[index];
        if (this.presentCondition[index].name == "Other") {
          pastIllnessConditionObj.other = other;
        }
      }
    }
    for (let index = 0; index < this.patientProfileSinceList.length; index++) {
      if (this.patientProfileSinceList[index].id == parseInt(presentConditionYearsId)) {
        pastIllnessConditionyear = this.patientProfileSinceList[index];
      }
    }

    if (pastIllnessConditionObj != null && pastIllnessConditionyear != null && this.inMemoryPastllnessOrSurgeies.length > 0) {
      this.inMemoryPastllnessOrSurgeies[index].pastIllness = pastIllnessConditionObj;
      this.inMemoryPastllnessOrSurgeies[index].pasIllnessYears = pastIllnessConditionyear;
    }
    console.log(this.inMemoryPastllnessOrSurgeies);

  }
  ExRoute: boolean = false;
  addExersiseRoutine() {
    //this.ExRoute = true
    let exerciseObj = null;
    if (this.inMemoryExersiseRoutineList.length == 1) {
      swal("Only One excersie routine can be selected", 'Error');
      return false;
    }
    if (this.selectedExerciseRoutine == 0) {
      swal("Please select excercise routine", 'Error');
      return false;
    }


    for (let index = 0; index < this.exersiseRoutineList.length; index++) {
      if (this.exersiseRoutineList[index].id == parseInt(this.selectedExerciseRoutine)) {
        exerciseObj = this.exersiseRoutineList[index];
        //break;
      }
    }

    if (exerciseObj != null) {
      let obj = {
        exercise: exerciseObj

      }
      this.inMemoryExersiseRoutineList.push(obj);
    }
    console.log(this.inMemoryExersiseRoutineList);
    this.lifeStyleDataReset();

  }

  deleteExersiceRoutine(index: any) {
    this.ExRoute = false
    this.inMemoryExersiseRoutineList.splice(index, 1)
    console.log(this.inMemoryExersiseRoutineList);
  }

  replaceExerciseRoutine(exersiseId: any, index: any) {

    let exerciseObj = null;

    for (let index = 0; index < this.exersiseRoutineList.length; index++) {
      if (this.exersiseRoutineList[index].id == parseInt(exersiseId)) {
        exerciseObj = this.exersiseRoutineList[index];
        break;
      }
    }

    if (exerciseObj != null) {
      let obj = {
        exercise: exerciseObj

      }
      this.inMemoryExersiseRoutineList[index] = obj;
    }
    console.log(this.inMemoryExersiseRoutineList);
  }
  work: boolean = false
  addWorkingHours() {
    let workingHrObj = null;
    this.work = true

    if (this.inmMemoryWorkingHours.length == 1) {
      swal("Only Single Working Hour can be selected", 'Error');
      return false;
    }
    if (this.selectedWorkingHours == 0) {
      swal("Please select Working Hours", 'Error');
      return false;
    }
    for (let index = 0; index < this.workinigHours.length; index++) {
      if (this.workinigHours[index].id == parseInt(this.selectedWorkingHours)) {
        workingHrObj = this.workinigHours[index];
        break;
      }
    }

    if (workingHrObj != null) {
      let obj = {
        workingHrs: workingHrObj

      }
      this.inmMemoryWorkingHours.push(obj);
      this.lifeStyleDataReset();
      console.log(this.inmMemoryWorkingHours);
    }
  }


  addAppetite() {
    let apetiteObj = null;
    this.work = true

    // if (this.inMemoryAppetite.length == 1) {
    //   swal("Only Single Working Hour can be selected", 'Error');
    //   return false;
    // }
    // if (this.selectedWorkingHours == 0) {
    //   swal("Please select Working Hours", 'Error');
    //   return false;
    // }
    for (let index = 0; index < this.appetiteList.length; index++) {
      if (this.appetiteList[index].id == parseInt(this.selectedAppetite)) {
        apetiteObj = this.appetiteList[index];
        break;
      }
    }

    if (apetiteObj != null) {
      let obj = {
        appetite: apetiteObj

      }
      this.inMemoryAppetite.push(obj);
      this.lifeStyleDataReset();
      console.log(this.inMemoryAppetite);
    }
  }

  addphysique() {
    let physiqueObj = null;
    this.work = true

    // if (this.inMemoryAppetite.length == 1) {
    //   swal("Only Single Working Hour can be selected", 'Error');
    //   return false;
    // }
    // if (this.selectedWorkingHours == 0) {
    //   swal("Please select Working Hours", 'Error');
    //   return false;
    // }
    for (let index = 0; index < this.physiqueList.length; index++) {
      if (this.physiqueList[index].id == parseInt(this.selectedPhysique)) {
        physiqueObj = this.physiqueList[index];
        break;
      }
    }

    if (physiqueObj != null) {
      let obj = {
        physique: physiqueObj

      }
      this.inMemoryPhysique.push(obj);
      this.lifeStyleDataReset();
      // console.log(this.inMemoryAppetite);
    }
  }

  addskin() {
    let skinObj = null;
    this.work = true

  
    for (let index = 0; index < this.skinList.length; index++) {
      if (this.skinList[index].id == parseInt(this.selectedSkin)) {
        skinObj = this.skinList[index];
        break;
      }
    }

    if (skinObj != null) {
      let obj = {
        skin: skinObj

      }
      this.inMemorySkin.push(obj);
      this.lifeStyleDataReset();
      // console.log(this.inMemoryAppetite);
    }
  }

  
  addhair() {
    let hairObj = null;
    this.work = true

    for (let index = 0; index < this.hairList.length; index++) {
      if (this.hairList[index].id == parseInt(this.selectedHair)) {
        hairObj = this.hairList[index];
        break;
      }
    }

    if (hairObj != null) {
      let obj = {
        hair: hairObj

      }
      this.inMemoryHair.push(obj);
      this.lifeStyleDataReset();
      // console.log(this.inMemoryAppetite);
    }
  }


  addbbh() {
    let bbhObj = null;
    this.work = true

    for (let index = 0; index < this.bbhList.length; index++) {
      if (this.bbhList[index].id == parseInt(this.selectedBbh)) {
        bbhObj = this.bbhList[index];
        break;
      }
    }

    if (bbhObj != null) {
      let obj = {
        bbh: bbhObj

      }
      this.inMemoryBbh.push(obj);
      this.lifeStyleDataReset();
      // console.log(this.inMemoryAppetite);
    }
  }

  addvs() {
    let vsObj = null;
    this.work = true

    for (let index = 0; index < this.vsList.length; index++) {
      if (this.vsList[index].id == parseInt(this.selectedVs)) {
        vsObj = this.vsList[index];
        break;
      }
    }

    if (vsObj != null) {
      let obj = {
        vs: vsObj

      }
      this.inMemoryVs.push(obj);
      this.lifeStyleDataReset();
      // console.log(this.inMemoryAppetite);
    }
  }

  addsleep() {
    let sleepObj = null;
    this.work = true

    for (let index = 0; index < this.sleepList.length; index++) {
      if (this.sleepList[index].id == parseInt(this.selectedSleep)) {
        sleepObj = this.sleepList[index];
        break;
      }
    }

    if (sleepObj != null) {
      let obj = {
        sleep: sleepObj

      }
      this.inMemorySleep.push(obj);
      this.lifeStyleDataReset();
      // console.log(this.inMemoryAppetite);
    }
  }

  deleteSleep(index: any) {
    this.work = false
    this.inMemorySleep.splice(index, 1);
    this.lifeStyleDataReset();
  }


  addpc() {
    let pcObj = null;
    this.work = true

    for (let index = 0; index < this.pcList.length; index++) {
      if (this.pcList[index].id == parseInt(this.selectedPc)) {
        pcObj = this.pcList[index];
        break;
      }
    }

    if (pcObj != null) {
      let obj = {
        pc: pcObj

      }
      this.inMemoryPc.push(obj);
      this.lifeStyleDataReset();
      // console.log(this.inMemoryAppetite);
    }
  }

  deletePc(index: any) {
    this.work = false
    this.inMemoryPc.splice(index, 1);
    this.lifeStyleDataReset();
  }

  addop() {
    let opObj = null;
    this.work = true

    for (let index = 0; index < this.opList.length; index++) {
      if (this.opList[index].id == parseInt(this.selectedOp)) {
        opObj = this.opList[index];
        break;
      }
    }

    if (opObj != null) {
      let obj = {
        op: opObj

      }
      this.inMemoryOp.push(obj);
      this.lifeStyleDataReset();
      // console.log(this.inMemoryAppetite);
    }
  }

  deleteOp(index: any) {
    this.work = false
    this.inMemoryOp.splice(index, 1);
    this.lifeStyleDataReset();
  }

  
  addth() {
    let thObj = null;
    this.work = true

    for (let index = 0; index < this.thList.length; index++) {
      if (this.thList[index].id == parseInt(this.selectedTh)) {
        thObj = this.thList[index];
        break;
      }
    }

    if (thObj != null) {
      let obj = {
        th: thObj

      }
      this.inMemoryTh.push(obj);
      this.lifeStyleDataReset();
      // console.log(this.inMemoryAppetite);
    }
  }

  deleteTh(index: any) {
    this.work = false
    this.inMemoryTh.splice(index, 1);
    this.lifeStyleDataReset();
  }

  deleteWorkingHours(index: any) {
    this.work = false
    this.inmMemoryWorkingHours.splice(index, 1);
    this.lifeStyleDataReset();
  }

  deleteAppetite(index:any){
    this.inMemoryAppetite.splice(index, 1);
    this.lifeStyleDataReset();
  }

  deleteBbh(index:any){
    this.inMemoryBbh.splice(index, 1);
    this.lifeStyleDataReset();
  } 

  deleteVs(index:any){
    this.inMemoryVs.splice(index, 1);
    this.lifeStyleDataReset();
  } 

  deleteHair(index:any){
    this.inMemoryHair.splice(index, 1);
    this.lifeStyleDataReset();
  }  
  deletePhysique(index:any){
    this.inMemoryPhysique.splice(index, 1);
    this.lifeStyleDataReset();
  }
  deleteSkin(index:any){
    this.inMemorySkin.splice(index, 1);
    this.lifeStyleDataReset();
  }
  replaceWorkingHours(index: any, workingHourId: any) {

    let workingHrObj = null;

    for (let index = 0; index < this.workinigHours.length; index++) {
      if (this.workinigHours[index].id == parseInt(workingHourId)) {
        workingHrObj = this.workinigHours[index];
        break;
      }
    }

    if (workingHrObj != null && this.inmMemoryWorkingHours.length > 0) {
      let obj = {
        workingHrs: workingHrObj

      }

      this.inmMemoryWorkingHours[index] = obj;
    }
    console.log(this.inmMemoryWorkingHours);
    this.lifeStyleDataReset();
  }

  replaceAppetite(index: any, id: any) {
debugger
    let appetiteObj = null;

    for (let index = 0; index < this.appetiteList.length; index++) {
      if (this.appetiteList[index].id == parseInt(id)) {
        appetiteObj = this.appetiteList[index];
        break;
      }
    }

    if (appetiteObj != null && this.inMemoryAppetite.length > 0) {
      let obj = {
        appetite: appetiteObj

      }

      this.inMemoryAppetite[index] = obj;
    }
    console.log(this.inMemoryAppetite);
    this.lifeStyleDataReset();
  }

  replacePhysique(index: any, id: any) {
    
        let physiqueObj = null;
    
        for (let index = 0; index < this.physiqueList.length; index++) {
          if (this.physiqueList[index].id == parseInt(id)) {
            physiqueObj = this.physiqueList[index];
            break;
          }
        }
    
        if (physiqueObj != null && this.inMemoryPhysique.length > 0) {
          let obj = {
           physique: physiqueObj
    
          }
    
          this.inMemoryPhysique[index] = obj;
        }
        console.log(this.inMemoryAppetite);
        this.lifeStyleDataReset();
      }

      replaceSkin(index: any, id: any) {
    
        let skinObj = null;
    
        for (let index = 0; index < this.skinList.length; index++) {
          if (this.skinList[index].id == parseInt(id)) {
            skinObj = this.skinList[index];
            break;
          }
        }
    
        if (skinObj != null && this.inMemorySkin.length > 0) {
          let obj = {
           skin: skinObj
    
          }
    
          this.inMemorySkin[index] = obj;
        }
        // console.log(this.inMemoryAppetite);
        this.lifeStyleDataReset();
      }
  saveLifeStyle() {
   // debugger
    let memoryHabit = this.inMemoryHabitList
    localStorage.setItem("inMemoryHabitList",JSON.stringify(memoryHabit))
    let memoryExercise = this.inMemoryExersiseRoutineList
    localStorage.setItem("inMemoryExersiseRoutineList",JSON.stringify(memoryExercise))
    let memoryEatHabit = this.inMemoryEatingPreferenceList
    localStorage.setItem("inMemoryEatingPreferenceList",JSON.stringify(memoryEatHabit))
    let memoryWorkhrs = this.inmMemoryWorkingHours
    localStorage.setItem("inmMemoryWorkingHours",JSON.stringify(memoryWorkhrs))

    let memoryAppetite = this.inMemoryAppetite
    localStorage.setItem("inMemoryAppetite",JSON.stringify(memoryAppetite))
    this.isDisabledInp2 = true;
    let finalDataToSEnd = this.finalSaveData();
    let respData: any = {};
    this.doctorService.submitPatientProfileAllDataFinal(finalDataToSEnd, this.headers).subscribe((data) => {
      respData = data;
      swal("Lifestyle details saved successfully", 'Success');
    });
  }


  savePatientHistory() {
    debugger
    this.isDisabledInp1 = true;
    let finalDataToSEnd = this.finalSaveData();
    let respData: any = {};
    // let memorypresent = this.inMemoryPresentCondition;
    // localStorage.setItem("inMemoryPresentCondition",JSON.stringify(memorypresent))
    // let memoryallergy = this.inMemoryAllergies;
    // localStorage.setItem("inMemoryAllergies",JSON.stringify(memoryallergy))
    // let memorymedication = this.inMemoryCurrentMedication;
    // localStorage.setItem("inMemoryCurrentMedication",JSON.stringify(memorymedication))
    // let memoryConsult = this.specialConsiderations
    // localStorage.setItem("specialConsiderations",(memoryConsult))
    // let memoryPastSurge = this.inMemoryPastllnessOrSurgeies;
    // localStorage.setItem("inMemoryPastllnessOrSurgeies",JSON.stringify(memoryPastSurge))
  
    this.doctorService.submitPatientProfileAllDataFinal(finalDataToSEnd, this.headers).subscribe((data) => {
      respData = data;
      swal("Patient history saved successfully", 'Success');

    });
  }

  addHabits() {
    let habit = null;
    let habitYrs = null;
    console.log(this.selectedHabit);
    console.log(this.selectedHabitYear);

    for (let index = 0; index < this.habitList.length; index++) {
      if (this.habitList[index].id == parseInt(this.selectedHabit)) {
        habit = this.habitList[index];
        break;
      }
    }

    for (let index = 0; index < this.patientProfileSinceList.length; index++) {
      if (this.patientProfileSinceList[index].id == parseInt(this.selectedHabitYear)) {
        habitYrs = this.patientProfileSinceList[index];
        break;
      }
    }

    if (habit != null && habitYrs != null) {
      let obj = {
        habit: habit,
        habitYrs: habitYrs
      };
      this.inMemoryHabitList.push(obj);
    }
    this.lifeStyleDataReset();
    console.log(this.inMemoryHabitList)
  }

  replaceHabits(hbId: any, hbyrsId: any, index: any) {
//debugger
    let habitObj = null;
    let sinceObj = null;

    for (let index = 0; index < this.habitList.length; index++) {
      if (this.habitList[index].id == parseInt(hbId)) {
        habitObj = this.habitList[index];
        break;
      }
    }

    for (let index = 0; index < this.presentCondition.length; index++) {
      if (this.habitList[index].id == parseInt(hbId)) {
        sinceObj = this.habitList[index];
        break;
      }
    }

    if (habitObj != null && sinceObj != null && this.inMemoryHabitList.length > 0) {
      let obj = {
        habit: habitObj,
        habitYrs: sinceObj
      };
      this.inMemoryHabitList[index] = obj;
    }
    this.lifeStyleDataReset();
  }

  deleteHabit(index: any) {
    this.inMemoryHabitList.splice(index, 1);
  }
  eatPref: boolean = false
  addEatingHabits() {
    this.eatPref = true
    let eatingHabitObj = null;
    if (this.inMemoryEatingPreferenceList.length == 1) {
      swal("Only One eating habbit can be selected", 'Error');
      return false;
    }
    if (this.selectedEatingPreferences == 0) {
      swal("Please select eating habit", 'Error');
      return false;
    }

    for (let index = 0; index < this.eatingPreferencesList.length; index++) {
      if (this.eatingPreferencesList[index].id == parseInt(this.selectedEatingPreferences)) {
        eatingHabitObj = this.eatingPreferencesList[index];
        break;
      }
    }

    if (eatingHabitObj != null) {
      let obj = {
        eatingHabits: eatingHabitObj
      };
      this.inMemoryEatingPreferenceList.push(obj);
    }
    console.log(this.inMemoryEatingPreferenceList);
    this.lifeStyleDataReset();
  }

  deleteEatingHabits(index: any) {
    this.eatPref = true
    this.inMemoryEatingPreferenceList.splice(index, 1);
    console.log(this.inMemoryEatingPreferenceList);
  }

  replaceEatingHabits(index: any, eatingHabitId: any) {

    let eatingHabitObj = null;

    for (let index = 0; index < this.eatingPreferencesList.length; index++) {
      if (this.habitList[index].id == parseInt(eatingHabitId)) {
        eatingHabitObj = this.eatingPreferencesList[index];
        break;
      }
    }

    if (eatingHabitObj != null) {
      let obj = {
        eatingHabits: eatingHabitObj
      };
      this.inMemoryEatingPreferenceList[index] = obj;
    }
    console.log(this.inMemoryEatingPreferenceList);
    this.lifeStyleDataReset();
  }



  cancelFamilyMemberForm(whichFamilySection) {
    this.familyAlreadyFilledDataList.splice(whichFamilySection, 1);
    this.isVisibleMemberForm = false;
    this.inMemoryFamilyAllergyList = [];
    this.inMemoryFamiltDiseaseList = [];
  }
  //disease:any=[];
  onChangeDisease(whichFamilySection, whichDiseaseSelected) {
    //debugger
    this.selectedFamilyDisease = whichDiseaseSelected;
  }
  onChangeDiseaseSince(whichFamilySection, whichDiseaseSinceSelected) {
    this.selectedFamilyDiseaseSince = whichDiseaseSinceSelected;
  }
  addFamilyMemberDiseases(whichIndex) {

    let diseaseObj = null;
    let diseaseSince = null;
    let diseseId = null;
    let sinceId = null;
    for (let index = 0; index < this.diseaseList.length; index++) {
      if (this.diseaseList[index].id == parseInt(this.selectedFamilyDisease)) {
        diseseId = this.diseaseList[index].id;
        break;
      }
    }

    for (let index = 0; index < this.patientProfileSinceList.length; index++) {
      if (this.patientProfileSinceList[index].id == parseInt(this.selectedFamilyDiseaseSince)) {
        sinceId = this.patientProfileSinceList[index].id;
        break;
      }
    }

    if (diseseId != null && sinceId != null) {

      // let obj = {
      //   disease : diseaseObj,
      //   diseseSince: diseaseSince
      // }
      let obj = {
        diseseId: diseseId,
        sinceId: sinceId
      }
      //this.disease.push(obj);
      for (let i = 0; i < this.familyAlreadyFilledDataList.length; i++) {
        if (i == whichIndex) {
          this.familyAlreadyFilledDataList[i].disease.push(obj);
          //this.disease = [];
        }
      }

      //this.inMemoryFamiltDiseaseList.push(obj);
    }
    this.familyMemberDataReset();
    // console.log(this.inMemoryFamiltDiseaseList);
  }

  deleteDiseaseList(whichIndex: any, diseaseId, sinceId) {

    for (let j = 0; j < this.familyAlreadyFilledDataList[whichIndex].disease.length; j++) {

      if (this.familyAlreadyFilledDataList[whichIndex].disease[j].diseseId == diseaseId && this.familyAlreadyFilledDataList[whichIndex].disease[j].sinceId == sinceId) {
        this.familyAlreadyFilledDataList[whichIndex].disease.splice(j, 1);

      }
    }
    //this.inMemoryFamiltDiseaseList.splice(index,1);
  }

  replaceDiseaseList(whichObjIndex: any, whichIndex: any, diseaseId: any, selectedSinceId: any) {
    let diseaseObj = null;
    let diseaseSince = null;
    let diseseId = null;
    let sinceId = null;
    for (let index = 0; index < this.diseaseList.length; index++) {
      if (this.diseaseList[index].id == parseInt(diseaseId)) {
        diseseId = this.diseaseList[index].id;
        break;
      }
    }

    for (let index = 0; index < this.patientProfileSinceList.length; index++) {
      if (this.patientProfileSinceList[index].id == parseInt(selectedSinceId)) {
        sinceId = this.patientProfileSinceList[index].id;
        break;
      }
    }

    if (diseseId != null && sinceId != null) {

      let obj = {
        diseseId: diseseId,
        sinceId: sinceId
      }

      for (let i = 0; i < this.familyAlreadyFilledDataList.length; i++) {
        if (i == whichIndex) {
          this.familyAlreadyFilledDataList[i].disease.splice(whichObjIndex, 1);
          this.familyAlreadyFilledDataList[i].disease.push(obj);
        }
      }
      //this.inMemoryFamiltDiseaseList[index] = obj;
      //this.inMemoryFamiltDiseaseList.push(obj);
    }
  }
  onChangeAllergy(whichFamilySection, whichAllergySelected) {
    this.selectedFamilyAllergy = whichAllergySelected;
  }
  onChangeAllergySince(whichFamilySection, whichAllergySinceSelected) {
    this.selectedFamilyAllergySince = whichAllergySinceSelected;
  }
  addFamilyMemberAllergy(whichIndex) {

    let allergyObj = null;
    let allergySince = null;

    let allergyId = null;
    let sinceId = null;

    for (let index = 0; index < this.allergies.length; index++) {
      if (this.allergies[index].id == parseInt(this.selectedFamilyAllergy)) {
        allergyId = this.allergies[index].id;
        break;
      }
    }

    for (let index = 0; index < this.patientProfileSinceList.length; index++) {
      if (this.patientProfileSinceList[index].id == parseInt(this.selectedFamilyAllergySince)) {
        sinceId = this.patientProfileSinceList[index].id;
        break;
      }
    }

    if (allergyId != null && sinceId != null) {

      let obj = {
        allergyId: allergyId,
        sinceId: sinceId
      }

      for (let i = 0; i < this.familyAlreadyFilledDataList.length; i++) {
        if (i == whichIndex) {
          this.familyAlreadyFilledDataList[i].allergies.push(obj)
        }
      }
      //this.inMemoryFamilyAllergyList.push(obj);
    }
    this.familyMemberDataReset();
    //console.log(this.inMemoryFamilyAllergyList);
  }

  deleteFamilyMemberAllergyList(whichIndex: any, allergyId, sinceId) {
    let tempAllergyList = this.familyAlreadyFilledDataList[whichIndex].allergies;
    for (let j = 0; j < tempAllergyList.length; j++) {

      if (tempAllergyList[j].allergyId == allergyId && tempAllergyList[j].sinceId == sinceId) {
        tempAllergyList.splice(j, 1);

      }
    }

    //this.inMemoryFamilyAllergyList.splice(index,1);
  }

  replaceFamilyMemberAllergyList(whichObjIndex: any, whichIndex: any, selectedAllergyId: any, selectedSinceId: any) {

    let allergyObj = null;
    let allergySince = null;

    let allergyId = null;
    let sinceId = null;

    for (let index = 0; index < this.allergies.length; index++) {
      if (this.allergies[index].id == parseInt(selectedAllergyId)) {
        allergyId = this.allergies[index].id;
        break;
      }
    }

    for (let index = 0; index < this.patientProfileSinceList.length; index++) {
      if (this.patientProfileSinceList[index].id == parseInt(selectedSinceId)) {
        sinceId = this.patientProfileSinceList[index].id;
        break;
      }
    }

    if (allergyId != null && sinceId != null) {

      let obj = {
        allergyId: allergyId,
        sinceId: sinceId
      }
      for (let i = 0; i < this.familyAlreadyFilledDataList.length; i++) {
        if (i == whichIndex) {
          this.familyAlreadyFilledDataList[i].allergies.splice(whichObjIndex, 1);
          this.familyAlreadyFilledDataList[i].allergies.push(obj);
        }
      }
      //this.inMemoryFamilyAllergyList[index] = obj;
    }
    this.familyMemberDataReset();
  }

  onChangeUpdateRelationshipVal(whichFamilySection, whichRelationshipSelected) {
    this.familyAlreadyFilledDataList[whichFamilySection].relationId = parseInt(whichRelationshipSelected);
    for (let i = 0; i < this.familyRelationshipList.length; i++) {
      if (this.familyRelationshipList[i].id == parseInt(whichRelationshipSelected)) {
        this.familyAlreadyFilledDataList[whichFamilySection].relation = this.familyRelationshipList[i].name;
      }
    }

  }
  getDiseasedValue(whichFamilySection, event: any) {
    this.familyAlreadyFilledDataList[whichFamilySection].isdeceased = event.target.checked;
    //this.isDeceased =  event.target.checked;
    console.log(this.familyAlreadyFilledDataList);
  }

  saveFamilyMember() {
   // debugger
   
    this.isDisabledInp3 = true;
    let finalDataToSEnd = this.finalSaveData();
    let respData: any = {};
    this.doctorService.submitPatientProfileAllDataFinal(finalDataToSEnd, this.headers).subscribe((data) => {
      respData = data;
      swal("Family history saved successfully", 'Success');

    });

  }
  finalSaveData() {
    
    let dataToSend: any = {};

    let presentConditionList: any = [];
    let allergiesRequestBeanList: any = [];
    let currentMedicationBeanList: any = [];
    let habitsBeanList: any = [];
    let pastIllness: any = [];
    let addExercise: any = [];
    let eatingHabit: any = [];
    let workingHours: any = [];
    let familyHistoryBeanList: any = [];
    let addAppetite:any=[];
    let physique:any[]=[];
    let skin:any[]=[];
    let hair:any[]=[];
    let bbh:any[]=[];
    let vs:any[]=[];
    let sleep:any[]=[];
    let pc:any[]=[];
    let op:any[]=[];
    let th:any[]=[];

    dataToSend.doctorUserId = localStorage.getItem('doctor_Id');
    dataToSend.patientUserId = JSON.parse(localStorage.getItem('user_Id'));
    dataToSend.primaryHealthIssue = this.patientHealth;
    dataToSend.specialConsideration = this.specialConsiderations;

    //present conditions
    for (let i = 0; i < this.inMemoryPresentCondition.length; i++) {
      let tempPresentConditionObj: any = {};
      if(this.inMemoryPresentCondition[i].presentConditionName.id==-1){
        tempPresentConditionObj.presentCondition = this.selectedPresentConditionOther
      }else{
        tempPresentConditionObj.presentCondition = this.inMemoryPresentCondition[i].presentConditionName.name;
  
      }
         tempPresentConditionObj.since = this.inMemoryPresentCondition[i].presentConditionYears.name;
      presentConditionList.push(tempPresentConditionObj);
    }
    // allergies
    for (let i = 0; i < this.inMemoryAllergies.length; i++) {
      let tempAllergyObj: any = {};
      if(this.inMemoryAllergies[i].allergyName.id==-1){
        tempAllergyObj.allergy = this.selectAllergiesOther
      }else{
        tempAllergyObj.allergy = this.inMemoryAllergies[i].allergyName.name;
      }
      
      tempAllergyObj.since = this.inMemoryAllergies[i].allergyYears.name;
      allergiesRequestBeanList.push(tempAllergyObj);
    }
    //current medication
    for (let i = 0; i < this.inMemoryCurrentMedication.length; i++) {
      let tempObj: any = {};
      tempObj.currentMedication = this.inMemoryCurrentMedication[i].currentMedicationValue;
      tempObj.currentSince = this.inMemoryCurrentMedication[i].noOfYears.name;
      currentMedicationBeanList.push(tempObj);
    }
    //habit list
    for (let i = 0; i < this.inMemoryHabitList.length; i++) {
      let tempObj: any = {};
      tempObj.habitName = this.inMemoryHabitList[i].habit.name;
      tempObj.sinceName = this.inMemoryHabitList[i].habitYrs.name;
      habitsBeanList.push(tempObj);
    }
    //past illness
    for (let i = 0; i < this.inMemoryPastllnessOrSurgeies.length; i++) {
      if(this.inMemoryPastllnessOrSurgeies[i].pastConditionName.name =="Other"){
        pastIllness.push(this.selectedPastillOther)
      }else{
        pastIllness.push(this.inMemoryPastllnessOrSurgeies[i].pastConditionName.name);
      }
    
      pastIllness.push(this.inMemoryPastllnessOrSurgeies[i].pastConditionYears.name);
    }
    //excercise
    for (let i = 0; i < this.inMemoryExersiseRoutineList.length; i++) {
      addExercise.push(this.inMemoryExersiseRoutineList[i].exercise.name);
    }

    //eatingHabit
    for (let i = 0; i < this.inMemoryEatingPreferenceList.length; i++) {
      eatingHabit.push(this.inMemoryEatingPreferenceList[i].eatingHabits.name);
    }

    //working hours
    for (let i = 0; i < this.inmMemoryWorkingHours.length; i++) {
      workingHours.push(this.inmMemoryWorkingHours[i].workingHrs.name);
    }

    //lifestyle
    for (let i = 0; i < this.inMemoryAppetite.length; i++) {
      addAppetite.push(this.inMemoryAppetite[i].appetite.name);
    }
    for (let i = 0; i < this.inMemoryPhysique.length; i++) {
      physique.push(this.inMemoryPhysique[i].physique.name);
    }
    for (let i = 0; i < this.inMemorySkin.length; i++) {
      skin.push(this.inMemorySkin[i].skin.name);
    }
    for (let i = 0; i < this.inMemoryHair.length; i++) {
      hair.push(this.inMemoryHair[i].hair.name);
    }
    for (let i = 0; i < this.inMemoryBbh.length; i++) {
      bbh.push(this.inMemoryBbh[i].bbh.name);
    }
    for (let i = 0; i < this.inMemoryVs.length; i++) {
      vs.push(this.inMemoryVs[i].vs.name);
    }
    for (let i = 0; i < this.inMemorySleep.length; i++) {
      sleep.push(this.inMemorySleep[i].sleep.name);
    }
    for (let i = 0; i < this.inMemoryPc.length; i++) {
      pc.push(this.inMemoryPc[i].pc.name);
    }
    for (let i = 0; i < this.inMemoryOp.length; i++) {
      op.push(this.inMemoryOp[i].op.name);
    }
    for (let i = 0; i < this.inMemoryTh.length; i++) {
      th.push(this.inMemoryTh[i].th.name);
    }
    //family His
   // debugger
    for (let i = 0; i < this.familyAlreadyFilledDataList.length; i++) {

      let tempObj: any = {};
      let disease = [];
      let allergies = [];

      tempObj.relation = this.familyAlreadyFilledDataList[i].relation;
      tempObj.deceased = this.familyAlreadyFilledDataList[i].isdeceased;

      for (let j = 0; j < this.familyAlreadyFilledDataList[i].disease.length; j++) {
        let diseaseId = this.familyAlreadyFilledDataList[i].disease[j].diseseId;
        let sinceId = this.familyAlreadyFilledDataList[i].disease[j].sinceId;

        let tempObj2: any = {};// object for disease data

        for (let k = 0; k < this.diseaseList.length; k++) {//get disease name
          if (this.diseaseList[k].id == diseaseId) {
            tempObj2.diseaseName = this.diseaseList[k].name;
          }
        }
        for (let l = 0; l < this.patientProfileSinceList.length; l++) {//get since
          if (this.patientProfileSinceList[l].id == sinceId) {
            tempObj2.sicceName = this.diseaseList[l].name;
          }
        }
        disease.push(tempObj2);
      }


      for (let j = 0; j < this.familyAlreadyFilledDataList[i].allergies.length; j++) {

        let allergyId = this.familyAlreadyFilledDataList[i].allergies[j].allergyId;
        let sinceAllergyId = this.familyAlreadyFilledDataList[i].allergies[j].sinceId;
        let tempObj3: any = {};// object for allergy data

        for (let k = 0; k < this.allergies.length; k++) {//get allergy name
          if (this.allergies[k].id == allergyId) {
            tempObj3.allergyName = this.allergies[k].name;
          }
        }
        for (let l = 0; l < this.patientProfileSinceList.length; l++) {//get since
          if (this.patientProfileSinceList[l].id == sinceAllergyId) {
            tempObj3.sinceName = this.allergies[l].name;
          }
        }
        allergies.push(tempObj3);
      }
      tempObj.disease = disease;
      tempObj.allergies = allergies;
      familyHistoryBeanList.push(tempObj);
    }
    let familydata = familyHistoryBeanList
    localStorage.setItem("familyAlreadyFilledDataList",JSON.stringify(familydata))
    dataToSend.presentConditionList = presentConditionList;
    dataToSend.allergiesRequestBeanList = allergiesRequestBeanList;
    dataToSend.currentMedicationBeanList = currentMedicationBeanList;
    dataToSend.habitsBeanList = habitsBeanList;
    dataToSend.pastIllness = pastIllness;
    dataToSend.addExercise = addExercise;
    dataToSend.eatingHabit = eatingHabit;
    dataToSend.workingHours = workingHours;
    dataToSend.familyHistoryBeanList = familyHistoryBeanList;
    dataToSend.addAppetite = addAppetite;
    dataToSend.addPhy= physique
    dataToSend.addSkin=skin;
    dataToSend.addHair=hair;
    dataToSend.addBbh=bbh;
    dataToSend.addVc=vs;
    dataToSend.addSleep=sleep;
    dataToSend.addPc=pc;
    dataToSend.addOp=op;
    dataToSend.addRh=th;
    return dataToSend;
  }

paymentFlag:any;
  updatePaymentMode(value: any,flag) {
    
    this.paymentModeSelected = value;
    this.paymentFlag = flag
    this.enableSendMessageBtn();
  }

  deletePrecribedMedicine(prescribedMedicine: any) {
    for (let index = 0; index < this.inMemoryPrescribedMedicine.length; index++) {
      if (this.inMemoryPrescribedMedicine[index].id == prescribedMedicine.id) {
        this.inMemoryPrescribedMedicine.splice(index, 1);
      }
    }
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


  custom2 = "modal";
  cartModal:any;
  cartFlag:any;
  popup2() {// send message pdf data list
debugger

    let dataToSend: any = {};
    var appId = localStorage.getItem("appointmentId").replace(/(^")|("$)/g, "");
    dataToSend = { 
      "appointmentId": appId ,
      "paymentFlag" : this.paymentFlag,
    
      "CART_ID" : this.cartId
    };
    let respData: any;
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.doctorService.getPdfData(dataToSend, this.headers).subscribe((data) => {

      respData = data;
      this.cartModal = respData.CART_ID;
      this.cartFlag = respData.paymentFlag;
      if (respData.status == "ERROR") {
        swal("Error", "Oooops !! Something went wrong!", 'error');
        return false;
      } else {
        this.pdfDataList = respData;
        if (this.pdfDataList) {
          this.custom2 = "show";
        }
      }


    });
    
  }
  close2() {
    this.custom2 = "modal";
    this.selectedInvestigationList = [];
  }

  custom3 = "modal";
  popup3(addressId) {
    this.delevryAddressId = addressId;
    this.custom3 = "show";
  }
  close3() {
    this.custom3 = "modal";
  }
  //edit modal
  custom4 = "modal";


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
  //on change state


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
  removeAddress() {
    let dataToSend: any = {};
    dataToSend.addressId = this.delevryAddressId;
    dataToSend.userId = localStorage.getItem("user_Id");//


    let respData: any;
    this.doctorService.removeAddress(dataToSend, this.headers).subscribe((data) => {
      respData = data;
      if (respData.STATUS == "SUCCESS") {
        this.close3();
        this.doctorService.ordersummery(this.data11, this.headers).subscribe((data: any) => {
          this.userData = data;
          this.productBeanList = this.userData.productBeanList;
          console.log(this.productsList);
          this.addressBeanList = this.userData.addressBeanList;
          this.productBeanList = this.userData.productBeanList;

          console.log(this.addressBeanList);
          let to;
          this.total1 = 0;
          if (this.productBeanList) {

            for (let i = 0; i < this.productBeanList.length; i++) {
              to = this.productBeanList[i].sellingPrice * this.productBeanList[i].qty;
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
    dataToSend.userId = localStorage.getItem("user_Id");

    let respData: any;
    this.doctorService.selectAddress(dataToSend, this.headers).subscribe((data) => {
      respData = data;
      console.log(respData);
      this.hideErroeMsg();
      if (respData.isExists == "true") {
        this.isOrderSummaryBtnDisabled = false;
      } else if (respData.isExists == "false") {
        this.shoeErrorMsg("We dont deliever on this address, Please select another Address")
      }
      this.enableSendMessageBtn();
    });
  }

  enableSendMessageBtn() {//debugger
    if (!this.showError && this.paymentModeSelected != null) {
      this.isOrderSummaryBtnDisabled = false;
    } else {
      this.isOrderSummaryBtnDisabled = false;
    }
  }

  updateOrdeBtnFlag() {
    this.enableSendMessageBtn();
  }

  shoeErrorMsg(errorMsg: any) {
    window.scroll(0, 20);
    this.isOrderSummaryBtnDisabled = false
    this.errorMsg = errorMsg;
    this.showError = true;
  }
  hideErroeMsg() {
    this.showError = false;
  }

  addNewAddress(addNewAddressFormValues) {

    let dataToSend: any = {};
    if (this.delevryAddressId == undefined) {
      dataToSend.addressId = "";
    } else {
      dataToSend.addressId = this.delevryAddressId;
    }

    dataToSend.userId = localStorage.getItem("user_Id");

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
        this.close();
        this.doctorService.ordersummery(this.data11, this.headers).subscribe((data: any) => {
          this.userData = data;
          this.productBeanList = this.userData.productBeanList;
          console.log(this.productsList);
          this.addressBeanList = this.userData.addressBeanList;
          this.productBeanList = this.userData.productBeanList;

          console.log(this.addressBeanList);
          
          let to;
          this.total1 = 0;
          if (this.productBeanList) {

            for (let i = 0; i < this.productBeanList.length; i++) {
              to = this.productBeanList[i].sellingPrice * this.productBeanList[i].qty;
              this.total1 = this.total1 + Number(to);
            }
          }
        });
      }
    });
  }
  editAddress(editFormValues, first, last, aL1, aL2, state, city, locality, zip) {

    let dataToSend: any = {};
    dataToSend.addressId = this.delevryAddressId;
    dataToSend.userId = localStorage.getItem("user_Id");
    if (editFormValues.firstNameEdit == null) {
      dataToSend.addressName = first
    }
    else {
      dataToSend.addressName = editFormValues.firstNameEdit;
    }
    if (editFormValues.lastNameEdit == null) {
      dataToSend.addressLastName = last
    } else {
      dataToSend.addressLastName = editFormValues.lastNameEdit;
    }

    if (editFormValues.addressLine1Edit == null) {
      dataToSend.addressLine1 = aL1
    } else {
      dataToSend.addressLine1 = editFormValues.addressLine1Edit;
    }
    if (editFormValues.addressLine2Edit == null) {
      dataToSend.addressLine2 = aL2
    } else {
      dataToSend.addressLine2 = editFormValues.addressLine2Edit;
    }
    if (editFormValues.stateEdit == null) {
      dataToSend.state = state
    } else {
      dataToSend.state = editFormValues.stateEdit;
    }

    if (editFormValues.cityEdit == null) {
      dataToSend.city = city
    } else {
      dataToSend.city = editFormValues.cityEdit;
    }

    if (editFormValues.zipEdit == null) {
      dataToSend.zipCode = zip
    } else {
      dataToSend.zipCode = editFormValues.zipEdit;
    }

    //dataToSend.location = editFormValues.localityEdit;

    if (editFormValues.localityEdit == null) {
      dataToSend.location = "";
    } else {
      dataToSend.location = editFormValues.localityEdit;
    }
    console.log(dataToSend);
    let respData;
    this.doctorService.editAddress(dataToSend, this.headers).subscribe((data) => {
      respData = data;
      if (respData.STATUS == "SUCCESS") {
        this.close4();
        this.doctorService.ordersummery(this.data11, this.headers).subscribe((data: any) => {
          this.userData = data;
          this.productBeanList = this.userData.productBeanList;
          console.log(this.productsList);
          this.addressBeanList = this.userData.addressBeanList;
          this.productBeanList = this.userData.productBeanList;

          console.log(this.addressBeanList);
          
          let to;
          this.total1 = 0;
          if (this.productBeanList) {

            for (let i = 0; i < this.productBeanList.length; i++) {
              to = this.productBeanList[i].sellingPrice;
              this.total1 = this.total1 + Number(to) * this.productBeanList[i].qty;
            }
          }
        });
      }
    });
  }
  spinner = 0;
  down() {
    if (this.spinner > 0) {

      this.spinner = this.spinner - 1
    }
  }
  onvoted1(thispassdate: any) {
    this.selecteddate = thispassdate

  }

  noOftime1(value) {
    this.nooftimes = value;
    this.flag = false;
  }
  noOftime2(value) {
    console.log("value" + value);
    this.nooftimes = value;
    console.log("this.nooftimes" + this.nooftimes);

    this.flag = false;
  }
  noOftime3(value) {
    this.nooftimes = value;
    this.flag = false;
  }
  noOftime4(value) {
    this.nooftimes = value;
    this.flag = false;
  }
  noOftime5(value) {
    this.nooftimes = value;
    this.flag = false;
  }
  noOftime6(value) {
    this.nooftimes = value;
    this.flag = false;
  }
  noOftime7(value) {
    this.nooftimes = value;
    this.flag = false;
  }
  noOftimeCustom() {
    this.flag = true;

  }
  custnoftimes(cv) {
    this.nooftimes = cv.value;

  }
  custtiming(cv) {
    this.time4 = cv.value;
  }
  custquantity(cv) {
    this.qty = cv.value;
  }

  nodays(cv) {
    this.days = cv.value;
  }


  Timing1(value) {
    this.time1 = value;
    this.flag1 = false;
  }
  Timing2(value) {
    this.time2 = value;
    this.flag1 = false;
  }
  Timing3(value) {
    this.time3 = value;
    this.flag1 = false;
  }
  Timing4() {
    this.flag1 = true;
  }
  quantity1(value) {
    this.qty = value;
    this.flag2 = false;
  }
  quantity2(value) {
    this.qty = value;
    this.flag2 = false;
  }
  quantity3(value) {
    this.flag2 = true;
  }
  quantity4(value) {
    this.qty = value;
    this.flag2 = false;
  }

  when1(value) {
    this.when = value;
  }
  when2(value) {
    this.when = value;
  }
  when3(value) {
    this.when = value;
  }
  when4(value) {
    this.when = value;
  }

  other1(value) {

    this.flag3 = true;
  }
  other2(value) {

    this.flag4 = true;
  }
  other3(value) {

    this.flag5 = true;
  }
  other4(value) {

    this.flag6 = true;
  }
  other5(value) {

    this.flag7 = true;
  }
  other6(value) {

    this.flag8 = true;
  }
  other7(value) {

    this.flag9 = true;
  }
  med: any;
  Nooftypes1;
  prescribeMedicineSave(medicine) {

  }
  prescribeMedicineProceed(medicine1) {

  }

  patientProfileSubmit(createprescription) {

  }


  flag_Change: boolean = false;
  flag_Change2: boolean = false;
  flag_Change3: boolean = false;
  flag_Change4: boolean = false;
  flag_Change5: boolean = false;
  flag_Change6: boolean = false;
  flag_Change7: boolean = false;
  flag_Changenoftime: boolean = false;
  flag_Changetiming: boolean = false;
  flag_Changenoftime1: boolean = false;
  flag_Changetiming1: boolean = false;

  noOftimef(data) {
    var data_string = data.replace(/\d+/g, '');
    data_string = data_string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    data_string = data_string.replace(/\s/g, '');
    if (data_string === "Custom") {

      this.flag_Changenoftime = true;
    }
    else {
      this.flag_Changenoftime = false;
    }
  }



  noOftimef1(data) {
    var data_string = data.replace(/\d+/g, '');
    data_string = data_string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    data_string = data_string.replace(/\s/g, '');
    if (data_string === "Custom") {

      this.flag_Changenoftime1 = true;
    }
    else {
      this.flag_Changenoftime1 = false;
    }
  }





  timingF(data) {
    var data_string = data.replace(/\d+/g, '');
    data_string = data_string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    data_string = data_string.replace(/\s/g, '');
    if (data_string === "Custom") {

      this.flag_Changetiming = true;
    }
    else {
      this.flag_Changetiming = false;
    }
  }


  timingF1(data) {
    var data_string = data.replace(/\d+/g, '');
    data_string = data_string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    data_string = data_string.replace(/\s/g, '');
    if (data_string === "Custom") {

      this.flag_Changetiming1 = true;
    }
    else {
      this.flag_Changetiming1 = false;
    }
  }



  addZanduMedicine() {
    let obj = {
      categories: null,
      categoryId: 0,
      createTime: null,
      deliveryEstimate: null,
      description: null,
      disclaimer: null,
      enabled: false,
      id: 128,
      indication: null,
      keyIngredients: null,
      lastModified: null,
      mainImage: null,
      mrpPrice: 0,
      name: "Zandu Balm (1 ml)",
      prescriptionRequired: false,
      productAttributeValues: null,
      productLastUpdatedDate: null,
      recommendedDietaryModification: null,
      referenceText: null,
      sellingPrice: 0,
      shortDescription: null,
      starRating: 0,
      stockOut: false,
      subName: null,
      thirdPartySkuId: null,
      thirdPartyVendorName: null,
      thumbnailImage: null,
      totalVotes: 0,
      vatPercentage: 0,
      visibleOnPortal: false,
    }
    this.zanduMedicinelist.push(obj);
  }


  formFildsAddmedicine = [];
  counterAddmedicine = 1;
  addFieldValuemedicine(item) {
    ;
    if (this.counterAddmedicine < 50) {
      this.counterAddmedicine++;
      this.formFildsAddmedicine.push(this.counterAddmedicine)
      this.zanduMedicinelist.push(item);
    }
  }

  deleteFieldValuemedicine(value) {
    for (let i = 0; i < this.formFildsAddmedicine.length; i++) {
      if (this.formFildsAddmedicine[i] == value) {
        this.formFildsAddmedicine.splice(i, 1);
      }
    }

  }

  public user = {

    productId: '',
    symp_sel_1: '',
    // symp_sel_2: '',
    // symp_sel_3: '',
    // symp_sel_4: '',
    med_sel_1: '',
    //med_sel_2: '',
    // med_sel_3: '',
    // med_sel_4: '',
    time_sel_1: '',
    // time_sel_2: '',
    // time_sel_3: '',
    // time_sel_4: '',
    // time_sel_5: '',
    when_sel_1: '',
    dos_sel_1: '',
    appointmentId: '',
    patientUserId: '',
    doctorUserId: '',
    diagnosis: '', // default to Female
    noOfSymptomsCount: '',
    investigationList: [],
    investigationListId: [],
    consultationNotes: '',
    isEditConsultation: '',
    userName: '',
    prescriptionEntryCount: 0,

  }

  confirmOrder() {

    var data21 = {
      doctorUserId: localStorage.getItem("doctor_Id"),
      appointmentId: localStorage.getItem("appointmentId").replace(/(^")|("$)/g, ""),
      patientUserId: localStorage.getItem("user_Id"),
      CART_ID: this.cartModal,
      paymentFlag: this.cartFlag
      // orderid:this.orderId
    }

    console.log("......." + (data21))
    this.doctorService.confirmOrder(data21, this.headers).subscribe((data: any) => {
      this.userData = data;
      console.log(this.userData);
      this.close2();
      if(this.userData.STATUS == "SUCCESS"){
        localStorage.setItem("isPrescriptionAdded","true");
        swal("Success", "Prescription sent successfully", 'success');
        this.router.navigate(['/doctor_landingpage']);
        
      }
      
    })

  }

  startVideoCall() {
    let dataToSend: any = {};
    let responseData: any = [];
    dataToSend.userId = JSON.parse(localStorage.getItem("user_Id"));
    dataToSend.appointmentId = JSON.parse(localStorage.getItem("appointmentId"));
    //dataToSend.unique_id = 1234;
    this.doctorService.startDoctVideoCall(dataToSend, this.headers).subscribe((data: any) => {
      responseData = data;

      if (responseData.URL.indexOf("doctor") > 0) {
        let height = window.innerHeight;
        let width = window.innerWidth;
        console.log("height = " + height);
        console.log("width = " + width);
        let popupPositionLeft = width - 450;
        let popupPositionTop = height - 385;
        window.open(responseData.URL, "mywindow", "menubar=0,resizable=0,width=453,height=380,top=" + popupPositionTop + ",left=" + popupPositionLeft + " ");
      } else {
        //$("#video_call_notification_show").modal("show");
        //$("#video_call_notification-body_txt_show").html(data);
        swal("Error", "Something Went Wrong!!!!!", 'error');
      }
    });
  }

  getPatientProfileData() {
    let obj = {


      sincleList:
        [
          {
            id: 1,
            name: "1-10yrs"

          },
          {
            id: 2,
            name: "11-20yrs"

          },
          {
            id: 0,
            name: "since"
          }
        ],
      conditionList:
        [
          {
            id: 1,
            name: "Hypertension"

          },
          {
            id: 2,
            name: "Insomania"

          },
          {
            id: 3,
            name: "Kidney Stone"

          },
          {
            id: 4,
            name: "Kidney Stone"

          },
          {
            id: 5,
            name: "Other"

          },
          {
            id: 0,
            name: "Add condition"
          }

        ],
      allergiesList:
        [
          {
            id: 1,
            name: "Cat anf Dog Allergy"

          },
          {
            id: 2,
            name: "Drug Allergy"

          },
          {
            id: 3,
            name: "Food Allergy"

          },
          {
            id: 4,
            name: "Eye Allergy"

          },
          {
            id: 5,
            name: "Other"

          },
          {
            id: 0,
            name: "Add Allergy"
          }
        ],
      habitsList:
        [
          {
            id: 1,
            name: "Bidi"

          },
          {
            id: 2,
            name: "Drinking"

          },
          {
            id: 3,
            name: "Drugs"

          },
          {
            id: 0,
            name: "Add habbits"
          }

        ],
      exerciseRoutineList:
        [
          {
            id: 1,
            name: "30 mins 3 times a week"

          },
          {
            id: 2,
            name: "30 mins 5 times a week"

          },
          {
            id: 3,
            name: "Daily upto 30 mins"

          },
          {
            id: 0,
            name: "Add excersises"
          }
        ],
      eatingPrferencesList:
        [
          {
            id: 1,
            name: "Non-veg"

          },
          {
            id: 2,
            name: "Pure Veg"

          },
          {
            id: 3,
            name: "Veg [with eggs]"

          },
          {
            id: 0,
            name: "Add eating habits"
          }
        ],
      addWorkingHoursList:
        [
          {
            id: 1,
            name: "01-04"

          },
          {
            id: 2,
            name: "05-08"

          },
          {
            id: 3,
            name: "09-12"

          },
          {
            id: 0,
            name: "Add woking hours"
          }
        ],
      diseasesList:
        [
          {
            id: 1,
            name: "Disease1"

          },
          {
            id: 2,
            name: "Disease2"

          },
          {
            id: 3,
            name: "Disease3"

          },
          {
            id: 0,
            name: "Add diseases"
          }
        ],
      patientHistory:
      {
        presentCondition:
          [
            {
              conditionId: 1,
              consitionName: "ABC",
              sinceId: 1,
              sinceName: "XYZ",
              otherCondition: null
            },
            {
              conditionId: 2,
              sinceId: 2,
              otherConsition: "Other ConsitionText"
            },
            {
              conditionId: 1,
              sinceId: 1,
              otherConsition: null
            }
          ],
        allergies:
          [
            {
              allergyId: 1,
              sinceId: 1,
              otherCondition: null,
            },
            {
              allergyId: 2,
              sinceId: 3,
              otherCondition: "Other Consition Text",
            },
            {
              allergyId: 3,
              sinceId: 3,
              otherCondition: null,
            }
          ],
        specialConsidaration: 'Something',
        currentMedication:
          [
            {
              name: 'Zandu pancharish',
              sinceId: 1,
            },
            {
              name: 'Zandu pancharish',
              sinceId: 1,
            },
          ],
        presentCondition1:
          [
            {
              conditionId: 1,
              sinceId: 1
            },
            {
              conditionId: 1,
              sinceId: 1
            }
          ]

      },
      lifeStyleDetails:
      {
        habits:
          [
            {
              habitId: 1,
              habitName: "XYZ",
              sinceId: 1,
              sinceName: "XYZ"
            },
            {
              habitId: 1,
              habitName: "XYZ",
              sinceId: 1,
              sinceName: "XYZ"
            },
          ],
        exerciseRoutine:
          [
            {
              exerciseRoutineId: 1,
              exerciseRoutineName: "ABC",
              sinceId: 1,
              sinceName: "XYZ"
            },
            {
              exerciseRoutineId: 1,
              exerciseRoutineName: "ABC",
              sinceId: 1,
              sinceName: "XYZ"
            }
          ],
        eatingPreferences:
          [
            {
              eatingPreferencesId: 1,
              eatingPreferencesName: "ABC",
              siceId: 1,
              sinceName: "XYZ"
            },
            {
              eatingPreferencesId: 1,
              eatingPreferencesName: "ABC",
              siceId: 1,
              sinceName: "XYZ"
            }
          ],
        workingHours:
          [
            {
              workingHourId: 1,
              workingHours: "ABC",
              sinceId: 1,
              sicenName: "XYZ"
            }
          ]

      },
      familyHistory:
        [
          {
            relation: "Father",
            disease:
              [
                {
                  diseseId: 1,
                  diseaseName: "ABC",
                  sinceId: 1,
                  sicceName: "XYZ",
                },
                {
                  diseseId: 1,
                  diseaseName: "ABC",
                  sinceId: 1,
                  sinceName: "XYZ"
                }
              ],
            allergies:
              [
                {
                  allergyId: 1,
                  alleryName: "ABC",
                  sinceId: 1,
                  sinceName: "XYZ"
                },
                {
                  allergyId: 1,
                  allergyName: "ABC",
                  sinceId: 1,
                  sinceName: "XYZ",
                }
              ]
          }
        ]

    }
    return obj;
  }
  add(qty, id) {
    
    var params = {
      userId: localStorage.getItem("user_Id"),
      productId: id,
      quantity: qty
    }
    var headers = new Headers({ 'Content-Type': 'application/json' });
    this.doctorService.updateQuantityOfProductD(params, headers).subscribe((data: any) => {
      let responce = data
    });
    //debugger
    this.total1 =0;
    for (let i = 0; i < this.productBeanList.length; i++) {
      let to = 0
      to = this.productBeanList[i].sellingPrice  * this.productBeanList[i].qty;
      this.total1 = this.total1 + Number(to);
      this.total1 = this.total1
    }
    // for (let i = 0; i < this.productBeanList.length; i++) {
    //   let data = 0
    //   let to = 0
    //   let one = 0
    //   let two = 0
    //   this.total1 = 0;
    //   if (id != this.productBeanList[i].productId) {
    //     to = this.productBeanList[i].sellingPrice * this.productBeanList[i].qty;
    //     one =  to
    //   }
    //   else {
    //     two = this.productBeanList[i].sellingPrice * qty
    //     //this.total1 = this.total1+two;
    //   }
    //   let three = 0;
    //    three = one + two;
    //   this.total1 = this.total1 + three
    // }
    console.log(this.total1)
  }
  savePrescribedMedicineNew() {
    if (this.editPrescriptionData != undefined && this.selectedPrescribedTimingArray.length == 0) {
      let stringT = this.editPrescriptionData.noOfDays.newDisplayVal;
      let arrayOfTimings = stringT.split("-");
      for (let i = 0; i < arrayOfTimings.length; i++) {
        this.selectedPrescribedTimingArray.push(arrayOfTimings[i]);
      }
      this.selectedPrescribedWhenArray.push(this.editPrescriptionData.whenToTake.id);
    }

    if (this.selectedPrescribedMedicineId == 0) {
      swal("Error", "Please select Medicine!", 'error');
      return false;
    }
    if (this.selectedPrescribedTimingArray.length == 0) {
      swal("Error", "Please select Timing!", 'error');
      return false;
    }
    if (this.selectedPrescribedWhenArray.length == 0) {
      swal("Error", "Please select When to take Medicines!", 'error');
      return false;
    }
    if (this.prescribedNoOfDays == undefined) {
      swal("Error", "Please select number of days to take Medicines!", 'error');
      return false;
    }
    if (this.isOtherChecked && (this.customDaysVal == undefined || this.customDaysVal == "")) {
      swal("Error", "Please enter value for other Days option that you have selected!", 'error');
      return false;
    } else if (this.isOtherChecked) {

      this.prescribedNoOfDays = this.customDaysVal;
    }
    if (this.selectedDosage == 0) {
      swal("Error", "Please select dosage quantity of  Medicines!", 'error');
      return false;
    }

    let productObj = null;
    let noOfTimeObj = null;
    let dosageObj = null;
    let whenToTakeObj = null;

    // let productObj= null;
    // let noOfTimeObjList:any = [];
    // let dosageObj = null;
    // let whenToTakeObjList:any = [];
    let noOfDaysObj = this.prescribedNoOfDays;
    for (let index = 0; index < this.prescribedMedicine.length; index++) {
      if (this.prescribedMedicine[index].productId == this.selectedPrescribedMedicineId) {
        productObj = this.prescribedMedicine[index];
      }
    }
    let newPrescribedMediNoOfTimes = JSON.parse(JSON.stringify(this.prescrideMedineNoOfTimes));
    for (let index = 0; index < newPrescribedMediNoOfTimes.length; index++) {
      for (let j = 0; j < this.selectedPrescribedTimingArray.length; j++) {
        if (newPrescribedMediNoOfTimes[index].displayValue == this.selectedPrescribedTimingArray[j]) {
          noOfTimeObj = newPrescribedMediNoOfTimes[index];
          //noOfTimeObj = this.prescrideMedineNoOfTimes.slice(index);
        }
      }

    }
    noOfTimeObj.newDisplayVal = "";
    this.selectedPrescribedTimingArray.forEach((obj) => {
      let finalSelectedTimingName = obj;
      noOfTimeObj.newDisplayVal += finalSelectedTimingName + "-";
    });
    noOfTimeObj.newDisplayVal = noOfTimeObj.newDisplayVal.slice(0, -1);

    for (let index = 0; index < this.prescribedDosage.length; index++) {
      if (this.prescribedDosage[index].id == this.selectedDosage) {
        dosageObj = this.prescribedDosage[index];
      }
    }
    for (let index = 0; index < this.prescribedWhenToTake.length; index++) {
      for (let j = 0; j < this.selectedPrescribedWhenArray.length; j++) {
        if (this.prescribedWhenToTake[index].id == this.selectedPrescribedWhenArray[j]) {
          //let whenToTakeObj: any = {};
          whenToTakeObj = this.prescribedWhenToTake[index];
          //whenToTakeObjList.push(whenToTakeObj);
        }
      }

    }

    if (productObj != null && noOfTimeObj != null &&
      dosageObj != null && whenToTakeObj != null &&
      (noOfDaysObj != undefined || noOfDaysObj != null)) {
      let obj = {

        selectedProductId: productObj.productId,
        selectedNoOfDays: noOfTimeObj.id,
        selectedDosageId: dosageObj.id,
        selectedWhen: whenToTakeObj.id,
        product: productObj,
        noOfDays: noOfTimeObj,
        dosage: dosageObj,
        whenToTake: whenToTakeObj,
        noOfDay: noOfDaysObj,
        id: ++this.idCount
      }
      if (this.inMemoryPrescribedMedicine.length > 0) {
        for (let i = 0; i < this.inMemoryPrescribedMedicine.length; i++) {
          if (this.inMemoryPrescribedMedicine[i].product.productId == this.selectedPrescribedMedicineId) {
            this.inMemoryPrescribedMedicine.splice(i, 1);
          }
        }
      }
      if (this.inMemoryCurrentMedication != null || this.inMemoryPrescribedMedicine != undefined) {
        this.inMemoryPrescribedMedicine.push(obj);
      }
      console.log(this.inMemoryPrescribedMedicine);
    }
    //At last reset default add fields values after 
    this.selectedPrescribedMedicineId = 0;
    this.selectedPrescrideMedineNoOfTimes = 0;
    this.selectedDosage = 0;
    this.selectedPrescribedWhenToTake = 0;
    //this.prescribedNoOfDays="No Of Days";

    this.prescrideMedineNoOfTimes.forEach((timing) => {
      timing.checked = false;
    });
    this.prescribedWhenToTake.forEach((when) => {
      when.checked = false;
    });

    this.isCheckedDay = false;
    this.customDaysVal = "";

    this.selectedPrescribedTimingArray = [];
    this.selectedPrescribedWhenArray = [];
    this.editPrescriptionData = undefined;

  }
  public isCheckedDay: boolean;
  changeTimingCheckBox(displayValue, event) {

    if (event.target.checked) {
      this.selectedPrescribedTimingArray.push(displayValue);
    }
    if (event.target.checked == false) {
      for (let i = 0; i < this.selectedPrescribedTimingArray.length; i++) {
        if (displayValue == this.selectedPrescribedTimingArray[i]) {
          this.selectedPrescribedTimingArray.splice(i, 1);
        }
      }

    }

  }
  changeWhenCheckBox(checkedId, event) {
    if (event.target.checked) {
      this.selectedPrescribedWhenArray = [];
      this.selectedPrescribedWhenArray.push(checkedId);
    }
    // if (event.target.checked == false) {
    //   for(let i = 0;i<this.selectedPrescribedWhenArray.length;i++){
    //     if(checkedId == this.selectedPrescribedWhenArray[i]){
    //       this.selectedPrescribedWhenArray.splice(i,1);
    //     }
    //   }

    // }
  }
  public customDaysVal: any;
  isOtherChecked: boolean = false;
  changeDayCheckBox(event) {

    if (event.target.checked) {
      this.prescribedNoOfDays = event.target.value;
      this.isOtherChecked = false;
    }
    if (this.prescribedNoOfDays == "custom") {
      this.isOtherChecked = true;

    }
  }
  public editPrescriptionData: any;
  editPrescription(whatToEdit, whichDosage, whenToTakeMedicinesId) {
    //debugger
    this.selectedPrescribedMedicineId = whatToEdit;
    this.selectedDosage = whichDosage;
    this.selectedPrescribedWhenArray.push(whenToTakeMedicinesId);
    for (let i = 0; i < this.prescriptionAlreadyAdded.length; i++) {
      if (this.prescriptionAlreadyAdded[i].prodBean.id == whatToEdit) {
        this.editPrescriptionData = this.prescriptionAlreadyAdded[i];

      }
    }
    this.a();
  }
  onChangeSelectedPrescribedMedicine(selectedMedicineId) {
    this.selectedPrescribedMedicineId = selectedMedicineId;
  }
  onChangeSelectedDosage(selectedDosageId) {
    this.selectedDosage = selectedDosageId;
  }
  a() {
//debugger
    var string = this.editPrescriptionData.noOfDays.newDisplayVal;
    var arrayOfTimings = string.split("-");
    this.selectedPrescribedTimingArray = arrayOfTimings;
    for (let i = 0; i < this.prescrideMedineNoOfTimes.length; i++) {
      for (let j = 0; j < arrayOfTimings.length; j++) {
        if (this.prescrideMedineNoOfTimes[i].displayValue == arrayOfTimings[j]) {
          this.prescrideMedineNoOfTimes[i].checked = true;
        }
      }



    }
  }

  deletePrescription(whatToDelete) {
    //debugger
    // for (let i = 0; i < this.inMemoryPrescribedMedicine.length; i++) {
    //   if (whatToDelete == this.inMemoryPrescribedMedicine[i].selectedProductId) {
    //     this.inMemoryPrescribedMedicine.splice(i, 1);
    //   }
    // }
    for(let i=0;i<this.prescriptionAlreadyAdded.length; i++){
      if (whatToDelete == this.prescriptionAlreadyAdded[i].prodBean.id) {
          this.prescriptionAlreadyAdded.splice(i, 1);
         }
    }
  }
  showAddMemberForm() {

    if (this.familyAlreadyFilledDataList.length < 9) {
      let tempObj: any = {};

      tempObj.relationId = 0;
      tempObj.relation = "Select";
      tempObj.isdeceased = false;
      tempObj.reasonForDeceased = null;
      tempObj.disease = [];
      tempObj.allergies = [];

      this.familyAlreadyFilledDataList.push(tempObj);

    }
    // //this.isVisibleMemberForm =  true;
    // if(this.familyHistoryMemberCount <=9){
    //   this.familyHistoryMemberCount++;
    //   this.familyHistoryMemberCountArray.push(this.familyHistoryMemberCount);
    // }
  }
  enebleAllPatientSection1() {
    this.isDisabledInp1 = false;
  }
  enebleAllPatientSection2() {
    this.isDisabledInp2 = false;
  }
  enebleAllPatientSection3() {
    this.isDisabledInp3 = false;
  }
  getQueriesData() {
    let dataToSend: any = {};
    let respData: any = {};

    dataToSend.doctorId = localStorage.getItem("doctor_Id");
    dataToSend.userId = localStorage.getItem("user_Id");
    this.doctorService.doctorQueryMain(dataToSend, this.headers).subscribe((data) => {
      respData = data;

      this.recievedChatData = respData.CONVERSATION_LIST;
      if(this.recievedChatData){
        for (let i = 0; i < this.recievedChatData.length; i++) {
          this.recievedChatData[i].active = "";
        }
        this.recievedChatData[0].active = "active";
        this.openMsg(0, this.recievedChatData[0].conversationId, this.recievedChatData[0].doctorId, this.recievedChatData[0].patientId);
      }else{
        this.recievedChatData = [];
      }
     
    });
  }
  globalPcId: any;
  globalCDocId: any;
  globalPatId: any;
  whichTabClicked: any;
  openMsg(index, pcId, docId, patId) {
    this.whichTabClicked = index;
    this.globalPcId = pcId;
    this.globalCDocId = docId;
    this.globalPatId = patId;
    for (let i = 0; i < this.recievedChatData.length; i++) {
      this.recievedChatData[i].active = "";
    }
    this.recievedChatData[index].active = "active";


    this.singleMessageSelected = this.recievedChatData[index];
    this.singleMessageSelected.index = index;
  }

  submitDoctorQuery(queryText) {
    let dataToSend: any = {};
    let respData: any = {};
    let headers = new Headers({ 'Content-Type': 'application/json' });

    dataToSend.queryDescription = queryText;
    dataToSend.userId = this.globalPatId;
    dataToSend.patientConversationId = this.globalPcId;
    dataToSend.doctorId = this.globalCDocId;

    this.doctorService.doctorPostQuery(dataToSend, headers).subscribe((data) => {
      respData = data;
       if (respData.STATUS == "SUCCESS") {
        this.recievedChatData = respData.CONVERSATION_LIST;
        
       }
       if(this.recievedChatData){
        for (let i = 0; i < this.recievedChatData.length; i++) {
          this.recievedChatData[i].active = "";
        }
        this.recievedChatData[this.whichTabClicked].active = "active";
        this.openMsg(this.whichTabClicked, this.recievedChatData[this.whichTabClicked].conversationId, this.recievedChatData[this.whichTabClicked].doctorId, this.recievedChatData[this.whichTabClicked].patientId);
      }else{
        this.recievedChatData = [];
      }
    });
  }
  isPreviouslyAddedPrescriptionChanged:boolean=false;
  previouslyAddedPrescId:any=0;
  value
  onChangePreviouslyAddedPrescription(selectedVal){
    this.isPreviouslyAddedPrescriptionChanged = true;
    this.previouslyAddedPrescId = selectedVal;
    this.openCity(1);
   
  }

// Health Report
  _ref:any;   
  xreport = [];
  public reportData :any[]=[];
  public totalReportCount :number=0;

  getReportList(){
    let userId = localStorage.getItem("userId");
    let requestData = {userId : userId};
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.doctorService.getResportList(requestData,headers).subscribe((data:any)=>{
      this.reportData = data.INVESTIGATION_MAP[0];
      this.totalReportCount = this.reportData.length;
      console.log(this.reportData);
    })
  }

  deleteReport(id:number){
    console.log(id);
    let userId = localStorage.getItem("userId");
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.doctorService.deleteReports({"userId" : userId,  "invsId" : id},headers).subscribe((data:any)=>{
      this.reportData = data.INVESTIGATION_MAP[0];
      this.totalReportCount = this.reportData.length
    });

  }


  dia(){
    debugger
    localStorage.setItem("diagnosys",this.diagnosys)
  }
  custom12="modal";
  customEnd="modal"
popup1(){
  this.custom12="show";
}
close1(){
  this.custom12="modal";
} 
pdfDataListendCons:any[]=[];
SendPres(value){
  debugger
  this.data11 = {
    userId: localStorage.getItem("user_Id"),
    doctorUserId: localStorage.getItem("doctor_Id"),
    appointmentId: localStorage.getItem("appointmentId")
  }
  //alert(this.data11);

  this.close1();
  if(value==1){
      // this.popup2()
    //  this.confirmOrder()
    this.doctorService.endConsModal(this.data11, this.headers).subscribe((data: any) => {
      
    let  respData = data;
      this.cartModal = respData.CART_ID;
      this.cartFlag = respData.paymentFlag;
      if (respData.status == "ERROR") {
        swal("Error", "Oooops !! Something went wrong!", 'error');
        return false;
      } else {
        this.pdfDataListendCons = respData;
        if (this.pdfDataListendCons) {
          this.customEnd = "show";
        }
      }
    })


    }
   if(value==2){
this.endCons()
  }
}
  endCons(){
    let params = {
      userName: JSON.parse(localStorage.getItem("userName_Doc")),
      isEditConsultation: this.isEditConsultation,
      doctorUserId: JSON.parse(localStorage.getItem("doctor_Id")),
      patientUserId: JSON.parse(localStorage.getItem("user_Id")),
      appointmentId: JSON.parse(localStorage.getItem("appointmentId")),
      diagnosis: this.diagnosys,
      consultationNotes: this.consultationNotes,
      symptomsList: this.symptomsList1,
      investigationList: this.selectedInvestigationList,
      
      
    }
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.doctorService.endConsultation(params,headers).subscribe((data:any)=>{
      if(data.STATUS=="SUCCESS"){
        
        this.router.navigate(['/doctor_landingpage']);
      }
    });
  }
}

