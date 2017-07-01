import { Component } from '@angular/core';

/**
 * Generated class for the SendMessageBoxComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-send-message-box',
  templateUrl: 'send-message-box.component.html'
})
export class SendMessageBoxComponent {

  text: string;

  constructor() {
    console.log('Hello SendMessageBoxComponent Component');
    this.text = 'Hello World';
  }

}
