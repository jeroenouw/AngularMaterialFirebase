import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
     title = 'Angular 2!';
  public menuItems: Array<Object> = [
    {
      icon: 'dialpad',
      title: 'Telephone'
    },
    {
      icon: 'voicemail',
      title: 'Voicemail'
    },
    {
      icon: 'notifications_off',
      title: 'Notifications'
    },
  ];
}