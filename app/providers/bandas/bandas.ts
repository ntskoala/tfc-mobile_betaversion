import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Bandas provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BandasService {

  constructor(private http: Http) {}

getlistadoBandas() {
        let bandas = this.http.get(`http://myband.ntskoala.com/app2/listadobandas.php`);
        return bandas;
    }
getMisBandas(user)
{
        let misbandas = this.http.get(`http://myband.ntskoala.com/app2/loadbands_.php?uuid=${user}&_dc=1470480375978`);
        return misbandas;
    }
}