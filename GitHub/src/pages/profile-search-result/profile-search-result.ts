import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GithubServiceProvider } from './../../providers/github-service/github-service';
import { User } from './../../models/user.interface';
import { Repository } from './../../models/repository.interface';

/**
 * Generated class for the ProfileSearchResultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  segment: 'profile/results/:username'
})
@Component({
  selector: 'page-profile-search-result',
  templateUrl: 'profile-search-result.html',
})
export class ProfileSearchResultPage {

  username: string;
  user: User;
  repositories: Repository[];

  constructor(private github: GithubServiceProvider, private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileSearchResultPage');
  }

  getUserInformation():void{

    this.github.getUserIntormation(this.username).subscribe((data: User) => this.user = data);
    this.github.getRepositoryIntormation(this.username).subscribe( (data: Repository[]) => this.repositories = data );
    //this.github.mockGetUserInformation(this.username).subscribe( (data: User) => this.user = data);
    //this.github.mockGetRepositoryInformation(this.username).subscribe( (data: Repository[]) => this.repositories = data );
  }

  ionViewWillLoad(){
    this.username = this.navParams.get('username');
    if(this.username){
      console.log(this.getUserInformation());
    }    
  }

}
