import { Component, OnInit } from '@angular/core';
import { IProduct } from './pproduct';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  pageTitle = '';
  imageWidth = 55;
  imageMargin = 5;
  showImage = true;
  // tslint:disable-next-line:variable-name
  _listFilter: string;
  get listfilter(): string {
    return this._listFilter;
  }
  // tslint:disable-next-line:variable-name
  set listFilter(_value: string) {
    this._listFilter = _value;
    console.log(this._listFilter);
    this.filteredProducts = this._listFilter ? this.performFilter(this._listFilter) : this.products;
  }
  filteredProducts: IProduct[];
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
  }
  performFilter(filterBy: string): IProduct[] {
    console.log(filterBy);
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


  get StarRating() {
    return this.StarRating;
  }
  set StarRating(value) {
    this.StarRating = value;
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }
  onRatingClicked(massage: string): void {
    const fullText = ' ' + massage;
    this.pageTitle =  fullText;
  }

}
