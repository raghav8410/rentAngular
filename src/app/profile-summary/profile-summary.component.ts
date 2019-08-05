import { Component, OnInit } from '@angular/core';
import {ProfileModel} from './profileModel';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.css']
})
export class ProfileSummaryComponent implements OnInit {

  constructor() { }

  public profileList = [];
  public profileModel: ProfileModel;
  public profileDetail=[
    {
      height: "5' 3",
      dressSize : 4,
      topSize : "Small",
      pantSize : 4,
      topHalf : "Fitted",
      bottomHalf : "Fitted",
      flaunt : "waits,rear and legs",
      downPlay : "Arms and bust",
      focus : "Work/business casual and date night/night out items",
      incorporate : "Classic and casual items",
      avoid : "Brown shades and animal prints"
    }
  ]

  ngOnInit() {
    this.profileDetail.forEach(profile => {
      this.profileModel = new ProfileModel();
      this.profileModel.setProfile(profile)
      this.profileList.push(this.profileModel.getProfile())
    })

    console.log(this.profileList);
  }

}
