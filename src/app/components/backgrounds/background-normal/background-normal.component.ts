import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-normal',
  templateUrl: './background-normal.component.html',
  styleUrls: ['./background-normal.component.scss']
})
export class BackgroundNormalComponent implements OnInit {
  fullImagePath: string;

  constructor() {
    this.fullImagePath = '/assets/img/mb-bg-06.png'; }

  ngOnInit() {
  }

}
