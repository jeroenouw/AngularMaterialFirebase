import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../shared';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  contact = new Contact('Google', 'Bob', 'David', 'Angularlane 4', 'LA', 'California', '3221HB');
  submitted = false;
  onSubmit() { this.submitted = true; }
  active = true;
  newContact() {
    this.contact = new Contact('', '', '', '', '', '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

}
