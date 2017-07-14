import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// use FormsModule Only when using Template Driven Forms
import { FormsModule } from '@angular/forms';
// use ReactiveFormsModule Only when using Template Driven Forms
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataDrivenComponent } from "./data-driven/data-driven.component";
import { ControlMessagesComponent } from './data-driven/control-messages.component';
import { ValidationService } from './data-driven/validation.service';
import { JSONService } from './json.service';
import { JSONPostService } from './json.servicePost';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent, 
    DataDrivenComponent,
    ControlMessagesComponent
  ],
  // to use Forms we must have FormsModule OR ReactiveFormsModule Here
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ValidationService,JSONService,JSONPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
