import { Component } from '@angular/core';
import { NavController, MenuController,Storage, LocalStorage } from 'ionic-angular';
import {ControlesPage} from '../controles/controles';
import {Distancia} from '../../providers/distancia/distancia';
import {Data} from '../../providers/data/data';
import {TranslatePipe} from 'ng2-translate';
import {HomePage} from '../home/home';
import {IntroPage} from '../intro/intro';
import {SyncService} from '../../providers/sync/sync';
//import {Config} from '../../config/config';

@Component({
  templateUrl: 'build/pages/login/login.html',
  pipes: [TranslatePipe],
  providers: [Distancia,SyncService]
})
export class LoginPage {
  public nombre: string = "demo";
  public password: string = "demo";
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
    this.navCtrl.setRoot(IntroPage);
  }
});



    this.accesomenu = menu;
    //alert (localStorage["uuid"]);
    this.miDistancia = distancia.getDistancia();
  }

login(){

 // this.navCtrl.setRoot(ControlesPage);

this.data.getLogin(this.nombre,this.password);
setTimeout (() => {
//  alert (this.data.logged);
  if (!isNaN(this.data.logged)){
    this.accesomenu.enable(true);
    this.navCtrl.setRoot(HomePage);
    }
    else{
      alert ('Mal user');
    }
  },500);
//alert (this.miDistancia);
//this.navCtrl.push(ControlesPage);
}
}
