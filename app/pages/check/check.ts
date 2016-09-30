import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {Storage, SqlStorage} from 'ionic-angular';
import { Camera } from 'ionic-native';
import {TranslatePipe} from 'ng2-translate';
/*
  Generated class for the CheckPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

export class Checks {
  id: number;
  idchecklist: number;
  nombrechecklist: string;
  idcontrol:number;
  nombrecontrol:string;
  checked:boolean;
  descripcion: string;
}


@Component({
  templateUrl: 'build/pages/check/check.html',
  pipes: [TranslatePipe]
})
export class CheckPage {
//public checklistcontroles: any;
public checklistcontroles: Checks[] = [];
public resultadoschecklistcontroles: any;
public checks: any;
private storage: Storage;
public idchecklist;
public nombrechecklist: string;
public base64Image;
  constructor(private navCtrl: NavController, private params: NavParams, private alertCtrl: AlertController) {
         this.storage = new Storage(SqlStorage, {name:'tfc'});
        this.idchecklist =  this.params.get('checklist').idchecklist;
        this.nombrechecklist = this.params.get('checklist').nombrechecklist;
        this.getChecklists(this.idchecklist);

  }
getChecklists(idchecklist){
                  this.storage.query("Select * FROM checklist WHERE idchecklist = ?",[idchecklist]).then((data) => {
                  console.log ("resultado1" + data.res.rows.length);
                  
                  
                  for (var index=0;index < data.res.rows.length;index++){
                      this.checklistcontroles.push(data.res.rows[index]);
                      //alert (data.res.rows[index].nombrechecklist);
                    }
                  //this.checklistcontroles = data.res.rows;
                  //this.checklistcontroles = JSON.parse(data.res.rows);
                  //console.log (this.checklistcontroles);
              }, (error) => {
                  console.log("ERROR -> " + JSON.stringify(error.err));
                  alert("error " + JSON.stringify(error.err));
              }); 


}


terminar(){
  console.log(this.checklistcontroles);
      this.storage.query('INSERT INTO resultadoschecklist (idchecklist, foto) VALUES (?,?)',[this.idchecklist,this.base64Image]).then(
  (Resultado) => { 
           console.log(Resultado);
          let idresultadochecklist = Resultado.res.insertId;
    
          for(var index in this.checklistcontroles) { 
            var attr = this.checklistcontroles[index];
            this.storage.query('INSERT INTO resultadoscontroleschecklist (idcontrolchecklist,idchecklist, resultado, descripcion, idresultadochecklist) VALUES (?,?,?,?,?)',[attr.idcontrol,this.idchecklist,attr.checked,attr.descripcion,idresultadochecklist]).then(
          (Resultado) => { console.log(Resultado);},
          (error) => {console.log(JSON.stringify(error))});
        }
  
},
  (error) => {console.log(JSON.stringify(error))});

this.navCtrl.pop();
}
takeFoto(){
  this.base64Image = "data:image/jpeg;base64,";
  Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
        
    }, (err) => {
        console.log(err);
    });
  }
editar(control){
          let prompt = this.alertCtrl.create({
            title: 'Descripcion',
            inputs: [{name: 'descripcion'}],
            buttons: [
                {text: 'Cancel'},
                {text: 'Add',handler: data => {control.descripcion = data.descripcion;}
                }]
            });
        prompt.present();
}
}
