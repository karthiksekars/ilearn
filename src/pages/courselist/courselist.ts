import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Storage } from '@ionic/storage';
import { EnrollPage } from '../enroll/enroll';
/**
 * Generated class for the CourselistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-courselist',
  templateUrl: 'courselist.html',
})
export class CourselistPage {
  responseData : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public authServiceProvider: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    //console.log(this.navParams.data);
    this.storage.get('__token').then((__token) => {
      //console.log('Your token is', __token);
      this.getcourselist(__token,this.navParams.data);
    });
    
  }

  getcourselist(privetetoke,categoryid){
    this.authServiceProvider.getcourselist(privetetoke,'core_course_get_courses_by_field').then((result) => {
      //console.log(result.courses);
      this.responseData = result;
      if(this.responseData){
        //console.log(this.responseData);
        //this.responseData = this.responseData.courses;
        //return this.responseData;        
      }
    }, (err) => {
      // Error log
    });
  }

  enrollMe(intCourseId, strCourseFullName) {
    this.navCtrl.push(EnrollPage, {
      intCourseId:intCourseId,
      strCourseFullName:strCourseFullName
    })
  }

}
