import { PixelBuilder } from './pixel.builder';
import { CONST_PIXEL_COLOR } from '../types';

let pixelBuilderEntity: PixelBuilder;

beforeEach(() => {
  pixelBuilderEntity = new PixelBuilder()
    .setLine(1)
    .setColumn(3)
    .setColor(CONST_PIXEL_COLOR.WHITE)
})

describe("Pixel entity builder", () => {

  it("pixel should be set line position", () => {
    expect(pixelBuilderEntity.Line).toEqual(1);
    expect(pixelBuilderEntity.Line).not.toEqual(5);
  })

  it("pixel should be set column position", () => {
    expect(pixelBuilderEntity.Column).toEqual(3);
    expect(pixelBuilderEntity.Column).not.toEqual(1);
  })

  it("pixel should be set color", () => {
    expect(pixelBuilderEntity.Color).toEqual(CONST_PIXEL_COLOR.WHITE);
    expect(pixelBuilderEntity.Color).not.toEqual(CONST_PIXEL_COLOR.BLACK);
  })
});
