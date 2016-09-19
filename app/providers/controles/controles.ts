import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Config} from '../../config/config';
/*
  Generated class for the Bandas provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ControlesService {
  private baseurl: string = this.config.baseurl;

  constructor(private http: Http, private config: Config) {}


getMisControles(userid)
{
        let miscontroles = this.http.get(`${this.baseurl}/views/getcontroles.php?userid=${userid}&_dc=1470480375978`);
        return miscontroles;
    }
}