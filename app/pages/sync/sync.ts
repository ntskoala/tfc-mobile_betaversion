import {Storage, SqlStorage} from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Network } from 'ionic-native';
import {SyncService} from '../../providers/sync/sync';

import {TranslatePipe} from 'ng2-translate';
/*
  Generated class for the SyncPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
   providers: [SyncService],
  templateUrl: 'build/pages/sync/sync.html',
  pipes: [TranslatePipe]
})
export class SyncPage {
//private users: Array<{user: string, password: string, tipo: string, nombre: string}>;
private users: any;
private storage;
  constructor(private navCtrl: NavController, private sync: SyncService) {
    this.storage = new Storage(SqlStorage, {name:'tfc'});


 //    this.users = [
 //     { user: 'demo' , password: 'demo', tipo: 'admin', nombre: 'demo' },
 //     { user: 'user1' , password: 'pass1', tipo: 'admin', nombre: 'demo' },
 //     { user: 'user2' , password: 'pass2', tipo: 'admin', nombre: 'demo' }
 //     ]; 
        this.sync.getMisUsers().subscribe(
            data => {
               this.users = data.json();
               this.users.forEach (user => this.save(user));
            },
            err => console.error(err),
            () => console.log('getRepos completed')
        );
      
//    if (this.hayConexion()){
      this.sincronizate();
//    }
  
    }

  hayConexion(){
  if (Network.connection == 'none'){ return false} else {return true}
  }
  sincronizate(){
   // alert ('a trabajar');
               
 // this.users.forEach (user => this.save(user));
//for (let usuario of this.users) {
//  console.log(usuario.nombre);
//}

  //this.data.inicializa();


  }


  save(user){
   alert ('saving' + user.nombre + ' ' + user.user);
    //let newData = JSON.stringify(data);
    //this.storage.set('usuarios', newData);
              this.storage.query("INSERT INTO logins2 (user, password, tipouser, nombre) VALUES (?,?,?,?)",[user.usuario,user.password,user.tipouser,user.nombre]).then((data) => {
                  console.log(JSON.stringify(data.res));
                  alert("ok " + data.res);
              }, (error) => {
                  console.log("ERROR -> " + JSON.stringify(error.err));
                  alert("error " + JSON.stringify(error.err));
              });
}



}
