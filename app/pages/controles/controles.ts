import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ControlPage } from '../control/control';

import {TranslatePipe} from 'ng2-translate';
/*
  Generated class for the ControlesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/controles/controles.html',
  pipes: [TranslatePipe]
})
export class ControlesPage {
public controlesList: Array<{nombre: string, min: number, max: number, critico: number}>;
  constructor(private navCtrl: NavController) {
    this.controlesList = [
      { nombre: 'control 1' , min: 1, max: 3, critico:4 },
      { nombre: 'control 2' , min: 1, max: 3, critico:4  },
      { nombre: 'control 3' , min: 1, max: 3, critico:4 },
      { nombre: 'control 4' , min: 1, max: 3, critico:4  },
      { nombre: 'control 5' , min: 1, max: 3, critico:4  }
      ]; 
  }

takeControl(control)
{
  this.navCtrl.push(ControlPage, {control});
}


}
