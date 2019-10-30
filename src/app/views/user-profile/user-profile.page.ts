import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { ModalController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  constructor(public modalController: ModalController,
              private _location: Location,
              public alertController: AlertController
              ) {

  }

  ngOnInit() {
  }

   backSite() {
    this._location.back();
  }
}
