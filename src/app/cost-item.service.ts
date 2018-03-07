import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { CostItem } from './costItemInterface';
import { Observable } from 'rxjs/Observable';

/**
 * Jsdoc
 */
@Injectable()
export class CostItemService {

  constructor(private _http: HttpClient) { }

  public getCostItems(): Observable<Array<CostItem>> {
    return this._http.get<Array<CostItem>>('/api/allCostItems');
  }

  public getCostItem(id: String) {
    return this._http.get<any>('/api/costItems/' + id);
  }

  public insertCostItem(post: CostItem) {
    return this._http.post<any>('/api/create', post);
  }

  public updateCostItem(post: CostItem, id) {
    return this._http.post<any>('/api/update/' + id, post);
  }

  public deleteCostItem(id) {
    return this._http.get<any>('/api/delete/' + id);
  }

  /**
   * Provide a sum of costs after fetching cost items
  */
  public sumOfCosts() {
    return this.getCostItems()
      .map(res => {
        let allSpent = 0;
        res.forEach(function (item) {
          allSpent += (item.unitPrice * item.itemAmount);
        });
        return allSpent;
      });
  }

  /**
   * Provide input for charts after fetching cost items
   * label - text (category name)
   * data - number (unit price * amount)
   * color (item category's calegoryColor)
   * returns an object containing 3 arrays
  */
  public pieChartData() {
    return this.getCostItems()
      .map(res => {
        const label: Array<String> = [];
        const data: Array<any> = [];
        const color: Array<String> = [];
        res.forEach(function (item) {
          const categoryName = item.itemCategory.categoryName;
          const indexOfCategoryName = label.indexOf(categoryName);

          if (indexOfCategoryName > -1) { // label is in already
            data[indexOfCategoryName] = data[indexOfCategoryName] + item.unitPrice * item.itemAmount;
          } else {
            label.push(item.itemCategory.categoryName);
            data.push((item.unitPrice * item.itemAmount));
            color.push(item.itemCategory.categoryColor);
          }
        });
        return { 'labels': label, 'allData': data, 'colors': color };
      });
  }


}
