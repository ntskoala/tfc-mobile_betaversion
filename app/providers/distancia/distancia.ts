import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation } from 'ionic-native';

/*
  Generated class for the Distancia provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Distancia {
public lat1: any ='41.3947688';
public lon1: any = '2.0787279';
public lat2: any = '40.4378698';
public lon2:any = '-3.8196207';
public distancia:any;
  constructor(private http: Http) {

    Geolocation.getCurrentPosition().then((resp) => {
 this.lat1 = resp.coords.latitude;
 this.lon1 = resp.coords.longitude;
 //alert (this.lat1 +'#' + this.lon1);
})

  }

public getDistancia(){
    var R = 6371; // Radius of the earth in km
  var dLat = this.deg2rad(this.lat2-this.lat1);  // deg2rad below
  var dLon = this.deg2rad(this.lon2-this.lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(this.deg2rad(this.lat1)) * Math.cos(this.deg2rad(this.lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 

    this.distancia = R * c;
return this.distancia;
}

public deg2rad(deg) {
  return deg * (Math.PI/180)
}
}

