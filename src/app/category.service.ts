
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Category } from './categoryInterface';

@Injectable()
export class CategoryService {
  constructor(private _http: HttpClient) { }

  public getCategories() {
    return this._http.get<any>('/api/categories');
  }

  public getCategoryByName(name) {
    return this._http.get<any>('/api/categories/byName/' + name);
  }

}


