import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userDetails : any;
  responseData: any;

  userPostData = {"wstoken":""};

  constructor(public navCtrl: NavController) {

  }

  logout(){

  }

}
