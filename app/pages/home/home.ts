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
mischecks: any;
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
                    this.storage.query("delete from controles").then((data) => {
                      console.log(JSON.stringify(data.res));
                      }, (error) => {
                      console.log("ERROR -> " + JSON.stringify(error.err));
                      //alert("Error 1");
                      } );
               this.miscontroles.forEach (control => this.saveControl(control));
            },
            err => console.error(err),
            () => console.log('getControles completed')

        );  

        //CONTROLES
        //CONTROLES
 //CHECKLISTS
   //CHECKLISTS
   // DESCARGA CHECKLISTS ENTONCES BORRA LOS LOCALES, LUEGO INSERTA LOS DESCARGADOS EN LOCAL.
            
            this.sync.getMisChecklists(this.data.logged).subscribe(
            data => {
               this.mischecks = data.json();
                    this.storage.query("delete from checklist").then((data) => {
                      console.log(JSON.stringify(data.res));
                      }, (error) => {
                      console.log("ERROR -> " + JSON.stringify(error.err));
                      //alert("Error 2");
                      } );
               this.mischecks.forEach (checklist => this.saveChecklist(checklist));
            },
            err => console.error(err),
            () => console.log('getChecklists completed')
        );  

        //CHECKLISTS
        //CHECKLISTS

}

  saveControl(control){
  // alert ('saving' + user.nombre + ' ' + user.usuario);
    //let newData = JSON.stringify(data);
    //this.storage.set('usuarios', newData);
              this.storage.query("INSERT INTO controles (id, nombre, pla, minimo, maximo, objetivo, tolerancia, critico) VALUES (?,?,?,?,?,?,?,?)",[control.idcontrol,control.nombre,control.pla,control.minimo,control.maximo,control.objetivo,control.tolerancia,control.critico]).then((data) => {
                  console.log(JSON.stringify(data.res));
                  //alert("ok control" + data.res);
              }, (error) => {
                  console.log("ERROR SAVING CONTROL-> " + JSON.stringify(error.err));
                  //alert("error 3" + JSON.stringify(error.err));
              });
}

  saveChecklist(checklist){
  // alert ('saving' + user.nombre + ' ' + user.usuario);
    //let newData = JSON.stringify(data);
    //this.storage.set('usuarios', newData);
              this.storage.query("INSERT INTO checklist (idchecklist, nombrechecklist, idcontrol, nombrecontrol) VALUES (?,?,?,?)",[checklist.idchecklist,checklist.nombrechecklist,checklist.idcontrolchecklist,checklist.nombre]).then((data) => {
                  console.log(JSON.stringify(data));
                  //alert("ok checklist" + data.res);
              }, (error) => {
                  console.log("ERROR SAVING CHECKLIST -> " + JSON.stringify(error));
                  //alert("error 4" + JSON.stringify(error.err));
              });
}


controles(){
this.navCtrl.push(ControlesPage);
}
checklists(){
this.navCtrl.push(ChecklistPage);
}

}
 