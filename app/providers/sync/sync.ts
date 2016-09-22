import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../../config/config';
/* 
  Generated class for the Eventos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SyncService {
  constructor(private http: Http, private config: Config) {}

createAuthorizationHeader(headers:Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('username:password')); 
  }


getMisControles(userid)
{
            let headers = new Headers();
            this.createAuthorizationHeader(headers);
 //       let miscontroles = this.http.get(`${this.config.baseurl}/views/getcontroles.php?userid=${userid}&_dc=1470480375978`,{headers:headers});
        let miscontroles = this.http.get(`${this.config.baseurl}/views/getcontroles.php?userid=${userid}&_dc=1470480375978`);
        return miscontroles;
    }

getMisChecklists(userid)
{
        let miscontroles = this.http.get(`${this.config.baseurl}/views/getchecklists.php?userid=${userid}&_dc=1470480375978`);
        return miscontroles;
    }


getMisUsers()
{
    //alert ('idempresa' + this.config.idempresa);
        let misusers = this.http.get(`${this.config.baseurl}/views/getusers.php?idempresa=${this.config.idempresa}&_dc=1470480375978`);
        return misusers;
    }



}

