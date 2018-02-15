import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the EnrollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enroll',
  templateUrl: 'enroll.html',
})
export class EnrollPage {
  public intCourseId;
  public strCourseFullName;
  public EnrollForm;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private storage: Storage, 
    public authServiceProvider: AuthServiceProvider,
    private formBuilder: FormBuilder,
  ) {

    this.EnrollForm = this.formBuilder.group({
      enrollKey: ['', Validators.required],
    });
    
    this.intCourseId       = navParams.get('intCourseId');
    this.strCourseFullName = navParams.get('strCourseFullName');
  }

  ionViewDidLoad() {
  }

}
