import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MESSAGE_LIST } from './../../mocks/messages/messages';
import { Message } from './../../models/messages/messages.interface';
/**
 * Generated class for the InboxPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  messageList: Message[] = MESSAGE_LIST;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.messageList);
  }

  navigateToSearchUserPage() {
    alert(1)
    this.navCtrl.push('SearchUserPage');
  }

}