import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-income-form',
  templateUrl: './add-income-form.component.html',
  styleUrls: ['./add-income-form.component.scss']
})
export class AddIncomeFormComponent implements OnInit {

  public formattedDate: string = new Date().toLocaleDateString();

  constructor() { }

  ngOnInit() {
  }

}
