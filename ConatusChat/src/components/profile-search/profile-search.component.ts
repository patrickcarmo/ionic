import { Component } from '@angular/core';

import { DataService } from './../../providers/data/data.service';

@Component({
    selector: 'app-profile-search',
    templateUrl: 'profile-search.component.html'
})

export class ProfileSearchComponent{

    query: string;

    constructor(private data: DataService){

    }

    searchUser(query: string) {
        
    }
    //02:40
}