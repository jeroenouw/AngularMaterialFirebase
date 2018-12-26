import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '@shared';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private userService: UserService) {}

  public onSubmit(form: NgForm) {
   const company = form.value.company;
   const firstname = form.value.firstname;
   const lastname = form.value.lastname;
   const address = form.value.address;
   const city = form.value.city;
   const postal = form.value.postal;
   const message = form.value.message;
   return this.userService.contactFormSend(company, firstname, lastname, address, city, postal, message);
  }

}
