import {Storage, SqlStorage} from 'ionic-angular';
import {Injectable} from '@angular/core';
 import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import {Config} from '../../config/config';


@Injectable()
export class Data {
 //private baseurl: string = this.config.baseurl;
  private storage;
  private data;
  public logged: number;
 private logins: Array<{user: string, password: string}>;
  constructor(private http: Http){
    this.storage = new Storage(SqlStorage, {name:'tfc'});
     this.logins = [
      { user: 'demo' , password: 'demo' },
      { user: 'user1' , password: 'pass1' },
      { user: 'user2' , password: 'pass2' }
      ]; 
      this.inicializa();
  }
 inicializa(){
   this.storage.query('CREATE TABLE IF NOT EXISTS logins2 (id INTEGER PRIMARY KEY AUTOINCREMENT, user TEXT, password TEXT, tipouser TEXT, nombre TEXT)').then((data) => {
            console.log("TABLE CREATED -> " + JSON.stringify(data.res));
        }, (error) => {
            console.log("ERROR -> " + JSON.stringify(error.err));
  });
  
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
    this.logged = data.res.rows.length;
    //alert (data.res.rows.item(0).user);
}, (error) => {
              alert("ERROR -> " + JSON.stringify(error.err));
          });
}

}