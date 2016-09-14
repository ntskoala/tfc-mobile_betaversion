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
export class EventosService {
private baseurl:string;
  constructor(private http: Http, private config: Config) {}

getEventos(user) {
        this.baseurl = this.config.baseurl;
        let eventos = this.http.get(`${this.baseurl}/loadevents.php?uuid=${user}&_dc=1470480375978`);
        return eventos;
    }



}

