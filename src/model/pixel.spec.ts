import { PixelBuilder } from '../builder/pixel.builder';
import { Pixel } from './pixel';
import { CONST_PIXEL_COLOR } from '../types';

let pixelBuilder: PixelBuilder;
let pixel: Pixel;

beforeEach(() => {
  pixelBuilder = new PixelBuilder()
  pixel = pixelBuilder
    .setLine(5)
    .setColumn(10)
    .setColor(CONST_PIXEL_COLOR.BLACK)
    .build()
})


describe("Pixel model", () => {
  it("pixel line index should be equal 5", () => {
    expect(pixel.getLineIndex()).toEqual(5);
    expect(pixel.getLineIndex()).not.toEqual(4);
  })

  it("pixel column index should be equal 10", () => {
    expect(pixel.getColumnIndex()).toEqual(10);
    expect(pixel.getColumnIndex()).not.toEqual(11);
  })

  it("pixel color should be equal 0* *black ", () => {
    expect(pixel.getColor()).toEqual(CONST_PIXEL_COLOR.BLACK);
    expect(pixel.getColor()).not.toEqual(CONST_PIXEL_COLOR.WHITE);
  })
});
