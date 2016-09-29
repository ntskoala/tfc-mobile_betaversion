import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Config } from '../../config/config';
import {Storage, SqlStorage} from 'ionic-angular';
/* 
  Generated class for the Eventos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SyncService {
  constructor(private http: Http, private config: Config) {}
private posturl: string;
private storage;
createAuthorizationHeader(headers:Headers) {
    headers.append('token', 'qwerty123456'); 
  }


getMisControles(userid)
{
            let headers = new Headers();
            this.createAuthorizationHeader(headers);
//        let miscontroles = this.http.get(`${this.config.baseurl}/views/getcontroles.php?userid=${userid}&_dc=1470480375978`,{headers:headers});
       let miscontroles = this.http.get(`${this.config.baseurl}/views/getcontroles.php?idempresa=${this.config.idempresa}&_dc=1470480375978`);
        return miscontroles;
    }

getMisChecklists(userid)
{
        let miscontroles = this.http.get(`${this.config.baseurl}/views/getchecklists.php?idempresa=${this.config.idempresa}&_dc=1470480375978`);
        return miscontroles;
    }


getMisUsers()
{
    //alert ('idempresa' + this.config.idempresa);
        let misusers = this.http.get(`${this.config.baseurl}/views/getusers.php?idempresa=${this.config.idempresa}&_dc=1470480375978`);
        return misusers;
    }

setResultados(resultados,table)
{
   console.log('resultados:' +resultados);
    this.posturl = this.config.baseurl+'/actions/set'+table+'.php';
    
        let params = resultados;
        let headers = new Headers();
        //headers.append('Content-type', 'application/x-www-form-urlencoded');
        headers.append('Content-type', 'form-data');
        // devuelve un Observable
        this.http.post(this.posturl, params, {headers: headers})
            //.map(data => { data.json()})
            .subscribe(res => {
                        var respuesta = JSON.parse(res.json());
                        console.log (respuesta.success);
                        if (respuesta.success== "true"){
                            console.log("insert correcto");
                            ///BORRAR DATOS TABLA 
                                // this.storage = new Storage(SqlStorage, {name:'tfc'});
                                // this.storage.query("delete from " + table).then(
                                // (data) => { console.log (JSON.stringify(data.res));}, 
                                // (error) => { console.log("ERROR -> " + JSON.stringify(error.err));});  
                                return "hola"
                            }
                        else {
                            console.log ("ERROR EN EL INSERT");
                            return "error"
                            }

                        },
                        error => {
                            console.log("error post: " + error);
                            return "error"
                        } );
 //   this.http.post(`${this.config.baseurl}/actions/getusers.php?idempresa=${this.config.idempresa}&_dc=1470480375978`,);
}


}

