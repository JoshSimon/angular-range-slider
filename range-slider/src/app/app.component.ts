import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public someValue: any = [0, 5];
  public someMin: number = -10;
  public someMax: number = 10;

  onChange(value: any) {
    console.log('Value changed to', value);
  }

  changeValue0(input: number) {
    let slider = document.getElementById('slider');
    this.someValue[0] = Number(input);
    console.log('Changed value to: ' + input + this.someValue[0]);
    console.log(this.someValue)
    return this.someValue[0];
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
      density: 2,
      values: 6,
      stepped: true
    }
  };
}