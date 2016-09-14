import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import {ControlesPage} from '../controles/controles';
import {Distancia} from '../../providers/distancia/distancia';
import {Data} from '../../providers/data/data';
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
  
  constructor(public navCtrl: NavController, menu: MenuController,private distancia: Distancia, private data:Data) {
    menu.enable(true);
    //alert (localStorage["uuid"]);
    this.miDistancia = distancia.getDistancia();
  }

login(){
this.data.getLogin(this.nombre,this.password);

//alert (this.miDistancia);
//this.navCtrl.push(ControlesPage);
}
}
