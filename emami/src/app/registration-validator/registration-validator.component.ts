import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-validator',
  templateUrl: './registration-validator.component.html',
  styleUrls: ['./registration-validator.component.css']
})
export class RegistrationValidatorComponent implements OnInit {

  constructor() {

  }
  ngOnInit() {
  }

  static validate(registrationFormGroup: FormGroup) {
    let password = registrationFormGroup.controls.password.value;
    let repeatPassword = registrationFormGroup.controls.repeatPassword.value;

    if (repeatPassword.length <= 0) {
        return null;
    }

    if (repeatPassword !== password) {
        return {
            doesMatchPassword: true
        };
    }

    return null;

}
 
}
