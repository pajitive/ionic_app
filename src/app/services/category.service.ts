import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 // tslint:disable-next-line: ban-types
  api: String = 'api/categories/';

  constructor(private rest: RestService) { }

  getAllCategories(param){ return this.rest.post( `${this.api}getCategories`, param); }

}
