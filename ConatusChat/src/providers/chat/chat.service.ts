import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ChatService{

    constructor(private database: AngularFireDatabase) {
        
    }

    addChanel(channelName: string) {
        this.database.list(`/channel-names`).push({ name: channelName });
    }
}