import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-material-test',
  templateUrl: './material-test.component.html',
  styleUrls: ['./material-test.component.scss']
})

  export class MaterialTestComponent {
    employeeForm: FormGroup;
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;
    arr = [1, 4, 2, 3, 6, 5, 22];
  items = ['angular ', 'java ', 'html'];
  newItem = '';
  selectedIndex: number = null;
  pushItem() {
    if (this.newItem !== '') {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }
  deleteItem(index) {
     this.items.splice( index , 1);
  }
  setIndex(index: number) {
    this.selectedIndex = index;
 }
// tslint:disable-next-line: use-life-cycle-interface
ngOnInit(): void {
  this.employeeForm = new FormGroup({
    fullName: new FormControl(),
    email: new FormControl(),
    skills: new FormGroup({
      skillName: new FormControl(),
      experianceInYears: new FormControl(),
      proficiency: new FormControl()
    })
  });
}
  }
