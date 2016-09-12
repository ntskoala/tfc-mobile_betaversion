import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import {TranslatePipe} from 'ng2-translate';
/*
  Generated class for the ChecklistPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/checklist/checklist.html',
  pipes: [TranslatePipe]
})
export class ChecklistPage {

  constructor(private navCtrl: NavController) {

  }

}
