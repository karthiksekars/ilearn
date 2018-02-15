import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { CourselistPage } from '../courselist/courselist';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the MycoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mycourses',
  templateUrl: 'mycourses.html',
})
export class MycoursesPage {
  responseData : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider: AuthServiceProvider,private storage: Storage) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MycoursesPage');
    //this.getcources();
    this.storage.get('__token').then((__token) => {
      //console.log('Your token is', __token);
      this.getcources(__token);
    });
  }

  getcources(privetetoke){
    //console.log(this.userData);
    this.authServiceProvider.getcource(privetetoke,'core_course_get_categories').then((result) => {
      this.responseData = result;
      if(this.responseData){
        this.responseData.forEach(function (value) {
          var reg =  /<img.*?src="([^">]*\/([^">]*?))".*?>/g
          var imageurl = reg.exec(value.description);
          value.description = imageurl[1]+"?token="+privetetoke; 
          //console.log(value);
        });
      }
    }, (err) => {
      // Error log
    });
    
  }
  coursedtail(courseid){
    this.navCtrl.push(CourselistPage,courseid);     
   }

}
