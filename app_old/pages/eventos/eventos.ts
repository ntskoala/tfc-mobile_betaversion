import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import {EventosService} from '../../providers/eventos/eventos';
import {TranslatePipe} from 'ng2-translate';
/*
  Generated class for the EventosPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/eventos/eventos.html',
  providers: [EventosService],
  pipes: [TranslatePipe]
})
export class EventosPage {
public eventos;
public user = localStorage["uuid"];
  constructor(private navCtrl: NavController, private eventoss: EventosService) {
      
      this.getEventos();
  }
    getEventos() {
            this.eventoss.getEventos(this.user).subscribe(
            data => {
                this.eventos = data.json();
            },
            err => console.error(err),
            () => console.log('getRepos completed')
        );
    }

detalleEvento(evento){
    alert (evento.id);
}

addcalendar(evento){
    alert ('añadir calendario' + evento.id);
}
removecalendar(evento){
    alert ('quitar del calendario ' +evento.id);
} 


}
