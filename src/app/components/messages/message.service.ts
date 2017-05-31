import { Injectable } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';


@Injectable()
export class MessageService {
  public messages: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public userName: string;
  public email: string;

  constructor() {
    // this.messages = this.firebase.database.list('messages');
    const messages = firebase.database().ref().child('messages/');
  }
 /*
  sendMessage(message, text) {
      return firebase.database().ref().child('messages/' + message).push({
      message: text,
      userName: this.userName,
      email: this.email,
      timestamp: Date.now()
    });
  }
  */
  sendMessage(text) {
      let message = {
      message: text,
      userName: this.userName,
      email: this.email,
      timestamp: Date.now()
    };
    firebase.database().ref().child('messages/' + message).push();
  }
}
