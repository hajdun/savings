import { Component, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'savings-list',
  templateUrl: './savings-list.component.html',
  styleUrls: ['./savings-list.component.scss']
})
export class SavingsListComponent implements OnInit {

  public savedAll: number;
  public color = 'primary';
  public mode = 'determinate';
  public bufferValue = 100;

  // TODO: fetch with service
  public savings: Object[] = [
    { 'savingName': 'driving license', 'savingFullPlannedAmount': 400, 'savingCollected': 380 },
    { 'savingName': 'car', 'savingFullPlannedAmount': 400, 'savingCollected': 246 }
  ];

  // TODO: fetch with service
  public currencies: Object[] = [
    { 'currencyName': 'Dollar', 'currencySymbol': '$' },
  ];

  constructor() { }

  ngOnInit() {
    this.savedAll = this.totalSaved();
  }

  private totalSaved() {
    let total = 0;
    for (const saving of this.savings) {
      total += saving['savingCollected'];
    }
    return total;
  }

  private countPercent(plannedAmount, reachedAmount) {
    const onePercent = plannedAmount / 100;
    return reachedAmount / onePercent;

  }

}
