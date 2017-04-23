import { Component } from '@angular/core';
import { Response } from '@angular/http';

//import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({ 
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = '';

  constructor(//private dataStorageService: DataStorageService,
              private authService: AuthService) {
  }

/*  onSaveData() {
    this.dataStorageService.storeUsers()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getUsers();
  }
*/

  onLogout() {
    this.authService.logout();
  }  

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
      title: 'Source code',
      link: 'https://github.com/jeroenouw/Angular4MaterialDesign'
    },
    {
      icon: 'lock',
      title: 'Login',
      link: '/login'
    },
  ];
}
