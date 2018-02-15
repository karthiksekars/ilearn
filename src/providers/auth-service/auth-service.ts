import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';

let apiAuthUrl = 'https://www.csc-crowddynamics.com/csa/login/token.php';

let apiInfoUrl = 'https://www.csc-crowddynamics.com/csa/webservice/rest/server.php';


/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http : Http, public httpClientModule : HttpClientModule) {
    //console.log('Hello AuthServiceProvider Provider');
  }

  // Login user
  loginUser(credentials) {
    return new Promise((resolve, reject) => {
      this.http.get(apiAuthUrl + '?service=moodle_mobile_app&username=' + credentials.username
      + '&password=' + credentials.password)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  //Get User Info
  getUserInfo(strToken:any, strUsername:any){

    let userDate;

    return new Promise((resolve, reject) => {
      this.http.get(apiInfoUrl + '?wsfunction=core_user_get_users_by_field&field=username&values[0]=' + strUsername + '&wstoken=' + strToken + '&moodlewsrestformat=json')
        .subscribe(res => {
          userDate = res.json();
          if(userDate.length){
            resolve(userDate[0]);
          }
          else{
            resolve(null);
          }

        }, (err) => {
          reject(err);
        });
    });

  }

  getcource(token,apiMethod){
    return new Promise((resolve, reject) => {
      this.http.get(apiInfoUrl + '?wsfunction=' + apiMethod + '&wstoken=' + token + '&moodlewsrestformat=json')
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  getcourselist(token,apiMethod){
    return new Promise((resolve, reject) => {
      this.http.get(apiInfoUrl + '?wsfunction=' + apiMethod + '&wstoken=' + token + '&moodlewsrestformat=json' + '&field=')
        .subscribe(res => {
          resolve(res.json().courses);
        }, (err) => {
          reject(err);
        });
    });
  }

}


