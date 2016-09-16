import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import {ControlesPage} from '../controles/controles';
import {Distancia} from '../../providers/distancia/distancia';
import {Data} from '../../providers/data/data';
import {TranslatePipe} from 'ng2-translate';
import {LoginPage} from '../login/login';

@Component({
  templateUrl: 'build/pages/home/home.html',
  pipes: [TranslatePipe],
  providers: [Distancia]
})
export class HomePage {
slideOptions: any;
  constructor(public navCtrl: NavController, menu: MenuController,private distancia: Distancia, private data:Data) {
    menu.enable(false);
    this.slideOptions = {
pager: true
};
  }
goToLogin(){
  this.navCtrl.setRoot(LoginPage);
}

}
