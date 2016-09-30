import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
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
public idchecklist;
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

setResultados(resultados,table):any
{
   console.log('resultados ' + table + ": " +resultados);
    this.posturl = this.config.baseurl+'/actions/set'+table+'.php';
    console.log(this.posturl);
        let params = resultados;
        let headers = new Headers();
        //headers.append('Content-type', 'application/x-www-form-urlencoded');
        headers.append('Content-type', 'form-data');
        // devuelve un Observable
       return this.http.post(this.posturl, params, {headers: headers})
            .map (res => JSON.parse(res.json()))
            .do (data => {console.log(data);
                        //alert("data" + data);
                        console.log("control2" + table);
                         if (data.success== "true"){
                             console.log("insert correcto " + table);
                            ///BORRAR DATOS TABLA 
                                this.storage = new Storage(SqlStorage, {name:'tfc'});
                                this.storage.query("delete from " + table).then(
                                (data) => { console.log (JSON.stringify(data.res));}, 
                                (error) => { console.log("ERROR -> " + JSON.stringify(error.err));});
                             }
                         else {
                             console.log ("ERROR EN EL INSERT " + table);
                             }
                        });
            
            //console.log()
            //.subscribe(res => {
            //              console.log("SUCCESS" + res.success);},
            //              console.log (JSON.parse(res.json()).id);
            //              let respuesta = JSON.parse(res.json()).success;
            //              console.log ("respuesta= " + respuesta);
            //              if (respuesta== "true"){
            //                  console.log("insert correcto " + table);
            // //                 ///BORRAR DATOS TABLA 
            // //                     // this.storage = new Storage(SqlStorage, {name:'tfc'});
            // //                     // this.storage.query("delete from " + table).then(
            // //                     // (data) => { console.log (JSON.stringify(data.res));}, 
            // //                     // (error) => { console.log("ERROR -> " + JSON.stringify(error.err));});  
            // //                     return respuesta.id;
            //                  }
            //              else {
            //                  console.log ("ERROR EN EL INSERT " + table);
            //                  }
            //              },
            //              error => {
            //                  console.log("error post: " + error);
            //              },
            //              () => {console.log("FIN")} );
                    
 //   this.http.post(`${this.config.baseurl}/actions/getusers.php?idempresa=${this.config.idempresa}&_dc=1470480375978`,);

}


}

