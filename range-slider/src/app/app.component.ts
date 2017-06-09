import { Component, ViewChild } from '@angular/core';
import { NouisliderComponent } from 'ng2-nouislider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public someValue: any = [0, 5];
  public someMin: number = -10;
  public someMax: number = 10;

  @ViewChild('slider') slider: NouisliderComponent;

/**
 * UPDATE THE SLIDER VALUES BY USER INTERACTION
 */

/**
 * SLIDER DRAG INTERACTION
 * @param value value of the build in event emitter of the NouisliderComponent
 */
  onChange(value: any) {
    console.log('Value changed to', value);
    this.someValue = [value[0], value[1]];
  }

/**
 * INPUT INTERACTION
 * @param value set by the user in the input
 * here the start
 */
  onChange0(value: any) {
    console.log('Value changed to', value);
    this.someValue = [value, this.someValue[1]];
  }
  /**
 * INPUT INTERACTION
 * @param value set by the user in the input
 * here the end
 */
  onChange1(value: any) {
    console.log('Value changed to', value);
    this.someValue = [this.someValue[0], value[1]];
  }



  public someKeyboardConfig: any = {
    behaviour: 'drag',
    connect: true,
    start: [0, 5],
    keyboard: true,  // same as [keyboard]="true"
    step: 0.1,
    pageSteps: 10,  // number of page steps, defaults to 10
    range: {
      min: this.someMin,
      max: this.someMax
    },
    pips: {
      mode: 'count',
      density: 1,
      values: 20,
      stepped: true
    }
  };
}