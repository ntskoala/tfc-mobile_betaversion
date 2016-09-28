import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Storage, SqlStorage} from 'ionic-angular';

import {TranslatePipe} from 'ng2-translate';
/*
  Generated class for the CheckPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/check/check.html',
  pipes: [TranslatePipe]
})
export class CheckPage {
public checklistcontroles: any;
public checks: any;
private storage: Storage;
public idchecklist;
public nombrechecklist: string;
  constructor(private navCtrl: NavController, private params: NavParams) {
         this.storage = new Storage(SqlStorage, {name:'tfc'});
        this.idchecklist =  this.params.get('checklist').idchecklist;
        this.nombrechecklist = this.params.get('checklist').nombrechecklist;
        this.getChecklists(this.idchecklist);

  }
getChecklists(idchecklist){
                  this.storage.query("Select * FROM checklist WHERE idchecklist = ?",[idchecklist]).then((data) => {
                  this.checklistcontroles = data.res.rows;
                  //this.checklistcontroles = JSON.parse(data.res.rows);
                  console.log (this.checklistcontroles);
              }, (error) => {
                  console.log("ERROR -> " + JSON.stringify(error.err));
                  alert("error " + JSON.stringify(error.err));
              }); 


}
terminar2(){}
terminar(){
  console.log(this.checklistcontroles); 
  for(var index in this.checklistcontroles) { 
    var attr = this.checklistcontroles[index]; 
    alert ('control ' + attr.idcontrol);
}

}

editar (idchecklist){
  alert('editando' + idchecklist);
}

}
