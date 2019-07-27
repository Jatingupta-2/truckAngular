import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-truck-main',
  templateUrl: './truck-main.component.html',
  styleUrls: ['./truck-main.component.css']
})
export class TruckMainComponent implements OnInit {

  constructor(public apiService:AppService) { }

  public truckArray:Array<String>=[];
  public selectedValue:String="";
  public lat:String="";
  public long:String="";
  public display:String="";

  ngOnInit() {
    this.getMainData();
  }

  public getMainData(){

    this.apiService.getAllVehicle().subscribe(
      (res:any)=>{
       

        this.truckArray=res.data
      }
    )

  }


  public getDistance(){
    // alert(this.selectedValue)

    this.apiService.getDistance(this.selectedValue,this.lat,this.long).subscribe(
      (res:any)=>{
        this.display=res.data
      }
    )

  }

}
