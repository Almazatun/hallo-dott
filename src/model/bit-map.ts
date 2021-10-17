import { Pixel } from './pixel';
import { CONST_PIXEL_COLOR } from '../types';
import { BitMapBuilder } from '../builder/bit-map.builder';

export class BitMap {
  private lineSize: number;
  private columnSize: number;
  private pixels: Pixel[];

  constructor(bitMapBuilder: BitMapBuilder) {
    this.lineSize = bitMapBuilder.LineSize;
    this.columnSize = bitMapBuilder.ColumnSize;
    this.pixels = bitMapBuilder.Pixels;
  }

  public getColumnSize(): number {
    return this.columnSize;
  }

  public getLineSize(): number {
    return this.lineSize;
  }

  public getPixels(): Pixel[] {
    return this.pixels;
  }

  public setPixelColor(pixelInput: Pixel, colorInput: CONST_PIXEL_COLOR): void {
    const foundPixelIndex = this.pixels.findIndex(pixel => pixel.getLineIndex() === pixelInput.getLineIndex()
        && pixel.getColumnIndex() === pixelInput.getColumnIndex());

    this.pixels[foundPixelIndex].setColor(colorInput);
  }
}
