import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { ChatService } from './../../providers/chat/chat.service';
import { Observable } from 'rxjs/Observable';
import { Channel } from './../../models/channel/channel.interface';

/**
 * Generated class for the ChannelsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  channelList: Observable<Channel[]>

  constructor(
    private chat: ChatService,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelsPage');
  }

  ionViewWillLoad() {
    this.getChannels();    
  }

  getChannels() {
    this.channelList = this.chat.getChannelListRef();
  }

  showAddChannelDialog() {
    this.alertCtrl.create({
      title: 'Cannel Name',
      inputs: [{
        name: 'channelName'
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.chat.addChanel(data.channelName)
          }
        }
      ]
    }).present();
  }

}
