import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-email',
  templateUrl: './background-email.component.html',
  styleUrls: ['./background-email.component.css']
})
export class BackgroundEmailComponent implements OnInit {
  fullImagePath: string;

  constructor() {
    this.fullImagePath = '/assets/img/mb-bg-01.png'; }

  ngOnInit() {
  }
}
