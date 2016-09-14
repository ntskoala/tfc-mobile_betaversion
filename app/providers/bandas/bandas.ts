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
export class BandasService {
  private baseurl: string = this.config.baseurl;

  constructor(private http: Http, private config: Config) {}

getlistadoBandas() {

        let bandas = this.http.get(`${this.baseurl}/listadobandas.php`);
        return bandas;
    }
getMisBandas(user)
{
        let misbandas = this.http.get(`${this.baseurl}/loadbands_.php?uuid=${user}&_dc=1470480375978`);
        return misbandas;
    }
}