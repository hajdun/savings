import { Component, OnInit } from '@angular/core';
import { CostItemService } from '../../../cost-item.service';

@Component({
  selector: 'cost-sum',
  templateUrl: './cost-sum.component.html',
  styleUrls: ['./cost-sum.component.scss']
})
export class CostSumComponent implements OnInit {

  public allSpent = 0;

  constructor(private _costItemService: CostItemService) { }

  ngOnInit() {
    // get sum
    this._costItemService.sumOfCosts()
      .subscribe(res => this.allSpent = res);
  }


}
