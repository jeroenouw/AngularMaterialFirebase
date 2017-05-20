import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { AuthService } from './auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private authService: AuthService) {
}

  storeUsers() {
    const token = this.authService.getToken();
    return this.http.put('https://angular4materialdesign.firebaseio.com/users.json?auth=' + token, this.authService.getToken());
  }

  getUsers() {
    const token = this.authService.getToken();
    this.http.get('https://angular4materialdesign.firebaseio.com/users.json?auth=' + token)
  }
}