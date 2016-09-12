import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import {TranslatePipe} from 'ng2-translate';
/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
  pipes: [TranslatePipe]
})
export class LoginPage {

  constructor(private navCtrl: NavController) {

  }

}
