import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams,HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public http:HttpClient) { }

  // public getDataMain(){
  //   return this.http.get("http://vehicletrack.biz/api/companyvehiclelatestinfo?token=123456");
  // }
  public getDistance(vehicle,lat,long){
    // alert(vehicle)
    const p=new HttpParams()
    .set('VehicleNo',vehicle)
    .set('Lat',lat)
    .set('Long',long)
    

  return this.http.post('http://localhost:3000/api/v1/distance',p)

}

public getAllVehicle(){
  
  return this.http.get("http://localhost:3000/api/v1/allVehicle");

}
}
