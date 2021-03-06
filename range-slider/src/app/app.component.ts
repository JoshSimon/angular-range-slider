/**
 * ANGULAR CORE
 */
import { Component, ViewChild } from '@angular/core';
/** 
 * FORM RELATED
 */
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


/**
 * SERVICES
 */
import { RangeSliderDefaultDataService } from './range-slider-default-data.service';

/**
 * NOUISLIDER MODULE
 * this may be not the cleanest solution but the most effective at 
 * the moment, because at the time this is developed
 * no real angular 2 compatible module exists
 * 
 * the nouislider is build on top of a existing (very powerfull)
 * solution for AngularJs
 */
import { NouisliderComponent } from 'ng2-nouislider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * DEFAULTS
   * 
   * startValueRange default range of the slider
   */
  private startValueRange: [number];

  /**
   * CONFIGURATION
   * 
   * sliderMin minimum available value on scale*
   * sliderMax maximum available value on scale*
   *   *the same for the inputs
   */
  public sliderMin: number;
  public sliderMax: number;
  public someKeyboardConfig: any; // comes with the module

  /**
   * SLIDER VALUES
   */
  private sliderRange: [number];

  /**
   * FORM
   */
  private sliderForm: FormGroup;

  /**
   * Viewchild element slider
   * necessary due to the way the module works
   */
  @ViewChild('slider') slider: NouisliderComponent;

  /**
   * CONSTRUCTOR
   */

  constructor(private service: RangeSliderDefaultDataService, private fb: FormBuilder) {
    this.startValueRange = service.getDefaultRange();
    this.sliderMin = service.getDefaultMin();
    this.sliderMax = service.getDefaultMax();
    this.sliderRange = this.startValueRange;
    this.configureNouislider();
    this.createForm();
  }


  /**
   * UPDATE THE SLIDER VALUES BY USER INTERACTION
   */

  /**
   * SLIDER DRAG INTERACTION
   * @param value value of the build in event emitter of the NouisliderComponent
   */
  onChange(value: [number]) {
    const formControlOfTheInput0 =
      <FormControl>this.sliderForm.controls['left'];
    formControlOfTheInput0.setValue(value[0]);
    const formControlOfTheInput1 =
      <FormControl>this.sliderForm.controls['right'];
    formControlOfTheInput1.setValue(value[1])
  }

/**
  * INPUT INTERACTION
  * @param value set by the user in the input
  * here the leftt side
  */
  onChangeLeft(value: number) {
    // get the current range
    const formControlOfTheSlider =
      <FormControl>this.sliderForm.controls['range'];
    let newRange = formControlOfTheSlider.value;
    // only if the value is smaller than the right one, the range will be overwritten
    if (value <= newRange[1]) {
      newRange = [value, newRange[1]];
      formControlOfTheSlider.setValue(newRange);
    }
  }

  /**
   * INPUT INTERACTION
   * @param value set by the user in the input
   * here the right side
   */
  onChangeRight(value: number) {
    const formControlOfTheSlider =
      <FormControl>this.sliderForm.controls['range'];
    let newRange = formControlOfTheSlider.value;
    if (value >= newRange[0]) {
      newRange = [value, newRange[1]]
      formControlOfTheSlider.setValue(newRange);
    
    }

  }

  /**
  * CONFIGURATION of the <nouislider> element
  */
  configureNouislider() {
    this.someKeyboardConfig = {
      behaviour: 'drag',
      connect: true,
      start: this.sliderRange,
      keyboard: true,  // same as [keyboard]="true"
      step: 0.1,
      pageSteps: 10,  // number of page steps, defaults to 10
      range: {
        min: this.sliderMin,
        max: this.sliderMax
      },
      pips: {
        mode: 'count',
        density: 1,
        values: 10,
        stepped: true
      }
    }
  };

  /**
   * CREATE FORM
   */
  createForm() {
    this.sliderForm = this.fb.group({
      left: [this.sliderMin, Validators.compose([Validators.required, Validators.min(this.sliderMin)])],
      right: [this.sliderMax, Validators.compose([Validators.required, Validators.max(this.sliderMax)])],
      range: [this.sliderRange]
    })
  }

}