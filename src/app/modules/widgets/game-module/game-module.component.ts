import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-module',
  templateUrl: './game-module.component.html',
  styleUrls: ['./game-module.component.scss']
})
export class GameModuleComponent implements OnInit {
  public residentCount = 10;
  public maxResidentCount = 1000;
  public citizenMood = 5;
  public maxCitizenMood = 10;

  constructor() { }

  ngOnInit() {
  }

}
