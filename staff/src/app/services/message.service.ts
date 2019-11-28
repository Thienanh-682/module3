import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: string;

  constructor() {
  }

  addMessage(value: string) {
    this.message = value;
  }
  getMessage() {
    return this.message;
  }
}
