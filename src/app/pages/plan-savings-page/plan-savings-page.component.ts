import { Component, OnInit } from '@angular/core';
import { toASCII } from 'punycode';

@Component({
  selector: 'plan-savings-page',
  templateUrl: './plan-savings-page.component.html',
  styleUrls: ['./plan-savings-page.component.scss']
})
export class PlanSavingsPageComponent implements OnInit {

  // TODO: fetch with service
  public currency = { 'currencyName': 'Dollar', 'currencySymbol': '$' };

  constructor() { }

  ngOnInit() {
  }

}
