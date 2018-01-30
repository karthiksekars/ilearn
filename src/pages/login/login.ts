import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  responseData : any;
  userData = {username: "",password: ""};

  constructor(public navCtrl: NavController, public authServiceProvider:AuthServiceProvider, private formBuilder: FormBuilder) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signin(){
    this.authServiceProvider.loginUser(this.userData,'moodle_mobile_app').then((result) => {
     this.responseData = result;
     if(this.responseData){
     console.log(result);
     }
   }, (err) => {
     // Error log
   });

 }



}
