import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';

let apiUrl = 'http://14.1.197.36/lms-upgraded/login/token.php';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http : Http, public httpClientModule : HttpClientModule) {
    console.log('Hello AuthServiceProvider Provider');
  }

  // Login user
  loginUser(credentials, apiMethod) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.get(apiUrl + '?service=' + apiMethod + '&username=' + credentials.username + '&password=' + credentials.password)
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

      this.http.post(apiUrl + '?service=' + apiMethod, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

}
