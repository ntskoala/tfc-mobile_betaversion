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

  constructor(private navCtrl: NavController,private data: Data) {
//    if (this.hayConexion()){
      this.sincronizate();
//    }
  
    }

  hayConexion(){
  if (Network.connection == 'none'){ return false} else {return true}
  }
  sincronizate(){
   // alert ('a trabajar');
  this.data.inicializa()

  }
}
