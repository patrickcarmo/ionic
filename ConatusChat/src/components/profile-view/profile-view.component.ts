import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { LoadingController, Loading } from 'ionic-angular';

import { AuthService } from './../../providers/auth/auth.service';
import { DataService } from './../../providers/data/data.service';
import { Profile } from './../../models/profile/profile.interface';
import { User } from 'firebase/app';


@Component({
    selector: 'app-profile-view',
    templateUrl: 'profile-view.component.html'
})

export class ProfileViewComponent implements OnInit {

    public userProfile: Profile
    private loader: Loading;
    private authUser: User;

    @Output() existingProfile: EventEmitter<Profile>

    constructor(private loading: LoadingController, private data: DataService, private auth: AuthService) {
        
        this.existingProfile = new EventEmitter<Profile>();
        
        this.loader = this.loading.create({
            content: 'Loading profile..'
        })
    }

    ngOnInit(): void{
        this.loader.present();        
        this.data.getAuthenticatedUserProfile().subscribe(profile => {
            this.userProfile = profile;
            this.existingProfile.emit(this.userProfile);
            this.loader.dismiss();
        })
    }

}