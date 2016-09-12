import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';

import {TranslatePipe} from 'ng2-translate';
/*
  Generated class for the ControlPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/control/control.html',
  pipes: [TranslatePipe]
})
export class ControlPage {
public base64Image: string;
public nombre: string;
  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.nombre = this.navParams.get('control').nombre;
    
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
