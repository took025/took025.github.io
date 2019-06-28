import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-slick',
  templateUrl: './slick.component.html',
  styleUrls: ['./slick.component.scss']
})

  export class SlickComponent {
    items: Array<any> = [];
    constructor() {
      this.items = [
        // tslint:disable-next-line: max-line-length
              {name : 'http://www.hereandabroad.com/wp-content/gallery/le-mas-des-alpilles-at-domaine-de-st-remy/facade-2-mas-des-alpilles-luxury-provence-rental-900x600-900x600.jpg'},
              {name : 'http://i.imgur.com/tSrs2.jpg'},
              {name : 'https://www.lagarganta.com/wp-content/uploads/2018/06/entorno-la-garganta-900x600.jpg'},
              {name : 'http://aiesec.at/wp-content/uploads/2015/07/5718269042_8b2181bed8_o-900x600.png'},
        // tslint:disable-next-line: max-line-length
              {name : 'http://www.hereandabroad.com/wp-content/gallery/le-mas-des-alpilles-at-domaine-de-st-remy/facade-2-mas-des-alpilles-luxury-provence-rental-900x600-900x600.jpg'},
              {name : 'http://i.imgur.com/tSrs2.jpg'},
              {name : 'https://www.lagarganta.com/wp-content/uploads/2018/06/entorno-la-garganta-900x600.jpg'},
              {name : 'http://aiesec.at/wp-content/uploads/2015/07/5718269042_8b2181bed8_o-900x600.png'},
            ];
    }
  }
