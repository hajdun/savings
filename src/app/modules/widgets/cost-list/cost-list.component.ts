import { Component, OnInit } from '@angular/core';
import { CostItemService } from '../../../cost-item.service';
import { CostItem } from '../../../costItemInterface';

@Component({
  selector: 'cost-list',
  templateUrl: './cost-list.component.html',
  styleUrls: ['./cost-list.component.scss']
})
export class CostListComponent implements OnInit {

  public costItems: Array<CostItem>;

  constructor(private _costItemService: CostItemService) { }

  ngOnInit() {
    this._costItemService.getCostItems()
      .subscribe(res => {
        this.costItems = res;
      });
  }

}
