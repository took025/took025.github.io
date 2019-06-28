import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star-pm',
  templateUrl: './star-pm.component.html',
  styleUrls: ['./star-pm.component.css']
})
export class StarPmComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;

  @Output() ratingClicked: EventEmitter<string> =
  new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5 ;
  }
  onClick(): void {
    this.ratingClicked.emit(`the rating ${this.rating} was clicked`);
  }
}
