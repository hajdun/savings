import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'balance-module',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  public currencySymbol = '$';
  public currentBalance = 800;
  public earnedIn2Weeks = 310;
  public spentIn2Weeks = 400;


  constructor() { }

  ngOnInit() {
  }

}
