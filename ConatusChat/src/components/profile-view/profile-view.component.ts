import { Component, OnInit } from "@angular/core";
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

    userProfile: Profile
    loarder: Loading;

    constructor(private loading: LoadingController, private data: DataService, private auth: AuthService) {
        this.loarder = this.loading.create({
            content: 'Loading profile..'
        })
    }

    ngOnInit(): void {
        this.loarder.present();
        this.auth.getAuthenticatedUser().subscribe((user: User) => {
            this.data.getProfile(user).subscribe(profile => {
                this.userProfile = <Profile>profile.val();
                this.loarder.dismiss();
            })
        })
    }
}