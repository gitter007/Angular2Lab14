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
    ReactiveFormsModule
  ],
  providers: [ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
