import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { CostItemService } from '../../../cost-item.service';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  public data: any;
  public arraysOfCosts: any = null;

  constructor(private _costItemService: CostItemService) {

    this._costItemService.pieChartData()
      .subscribe(res => {
        this.arraysOfCosts = res;

        this.data = {
          labels: this.arraysOfCosts.labels,
          datasets: [{
            data: this.arraysOfCosts.allData,
            backgroundColor: this.arraysOfCosts.colors
          }]
        };
      });
  }

  ngOnInit() {
  }

}
