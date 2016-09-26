import {Storage, SqlStorage} from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Network } from 'ionic-native';
import {SyncService} from '../../providers/sync/sync';
import {LoginPage} from '../login/login';
import {HomePage} from '../home/home';
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
public users: any;
private storage;
  constructor(private navCtrl: NavController, private sync: SyncService) {
    this.storage = new Storage(SqlStorage, {name:'tfc'});

      
//    if (this.hayConexion()){
      setTimeout(this.sincronizate(),500);
      if (localStorage.getItem("sync"))
      {
        this.send_data();
      }

//    }
//      else {
//        this.navCtrl.setRoot(LoginPage);
//      }
  
    }

  hayConexion(){
  if (Network.connection == 'none'){ return false} else {return true}
  }
  sincronizate(){
   //USUARIOS
   //USUARIOS
   // DESCARGA USUARIOS ENTONCES BORRA LOS LOCALES, LUEGO INSERTA LOS DESCARGADOS EN LOCAL.
            this.sync.getMisUsers().subscribe(
            data => {
               this.users = JSON.parse(data.json());
                if (this.users.success){
              //test
               this.users = this.users.data;
                    this.storage.query("delete from logins").then((data) => {
                      console.log(JSON.stringify(data.res));
                      }, (error) => {
                      console.log("ERROR -> " + JSON.stringify(error.err));
                      } );
               this.users.forEach (user => this.save(user));
 //              if (isNaN(sessionStorage.getItem("logged")))
 //              {
               this.navCtrl.setRoot(LoginPage);
 //              }
 //              else { this.navCtrl.setRoot(HomePage); }
            
                }
        },
            err => console.error(err),
            () => console.log('getUsuarios completed')
        );  

        //CONTROLES
        //CONTROLES
        // DESCARGA CONTROLES ENTONCES BORRA LOS LOCALES, LUEGO INSERTA LOS DESCARGADOS EN LOCAL.



  }


  save(user){
  // alert ('saving' + user.nombre + ' ' + user.usuario);
    //let newData = JSON.stringify(data);
    //this.storage.set('usuarios', newData);
              this.storage.query("INSERT INTO logins (id, user, password, tipouser, nombre) VALUES (?,?,?,?,?)",[user.id,user.usuario,user.password,user.tipouser,user.nombre]).then((data) => {
                  console.log(JSON.stringify(data.res));
              //    alert("ok " + data.res);
              }, (error) => {
                  console.log("ERROR -> " + JSON.stringify(error.err));
                  alert("error " + JSON.stringify(error.err));
              });
}

send_data(){
  //alert("hay sinc");
                this.storage.query("select * from resultadoscontrol").then((data) => {
                //  console.log(JSON.stringify(data.res.rows));

                  //alert("ok -> filas: " + data.res.rows.length);
                  this.sync.setResultados(JSON.stringify(data.res.rows));
              }, (error) => {
                  console.log("ERROR -> " + JSON.stringify(error.err));
                  alert("error, no se han podido recuperar los datos " + JSON.stringify(error.err));
              });
}

}
