import { Component, OnDestroy } from '@angular/core';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-receiver-message',
  templateUrl: 'receiver.component.html',
  styleUrls: ['./receiver.component.css'],
})
export class ReceiverComponent implements OnDestroy {
  private subscription: Subscription;
  private messages = [];

  constructor(private messageService: MessageService) {
    this.subscribe();
  }

  get unsubscribed() {
    return this.subscription && this.subscription.closed;
  }
 
  send(message: {text: string, respondEvent: string}) {
    this.messageService.broadcast(message.respondEvent, message.text);
  }

  clear() {
    this.messages = [];
  }

  subscribe() {
    this.subscription = this.messageService.subscribe('receiver', (payload) => {
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
