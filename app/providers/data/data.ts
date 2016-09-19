import {Storage, SqlStorage} from 'ionic-angular';
import {Injectable} from '@angular/core';
 import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import {Config} from '../../config/config';
//import {SyncPage} from '../../pages/sync/sync';

@Injectable()
export class Data {
 //private baseurl: string = this.config.baseurl;
  private storage;
  private data;
  public logged: number;
//  private sync: SyncPage;
// private logins: Array<{user: string, password: string}>;
  constructor(private http: Http){
    this.storage = new Storage(SqlStorage, {name:'tfc'});
      this.inicializa();
  }
 inicializa(){
   this.storage.query('CREATE TABLE IF NOT EXISTS logins (id INTEGER PRIMARY KEY, user TEXT, password TEXT, tipouser TEXT, nombre TEXT)').then((data) => {
            console.log("TABLE CREATED  LOGINS-> " + JSON.stringify(data.res));
        }, (error) => {
            console.log("ERROR -> " + JSON.stringify(error.err));
  });
     this.storage.query('CREATE TABLE IF NOT EXISTS controles (id INTEGER PRIMARY KEY AUTOINCREMENT, user TEXT, password TEXT, tipouser TEXT, nombre TEXT)').then((data) => {
            console.log("TABLE CREATED CONTROLES-> " + JSON.stringify(data.res));
        }, (error) => {
            console.log("ERROR -> " + JSON.stringify(error.err));
  });
       this.storage.query('CREATE TABLE IF NOT EXISTS checklist (id INTEGER PRIMARY KEY AUTOINCREMENT, user TEXT, password TEXT, tipouser TEXT, nombre TEXT)').then((data) => {
            console.log("TABLE CREATED CHECKLIST-> " + JSON.stringify(data.res));
        }, (error) => {
            console.log("ERROR -> " + JSON.stringify(error.err));
  });
  //this.sync.sincronizate();
 //  this.logins.forEach (user => this.save(user));
 //  this.getData();
 }
  getData() {
   // return this.storage.get('todo');  
this.storage.query('select * from logins').then((response) => {
alert(response);
});  
}






public getLogin(nombre: string, password:string){
this.storage.query('select * from logins WHERE user = ? AND password = ?',[nombre,password]).then((data) => {
    if (data.res.rows.length >0){
    this.logged = data.res.rows.item(0).id;
    }
    else{
        this.logged = undefined;
    }
   // alert (data.res.rows.item(0).id);
}, (error) => {
              alert("ERROR -> " + JSON.stringify(error.err));
          });
}

}