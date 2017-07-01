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

    /*
    ngOnInit(): void {
        this.loader.present();
        this.auth.getAuthenticatedUser().subscribe((user: User) => {
                this.data.getProfile(user).subscribe(profile => {
                this.userProfile = <Profile>profile.val();
                this.loader.dismiss();
            })
        })
    }
    */

    ngOnInit(): void{
        this.loader.present();
        this.auth.getAuthenticatedUser().subscribe(auth => {
            this.authUser = auth;

            this.data.getProfile(this.authUser).subscribe(profile => {
                this.userProfile = <Profile>profile.val();
                this.existingProfile.emit(this.userProfile);
                this.loader.dismiss();
            })
        })
    }

}