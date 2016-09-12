import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BandasService} from '../../providers/bandas/bandas';

import {TranslatePipe} from 'ng2-translate';
/*
  Generated class for the UnirmeaBandaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/unirmea-banda/unirmea-banda.html',
    providers: [BandasService],
    pipes: [TranslatePipe]
})
export class UnirmeaBandaPage {
public bandas: string[];
  constructor(private navCtrl: NavController,private bandaService: BandasService) {
this.getBandas();
  }
    getBandas() {
            this.bandaService.getlistadoBandas().subscribe(
            data => {
                this.bandas = data.json();
            },
            err => console.error(err),
            () => console.log('listado bandas completed')
        );
    }



  getItems(ev) {
    // Reset items back to all of the items
    this.getBandas();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.bandas = this.bandas.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
}
}
