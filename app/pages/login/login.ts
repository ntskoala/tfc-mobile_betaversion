import { Component } from '@angular/core';
import { NavController, MenuController,Storage, LocalStorage } from 'ionic-angular';
import {ControlesPage} from '../controles/controles';
import {Distancia} from '../../providers/distancia/distancia';
import {Data} from '../../providers/data/data';
import {TranslatePipe} from 'ng2-translate';
import {HomePage} from '../home/home';

@Component({
  templateUrl: 'build/pages/login/login.html',
  pipes: [TranslatePipe],
  providers: [Distancia]
})
export class LoginPage {
  public nombre: string;
  public password: string;
  public miDistancia: any;
  public logged;
  public accesomenu: any;
  public local: Storage;
  constructor(public navCtrl: NavController, menu: MenuController,private distancia: Distancia, private data:Data) {
    menu.enable(false);
this.local = new Storage(LocalStorage);
this.local.get('intro').then((result) => {
if(!result){
this.local.set('intro', true);
this.navCtrl.setRoot(HomePage);
}
});



    this.accesomenu = menu;
    //alert (localStorage["uuid"]);
    this.miDistancia = distancia.getDistancia();
  }

login(){
  this.navCtrl.setRoot(ControlesPage);
this.data.getLogin(this.nombre,this.password);
setTimeout (() => {
  if (this.data.logged > 0){
    this.accesomenu.enable(true);
    this.navCtrl.setRoot(ControlesPage);
    }
  },500);
//alert (this.miDistancia);
//this.navCtrl.push(ControlesPage);
}
}
