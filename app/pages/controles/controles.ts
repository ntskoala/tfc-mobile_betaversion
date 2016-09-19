import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ControlPage } from '../control/control';
import { ControlesService} from '../../providers/controles/controles';

import {TranslatePipe} from 'ng2-translate';
/*
  Generated class for the ControlesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  providers: [ControlesService],
  templateUrl: 'build/pages/controles/controles.html',
  pipes: [TranslatePipe]
})
export class ControlesPage {
public controlesList2: Array<{nombre: string, min: number, max: number, critico: number}>;
public controlesList: any;
public datos: any;
public user: number = 1;
  constructor(private navCtrl: NavController, private controlServicio: ControlesService) {
    this.getControles();
  }
    getControles() {
            this.controlServicio.getMisControles(this.user).subscribe(

            data => {
               this.controlesList = data.json();

            },
            err => console.error(err),
            () => console.log('getRepos completed')
        );
    }


takeControl(control)
{
  this.navCtrl.push(ControlPage, {control});
}


}
