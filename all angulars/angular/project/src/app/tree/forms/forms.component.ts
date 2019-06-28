import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { employe } from './models/employe';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  languages = ['english', 'spanish', 'other'];
  model = new employe ('', '', true, '' , 'default');
  hasPrimaryLanguageError = false;

  messageForm: FormGroup;
  submitted = false;
  success = false;
  focused = false;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourFormGroup: FormGroup;
  userFormGroup: FormGroup;

  validatePrimaryLanguage(value) {
    if (value === 'default') {
     this.hasPrimaryLanguageError = !this.hasPrimaryLanguageError;
   }
  }

  FirstNameToUpparcase(value: string) {
    if (value.length > 0) {
    this.model.FirstName = value.charAt(0).toUpperCase() + value.slice(1);
    } else { this.model.FirstName = value; }
  }



  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder) { }
    ngOnInit() {
    //   this.userFormGroup = this._formBuilder.group({
    //   password: ['', ],
    //   confirmPassword: ['', RxwebValidators.compare({fieldName: 'password' })],
    // });
    //   this.messageForm = this._formBuilder.group({
    // name: ['', Validators.required],
    // message: ['', Validators.required]
    // });



      {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirddCtrl: ['', Validators.required]
    });
    this.fourFormGroup = this._formBuilder.group({
      fourCtrl: ['', Validators.required]
    });
  }

  }
  onFocused() {
    this.focused = true;
  }
  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
        return;
    }

    this.success = true;
}

}

