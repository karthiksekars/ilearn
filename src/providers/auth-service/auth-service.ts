import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
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
  getUserInfo(strToken, strUsername){

    let arrUserInfoQuerey = {
      'service':'core_user_view_user_profile',
      'wstoken':strToken,
      'field':'username',
      'values' : strUsername
    };

    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('service', 'core_user_view_user_profile');

      this.http.post(apiInfoUrl, arrUserInfoQuerey, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  postData(credentials, apiMethod) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiAuthUrl + '?service=' + apiMethod, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

}
