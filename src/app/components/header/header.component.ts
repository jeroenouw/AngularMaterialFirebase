import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
     title = '';
  public menuItems: Array<Object> = [
    {
      icon: 'face',
      title: 'Profile'
    },
    {
      icon: 'chat',
      title: 'Message'
    },
    {
      icon: 'refresh',
      title: 'Refresh Page'
    },
    {
      icon: 'link',
      title: 'Link'
    },
    {
      icon: 'lock',
      title: 'Login'
    },
  ];
}
