import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { date } from '@rxweb/reactive-form-validators';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
openClose = false;
text = '';
ment = HTMLDivElement;
clickMessage = '';
  selectFormControl = new FormControl('', Validators.required);
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
firstFormGroup: FormGroup;
openDate() {
  this.openClose = !this.openClose;
  }

  ngOnInit() {
  }
rotate(event) {
  event.target.classList.toggle('active');
 }
 toggle() {
  const ment = document.getElementById('btn1');
  const side = document.getElementById('side');
  ment.style.borderColor = ('blue');
  this.text = ('hello world');
  side.classList.toggle('active');
}
constructor() { }
}
export interface Food {
  value: string;
  viewValue: string;
}
const div = document.createElement('input');
div.className = 'foo';
div.setAttribute( 'type' , 'text');
