import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  angularImage: string;
  
  constructor() {
     this.angularImage = '/assets/img/angular2.png';
  }

  ngOnInit() {
  }

}
