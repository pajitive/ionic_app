import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // tslint:disable-next-line: ban-types
  api: String = 'api/products/';

  constructor(private rest: RestService) { }
  getAllProducts(param){ return this.rest.post( `${this.api}getProducts`, param); }

}
