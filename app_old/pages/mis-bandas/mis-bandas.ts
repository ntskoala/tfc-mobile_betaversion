import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BandasService} from '../../providers/bandas/bandas';
import {TranslatePipe} from 'ng2-translate';
/*
  Generated class for the MisBandasPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/mis-bandas/mis-bandas.html',
   providers: [BandasService],
  pipes: [TranslatePipe]
})
export class MisBandasPage {
public bandas: string[];
public user = localStorage["uuid"];
  constructor(private navCtrl: NavController,private bandaService: BandasService) {
this.getBandas();
  }
   getBandas() {
            this.bandaService.getMisBandas(this.user).subscribe(
            data => {
                this.bandas = data.json();
            },
            err => console.error(err),
            () => console.log('listado bandas completed')
        );
    }
}
