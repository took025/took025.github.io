import { Component, OnInit } from '@angular/core';
import {TooltipPosition} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';


export interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
  export class MembersComponent {
    positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
    position = new FormControl(this.positionOptions[0]);
    animalControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
  }
