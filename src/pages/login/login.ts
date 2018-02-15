import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
//import { MycoursesPage } from '../mycourses/mycourses';
//import { regexValidators } from '../../pages/validators/validator';

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

  constructor(
    public navCtrl: NavController,
    public authServiceProvider:AuthServiceProvider,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    private storage: Storage,
    private alertCtrl: AlertController,
    private viewCtrl: ViewController
  ) {

    this.credentialsForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signIn(){

    this.submitted = true;

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
    });

    if (this.credentialsForm.valid) {

      loader.present();

    this.authServiceProvider.loginUser(this.credentialsForm.value).then((objAPIResponce) => {
     this.responseData = objAPIResponce;
     if(this.responseData.token){
      this.storage.clear();
       this.storage.set('__token', this.responseData.token);
       this.storage.ready().then(() => {
        this.storage.get('__token').then((__token) => {
          this.authServiceProvider.getUserInfo(this.responseData.token, this.credentialsForm.value.username).then((objUserAPIResponce) => {
            this.storage.set('__userinfo', JSON.stringify(objUserAPIResponce));
            loader.dismissAll();
            window.location.reload();
          }, (err) => {
            console.log(err);
            this.alertCtrl.create({
              title: 'Invalid Action, try again.',
              subTitle: this.responseData.error,
              buttons: ['OK']
            })
            .present();
          });
        });
       });

     }
     else{
      loader.dismissAll();
      this.alertCtrl.create({
        title: 'Invalid Login',
        subTitle: this.responseData.error,
        buttons: ['OK']
      })
      .present();
     }

   }, (err) => {
     console.log(err);
   });

  }
 }

 forgotPassword(){

 }

}
