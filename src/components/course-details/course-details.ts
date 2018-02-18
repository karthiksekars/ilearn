import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the CourseDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'course-details',
  templateUrl: 'course-details.html'
})
export class CourseDetailsComponent {
  responseData : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public authServiceProvider: AuthServiceProvider) {
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


}
