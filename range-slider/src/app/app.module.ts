import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NouisliderComponent } from 'ng2-nouislider';
import { RangeSliderDefaultDataService } from './range-slider-default-data.service';

@NgModule({
  declarations: [
    AppComponent, 
    NouisliderComponent
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],

  providers: [RangeSliderDefaultDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
