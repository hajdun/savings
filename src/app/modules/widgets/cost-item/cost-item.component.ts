import { Component, OnInit } from '@angular/core';
import { CostItemService } from '../../../cost-item.service';
import { CostItem } from '../../../costItemInterface';
import { CategoryService } from '../../../category.service';
import { Category } from '../../../categoryInterface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cost-item',
  templateUrl: './cost-item.component.html',
  styleUrls: ['./cost-item.component.scss']
})
export class CostItemComponent implements OnInit {

  public costItem: Array<CostItem>;
  public category: Category;

  constructor(
    private _costItemService: CostItemService,
    private _categoryService: CategoryService,
    private router: Router,
    private aR: ActivatedRoute) { }

  ngOnInit() {

    this.aR.params.subscribe((params) => {
      const id = params['id'];
      this._costItemService.getCostItem(id)
        .subscribe(res => {
          this.costItem = res;
        });
    });
  }

  deleteCostItem(costItemId) {
    this._costItemService.deleteCostItem(costItemId)
      .subscribe((res) => {
        this.router.navigateByUrl('/');
      });
  }

  getCategoryByName(categoryName) {
    this._categoryService.getCategoryByName(categoryName)
      .subscribe((res) => {
        this.category = res;
      });
  }

}
