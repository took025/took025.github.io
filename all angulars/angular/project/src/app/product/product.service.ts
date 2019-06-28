import { Injectable} from '@angular/core';
import { IProduct } from './pproduct';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    getProducts(): IProduct[] {
     return [
        {
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
          },
          {
            productId: 2,
            productName: 'Hammer',
            productCode: 'TBX-0023',
            releasedate: 'may 18,2016',
            description: '15 gallon capacity',
            price: 8.9,
            StarRating: 4.8,
            ImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81fKIh7xi9L._SX425_.jpg',
            about: ''
          },
          {
            productId: 3,
            productName: 'cup',
            productCode: 'TBX-023',
            releasedate: 'june 18,2016',
            description: '15 gallon capacity',
            price: 8.9,
            StarRating: 3.5,
            ImageUrl: 'https://bostonbean.com.au/wp-content/uploads/2016/05/ACMECup-Demitasse-Black.jpg',
            about: ''
          },
          {
            productId: 4,
            productName: 'knife',
            productCode: 'TBX-123',
            releasedate: 'june 18,2016',
            description: '15 gallon capacity',
            price: 12.9,
            StarRating: 5,
            ImageUrl: 'https://c.76.my/Malaysia/columbia-usa-1318a-hunting-knife-chewhoung-1712-17-chewhoung@13.jpg',
            about: ''
          },
          {
            productId: 5,
            productName: 'plate',
            productCode: 'TBX-023',
            releasedate: 'june 18,2016',
            description: '15 gallon capacity',
            price: 3.5,
            StarRating: 3.0,
            ImageUrl: 'https://noplastic.ca/wp-content/uploads/2012/06/Stainless-Steel-Dinner-Plate-Premium-Quality.jpg',
            about: ''
          }
      ];
    }
}
