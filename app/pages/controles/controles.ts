import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ControlPage } from '../control/control';
import { ControlesService} from '../../providers/controles/controles';
import {Storage, SqlStorage} from 'ionic-angular';

import {TranslatePipe} from 'ng2-translate';
/*
  Generated class for the ControlesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  providers: [ControlesService],
  templateUrl: 'build/pages/controles/controles.html',
  pipes: [TranslatePipe]
})
export class ControlesPage {
//public controlesList2: Array<{nombre: string, min: number, max: number, critico: number}>;
public controlesList: any;
public datos: any;

//public user: number = 1;
private storage: Storage;
  constructor(private navCtrl: NavController, private controlServicio: ControlesService) {
     this.storage = new Storage(SqlStorage, {name:'tfc'});
    this.getControles();
  }
    getControles() {
                  this.storage.query("SELECT * FROM controles").then((data) => {
                  this.controlesList = data.res.rows; 
                  console.log ("controles:" + this.controlesList);
                  //alert ('rows: ' + data.rows.item(0).id);
                  //alert('count' + data.res.rows.length);
//                  alert ('id' + data.res.rows.item(0).id);
//for(let i = 0; i < data.res.rows.length; i++) {
//                this.controlesList.push({
//                    "id": data.res.rows.item(i).id,
//                    "nombre": data.res.rows.item(i).nombre,
//                });




              }, (error) => {
                  console.log("ERROR -> " + JSON.stringify(error.err));
                  alert("error " + JSON.stringify(error.err));
              });
              this.FormatControl(); 
    }


takeControl(control)
{
  this.navCtrl.push(ControlPage, {control});
}

FormatControl(){
                  var date = new Date();
                  var fecha = date.getDate().toString() + date.getMonth().toString();
                  if (localStorage.getItem ("1") == fecha){
                  //  this.yaesta=true;
                    //document.getElementById("control1").style.backgroundColor = 'red';
                    //document.getElementById("1").setAttribute("disabled","true");
                  }
                  
}

}
