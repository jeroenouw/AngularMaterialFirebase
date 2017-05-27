import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { AuthService } from './auth.service';
import { User } from '../models';

@Injectable()
export class DataStorageService {
  usersChanged = new EventEmitter<User[]>();

  private users: User[] = [
    new User(/*  'test@test.nl', '', 'Jeroen', 'Jeroenouw', 'test bio', 'imageurl', []*/)
  ];

  constructor(private http: Http,
              private authService: AuthService) {
}

  saveUser() {
    const body = JSON.stringify(this.users);
    const token = this.authService.getIdToken();
    return this.http.put('https://angular4materialdesign.firebaseio.com/users.json?auth=' + token, body, this.authService.getIdToken());
  }

  getUser() {
    const token = this.authService.getIdToken();
    return this.http.get('https://angular4materialdesign.firebaseio.com/users.json?auth=' + token)
      .map((response: Response) => response.json())
      .subscribe(
        (data: User[]) => {
          this.users = data;
          this.usersChanged.emit(this.users);
        }
      )
  }

/*  
  saveUser() {
    const token = this.authService.getToken();
    return this.http.put('https://angular4materialdesign.firebaseio.com/users.json?auth=' + token, this.authService.getToken());
  }

  getUser() {
    const token = this.authService.getToken();
    this.http.get('https://angular4materialdesign.firebaseio.com/users.json?auth=' + token)
  }
*/
}
