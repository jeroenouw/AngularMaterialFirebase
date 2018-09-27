import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class MessageService {
  public messages: Observable<any>;
  public users: Observable<any>;
  public displayName: string;
  public email: string;

  constructor() {
    // this.messages = this.firebase.database.list('messages');
    // let messages = firebase.database().ref().child('messages/');
  }

  sendMessage(message, text) {
      return firebase.database().ref().child('messages/' + message).push({
      message: text,
      displayName: this.displayName,
      email: this.email,
      timestamp: Date.now()
    });
  }
  /*
  sendMessage(text) {
      let message = {
      message: text,
      displayName: this.displayName,
      email: this.email,
      timestamp: Date.now()
    };
    return firebase.database().ref().child('messages/' + message).push();
  }*/
}
