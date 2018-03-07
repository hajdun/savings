import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss']
})
export class IncomeListComponent implements OnInit {

  // TODO: fetch with service
  public incomes: Object[] = [
    { 'incomeName': 'salary', 'incomeAmount': 560 },
    { 'incomeName': 'present, granny', 'incomeAmount': 50 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
