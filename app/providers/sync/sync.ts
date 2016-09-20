import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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

getMisControles(userid)
{
        let miscontroles = this.http.get(`${this.config.baseurl}/views/getcontroles.php?userid=${userid}&_dc=1470480375978`);
        return miscontroles;
    }

getMisUsers()
{
    //alert ('idempresa' + this.config.idempresa);
        let misusers = this.http.get(`${this.config.baseurl}/views/getusers.php?idempresa=${this.config.idempresa}&_dc=1470480375978`);
        return misusers;
    }



}

