import { Component, } from '@angular/core';

@Component({
  selector: 'app-work2',
  templateUrl: './work2.component.html',
  styleUrls: ['./work2.component.scss']
})
  export class Work2Component {
  show = false;
  showAnsverable() {
    this.show = !this.show;
  }
}
