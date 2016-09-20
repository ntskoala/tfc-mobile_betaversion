import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Config} from '../../config/config';
import {Storage, SqlStorage} from 'ionic-angular';
/*
  Generated class for the Bandas provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ControlesService {
  private baseurl: string = this.config.baseurl;
  private storage: Storage;
  private miscontroles: any;
  constructor(private http: Http, private config: Config) {
    this.storage = new Storage(SqlStorage, {name:'tfc'});
  }
}