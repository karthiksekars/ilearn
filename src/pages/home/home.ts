import { Component } from '@angular/core';
import { NavController, ViewController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userDetails : any;
  responseData: any;

  constructor(
    public navCtrl: NavController,
    private storage: Storage,
    private viewCtrl: ViewController
  ) {

  }

  ionViewCanEnter(){

  }

}
