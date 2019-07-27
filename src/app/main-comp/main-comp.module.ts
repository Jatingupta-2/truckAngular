import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckMainComponent } from './truck-main/truck-main.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TruckMainComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MainCompModule { }
