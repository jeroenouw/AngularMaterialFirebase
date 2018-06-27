import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
// For other projects use different keys

const AppSettings = {
	apiKey: 'AIzaSyBUYZcc_HKi1TckbZPpSjSkxyFvml3Is0A',
	authDomain: 'angular4materialdesign.firebaseapp.com',
	databaseURL: 'https://angular4materialdesign.firebaseio.com',
	projectId: 'angular4materialdesign',
	storageBucket: 'angular4materialdesign.appspot.com',
	messagingSenderId: '136985605193'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor() {
	firebase.initializeApp(AppSettings);


    // See users, messages and keep in touch in console log

    // const preUsers = document.getElementById('users');
    // const dbRefUsers = firebase.database().ref().child('users');
    // dbRefUsers.on('value', snap => console.log(snap.val()));

    // const preMessages = document.getElementById('messages');
    // const dbRefMessages = firebase.database().ref().child('messages');
    // dbRefMessages.on('value', snap => console.log(snap.val()));

    // const preTouch = document.getElementById('touch');
    // const dbRefTouch = firebase.database().ref().child('touch');
    // dbRefTouch.on('value', snap => console.log(snap.val()));
  }
  ngOnInit() {}
}
