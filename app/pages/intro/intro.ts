import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import {ControlesPage} from '../controles/controles';
import {Distancia} from '../../providers/distancia/distancia';
import {Data} from '../../providers/data/data';
import {TranslatePipe} from 'ng2-translate';
import {LoginPage} from '../login/login';

/*
  Generated class for the IntroPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/intro/intro.html',
  pipes: [TranslatePipe]
})
export class IntroPage {
public intro;

slideOptions: any;
  constructor(public navCtrl: NavController, menu: MenuController, private data:Data) {
    menu.enable(false);
    this.slideOptions = {
pager: true
};
  }
goToLogin(){
  sessionStorage.setItem("introvista","true");
  this.navCtrl.setRoot(LoginPage);
}
setintro(){
 localStorage.setItem("intro",this.intro);
}
}
