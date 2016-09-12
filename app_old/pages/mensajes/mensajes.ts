import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TranslatePipe} from 'ng2-translate';

/*
  Generated class for the MensajesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/mensajes/mensajes.html',
  pipes: [TranslatePipe]
})
export class MensajesPage {

  constructor(private navCtrl: NavController) {

  }

}
