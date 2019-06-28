import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from './forms-model';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-member-forms',
  templateUrl: './member-forms.component.html',
  styleUrls: ['./member-forms.component.scss']
})
export class MemberFormsComponent implements OnInit  {
  userFormGroup: FormGroup;
  user: User;
  value = '';

  constructor(private formBuilder: RxFormBuilder) {}

  ngOnInit() {
    this.user = new User();
    this.userFormGroup = this.formBuilder.formGroup(this.user);
 }
 onKey(event: KeyboardEvent) { // with type info
  this.value += (event.target as HTMLInputElement).value + ' | ';
}
}
