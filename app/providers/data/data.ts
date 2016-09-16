import {Storage, SqlStorage} from 'ionic-angular';
import {Injectable} from '@angular/core';
 
@Injectable()
export class Data {
 
  private storage;
  private data;
  public logged: number;
 private logins: Array<{user: string, password: string}>;
  constructor(){
    this.storage = new Storage(SqlStorage, {name:'tfc'});
     this.logins = [
      { user: 'demo' , password: 'demo' },
      { user: 'user1' , password: 'pass1' },
      { user: 'user2' , password: 'pass2' }
      ]; 
      //this.inicializa();
  }
 inicializa(){
   this.storage.query('CREATE TABLE IF NOT EXISTS logins (id INTEGER PRIMARY KEY AUTOINCREMENT, user TEXT, password TEXT)').then((data) => {
            console.log("TABLE CREATED -> " + JSON.stringify(data.res));
        }, (error) => {
            console.log("ERROR -> " + JSON.stringify(error.err));
  });
  
   this.logins.forEach (user => this.save(user));
   this.getData();
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

 
  save(data){
   
    //let newData = JSON.stringify(data);
    //this.storage.set('usuarios', newData);
              this.storage.query("INSERT INTO logins (user, password) VALUES (?,?)",[data.user,data.password]).then((data) => {
                  console.log(JSON.stringify(data.res));
                  alert("ok " + data.res);
              }, (error) => {
                  console.log("ERROR -> " + JSON.stringify(error.err));
                  alert("error " + JSON.stringify(error.err));
              });
}
}