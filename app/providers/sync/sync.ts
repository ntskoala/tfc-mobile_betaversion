import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Config } from '../../config/config';
/* 
  Generated class for the Eventos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SyncService {
  constructor(private http: Http, private config: Config) {}
private posturl: string;
createAuthorizationHeader(headers:Headers) {
    headers.append('token', 'qwerty123456'); 
  }


getMisControles(userid)
{
            let headers = new Headers();
            this.createAuthorizationHeader(headers);
//        let miscontroles = this.http.get(`${this.config.baseurl}/views/getcontroles.php?userid=${userid}&_dc=1470480375978`,{headers:headers});
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

setResultados(resultados)
{
   console.log('resultados:' +resultados);
    this.posturl = this.config.baseurl+'/actions/setresultadoscontrol.php';
    
        let params = resultados;
        let headers = new Headers();
        //headers.append('Content-type', 'application/x-www-form-urlencoded');
        headers.append('Content-type', 'form-data');
        // devuelve un Observable
        return this.http.post(this.posturl, params, {headers: headers})
            .subscribe(res => {
                        //res.json();
                        console.log("post: " + res);
                        },
                        error => {
                            console.log("error post: " + error.json());
                        } );
 //   this.http.post(`${this.config.baseurl}/actions/getusers.php?idempresa=${this.config.idempresa}&_dc=1470480375978`,);
}


}

