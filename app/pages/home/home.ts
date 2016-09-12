import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import {ControlesPage} from '../controles/controles';
import {Distancia} from '../../providers/distancia/distancia';

import {TranslatePipe} from 'ng2-translate';


@Component({
  templateUrl: 'build/pages/home/home.html',
  pipes: [TranslatePipe],
  providers: [Distancia]
})
export class HomePage {
  public nombre: string;
  public password: string;
  public miDistancia: any;
  
  constructor(public navCtrl: NavController, menu: MenuController,private distancia: Distancia) {
    menu.enable(true);
    //alert (localStorage["uuid"]);
    this.miDistancia = distancia.getDistancia();
  }

saveItem(){
  alert (this.miDistancia);
this.navCtrl.push(ControlesPage);
}
}
