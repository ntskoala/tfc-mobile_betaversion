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
export class LoginPage {
  public nombre: string;
  public password: string;
  public miDistancia: any;
  public logged;
  public accesomenu: any;
  constructor(public navCtrl: NavController, menu: MenuController,private distancia: Distancia, private data:Data) {
    menu.enable(false);
    this.accesomenu = menu;
    //alert (localStorage["uuid"]);
    this.miDistancia = distancia.getDistancia();
  }

login(){
this.data.getLogin(this.nombre,this.password);
setTimeout (() => {
  if (this.data.logged > 0){
    this.accesomenu.enable(true);
    }
  },500);
//alert (this.miDistancia);
//this.navCtrl.push(ControlesPage);
}
}
