import { Component, OnInit } from '@angular/core';
import { IProduct } from '../pproduct';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  // selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Details';
  product: IProduct;
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

        // this.route.params.subscribe(params => {
        //     this.Id = params["id"];
        // });



    const id = +this.route.snapshot.params['id'];
    console.log(id, 'id');
    this.pageTitle += `: ${id}`;
    this.product = {
      productId: 1,
      productName: 'garden cart',
      productCode: 'GDN-0023',
      releasedate: 'march 18,2016',
      description: '15 gallon capacity',
      price: 32.992,
      StarRating: 2.2,
      // tslint:disable-next-line:max-line-length
      ImageUrl: 'https://images.homedepot-static.com/productImages/b2a0e937-99b7-40bb-a567-8b11a2eb63ef/svn/sontax-yard-carts-73599-64_1000.jpg',
      about: ''
    };
  }
  onBack(): void {
    this.router.navigate(['./product']);
  }
}
