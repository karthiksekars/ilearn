import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { regexValidators } from '../../pages/validators/validator';

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

  public credentialsForm: FormGroup;

  public submitted: boolean = false;

  constructor(public navCtrl: NavController, public authServiceProvider:AuthServiceProvider, private formBuilder: FormBuilder) {

    this.credentialsForm = this.formBuilder.group({
      username: [
        '',
        Validators.compose([Validators.pattern(regexValidators.username), Validators.required])
      ],
      password: [
        '',
        Validators.compose([Validators.pattern(regexValidators.password), Validators.required])
      ]
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signIn(){

    this.submitted = true;

    if (this.credentialsForm.valid) {

    this.authServiceProvider.loginUser(this.credentialsForm.value,'moodle_mobile_app').then((result) => {
     this.responseData = result;
     if(this.responseData){
     console.log(result);
     }
   }, (err) => {
     // Error log
   });
  }

 }

 forgotPassword(){

 }



}
