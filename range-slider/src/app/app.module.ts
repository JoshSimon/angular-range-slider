import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NouisliderModule } from 'ng2-nouislider';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    NouisliderModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
