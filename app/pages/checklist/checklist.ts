import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { ControlPage } from '../control/control';//CAMBIAR A CHECKPAGE
import { ControlesService} from '../../providers/controles/controles';
import {Storage, SqlStorage} from 'ionic-angular';

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
public checklistList: any;
private storage: Storage;
  constructor(private navCtrl: NavController) {
         this.storage = new Storage(SqlStorage, {name:'tfc'});
      this.getChecklists();
  }

getChecklists(){
                  this.storage.query("Select * FROM checklist GROUP BY idchecklist").then((data) => {
                  this.checklistList = data.res.rows; 
              }, (error) => {
                  console.log("ERROR -> " + JSON.stringify(error.err));
                  alert("error " + JSON.stringify(error.err));
              }); 
}

takeChecklist(checklist){


}



}
