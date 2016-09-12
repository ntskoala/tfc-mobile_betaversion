import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Eventos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EventosService {

  constructor(private http: Http) {}

getEventos(user) {
        let eventos = this.http.get(`http://myband.ntskoala.com/app2/loadevents.php?uuid=${user}&_dc=1470480375978`);
        return eventos;
    }



}

