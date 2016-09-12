import { Component,ViewChild } from '@angular/core';
import { ionicBootstrap, Platform,Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import {Data} from './providers/data/data';
import { Device } from 'ionic-native';
//import { Storage, LocalStorage } from 'ionic-angular';

import {provide} from '@angular/core';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {TRANSLATE_PROVIDERS,TranslateService, TranslateLoader, TranslateStaticLoader, TranslatePipe} from 'ng2-translate';

import { HomePage } from './pages/home/home';
import { ControlesPage } from './pages/controles/controles';
import { ChecklistPage } from './pages/checklist/checklist';
import { SyncPage } from './pages/sync/sync';
import { LoginPage } from './pages/login/login';


@Component({
//  template: '<ion-nav [root]="rootPage"></ion-nav>',
templateUrl: 'build/app.html',
providers: [HTTP_PROVIDERS, TRANSLATE_PROVIDERS, provide(TranslateLoader, {
useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
deps: [Http]
}),
TranslateService],
pipes: [TranslatePipe]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
   pages: Array<{title: string, component: any}>;
  translate: TranslateService;
  local :any;
  constructor(public platform: Platform,translate: TranslateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.pages = [
      { title: 'menu.home' , component: HomePage },
      { title: 'menu.controles' , component: ControlesPage },
      { title: 'menu.checklist' , component: ChecklistPage },
      { title: 'menu.sync' , component: SyncPage },
      { title: 'menu.login' , component: LoginPage }
      ]; 
      

      this.getDeviceDetails();
      StatusBar.styleDefault();
    });
    this.translate = translate;
translate.use('es');
  }

 getDeviceDetails(){
      var model = Device.device.model;
      var deviceID = Device.device.uuid;
      var version = Device.device.version; 
      localStorage["uuid"] = deviceID;
  //COMENTAR PARA PRODUCCION   
   //COMENTAR PARA PRODUCCION
   //COMENTAR PARA PRODUCCION
  //    localStorage["uuid"] = "fda52d3cf79aa426";
//alert (model + " " + deviceID + " " + version);   
}

openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
}

}

ionicBootstrap(MyApp, [Data]);
