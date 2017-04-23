import { Component, OnDestroy } from '@angular/core';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-sender-message',
  templateUrl: 'sender.component.html',
  styleUrls: ['./sender.component.css'],
})

export class SenderComponent implements OnDestroy {
  private subscription: Subscription;
  private messages = [];
  private messageNum = 0;
  private name = 'sender'

  constructor(private messageService: MessageService) {
    this.subscribe();
  }

  get unsubscribed() {
    return this.subscription && this.subscription.closed;
  }

  send() {
    let payload = {
      text: `Message ${++this.messageNum}`,
      respondEvent: this.name
    }
    this.messageService.broadcast('receiver', payload);
  }

  clear() {
    this.messages = [];
  }

  subscribe() {
    this.subscription = this.messageService.subscribe('sender', (payload) => {
      this.messages.push(payload);
    });
    
  }

  unsubscribe() {
    this.subscription.unsubscribe();
  }

  toggleSubscribed() {
    if (this.unsubscribed) {
      this.subscribe();
    } else {
      this.unsubscribe();
    }
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}
