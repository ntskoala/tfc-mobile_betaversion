import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import {ControlesPage} from '../controles/controles';
import {Distancia} from '../../providers/distancia/distancia';
import {Data} from '../../providers/data/data';
import {TranslatePipe} from 'ng2-translate';
import {LoginPage} from '../login/login';
import {ChecklistPage} from '../checklist/checklist';
import { Network } from 'ionic-native';
import {Storage, SqlStorage} from 'ionic-angular';
import {SyncService} from '../../providers/sync/sync';


@Component({
  templateUrl: 'build/pages/home/home.html',
  pipes: [TranslatePipe],
  providers: [Distancia,SyncService]
})
export class HomePage {
slideOptions: any;
storage: Storage;
miscontroles: any;
  constructor(public navCtrl: NavController, menu: MenuController,private distancia: Distancia, private data:Data, private sync: SyncService) {
    this.storage = new Storage(SqlStorage, {name:'tfc'});

      
//    if (this.hayConexion()){
      setTimeout(this.sincronizate(),500);
//    }
  }


  hayConexion(){
  if (Network.connection == 'none'){ return false} else {return true}
  }
sincronizate(){
 //CONTROLES
   //CONTROLES
   // DESCARGA CONTROLES ENTONCES BORRA LOS LOCALES, LUEGO INSERTA LOS DESCARGADOS EN LOCAL.
            
            this.sync.getMisControles(this.data.logged).subscribe(
            data => {
               this.miscontroles = data.json();
                    this.storage.query("delete from logins").then((data) => {
                      console.log(JSON.stringify(data.res));
                      }, (error) => {
                      console.log("ERROR -> " + JSON.stringify(error.err));
                      } );
               this.miscontroles.forEach (control => this.save(control));
            },
            err => console.error(err),
            () => console.log('getRepos completed')
        );  

        //CONTROLES
        //CONTROLES
        // DESCARGA CONTROLES ENTONCES BORRA LOS LOCALES, LUEGO INSERTA LOS DESCARGADOS EN LOCAL.

}

  save(control){
  // alert ('saving' + user.nombre + ' ' + user.usuario);
    //let newData = JSON.stringify(data);
    //this.storage.set('usuarios', newData);
              this.storage.query("INSERT INTO controles (id, nombre, pla, minimo, maximo, objetivo, tolerancia, critico) VALUES (?,?,?,?,?,?,?,?)",[control.idcontrol,control.nombre,control.pla,control.minimo,control.maximo,control.objetivo,control.tolerancia,control.critico]).then((data) => {
                  console.log(JSON.stringify(data.res));
              //    alert("ok " + data.res);
              }, (error) => {
                  console.log("ERROR -> " + JSON.stringify(error.err));
                  alert("error " + JSON.stringify(error.err));
              });
}




controles(){
this.navCtrl.push(ControlesPage);
}
checklists(){
this.navCtrl.push(ChecklistPage);
}

}
 