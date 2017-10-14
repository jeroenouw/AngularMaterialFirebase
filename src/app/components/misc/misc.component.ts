import { Component, OnInit } from '@angular/core';
import { MatDatepicker } from '@angular/material';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent implements OnInit {
  answer: string;

  constructor() { }

  ngOnInit() {
  }

}
