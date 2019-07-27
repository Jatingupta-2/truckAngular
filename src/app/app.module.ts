import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TruckMainComponent } from './main-comp/truck-main/truck-main.component';
import { MainCompModule } from './main-comp/main-comp.module';
import { HttpClientModule, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {HttpClient,HttpHeaders,HttpParams,HttpErrorResponse} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
    // TruckMainComponent
  ],
  imports: [
    MainCompModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'main' ,component:TruckMainComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
