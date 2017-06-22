import { Injectable } from '@angular/core';
import { MOCKS } from './range-slider-default-data.mocks';
import { RangeSliderDefaultDataModel } from './range-slider-default-data.model';

@Injectable()
export class RangeSliderDefaultDataService {
    private mocks: RangeSliderDefaultDataModel;
    constructor() {
        this.mocks = MOCKS;
    };
    getDefaultRange() {
        return this.mocks.startValueRange;
    };
    getDefaultMin() {
        return this.mocks.sliderMin;
    };
    getDefaultMax() {
        return this.mocks.sliderMax;
    }
}