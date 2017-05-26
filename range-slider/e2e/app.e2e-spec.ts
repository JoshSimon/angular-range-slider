import { RangeSliderPage } from './app.po';

describe('range-slider App', () => {
  let page: RangeSliderPage;

  beforeEach(() => {
    page = new RangeSliderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
