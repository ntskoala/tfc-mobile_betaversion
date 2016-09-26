import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { Storage, SqlStorage } from 'ionic-angular';
import {TranslateService} from 'ng2-translate';
import {SyncService} from '../../providers/sync/sync';
import {TranslatePipe} from 'ng2-translate';
/*
  Generated class for the ControlPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/control/control.html',
  pipes: [TranslatePipe],
  providers: [TranslateService, SyncService]
})
export class ControlPage {
public base64Image: string;
public nombre: string;
public idcontrol: number;
public valor: number;
private storage: Storage;
  constructor(private navCtrl: NavController, private navParams: NavParams, private translate: TranslateService, private sync: SyncService) {

    this.nombre = this.navParams.get('control').nombre;
    this.idcontrol = this.navParams.get('control').id; 
    this.storage = new Storage(SqlStorage, {name: 'tfc'});
    translate.use('es');
  }

terminar(idcontrol){
 if (!isNaN(this.valor))
 { 
this.storage.query('INSERT INTO resultadoscontrol (idcontrol, valor) VALUES (?,?)',[idcontrol,this.valor]).then(
  (Resultado) => { //console.log(Resultado);
                  //alert('resultado1');
                  this.sync.setResultados(JSON.stringify(Resultado));
                  localStorage.setItem("sync","true");
                  },
  (error) => {console.log(JSON.stringify(error))}
);
 }
 else
 {

  this.translate.get("alertas.errorvalor")
  .subscribe(resultado => { alert(resultado);});
//alert(this.translate.instant("errorvalor")); 
} 
}


takeFoto(){
  Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

}
