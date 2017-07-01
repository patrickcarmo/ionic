import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Channel } from './../../models/channel/channel.interface';

@Injectable()
export class ChatService{

    constructor(private database: AngularFireDatabase) {
        
    }

    addChanel(channelName: string) {
        this.database.list(`channel-names`).push({ name: channelName });
    }

    getChannelListRef(): FirebaseListObservable<Channel> {
        return this.database.list(`channel-names`);
    }

}