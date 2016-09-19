import {Storage, SqlStorage} from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Network } from 'ionic-native';
import {Data} from '../../providers/data/data';

import {TranslatePipe} from 'ng2-translate';
/*
  Generated class for the SyncPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/sync/sync.html',
  pipes: [TranslatePipe]
})
export class SyncPage {
public users: Array<{user: string, password: string, tipo: string, nombre: string}>;
private storage;
  constructor(private navCtrl: NavController,private data: Data) {
    this.storage = new Storage(SqlStorage, {name:'tfc'});
//    if (this.hayConexion()){
      this.sincronizate();
//    }
  
    }

  hayConexion(){
  if (Network.connection == 'none'){ return false} else {return true}
  }
  sincronizate(){
   // alert ('a trabajar');
               this.data.getMisUsers().subscribe(
            data => {
               this.users = data.json();
            },
            err => console.error(err),
            () => console.log('getRepos completed')
        );
  this.users.forEach (user => this.save(user));


  this.data.inicializa();


  }


  save(usuario){
   
    //let newData = JSON.stringify(data);
    //this.storage.set('usuarios', newData);
              this.storage.query("INSERT INTO logins (user, password) VALUES (?,?,?,?)",[usuario.user,usuario.password,usuario.tipouser,usuario.nombre]).then((data) => {
                  console.log(JSON.stringify(data.res));
                  alert("ok " + data.res);
              }, (error) => {
                  console.log("ERROR -> " + JSON.stringify(error.err));
                  alert("error " + JSON.stringify(error.err));
              });
}



}
