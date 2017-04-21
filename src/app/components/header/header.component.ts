import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
     title: string = '';

  public menuItems: Array<Object> = [
    {
      icon: 'face',
      title: 'Profile',
      link: '#'
    },
    {
      icon: 'chat',
      title: 'Message',
      link: '#'
    },
    {
      icon: 'refresh',
      title: 'Refresh Page',
      link: '#'
    },
    {
      icon: 'link',
      title: 'Link',
      link: 'https://github.com/jeroenouw/Angular4MaterialDesign'
    },
    {
      icon: 'lock',
      title: 'Login',
      link: '#'
    },
  ];
}
